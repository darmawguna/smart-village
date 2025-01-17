import React, { useState } from "react";
import ButtonElements from "@/Components/Elements/Button";
import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import DisplayComment from "@/Components/Elements/Commentar/Display";
import InputComment from "@/Components/Elements/Commentar/Input";
import HomeLayout from "@/Layouts/HomeLayout";

const DetailArticle = (props) => {
    const { artikel, storageBaseUrl } = props;

    // State untuk mengontrol visibilitas form komentar
    const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);
    const [rotateIcon, setRotateIcon] = useState('');

    // Fungsi untuk klik tombol 'Next'
    const handleButtonClick = () => {
        setIsCommentFormVisible(!isCommentFormVisible);
        setRotateIcon(isCommentFormVisible ? 'rotate-90' : '-rotate-90');
    };

    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen px-4 mt-[80px]">
                <ButtonNavigate navigateTo="/artikel" variant="pointer">
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
                        src={`${storageBaseUrl}/${artikel.gambar}`}
                        alt="background"
                        className="w-[500px] h-[300px]"
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <div
                        className="text-justify w-[90%]"
                        dangerouslySetInnerHTML={{ __html: artikel.konten }}
                    />
                </div>
                {/* Comment Session */}
                <div className="mb-4">
                    <div className="flex justify-center gap-2">
                        <h1 className="text-2xl font-bold my-4 text-center">Komentar</h1>
                        <button onClick={handleButtonClick}>
                            <img
                                src="/assets/icons/next.png"
                                alt="next"
                                className={`w-5 h-5 ${rotateIcon}`} 
                            />
                        </button>
                    </div>

                    {/* Form Comment */}
                    {isCommentFormVisible && (
                        <div>
                            <InputComment />
                            <ButtonElements variant='bg-color5 mt-3 text-white text-2xl font-bold w-full py-2 rounded-md'>
                                Kirim
                            </ButtonElements>
                        </div>
                    )}

                    <hr className="border-1 border-gray-700 my-4" />

                    {/* Display Comment */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Riwayat Komentar</h2>
                        <div>
                            <DisplayComment
                                nama='Budi'
                                children='lorem ipsum sit dolor amet.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailArticle;
