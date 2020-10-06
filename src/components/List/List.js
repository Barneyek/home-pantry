import React from 'react';
import styles from "./List.module.scss";
import ListItem from './ListItem/ListItem';
import ListHeader from './ListHeader/ListHeader';
import uniqid from "uniqid";
import { withTranslation } from 'react-i18next/hooks';

const List = ({items, removeItem, editItem, selectProduct, t}) => {
    return (
       <>
            {  
                items.length ? 
                (
                    <>
                        <ListHeader />                
                        <ul className={styles.list}>         
                            {items.map(item =>(
                                <ListItem key={uniqid()} {...item} removeItem={removeItem} editItem={editItem} selectProduct={selectProduct} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className={styles.wrapper}>
                        <h1 className={styles.noItems}>
                        {t("title.no-items")}
                          </h1>
                    </div>
                )
            }
        </>
    );
}

export default withTranslation("translation")(List);
