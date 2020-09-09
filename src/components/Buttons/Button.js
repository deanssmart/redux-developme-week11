import React from 'react';

const Button = ({
    label,
    buttonClass,
    handleClick,
    disable,
}) => (
        <button 
            className={ buttonClass }
            onClick={ handleClick }
            disabled={ disable }                          
        >
            { label }
        </button>
);

Button.defaultProps = {
    disable: false,
};


export default Button;