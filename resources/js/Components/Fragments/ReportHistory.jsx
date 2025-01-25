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

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'dalam proses':
                return 'bg-yellow-500'; 
            case 'diterima':
                return 'bg-green-500';
            default:
                return 'bg-green-500'; 
        }
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case 'dalam proses':
                return '/assets/icons/process.png'; 
            case 'diterima':
                return '/assets/icons/accept.png';
            default:
                return '/assets/icons/accept.png';
    }
};

    return (
        <div className="border-b-2 flex justify-between items-center py-2">
            <div className="flex gap-3 w-[70%]">
                <img
                    src={`${reportImages}`}
                    alt="reportImg"
                    className="w-[60px] h-[60px]"
                />
                <div className="overflow-hidden">
                    <div className="flex gap-2">
                        <h2 className="font-semibold w-[100px] truncate">{title}</h2>
                        <div
                            className={`text-[10px] text-white flex rounded-lg px-2 text-center items-center ${getStatusColor(status)}`}
                        >
                            <img
                            src={getStatusIcon(status)}
                            alt={status}
                            className="w-5 h-5 hidden ssm:block"
                        />
                        <span className="ssm:hidden">
                        {status}
                        </span>
                        </div>
                    </div>
                    <p className="line-clamp-3 ssm:text-[10px] h-[30px]">
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
