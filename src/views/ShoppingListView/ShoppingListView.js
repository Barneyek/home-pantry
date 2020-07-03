import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ShoppingListView = () => {

    return (
        <AppContext.Consumer>
            { context => {
               let products = context.products.filter((item) => item.minAmount > item.quantity);
           
            // console.log(context.removeItem)
            return (
                <List items={products} removeItem={context.removeItem} editItem={context.editItem} /> 
            )}}

        </AppContext.Consumer>
    )
}

export default ShoppingListView;