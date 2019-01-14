import React from 'react';
import './../css/navbar.css';
import logo from '../image/logo.png';
import {Link} from 'react-router-dom';

export const NavBar = () => (
    <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href>
            <Link to={`/`}> <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""/></Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href>Интернет-магазин цветов<span className="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
        </nav>
);