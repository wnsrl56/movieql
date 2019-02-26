const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./graphql/resolvers.js');

const server = new GraphQLServer({
    typeDefs: 'graphql/schema.graphql',
    resolvers
});

server.start(() => console.log('Graph Server Running!'));
