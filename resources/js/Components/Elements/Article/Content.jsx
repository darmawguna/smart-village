const Content = (props) => {
    const { title, date, children } = props;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div>
            <h1 className="text-[20px] ssm:text-[12px] w-full ssm:h-[20px] ssm:truncate">{title}</h1>
            <div className="flex gap-1 ssm:justify-end">
                <img
                    src="/assets/icons/calendar.png"
                    alt="calendar"
                    className="w-4 h-4 ssm:w-2 ssm:h-2"
                />
                <span className="text-[12px] ssm:text-[8px]">{formatDate(date)}</span>
            </div>
            <div className="w-full h-[90px] ssm:h-[70px] overflow-hidden">
                <h2 className="ssm:text-[10px]">Deskripsi</h2>
                <hr />
                <div
                    className="text-justify text-[12px] ssm:text-[10px] line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: children }}
                />
            </div>
        </div>
    );
};

export default Content;