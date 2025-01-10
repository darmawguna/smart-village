import React from "react";
import ButtonNavigate from "../Elements/ButtonNavigate";

const ReportHistory = (props) => {
    const {reportImages, title, status, children, date} = props;
    return (
        <div className="border-b-2 flex justify-between items-center py-2">
            <img
                src={`${reportImages}`}
                alt="reportImg"
                className="w-[60px] h-[60px]"
            />
            <div className="w-[80%]">
                <div className="flex gap-2">
                    <h2>{title}</h2>
                    <span className="text-[10px] bg-color5 text-white flex rounded-lg px-2 text-center items-center">
                        {status}
                    </span>
                </div>
                <p>
                    {children}
                </p>
            </div>
            <span>{date}</span>
            <ButtonNavigate navigateTo="/reportDetail">
                <img
                    src="/assets/icons/next.png"
                    alt="next"
                    className="w-5 h-5"
                />
            </ButtonNavigate>
        </div>
    );
};

export default ReportHistory;
