import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';

import Resumen from './Resumen/Resumen';


class ContenidoPedido extends Component {

    state = {
        productos: []
    }

    seleccionarProducto = (productos) => {
        // console.log(`Algo paso con `, productos);
        this.setState({
            productos
        })
    }

    actualizarCantidad = (cantidad, index) => {
        // console.log(cantidad);

        // Leer el state de productos
        const productos = this.state.productos;
        productos[index].cantidad = Number(cantidad);
        console.log(productos);
        // console.log(index);
        

        // Actualizar cantidad de los productos

        // Validamos

        // Agregamos al state
        this.setState({
            productos
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
                    getOptionLabel={(options) => options.nombre} />

                <Resumen
                    productos={this.state.productos}
                    actualizarCantidad={this.actualizarCantidad}  />
            </Fragment>
        )
    }
}

export default ContenidoPedido;