import React from "react";
import ButtonNavigate from "../Elements/ButtonNavigate";
import WaButton from "../Elements/WaButton";

const NavBar = () => {
    return (
        <div className="flex justify-between px-4 py-2 shadow-xl h-[10vh] items-center fixed top-0 w-[100%] z-50 bg-white">
            <ButtonNavigate navigateTo='/home' variant="flex gap-3 items-center">
                <img src="/assets/images/logo.png" alt="logo" className="w-8 h-8" />
                <h1 className="font-bold text-2xl">Smart Forest Village</h1>
            </ButtonNavigate>
            <div className="flex justify-between w-[30em] items-center">
                <ButtonNavigate navigateTo="/home">Beranda</ButtonNavigate>
                <ButtonNavigate navigateTo="/about">Tentang</ButtonNavigate>
                <ButtonNavigate navigateTo="/report">
                    Laporkan Kejadian
                </ButtonNavigate>
                <ButtonNavigate navigateTo="/article">Edukasi</ButtonNavigate>
                <ButtonNavigate navigateTo="/product">Produk</ButtonNavigate>
                <WaButton phoneNumber='6283114755807' variant='rounded-full p-2 bg-color5'>
                    <img src="/assets/icons/cs.png" alt="cs" className="w-7 h-7" />
                </WaButton>
            </div>
        </div>
    );
};

export default NavBar;
