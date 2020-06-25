import React from 'react';
import ListItem from './ListItem/ListItem';
import uniqid from "uniqid";
import styles from "./List.module.scss";

const List = ({items, removeItem, editItem}) => {
    console.log(items);
    return(
        <>
            {items.length ? (
                <ul className={styles.list}>
                    {items.map(item =>(
                        <ListItem key={uniqid()} {...item} removeItem={removeItem} editItem={editItem} />
                    ))}
                </ul>
            ) : (
                <h1 className={styles.noItems}>There's nothing here yet, please add some items!</h1>
            )}
        </>
    );
}

export default List;