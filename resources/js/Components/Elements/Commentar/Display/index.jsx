import React from "react";

const DisplayComment = (props) => {
    const { nama, children } = props;
    return (
        <div className="border border-gray-300 p-2 w-full rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">{nama}</h2>
            <div className="bg-gray-50 p-1 rounded-md">
                <p className="text-gray-700">{children}</p>
            </div>
        </div>
    );
};

export default DisplayComment;
