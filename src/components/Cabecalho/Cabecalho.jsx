import React from 'react';
import './cabecalho.css';

import {Link} from 'react-router-dom'

function Cabecalho(props) {
    return (
        <header className="cabecalho">
            <div className="cabecalho__container container">
                <h1 className="cabecalho__logo">
                    <Link to="/">Twitelum</Link>
                </h1>
                { props.children }
            </div>
        </header>
    )
}

export { Cabecalho }