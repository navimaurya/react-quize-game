import React from 'react'

const Button = ({ className = null, children, ...otherProps }) => {
    return (
        <button className={`btn px-4 mx-2 ${className}`} {...otherProps}>{children}</button>
    )
}
export default Button;
