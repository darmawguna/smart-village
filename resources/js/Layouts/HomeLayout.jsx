import WaButton from "@/Components/Elements/WaButton";
import Footer from "@/Components/Fragments/Footer";
import NavBar from "@/Components/Fragments/NavBar";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
const HomeLayout = ({ children }) => {
    return (
        <div>
            <ToastContainer />
            <NavBar />
            {children}
            <WaButton
                phoneNumber="6281338690502"
                variant="rounded-full p-2 bg-color5 fixed right-0 bottom-0 m-4 z-50"
            >
                <img src="/assets/icons/cs.png" alt="cs" className="w-7 h-7" />
            </WaButton>
            <Footer />
        </div>
    );
};

export default HomeLayout;
