import React, { useState } from "react";
import ButtonNavigate from "../Elements/ButtonNavigate";
import WaButton from "../Elements/WaButton";
import ButtonElements from "../Elements/Button";
import { Button } from "@headlessui/react";

const NavBar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex justify-between px-4 py-2 shadow-xl h-[10vh] items-center fixed top-0 w-[100%] z-50 bg-white">
            <ButtonNavigate
                navigateTo="/"
                variant="flex gap-3 items-center"
            >
                <img
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="w-8 h-8"
                />
                <h1 className="font-bold text-2xl">Smart Forest Village</h1>
            </ButtonNavigate>
            <div className="flex justify-between w-[30em] items-center md:hidden">
                <ButtonNavigate navigateTo="/">Beranda</ButtonNavigate>
                <ButtonNavigate navigateTo="/about">Tentang</ButtonNavigate>
                <ButtonNavigate navigateTo="/pelaporan">
                    Laporkan Kejadian
                </ButtonNavigate>
                <ButtonNavigate navigateTo="/artikel">Edukasi</ButtonNavigate>
                <ButtonNavigate navigateTo="/product">Produk</ButtonNavigate>
                {/* <ButtonNavigate navigateTo="/admin">Admin</ButtonNavigate> */}
            </div>
            <div id="menuBtn" className="hidden md:flex" onClick={toggleSidebar}>
                <ButtonElements>
                    <img
                        src="/assets/icons/menu.png"
                        alt="menu"
                        className="w-7 h-7"
                    />
                </ButtonElements>
            </div>
            <div
                id="sidebar"
                className={`fixed right-0 top-0 h-screen w-[30%] ssm:w-[50%] bg-white z-50 p-4 transform transition-transform duration-300 ${
                    isSidebarVisible ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <Button onClick={toggleSidebar}>
                    <img src="/assets/icons/close.png" alt="close" className="w-7 h-7" />
                </Button>
                <ButtonNavigate navigateTo="/">Beranda</ButtonNavigate>
                <ButtonNavigate navigateTo="/about">Tentang</ButtonNavigate>
                <ButtonNavigate navigateTo="/pelaporan">
                    Laporkan Kejadian
                </ButtonNavigate>
                <ButtonNavigate navigateTo="/artikel">Edukasi</ButtonNavigate>
                <ButtonNavigate navigateTo="/product">Produk</ButtonNavigate>
                <ButtonNavigate navigateTo="/admin">Admin</ButtonNavigate>
            </div>
        </div>
    );
};

export default NavBar;
