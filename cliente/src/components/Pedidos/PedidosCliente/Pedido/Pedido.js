import React from 'react'

import { Query, Mutation } from 'react-apollo';
import { OBTENER_PRODUTO } from './../../../../queries';
import { ACTUALIZAR_ESTADO } from './../../../../mutations';

import ResumenProducto from './ResumenProducto/ResumenProducto';


const Pedido = (props) => {

    const pedido = props.pedido;
    // console.log(pedido);
    const {id} = pedido;
    // console.log(id);

    const fecha = new Date(Number(pedido.fecha));
    
    return (
        <div className="col-md-4">
            <div className={`card mb-3`} >
                <div className="card-body">
                    <p className="card-text font-weight-bold ">Estado:
                        <Mutation mutation={ACTUALIZAR_ESTADO}>
                            {actualizarEstado => (
                                <select 
                                    value={pedido.estado}
                                    className="form-control my-3"
                                    onChange={e => {
                                        // console.log(e.target.value);

                                        const input = {
                                            id,
                                            pedido: pedido.pedido,
                                            fecha: pedido.fecha,
                                            total: pedido.total,
                                            cliente: props.cliente,
                                            estado: e.target.value
                                        }
                                        // console.log(input);
                                        actualizarEstado({
                                            variables: {input}
                                        })
                                        
                                    }} >
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="COMPLETADO">COMPLETADO</option>
                                        <option value="CANCELADO">CANCELADO</option>
                                </select>
                            )}
                        </Mutation>
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
                    
                    {pedido.pedido.map((producto, index) => {
                        const { id } = producto;
                        // console.log(producto);

                        return (
                            <Query key={pedido.id+index} query={OBTENER_PRODUTO} variables={{id}}>
                                {({loading, error, data}) => {
                                    if(loading) return 'Cargando...';
                                    if(error) return `Error ${error.message}`;
                                    // console.log(data);

                                    return (
                                        <ResumenProducto
                                            key={producto.id}
                                            producto={data.obtenerProducto}
                                            cantidad={producto.cantidad} />
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