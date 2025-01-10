import React from "react";

const ButtonElements = (props) => {
    const { type, variant, children } = props;
    return <button type={type} className={`${variant}`}>{children}</button>;
};

export default ButtonElements;
