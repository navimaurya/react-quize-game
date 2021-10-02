import React from 'react'

import './radioButton.style.css'

const RadioButton = ({ children, name, id, type = '', value, ...other }) => {
    return (
        <div class={"form-check py-1  " + type}>
            <input className="form-check-input mr-2" type="radio" value={value} {...other} name={name} id={id} checked={type ? true : false} />
            <label className="form-check-label options" htmlFor={id}>
                {children}
            </label>
        </div>
    )
}

export default RadioButton;
