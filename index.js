import express from 'express';

// GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

// Resolvers
import resolvers from './resolvers';

const root = resolvers;

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

app.use('/graphql', graphqlHTTP({
    // Que Schema va a utilizar
    schema,

    // El resolve se pasa como rootValue
    rootValue: root,

    // Utilizar Graphiql
    graphiql: true
}));

const port = 8000;
app.listen(port, () => console.log('el servidor esta funcionando en localhost:'+port));