import React from "react";

const WaButton = (props) => {
    const {variant, children, phoneNumber, productName, price} = props;
    
    // ✅ DIPERBAIKI: Buat message dinamis berdasarkan produk
    const message = productName && price 
        ? `Halo, saya tertarik dengan produk ${productName} seharga ${price}. Apakah masih tersedia?`
        : 'Halo, saya ingin memesan produk';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${variant} hover:bg-color2`}
        >
            {children}
        </a>
    );
};

export default WaButton;