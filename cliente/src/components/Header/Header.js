import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
            <Link to={'/'} className="navbar-brand text-light font-weight-bold">CRM</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item dropdown  mb-2 mt-2 mr-md-2 mb-md-0 mt-md-0">
                        <button className="nav-link dropdown-toggle btn btn-block btn-success" data-toggle="dropdown" id="navegacionMenuClientes" aria-haspopup="true" aria-expanded="false">
                            Clientes
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navegacionMenuClientes">
                            <Link to="/clientes" className="dropdown-item">
                                Ver Clientes
                            </Link>
                            <Link to="/clientes/nuevo" className="dropdown-item">
                                Nuevo Cliente
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle btn btn-block btn-success" data-toggle="dropdown" id="navegacionMenuProductos" aria-haspopup="true" aria-expanded="false">
                            Productos
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navegacionMenuProductos">
                            <Link to="/Productos" className="dropdown-item">
                                Ver Productos
                            </Link>
                            <Link to="/Productos/nuevo" className="dropdown-item">
                                Nuevo Producto
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;