import React from "react";

const CardBanner = (props) => {
    const {images} = props;
    return (
        <div>
            <img
                src={images}
                alt="prod1"
                className="w-[130px] h-[130px] rounded-lg"
            />
        </div>
    );
};

export default CardBanner;
