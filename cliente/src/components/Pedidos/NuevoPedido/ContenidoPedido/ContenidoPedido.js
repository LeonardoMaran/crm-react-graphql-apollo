import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';


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
            </Fragment>
        )
    }
}

export default ContenidoPedido;