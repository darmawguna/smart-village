import React from "react";

const Content = (props) => {
    const { title, date, children } = props;
    return (
        <div>
            <h1 className="text-[20px]">{title}</h1>
            <div className="flex gap-1">
                <img src="/assets/icons/calendar.png" alt="calendar" className="w-4 h-4" />
                <span className="text-[12px]">{date}</span>
            </div>
            <div className="w-full h-[110px] overflow-hidden">
                <h2>Deskripsi</h2>
                <hr />
                <div className="text-justify text-[12px]" dangerouslySetInnerHTML=
                    {{ __html: children }} />
                {/* <p className="text-justify text-[12px]">{children}</p> */}
            </div>
        </div>
    );
};

export default Content;
