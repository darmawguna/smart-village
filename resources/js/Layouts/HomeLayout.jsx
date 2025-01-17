import WaButton from "@/Components/Elements/WaButton";
import Footer from "@/Components/Fragments/Footer";
import NavBar from "@/Components/Fragments/NavBar";
import React from "react";

const HomeLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <WaButton
                phoneNumber="6282147389276"
                variant="rounded-full p-2 bg-color5 fixed right-0 bottom-0 m-4"
            >
                <img src="/assets/icons/cs.png" alt="cs" className="w-7 h-7" />
            </WaButton>
            <Footer />
        </div>
    );
};

export default HomeLayout;
