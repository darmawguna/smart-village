import React from "react";
import Inputs from "./Input";
import Label from "./Label";

const InputElements = (props) => {
    const { type, name, placeholder, labels, style } = props;
    return (
        <div>
            <Label htmlfor={name}>{labels}</Label>
            <Inputs type={type} name={name} placeholder={placeholder} variant={style}/>
        </div>
    );
};

export default InputElements;
