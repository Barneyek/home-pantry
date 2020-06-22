import React from 'react';
import ListItem from './ListItem/ListItem';
import uniqid from "uniqid";
import styles from "./List.module.scss";

const List = ({items, removeItem}) => {

    return(
        <>
            {items.length ? (
                <ul className={styles.list}>
                    {items.map(item =>(
                        <ListItem key={uniqid()} {...item} removeItem={removeItem} />
                    ))}
                </ul>
            ) : (
                <h1 className={styles.noItems}>There's nothing here yet, please add some items!</h1>
            )}
        </>
    );
    }

export default List;