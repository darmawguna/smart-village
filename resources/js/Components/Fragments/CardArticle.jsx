import React from "react";
import ArticleCard from "../Elements/Article";

const CardArticle = (props) => {
    const { image, title, date, description,id } = props
    return (
        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden w-[270px] h-[430px] flex flex-col">
            <ArticleCard
                covers={image}
                titles={title}
                dates={date}
                childrens={description}
                id={id}
            />
        </div>
    );
};

export default CardArticle;
