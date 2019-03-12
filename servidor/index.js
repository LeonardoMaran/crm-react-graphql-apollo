import express from 'express';

// GraphQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen({port: 4000}, () => console.log(`El servidor esta funcionando: http://localhost:4000${server.graphqlPath}`))