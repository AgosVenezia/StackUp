const {ApolloServer} = require('@apollo/server')
const {expressMiddleware} = require('@apollo/server/express4')
const {json} = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const {makeExecutableSchema} = require('@graphql-tools/schema')
const {createServer} = require('http')
const {WebSocketServer} = require('ws')
const {useServer} = require('graphql-ws/lib/use/ws')
const {
  ApolloServerPluginDrainHttpServer
} = require('@apollo/server/plugin/drainHttpServer');
const {PubSub} = require('graphql-subscriptions')
const pubsub = new PubSub();

const movies = [
  {
    movieTitle: "Avengers-Endgame",
    dateOfRelease: "2019",
  }
]

const main = async () => {
  const typeDefs = `#graphql
    type Movie {
      movieTitle: String!
      dateOfRelease: String!
    }

    type Query {
      queryMovies: [Movie]!
    }

    type Mutation {
      addMovie(movieTitle: String!, dateOfRelease: String!): Movie!
    }
    
    type Subscription {
      newMovie: [Movie!]!
    }   
  `;

  const resolvers = {
    Query: {
      queryMovies: () => movies
    },

    Mutation: {
      addMovie: (parent, args) => {
        movies.push(args)
        pubsub.publish('MOVIE_ADDED', { newMovie: movies })
        return args
      },
    },

    Subscription: {
      newMovie: {
        subscribe: () => pubsub.asyncIterator(['MOVIE_ADDED'])
      }
    }
  }

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const httpServer = createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/',
  });
  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ]
  })

  await server.start();

  app.use(
    '/',
    cors(),
    json(),
    expressMiddleware(server)
  )

  const PORT = process.env.PORT || 8080
  httpServer.listen(PORT, ()=>{
    console.log(`GraphQL server running at ${PORT}`)
  })
}

main();