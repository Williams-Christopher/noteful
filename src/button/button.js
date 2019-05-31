import React from 'react';
import './button.css';

function Button(props) {
    return(
        <div className='button'><p>{props.buttonText}</p></div>
    )
}

export default Button;