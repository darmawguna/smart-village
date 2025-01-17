import { Link } from "@inertiajs/react";
import React from "react";

const WaButton = (props) => {
    const {variant, children, phoneNumber, message='Halo, apakah produk ini masih tersedia?'} = props;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${variant} hover:bg-color2`}
        >
            {children}
    </a>
};

export default WaButton;
