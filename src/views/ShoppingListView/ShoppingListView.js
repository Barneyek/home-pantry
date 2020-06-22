import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ShoppingListView = () => {

    return (
        <AppContext.Consumer>

            {(context) => {
                let vegetables=[],
                fruits=[], 
                others=[], 
                mushrooms=[];
           
               vegetables=context.vegetables.filter((item) => item.minAmount > item.quantity);
               fruits=context.fruits.filter((item) => item.minAmount > item.quantity);
               mushrooms=context.mushrooms.filter((item) => item.minAmount > item.quantity);
               others=context.others.filter((item) => item.minAmount > item.quantity);
               const shoppingList = vegetables.concat([], fruits,mushrooms, others); 
                
            return (
                <List items={shoppingList} /> 
            )}}

        </AppContext.Consumer>
    )
}

export default ShoppingListView;