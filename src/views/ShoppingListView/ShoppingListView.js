import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ShoppingListView = () => {
    return (
        <AppContext.Consumer>
            { products => {
                return (
                    <List items={products.products.filter((item) => item.minimalAmount > item.quantity)} 
                    removeItem={products.removeItem} 
                    editItem={products.editItem} /> 
                )
            }}
        </AppContext.Consumer>
    );
}

export default ShoppingListView;