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

class Root extends React.Component{
    state= {
            mushrooms: [ {
                image: mushroom,
                name: 'Mushroom',
                quantity: 1,
                minAmount: '3',
                unit: units[6],
                category: 'mushrooms',
            }],
            vegetables: [ {
                image: tomato,
                name: 'tomato',
                quantity: 5,
                minAmount: 3,
                unit: units[0],
                category: 'vegetables',
            },
            {
                image: tomato,
                name: 'test',
                quantity: 1,
                minAmount: 2,
                unit: units[1],
                category: 'vegetables',
            }],
            fruits: [ {
                image: blueberries,
                name: 'blueberries',
                quantity: 200,
                minAmount: 300,
                unit: units[1],
                category: 'fruits',
            }],
            others: [{
                image: beer,
                name: 'beers',
                quantity: 4,
                minAmount: 1,
                unit: units[4],
                category: 'others',
            }],
    };

    addItem = (e, newItem) => {
        e.preventDefault();
        
        this.setState(prevState => ({
            [newItem.category]: [...prevState[newItem.category], newItem],
        }));
    };

    removeItem = (name) =>{

        this.setState(prevState =>({
            vegetables: prevState.vegetables.filter(e => e.name !== name)
        }));
    };

    render(){
        const contextElements = {
            ...this.state, 
            addItem: this.addItem,
            removeItem: this.removeItem,
        }

        return(
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                <Header />
                    <Switch>
                        <Route exact path="/">
                            <List items={this.state.fruits}/>
                            <List items={this.state.vegetables}/>
                            <List items={this.state.mushrooms}/>
                            <List items={this.state.others}/>
                        </Route>
                        <Route path="/shoppinglist" component={ShoppingListView}/>
                        <Route path="/settings" component={SettingsView}/>
                        <Route path="/additem" component={AddItemView}/>
                    </Switch>
                </AppContext.Provider>
            </BrowserRouter>
         
        )
    }
}

export default Root;