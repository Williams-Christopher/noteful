import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <header>
            <Link className='header__link' to='/'>
                <h1>Noteful</h1>
            </Link>
        </header>
    );
}

export default Header;
