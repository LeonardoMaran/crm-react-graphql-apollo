import { buildSchema } from 'graphql';

const schema = buildSchema (`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }
    type Email {
        email: String
    }
    
    type Pedido {
        producto: String
        precio: Int
    }

    """ Asigna la categoria del cliente """
    enum TipoCliente {
        BASICO
        PREMIUM
    }

    type Query {
        getCliente(id: ID) : Cliente
    }

    input EmailInput {
        email: String
    }

    input PedidoInput {
        producto: String
        precio: Int
    }

    """ Campos para los clientes nuevos """
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        emails: [EmailInput]
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }

    """ Mutation para crear nuevos Clientes """
    type Mutation {
        #Nombre del Resolver, Input con Datos y Valor que Retorna
        """ Te permite Crear Nuevos Clientes """
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;