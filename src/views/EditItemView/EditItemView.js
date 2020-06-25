import React from 'react';
import Form from "../../components/Form/Form";
import { useParams } from "react-router-dom";
import AppContext from "../../context";


const EditdItemView = () =>{
    const { id } = useParams();

    const getEditedItem = (items) => {
        const index = items.findIndex((item) => item.id === id);
        return items[index];
    };

    return (
        <>
        <AppContext.Consumer>
                { context => {
                    const editedItem = getEditedItem(context);
                    return( <Form editedItem={editedItem} /> )
                }}}
        </AppContext.Consumer>
        </>
    )
}

export default EditdItemView;