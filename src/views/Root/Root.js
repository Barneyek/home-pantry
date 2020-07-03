import React from 'react';
import './index.css';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SettingsView from '../SettingsView/SettingsView';
import AddItemView from '../AddItemView/AddItemView';
import ShoppingListView from '../ShoppingListView/ShoppingListView';
import List from '../../components/List/List';
import Header from '../../components/Header/Header';

import mushroom from "../../assets/images/mushroom.svg";
import tomato from "../../assets/images/tomato.svg";
import blueberries from "../../assets/images/blueberries.svg";
import beer from "../../assets/images/beers.svg";

const units = ['kg', 'g', 'l', 'ml', 'bottle', 'pieces', 'packs', 'boxes'];

const categories = new Map([
    [1, "vegetables"],
    [2, "fruits"],
    [3, "others"]
]);
// console.log(categories);

class Root extends React.Component{
    state= {
            products: [ 
                {
                    id: 0,
                    image: mushroom,
                    name: 'Mushroom',
                    quantity: 1,
                    minAmount: 3,
                    unit: units[6],
                    category: 3,
                },
                {
                    id: 1,
                    image: tomato,
                    name: 'tomato',
                    quantity: 5,
                    minAmount: 3,
                    unit: units[0],
                    category: 1,
                },
                {
                    id: 2,
                    image: blueberries,
                    name: 'blueberries',
                    quantity: 200,
                    minAmount: 300,
                    unit: units[1],
                    category: 2,
                },
                {
                    id: 3,
                    image: beer,
                    name: 'beers',
                    quantity: 4,
                    minAmount: 1,
                    unit: units[4],
                    category: 1,
                }
            ],
    
    };

   

    addItem = (e, newItem) => {
        e.preventDefault();
        this.setState(prevState => ({
            products: [...prevState.products, newItem],
        }));
    };
    
    removeItem = (e, id) =>{
        this.setState(prevState =>({
            products: prevState.products.filter(e => e.id !== id)
        }));
    };


    editItem = (e, name) =>{
        e.preventDefault();
        console.log("siema");
    };

    render(){
        const contextElements = {
            ...this.state, 
            addItem: this.addItem,
            removeItem: this.removeItem,
            editItem: this.editItem,
        }

        return(
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                <Header />
                    <Switch>
                        <Route exact path="/">
                            <List items={this.state.products} removeItem={this.removeItem} />
                        </Route>
                        <Route path="/shoppinglist" component={ShoppingListView}/>
                        <Route path="/settings" component={SettingsView}/>
                        <Route path="/additem" component={AddItemView}/>
                        <Route path="/edit/:name" />                 
                    </Switch>
                </AppContext.Provider>
            </BrowserRouter>
         
        )
    }
}

export default Root;