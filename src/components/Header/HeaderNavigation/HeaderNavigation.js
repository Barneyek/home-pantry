import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./HeaderNavigation.module.scss";
import { withTranslation } from 'react-i18next/hooks';

const HeaderNavigation = ({ t }) => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <NavLink exact activeClassName={styles.list__linkActive} className={styles.list__link} to="/">{t("nav.your_pantry")}</NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink activeClassName={styles.list__linkActive} className={styles.list__link} to="/shoppinglist">{t("nav.shopping_list")}</NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink activeClassName={styles.list__linkActive} className={styles.list_link} to="/additem">{t("nav.add_product")}</NavLink>
                </li>
                <li className={styles.list__item}>
                    <NavLink activeClassName={styles.list__linkActive} className={styles.list_link} to="/settings">{t("nav.settings")}</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default withTranslation()(HeaderNavigation);
