import { Link } from "@inertiajs/react";
import React from "react";

const ButtonNavigate = (props) => {
    const {children, navigateTo, variant} = props
    return <Link href={navigateTo} className={`flex text-color5 ${variant}`}>{children}</Link>;
};

export default ButtonNavigate;
