import { Link } from "@inertiajs/react";
import React from "react";

const ButtonNavigate = (props) => {
    const { children, navigateTo, variant } = props
    if (navigateTo === "/admin") {
        return (
            <a href={navigateTo} className={`flex text-color5 ${ variant }`}>
                {children}
            </a>
        );
    }
    return <Link href={navigateTo} className={`flex text-color5 ${ variant }`}>{children}</Link>;
};

export default ButtonNavigate;
