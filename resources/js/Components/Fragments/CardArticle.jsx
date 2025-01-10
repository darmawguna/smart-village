import React from "react";
import ArticleCard from "../Elements/Article";

const CardArticle = () => {
    return (
        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden w-[270px] h-[430px] flex flex-col">
            <ArticleCard 
            covers='/assets/images/background1.jpg'
            titles='Pentingnya Belajar Bertani Sejak Dini'
            dates='12-12-2023'
            childrens='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere natus a hic autem eveniet adipisci dolorum deleniti, sit et!' />
        </div>
    );
};

export default CardArticle;
