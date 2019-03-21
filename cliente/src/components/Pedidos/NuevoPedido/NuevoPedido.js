import React, { Component, Fragment } from 'react'
import DatosCliente from './DatosCliente/DatosClientes';

// Components


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
                        Pedido Aqui
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NuevoPedido;