import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({name, label, options,...props}) =>(
    <>
        <select           
            name={name} 
            className={styles.select}
            {...props}
        >
            {options.map((item) => (
            <option key={item}>{item}</option>
            ))}
        </select>
    </>
)

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
}

// Select.defaultProps = {
//     // value: '',
// };

export default Select;