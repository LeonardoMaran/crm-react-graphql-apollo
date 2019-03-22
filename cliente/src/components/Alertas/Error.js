import React from 'react'

const Error = ({mensaje}) => {
    return (
        <p className="alert alert-error py-3 my-3 text-center">
            {mensaje}
        </p>
    );
}

export default Error;