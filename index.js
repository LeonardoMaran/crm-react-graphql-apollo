import express from 'express';

// GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

// El resolver
const root = {cliente: () => {
    return {
        "id": 1012929129,
        "nombre": "Agustin",
        "apellido": "Navarro Galdon",
        "empresa": "Google",
        "emails": [
            {email: "xAgustin93@gmail.com"},
            {email: "AgustinNavarro@gmail.com"}
        ]
    }
}};

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