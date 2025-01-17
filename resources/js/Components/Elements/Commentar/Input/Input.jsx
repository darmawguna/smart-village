import React from "react";

const Input = (props) => {
    const {type, name, placeholder, variant} = props
    return <input
    type={type}
    name={name}
    className={`rounded-md ${variant}`}
    placeholder={placeholder} />;
};

export default Input;
