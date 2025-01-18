import React from "react";

const ButtonElements = (props) => {
    const { type, variant, children, onClick } = props;
    return <button type={type} onClick={onClick} className={`${variant}`}>{children}</button>;
};

export default ButtonElements;
