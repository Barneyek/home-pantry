import React from 'react';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.container}> 
            <div className={styles.logo}>
                <img src={logo} alt={logo} />
            </div>
            <HeaderNavigation/>
        </div>
    </header>
);

export default Header;