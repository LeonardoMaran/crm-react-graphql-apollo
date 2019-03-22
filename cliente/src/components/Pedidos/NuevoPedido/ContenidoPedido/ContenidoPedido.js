import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';

import Resumen from './Resumen/Resumen';


class ContenidoPedido extends Component {

    state = {
        productos: [],
        total: 0
    }

    seleccionarProducto = (productos) => {
        // console.log(`Algo paso con `, productos);
        this.setState({
            productos
        })
    }

    actualizarCantidad = (cantidad, index) => {
        // console.log(cantidad);

        let nuevoTotal = 0;

        // Leer el state de productos
        const productos = this.state.productos;

        // Cuando todos los productos estan en 0
        if(productos.length === 0) {
            this.setState({
                total: nuevoTotal
            })
            return;
        }

        // Agregar la cantidad desde la interface
        productos[index].cantidad = Number(cantidad);

        // Realizar la operacion de Cantidad X Precio
        productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio));

        
        
        console.log(productos);
        // console.log(index);
        

        // Agregamos al state
        this.setState({
            productos,
            total: nuevoTotal
        })
    }

    eliminarProducto = (id) => {
        // console.log(id);

        const productos = this.state.productos;

        const productosRestantes = productos.filter(producto => producto.id !== id);
        console.log(productosRestantes);

        this.setState({
            productos: productosRestantes
        })

    }

    render() {


        return (
            <Fragment>
                <h3 className="text-center mb-5">Seleccionar Artículos</h3>

                <Select 
                    onChange={this.seleccionarProducto}
                    options={this.props.productos}
                    isMulti={true}
                    components={Animated()}
                    placeholder={'Seleccionar productos...'}
                    getOptionValue={(options) => options.id}
                    getOptionLabel={(options) => options.nombre}
                    value={this.state.productos} />

                <Resumen
                    productos={this.state.productos}
                    actualizarCantidad={this.actualizarCantidad}
                    eliminarProducto={this.eliminarProducto}  />

                <p className="font-weight-bold float-right mt-3">
                    Total:
                    <span className="font-weight-normal">
                        &nbsp;{this.state.total} €
                    </span>
                </p>
            </Fragment>
        )
    }
}

export default ContenidoPedido;