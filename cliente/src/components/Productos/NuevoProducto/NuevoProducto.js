import React, { Component, Fragment } from 'react'

// Mutations
import { Mutation } from 'react-apollo';
import { NUEVO_PRODUCTO } from './../../../mutations';

class NuevoProducto extends Component {

    state = {
        producto: {
            nombre: '',
            precio: '',
            stock: ''
        },
        error: false
    }

    actualizarState = (e) => {
        const { name, value } = e.target;

        this.setState({
            producto: {
                ...this.state.producto,
                [name] : value
            }
        })
    }

    validarForm = () => {
        const { nombre, precio, stock } = this.state.producto;

        const noValido = !nombre || !precio || !stock;

        return noValido;
    }

    crearNuevoProducto = (e, nuevoProducto, input) => {
        e.preventDefault();        

        nuevoProducto().then(data => {
            console.log(data);
        })
    }



    render() {

        const { nombre, precio, stock } = this.state.producto;
        const input = {
            nombre,
            precio: Number(precio),
            stock: Number(stock)
        }        

        return (
            <Fragment>

                <h1 className="text-center mb-5">Nuevo Producto</h1>
 
                <div className="row justify-content-center">
                    <Mutation
                        mutation={ NUEVO_PRODUCTO }
                        variables={{input}} >

                        {(nuevoProducto, {loading, erro, data}) => {
                            return (
                                <form 
                                    className="col-md-8" 
                                    onSubmit={ e => this.crearNuevoProducto(e, nuevoProducto) }>
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input 
                                            type="text"
                                            name="nombre" 
                                            className="form-control" 
                                            placeholder="Nombre del Producto"
                                            onChange={this.actualizarState}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Precio:</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">$</div>
                                            </div>
                                            <input 
                                                type="number" 
                                                name="precio" 
                                                className="form-control" 
                                                placeholder="Precio del Producto"
                                                onChange={this.actualizarState}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Stock:</label>
                                        <input 
                                            type="number" 
                                            name="stock" 
                                            className="form-control" 
                                            placeholder="stock del Producto" 
                                            onChange={this.actualizarState}
                                        />
                                    </div>
                                    <button 
                                        disabled={this.validarForm()}
                                        type="submit" 
                                        className="btn btn-success float-right">
                                            Crear Producto
                                    </button>
                                </form>

                            )
                        }}
                    </Mutation>
                </div>

            </Fragment>
        )
    }
}

export default NuevoProducto;