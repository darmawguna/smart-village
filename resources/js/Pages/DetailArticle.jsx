import React, { useState, useEffect } from "react";
import ButtonElements from "@/Components/Elements/Button";
import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import DisplayComment from "@/Components/Elements/Commentar/Display";
import InputComment from "@/Components/Elements/Commentar/Input";
import HomeLayout from "@/Layouts/HomeLayout";
import Label from "@/Components/Elements/Input/Label";
import Input from "@/Components/Elements/Commentar/Input/Input";
import { useForm } from '@inertiajs/react';

const DetailArticle = (props) => {
    const { artikel, storageBaseUrl, komentar } = props;
    // console.log(komentar)
    const { data, setData, post, processing, errors } = useForm({
        content: "",
        nama: "",
        artikel_id: artikel.id
    });

    // State untuk mengontrol visibilitas form komentar
    const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);
    const [rotateIcon, setRotateIcon] = useState('');

    // Fungsi untuk klik tombol 'Next'
    const handleButtonClick = () => {
        setIsCommentFormVisible(!isCommentFormVisible);
        setRotateIcon(isCommentFormVisible ? 'rotate-90' : '-rotate-90');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('komentar.store'), { data });
        setData('content', '');
        setData('nama', '');
    };

    // useEffect(() => {

    // }, [komentar])

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
                        src={`${ storageBaseUrl }/${ artikel.gambar }`}
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
                                className={`w-5 h-5 rotate-90 ${ rotateIcon }`}
                            />
                        </button>
                    </div>

                    {/* Form Comment */}
                    {/* TODO buat form untuk komentar */}
                    {isCommentFormVisible && (
                        <div className="flex flex-col gap-3 w-1/2 sm:w-full mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-3'>
                                    <div>
                                        <Label htmlfor="nama">Nama</Label>
                                        <input type="text" name="nama" className="rounded-md w-full"
                                            placeholder="Masukan Nama Anda"
                                            value={data.nama}
                                            onChange={(e) => setData('nama', e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlfor="komentar">Komentar</Label>

                                        <textarea type="text" name="content" className="rounded-md w-full"
                                            placeholder="Masukan Komentar"
                                            value={data.content}
                                            onChange={(e) => setData('content', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="bg-color5 mt-3 text-white text-2xl font-bold w-full py-2 rounded-md">Kirim</button>
                            </form>
                            {/* <InputComment /> */}
                            {/* <ButtonElements variant='bg-color5 mt-3 text-white text-2xl font-bold w-full py-2 rounded-md'>
                                Kirim
                            </ButtonElements> */}
                        </div>
                    )}

                    <hr className="border-1 border-gray-700 my-4" />

                    {/* Display Comment */}
                    {/* TODO : looping data artikel dari database sesuai dengan id yang sesuai */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Riwayat Komentar</h2>
                        <div className="flex flex-col gap-4">
                            {
                                komentar.map((item, index) => {
                                    return (
                                        <DisplayComment
                                            nama={item.nama}
                                            key={index}
                                            children={item.content}
                                        />

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailArticle;
