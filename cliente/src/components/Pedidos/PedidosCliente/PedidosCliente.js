import React, { Fragment } from 'react'

const PedidosCliente = (props) => {

    // console.log(props);

    const clienteId = props.match.params.id;
    // console.log(clienteId);
    
    

    return (
        <Fragment>
            <h1 className="text-center mb-5">Pedidos del Cliente</h1>

            <div className="row">

            </div>
        </Fragment>
    )
}
export default PedidosCliente;