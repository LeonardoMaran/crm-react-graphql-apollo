import React, { Fragment } from 'react'



const ResumenProducto = ({cantidad, producto}) => {
    return (
        <Fragment>
            <div className="border mb-4 p-4">
                <p className="card-text font-weight-bold">
                    Producto: &nbsp;
                    <span className="font-weight-normal">{producto.nombre}</span>
                </p>
                <p className="card-text font-weight-bold">
                    Cantidad: &nbsp;
                    <span className="font-weight-normal">{cantidad}</span>
                </p>
                <p className="card-text font-weight-bold">
                    Precio: &nbsp;
                    <span className="font-weight-normal">{producto.precio} €</span>
                </p>
            </div>
        </Fragment>
    )
}
export default ResumenProducto;