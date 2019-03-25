import React, { Fragment } from 'react'

import Clientes from './Clientes/Clientes.js'

const Panel = () => {
    return (
        <Fragment>
            <h1 className="text-center my-5">Top 10 clientes que más compran</h1>
            <Clientes />
        </Fragment>
    )
}

export default Panel;