import React from 'react';
import styles from "./ProductForm.module.scss";
import AppContext from '../../context';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import { Redirect } from "react-router";
import uniqid from "uniqid";
import { withTranslation } from 'react-i18next/hooks';

class ProductForm extends React.Component{ 
    state = {     
        id: uniqid(),
        image: '',
        name: '',
        quantity: '',
        minimalAmount: '',
        unit: '',
        category: '',
        isSubmitted: false,
    }

    componentDidMount = () => {
        if (this.props.editedProduct) {
          this.setState({
            id: this.props.editedProduct.id,
            name: this.props.editedProduct.name,
            quantity: this.props.editedProduct.quantity,
            minimalAmount: this.props.editedProduct.minimalAmount,
            image: this.props.editedProduct.image,
            unit: this.props.editedProduct.unit,
            category: this.props.editedProduct.category,
          });
        }
        return;
      };

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
            minimalAmount: '',
            unit: '',
            category: '',
            isSubmitted: false,
     });
    }
    
    render(){
        const categories = ['Mushrooms','Vegetables','Fruits','Others'];
        const options = categories.map(v => ({
            label: v,
            value: v
          }));
        const { t } = this.props;

        return (
            <AppContext.Consumer>
                { products => {
                    return(
                    <div className={styles.wrapper}>
                        <h2>{this.props.title}</h2>
                        <form 
                            autoComplete="off" 
                            className={styles.form} 
                            onSubmit={(e) => {
                                this.props.editedProduct ?
                                products.editItem(e, this.state) :
                                products.addItem(e, this.state);
                                this.isSubmitted = true;
                                this.resetForm();                         
                            }}
                        >
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.image}
                                    type="text"
                                    name="image" 
                                    label={t("product_form.image")}
                                />
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    type="text"
                                    name="name"
                                    label={t("product_form.name")}
                                    required
                                    maxLength={30}
                                />
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.quantity}
                                    type="number"
                                    name="quantity"
                                    required
                                    label={t("product_form.quantity")}
                                    maxLength={10}
                                />
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.minimalAmount}
                                    type="number"
                                    name="minimalAmount"
                                    min="1"
                                    label={t("product_form.minimal-amount")}
                                />                    
                                <Select
                                    onChange={this.handleChange}
                                    value={this.state.category}
                                    name="category"
                                    label={t("product_form.category")}
                                    options={['Mushrooms','Vegetables','Fruits','Others']}
                                />                    
                                <Select
                                    onChange={this.handleChange}
                                    value={this.state.unit}
                                    name="unit"
                                    label={t("product_form.unit")}
                                    options={['kg', 'g', 'l', 'ml', 'bottle', 'pieces', 'packs', 'boxes']}
                                />
                            <Button>{t("button.edit")}</Button>
                            {this.isSubmitted && <Redirect to="/" />}
                        </form>
                    </div>
                )}}
            </AppContext.Consumer>
        )
    }
}

export default withTranslation()(ProductForm);
  