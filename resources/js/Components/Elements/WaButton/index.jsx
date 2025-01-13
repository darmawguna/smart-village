import { Link } from "@inertiajs/react";
import React from "react";

const WaButton = (props) => {
    const {variant, children, phoneNumber, message='Halo, apakah produk ini masih tersedia?'} = props;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return <Link
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${variant}`}
        >
            {children}
        </Link>
};

export default WaButton;
