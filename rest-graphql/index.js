const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const NFTDataSource = require("./datasource/nftDatasource");
const typeDefs = importSchema("./schema.graphql");

require("dotenv").config();

const resolvers = {
 Query: {
  nftsByContract: (root, _args, { dataSources }) =>
   dataSources.nftDatasource.nftsByContract(),
  nftsTransfersByContract: (root, _args, { dataSources }) =>
   dataSources.nftDatasource.nftsTransfersByContract(),
 },
};

const server = new ApolloServer({
 typeDefs,
 resolvers,
 dataSources: () => ({
  nftDatasource: new NFTDataSource(),
 }),
});

server.timeout = 0;
server.listen("9000").then(({ url }) => {
 console.log(`🚀 Server ready at ${url}`);
});