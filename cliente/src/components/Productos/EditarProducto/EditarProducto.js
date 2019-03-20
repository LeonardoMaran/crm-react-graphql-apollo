import React, { Component, Fragment } from 'react'

import { Query } from 'react-apollo';
import { OBTENER_PRODUTO } from './../../../queries'

// Components
import { FormularioEditarProducto } from './FormularioEditarProducto/FormularioEditarProducto'

class EditarProducto extends Component {
    render() {

        // Obtener el ID
        const { id } = this.props.match.params;
        console.log(id);
        

        return (
            <Fragment>
                <h1 className="text-center">Editar Producto</h1>

                <div className="row justify-content-center">
                    <Query query={OBTENER_PRODUTO} variables={{id}}>
                        {({ loading, error, data, refetch }) => {
                            if(loading) return "Cargando...";
                            if(error) return `Error ${error.message}`;
                            console.log(data)

                            return (
                                <FormularioEditarProducto
                                    producto={data}
                                    refetch={refetch} />
                            )
                        }}
                    </Query>
                </div>
            </Fragment>
        )
    }
}

export default EditarProducto;