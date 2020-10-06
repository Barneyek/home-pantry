import React from 'react';
import './index.css';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SettingsView from '../SettingsView/SettingsView';
import AddItemView from '../AddItemView/AddItemView';
import EditItemView from '../EditItemView/EditItemView';
import ShoppingListView from '../ShoppingListView/ShoppingListView';
import List from '../../components/List/List';
import Header from '../../components/Header/Header';
import uniqid from "uniqid";

// import { useTranslation, withTranslation, Trans }  from 'react-i18next/hooks';

import mushroom from "../../assets/images/mushroom.svg";
import tomato from "../../assets/images/tomato.svg";
import blueberries from "../../assets/images/blueberries.svg";
import beer from "../../assets/images/beers.svg";

const units = ['kg', 'g', 'l', 'ml', 'bottle', 'pieces', 'packs', 'boxes'];
const categories = ['Mushroom', 'Vegetables', 'Fruits', 'Others'];

class Root extends React.Component{
    state= {
            products: [ 
                {
                    id:uniqid(),
                    image: mushroom,
                    name: 'Mushroom',
                    quantity: 1,
                    minimalAmount: 3,
                    unit: units[6],
                    category: categories[0],
                },
                {
                    id: uniqid(),
                    image: tomato,
                    name: 'tomato',
                    quantity: 5,
                    minimalAmount: 3,
                    unit: units[0],
                    category: categories[1],
                },
                {
                    id: uniqid(),
                    image: blueberries,
                    name: 'blueberries',
                    quantity: 200,
                    minimalAmount: 300,
                    unit: units[1],
                    category: categories[2],
                },
                {
                    id: uniqid(),
                    image: beer,
                    name: 'beers',
                    quantity: 4,
                    minimalAmount: 1,
                    unit: units[4],
                    category: categories[3],
                }
            ],
            selectedProduct: "",
            language: "en",
    };
   
    selectProduct = (product) => {
        this.setState({
          selectedProduct: product,
        });
    };

    addItem = (e, newProduct) => {
        e.preventDefault();
        newProduct.quantity=parseInt(newProduct.quantity,10);
        newProduct.minimalAmount=parseInt(newProduct.minimalAmount,10);
        this.setState(prevState => ({
            products: [...prevState.products, newProduct],
        }));
    };
    
    removeItem = (e, id) =>{
        if (window.confirm('Usunąć wybrany produkt?')) {
        this.setState(prevState =>({
            products: prevState.products.filter(e => e.id !== id)
        }));
    }
    };


    editItem = (e, editedItem) =>{
        e.preventDefault();
        this.setState(prevState => {
          const newState = {
            products: prevState.products.map(e =>
              e.id === editedItem.id ? editedItem : e
            )
          };    
          return newState;
        });
    };

    render() {
        const contextElements = {
            ...this.state, 
            addItem: this.addItem,
            removeItem: this.removeItem,
            editItem: this.editItem,
            selectProduct: this.selectProduct,
        }
        // const { t } = this.props;

        return (
            <BrowserRouter>
                {/* <h1>{t('Welcome to React')}</h1> */}
                <AppContext.Provider value={contextElements}>
                <Header />
                    <Switch>
                        <Route exact path="/">
                            <List items={this.state.products} selectProduct={this.selectProduct} removeItem={this.removeItem} />
                        </Route>
                        <Route path="/shoppinglist" component={ShoppingListView}/>
                        <Route path="/settings" component={SettingsView}/>
                        <Route path="/additem" component={AddItemView}/>
                        <Route path="/edit/:id" component={EditItemView} />                 
                    </Switch>
                </AppContext.Provider>
            </BrowserRouter>         
        );
    }
}


// const RootTranslated =  withTranslation("translation")(Root);

export default Root;
