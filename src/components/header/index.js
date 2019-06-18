import React from 'react';

import logo from '../../assets/img/logo.svg';
import './Header.scss'

const Header = props => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;