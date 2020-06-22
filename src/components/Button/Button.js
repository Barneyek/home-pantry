import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

const Button = ({children, href, ...props }) => (
    <>
    {
        href ? (
            <a  
                href = { href }
                target = "_blank"
                className = {styles.button}
                rel = "noopener noreferrer"
                >
                    {children}
                </a>
        )   :  (
            <button className={styles.button} {...props}>
                {children}
            </button>
        )
    }
    </>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
}
Button.defaultProps = {
    href: null,
}

export default Button;