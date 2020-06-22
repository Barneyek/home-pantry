import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label, maxLength, type, ...props}) =>(
    <div className={styles.formItem}>
        <Tag 
            type={type}
            name={name} 
            className={styles.input}
            maxLength={maxLength}
            {...props}
            placeholder=" "
        />
        <label className={styles.label} htmlFor={name}>{label}</label>
        <div className={styles.formItemBar}/>
    </div>
)

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    type: PropTypes.string.isRequired,
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 200,
}

export default Input;