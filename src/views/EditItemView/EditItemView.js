import React from 'react';
import ProductForm from "../../components/Form/ProductForm";
import AppContext from "../../context";
import { useParams } from "react-router-dom";
import { withTranslation } from 'react-i18next/hooks';

const EditdItemView = ({ match, t }) =>{
    const { id } = useParams();

    const getEditedProduct = (products) => {
      const index = products.findIndex((e) => e.id === id);
      return products[index];
    };
    
    return (
        <AppContext.Consumer>
          {({ products }) => {
            const editedProduct = getEditedProduct(products);
            return <ProductForm title={t("title.edit")} editedProduct={editedProduct} />;
          }}
        </AppContext.Consumer>
    );
}

export default withTranslation()(EditdItemView);
