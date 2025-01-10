import React from "react";

const Footer = () => {
    return (
        <div className="flex justify-center items-center shadow-[0_-4px_10px_rgba(0,0,0,0.25)] h-[8vh] text-color5 bg-white">
            <p className="text-[13px]">Copyright &copy; Smart Forest Village {new Date().getFullYear()}. All Right Reserved.</p>
        </div>
    );
};

export default Footer;
