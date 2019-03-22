import React, { Fragment } from 'react'

import { Query } from 'react-apollo';
import { OBTENER_PEDIDOS } from './../../../queries';

import Pedido from './Pedido/Pedido';

// CSS
import './../../../css/spinner.css';

const PedidosCliente = (props) => {

    // console.log(props);

    const cliente = props.match.params.id;
    // console.log(clienteId);
    
    

    return (
        <Fragment>
            <h1 className="text-center mb-5">Pedidos del Cliente</h1>

            <div className="row">
                
                <Query query={OBTENER_PEDIDOS} variables={{cliente}} pollInterval={500}>
                    {( {loading, error, data, startPolling, stopPolling} ) => {
                        if(loading) return (
                            <div className="spinner">
                                <div className="dot1"></div>
                                <div className="dot2"></div>
                            </div>
                        ) 
                        if(error) return `Error ${error.message}`;

                        console.log(data);

                        return (
                            data.obtenerPedidos.map(pedido => (
                                <Pedido
                                    key={pedido.id}
                                    pedido={pedido}
                                    cliente={cliente} />
                            ))
                        )
                        
                    }}
                </Query>

            </div>
        </Fragment>
    )
}
export default PedidosCliente;