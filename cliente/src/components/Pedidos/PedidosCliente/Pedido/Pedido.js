import React from 'react'

import { Query } from 'react-apollo';
import { OBTENER_PRODUTO } from './../../../../queries';


const Pedido = (props) => {

    const pedido = props.pedido;
    // console.log(pedido);

    const fecha = new Date(Number(pedido.fecha));
    
    return (
        <div className="col-md-4">
            <div className={`card mb-3`} >
                <div className="card-body">
                    <p className="card-text font-weight-bold ">Estado:
                            <select 
                                value={pedido.estado}
                                className="form-control my-3">
                                    <option value="PENDIENTE">PENDIENTE</option>
                                    <option value="COMPLETADO">COMPLETADO</option>
                                    <option value="CANCELADO">CANCELADO</option>
                            </select>
                    </p> 
                    <p className="card-text font-weight-bold">Pedido ID:
                        <span className="font-weight-normal"> {pedido.id}</span>
                    </p> 
                    <p className="card-text font-weight-bold">Fecha Pedido: 
                        <span className="font-weight-normal"> {fecha.toLocaleString('es-ES')}</span>
                    </p>
                    <p className="card-text font-weight-bold">Total: 
                        <span className="font-weight-normal"> {pedido.total} €</span>
                    </p>

                    <h3 className="card-text text-center mb-3">Artículos del pedido</h3>
                    
                    {pedido.pedido.map(producto => {
                        const { id } = producto;
                        // console.log(producto);

                        return (
                            <Query key={pedido.id} query={OBTENER_PRODUTO} variables={{id}}>
                                {({loading, error, data}) => {
                                    if(loading) return 'Cargando...';
                                    if(error) return `Error ${error.message}`;

                                    console.log(data);

                                    return (
                                        <p>Hola</p>
                                    )
                                    
                                }}
                            </Query>

                        )
                        
                    })}

                </div>
            </div>
        </div>
    )
}
export default Pedido;