import React, { Component, Fragment } from 'react'

import { Query } from 'react-apollo';
import { OBTENER_PRODUCTOS } from './../../../queries';

import DatosCliente from './DatosCliente/DatosClientes';
import ContenidoPedido from './ContenidoPedido/ContenidoPedido';

// CSS
import './../../../css/spinner.css';


class NuevoPedido extends Component {
    render() {
        
        const { id } = this.props.match.params;

        return (
            <Fragment>
                <h1 className="text-center mb-5">Nuevo Pedido</h1>

                <div className="row">
                    <div className="col-md-3">
                        <DatosCliente
                            id={id} />
                    </div>

                    <div className="col-md-9">
                        <Query query={OBTENER_PRODUCTOS} variables={{stock: true}}>
                            {( { loading, error, data } ) => {
                                if(loading) return (
                                    <div className="spinner">
                                        <div className="dot1"></div>
                                        <div className="dot2"></div>
                                    </div>
                                )

                                if(error) return `Error ${error.message}`;

                                return (
                                    <ContenidoPedido
                                        productos={data.obtenerProductos}
                                        id={id} />
                                )
                            }}
                        </Query>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NuevoPedido;