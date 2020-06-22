import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import AppContext from "../../../context";
import '../../../../node_modules/semantic-ui-css/semantic.min.css';

const ListItem = ({
    image,
    name,
    quantity,
    unit,
    minAmonut,
    category,
    removeItem
}) => {
    const ImageTag = image ? 'img' : 'div';
                    console.log(removeItem)

    return (
            // <AppContext.Consumer>
                // {context => {
                    // console.log(context.removeItem)

                    // return (
                        <li className={styles.item}>
                            <div className={styles.col}>
                                <div className={styles.product}>
                                    {image && <ImageTag 
                                        className={image ? styles.product__image : styles.product__imageNone}
                                        src={image} 
                                        alt={name}
                                    />}
                                    <div className={styles.product__name}>
                                        <span>{name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.amount}>
                                    <div className={styles.amount__quantity}>{quantity}</div>
                                    <span className={styles.amount__unit}>{unit}</span>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.category}>{category}</div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.actions}>
                                    <i className="icon edit"></i>
                                    <i className="icon times" onClick={() => removeItem(name)}></i>
                                </div>
                            </div>
                        </li>
                    // )}}
            /*{ </AppContext.Consumer> }*/
    );
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    quantity: PropTypes.number,
};

ListItem.defaultProps = {
    image: null,
    quantity: 0,
    unit: 'kg'
};

export default ListItem;