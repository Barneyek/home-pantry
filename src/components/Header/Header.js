import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            Pantry App
        </div>
        <HeaderNavigation/>
    </header>
)
export default Header;