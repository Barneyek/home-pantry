import React from 'react';
import styles from './ListHeader.module.scss';
import { withTranslation }from 'react-i18next/hooks';

import minimumIco from "../../../assets/images/minimize.svg";
import productIco from "../../../assets/images/supermarket.svg";
import amountIco from "../../../assets/images/graph.svg";
import categoryIco from "../../../assets/images/menu.svg";

const ListHeader = ({t}) => (
        <div className={styles.header}>
                <div className={styles.header__item}>
                        <img className={styles.header__icon} src={productIco} alt="icon"/>  
                        <span className={styles.header__title}>{t("listHeader.product")}</span>
                </div>
                <div className={styles.header__item}>
                        <img className={styles.header__icon} src={amountIco} alt="icon"/>  
                        <span className={styles.header__title}>{t("listHeader.amount")}</span>
                </div>
                <div className={styles.header__item}>
                        <img className={styles.header__icon} src={minimumIco} alt="icon"/>  
                        <span className={styles.header__title}>{t("listHeader.minimal-amount")}</span>
                </div>
                <div className={styles.header__item}>
                        <img className={styles.header__icon} src={categoryIco} alt="icon"/>  
                        <span className={styles.header__title}>{t("listHeader.category")}</span>
                </div>

        </div>
 );

 export default withTranslation()(ListHeader);
