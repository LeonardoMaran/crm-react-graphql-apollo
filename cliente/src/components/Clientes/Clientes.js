import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CLIENTES_QUERY } from './../../queries';
import { ELIMINAR_CLIENTE } from './../../mutations';

import Paginador from './Paginador/Paginador';
import Exito from './../Alertas/Exito';
import NuevoPedido from './../Pedidos/NuevoPedido/NuevoPedido';


class Clientes extends Component {

    limitePorPagina = 2;

    state = {
        alerta : {
            mostrar: false,
            mensaje: ''
        },
        paginador: {
            offset: 0,
            actual: 1
        }
    }

    paginaAnterior = () => {
        this.setState({
            paginador: {
                offset: this.state.paginador.offset - this.limitePorPagina,
                actual: this.state.paginador.actual - 1
            }
        })
    }
    paginaSiguiente = () => {
        this.setState({
            paginador: {
                offset: this.state.paginador.offset + this.limitePorPagina,
                actual: this.state.paginador.actual + 1
            }
        })
    }

    render() {

        const { alerta: {mostrar, mensaje} } = this.state;

        const alerta = (mostrar) ? <Exito mensaje={mensaje} /> : '';

        return (
            <Query query={CLIENTES_QUERY} pollInterval={100} variables={{limite: this.limitePorPagina, offset: this.state.paginador.offset}}>
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if(loading) return "Cargando...";
                    if(error) return `Error: ${error.message}`;                    

                    return (
                        <Fragment>
                            <h2 className="text-center">Listado Clientes</h2>

                           {alerta}

                            <ul className="list-group mt-4">
                                {data.getClientes.map(item => {
                                    const { id } = item;
                                    return (
                                        <li key={item.id} className="list-group-item">
                                            <div className="row justify-content-between align-item-center">
                                                <div className="col-md-7 d-flex justify-content-between align-item-center"> 
                                                    {item.nombre} {item.apellido} | {item.empresa}
                                                </div>
                                                <div className="col-md-5 d-flex justify-content-end">
                                                    <Link to={`/pedidos/nuevo/${id}`} className="btn btn-warning d-block d-md-inline-block mr-2">
                                                        &#43; Nuevo Pedido
                                                    </Link>
                                                    <Link to={`/cliente/editar/${item.id}`} className="btn btn-success d-block d-md-inline-block mr-2">
                                                        Editar Cliente
                                                    </Link>
                                                    <Mutation 
                                                        mutation={ELIMINAR_CLIENTE}
                                                        onCompleted={(data) => {
                                                            // console.log(data)
                                                            this.setState({
                                                                alerta: {
                                                                    mostrar: true,
                                                                    mensaje: data.eliminarCliente
                                                                }
                                                            }, () => {
                                                                setTimeout(() => {
                                                                    this.setState({
                                                                        alerta: {
                                                                            mostrar: false,
                                                                            mensaje: ''
                                                                        }
                                                                    })
                                                                }, 3000)
                                                            })
                                                        }}>
                                                    {eliminarCliente => (
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-danger d-block d-md-inline-block"
                                                            onClick={ () => {
                                                                if(window.confirm('Seguro que quieres eliminar este cliente?')) {
                                                                    eliminarCliente({
                                                                        variables: {id}
                                                                    })
                                                                }
                                                            }} > &times; Eliminar</button>
                                                    )}
                                                    </Mutation>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            
                            <Paginador 
                                actual={this.state.paginador.actual}
                                totalClientes={data.totalClientes}
                                limitePorPagina={this.limitePorPagina}
                                paginaAnterior={this.paginaAnterior}
                                paginaSiguiente={this.paginaSiguiente} />
                                
                        </Fragment>
                    )
                }}
            </Query>
        )
    }
}

export default Clientes;