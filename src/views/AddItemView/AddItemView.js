import React from 'react';
import ProductForm from "../../components/Form/ProductForm";
import { withTranslation } from 'react-i18next/hooks';

const AddItemView = ( {t} ) => (
    <div>
     <ProductForm title={t("title.add")} />
    </div>
)

export default withTranslation()(AddItemView);