import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const DetailArticle = (props) => {
    const { artikel, storageBaseUrl } = props
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen px-4 mt-[80px]">
                <ButtonNavigate navigateTo="/artikel" variant='pointer'>
                    <img
                        src="/assets/icons/back.png"
                        alt="back"
                        className="w-7 h-7"
                    />
                </ButtonNavigate>
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold">{artikel.judul}</h1>
                </div>
                <div className="flex justify-center my-4">
                    <img
                        src={`${ storageBaseUrl }/${ artikel.gambar }`}
                        alt="background"
                        className="w-[500px] h-[300px]"
                    />
                </div>
                <div className="flex justify-center  mb-4">

                    <div className="text-justify w-[90%]" dangerouslySetInnerHTML=
                        {{ __html: artikel.konten }} />
                </div>
                <div>
                    <div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailArticle;
