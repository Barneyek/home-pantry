import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./HeaderNavigation.module.scss";


const HeaderNavigation = () => (
    <nav>
        <ul className={styles.list}>
            <li className={styles.list__item}>
                <NavLink exact activeClassName={styles.list__linkActive} className={styles.list__link} to="/">Your Pantry</NavLink>
            </li>
            <li className={styles.list__item}>
                <NavLink activeClassName={styles.list__linkActive} className={styles.list__link} to="/shoppinglist">Shopping list</NavLink>
            </li>
            <li className={styles.list__item}>
                <NavLink activeClassName={styles.list__linkActive} className={styles.list_link} to="/additem">Add product</NavLink>
            </li>
            <li className={styles.list__item}>
                <NavLink activeClassName={styles.list__linkActive} className={styles.list_link} to="/settings">Settings</NavLink>
            </li>
        </ul>
    </nav>
)

export default HeaderNavigation;