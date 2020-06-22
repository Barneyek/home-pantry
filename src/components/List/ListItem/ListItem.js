import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import '../../../../node_modules/semantic-ui-css/semantic.min.css';

const ListItem = ({
    image,
    name,
    quantity,
    unit,
    category,
}) => {
    const ImageTag = image ? 'img' : 'div';

    return (
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
                    <i className="icon times"></i>
                </div>
            </div>
        </li>
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