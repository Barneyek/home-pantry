import React from 'react';
import styles from "./Form.module.scss";
import AppContext from '../../context';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import { Redirect } from "react-router";

class Form extends React.Component{ 
    state = {
        image: '',
        name: '',
        quantity: '',
        minAmount: '',
        unit: '',
        category: 'mushrooms',
        isSubmitted: false,
    }


    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value,
        });
    };


    resetForm() {
        this.setState({
            image: '',
            name: '',
            quantity: '',
            minAmount: '',
            unit: '',
            category: 'mushrooms',
            isSubmitted: false,
     });
    }
 

    render(){
        return (
            <AppContext.Consumer>
                { context => (
                    <div>
                        <form 
                            autoComplete="off" 
                            className={styles.wrapper} 
                            onSubmit={
                                (e) => {context.addItem(e, this.state);
                                this.isSubmitted=true
                                this.resetForm();                         
                            }}
                        >
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.image}
                                    type="text"
                                    name="image" 
                                    label="Image"
                                />
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    type="text"
                                    name="name"
                                    label="Name"
                                    required
                                    maxLength={30}
                                />
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.quantity}
                                    type="number"
                                    name="quantity"
                                    required
                                    label="Quantity"
                                    maxLength={10}
                                />
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.minAmount}
                                    type="number"
                                    name="minAmount"
                                    label="Minimum Amount"
                                    maxLength={10}
                                />
                                <Select
                                    onChange={this.handleChange}
                                    value={this.state.unit}
                                    name="unit"
                                    label="unit"
                                    options={['kg', 'g', 'l', 'ml', 'bottle', 'pieces', 'packs', 'boxes']}
                                />
                                <Select
                                    onChange={this.handleChange}
                                    value={this.state.category}
                                    name="category"
                                    label="category"
                                    options={['mushrooms','vegetables','fruits','others',]}
                                />                    
                            <Button>Add new item</Button>
                            {this.isSubmitted && <Redirect to="/" />}
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}
  
export default Form;