const {ApolloServer, gql } = require("apollo-server");

// Create movies array
const movies = [
 {
   movieTitle: "Avengers - EndGame",
   dateOfRelease: "Dec 22",
 }
];

// Initialize type definitions 
const typeDefs = gql`
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
`;

// Create resolver functions
const resolvers = {
  Query: {
     queryMovies: () => movies,
  },

  Mutation: {
     addMovie: (parent, args) => {
       movies.push(args);
       return args;
   },
 },
};

// Initialize GraphQL server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen({ port: 8080 })
  .then(({ url }) => console.log(`GraphQL server running at ${url}`));
