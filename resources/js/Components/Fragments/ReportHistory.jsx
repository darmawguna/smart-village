import React from "react";
import ButtonNavigate from "../Elements/ButtonNavigate";

const ReportHistory = (props) => {
    const { reportImages, title, status, children, date, id } = props;

    const formatDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        return dateObj.toLocaleDateString('id-ID', options);
    };

    return (
        <div className="border-b-2 flex justify-between items-center py-2">
            <div className="flex gap-3 w-[70%] ">
                <img
                    src={`${reportImages}`}
                    alt="reportImg"
                    className="w-[60px] h-[60px]"
                />
                <div className="overflow-hidden">
                    <div className="flex gap-2">
                        <h2>{title}</h2>
                        <span className="text-[10px] bg-color5 text-white flex rounded-lg px-2 text-center items-center">
                            {status}
                        </span>
                    </div>
                    <p className="line-clamp-3 ssm:text-[10px] ssm:h-[30px]">
                        {children}
                    </p>
                </div>
            </div>
            <span className="ssm:text-[10px]">{formatDate(date)}</span>
            <ButtonNavigate navigateTo={`pelaporan/${id}`}>
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
