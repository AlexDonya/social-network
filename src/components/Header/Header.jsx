import React from 'react';
import style from './Header.module.css'
import iconReact from '../../assets/images/React-icon.png'

const Header = () => {
    return (
        <header className={style.header}>
            <h1>Header</h1>
            <a href="">
                <img className={style.icon} src={iconReact} alt="react-icon" />
            </a>
        </header>
    );
};

export default Header;