import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './ListItem.module.scss';
import '../../../../node_modules/semantic-ui-css/semantic.min.css';
import noPhoto from '../../../assets/images/no-photo.svg';

const ListItem = ({
    id,
    image,
    name,
    quantity,
    unit,
    minimalAmount,
    category,
    removeItem,
}) => {

    const ImageTag = image ? "img" : "div";
    const quantityColors = +minimalAmount > +quantity ? "textRed" : "textGreen";
    let color;
    if (quantity > minimalAmount) {
      color = "green";
    } else if (quantity === minimalAmount) {
      color = "orange";
    } else color = "red";

    const history = useHistory();
    return (
            <li className={styles.item} onClick={(e) => history.push(`/edit/${id}`)}>
                <div className={styles.col}>
                    <div className={styles.product}>
                        { image ? 
                            ( 
                                <ImageTag 
                                    className={image ? styles.product__image : styles.product__imageNone}
                                    src={image} 
                                    alt={name}
                                />
                            ) : (
                              <img  className={styles.product__image} src={noPhoto} alt="no-icon"/>
                            )
                        }
                        <div className={styles.product__nameWrapper}>
                            <span className={styles.product__name}>{name}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.amount} >
                        <span className={quantityColors}>{quantity}</span>
                        <span className={quantityColors}>{unit}</span>
                    </div>
                </div>
                <div className={styles.col}>
                 <span className={styles.minimalAmount}>{minimalAmount}</span>
                </div>
                <div className={styles.col}>
                 <span className={`${styles.status} ${styles[`status--${color}`]}`}></span>
                </div>
                <div className={styles.col}>
                    <div className={styles.category}>{category}</div>
                    <div className={styles.actions}>
                        <i className="icon edit" onClick={() => history.push(`/edit/${id}`)}></i>
                        <i className="icon times" onClick={(e) => {e.stopPropagation();  removeItem(e, id)}}></i>
                    </div>
                </div>
            </li>
    );
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    quantity: PropTypes.number.isRequired,
};

ListItem.defaultProps = {
    image: null,
    quantity: 0,
    unit: "kg",
    category: "Fruits",
};

export default ListItem;