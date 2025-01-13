import React from "react";
import InputElements from "../Elements/Input";
import ButtonNavigate from "../Elements/ButtonNavigate";
import ButtonElements from "../Elements/Button";

const FormReport = () => {
    return (
        <div className="p-8 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <ButtonNavigate navigateTo="/report">
                    <img
                        src="/assets/icons/back.png"
                        alt="icon-back"
                        className="w-7 h-7 hover:opacity-80 transition-opacity"
                    />
                </ButtonNavigate>
            </div>

            <h1 className="text-3xl font-bold text-center mb-8 text-color5">
                Laporkan Kejadian
            </h1>

            <form className="flex flex-col items-center">
                <div className="flex gap-8 sm:flex-col sm:items-center">
                    <div className="space-y-6 w-[45%] sm:w-full">
                        <InputElements
                            labels="Nama Panjang"
                            name="name"
                            type="text"
                            placeholder="Jhon Doe"
                            style="w-full pl-2"
                        />
                        <InputElements
                            labels="Judul Laporan"
                            name="title"
                            type="text"
                            placeholder="Masukkan Kejadian Yang Terjadi"
                            style="w-full pl-2"
                        />
                        <InputElements
                            labels="Unggah Gambar"
                            name="uploads"
                            type="file"
                            accept="image/*"
                            placeholder="Unggah Gambar"
                            style="w-full pl-2"
                        />
                    </div>

                    <div className="space-y-6 w-[45%] sm:w-full">
                        <InputElements
                            labels="Email"
                            name="email"
                            type="email"
                            placeholder="Jhondoe@gmail.com"
                            style="w-full pl-2"
                        />
                        <InputElements
                            labels="Lokasi"
                            name="lokasi"
                            type="text"
                            placeholder="Lokasi Kejadian"
                            style="w-full pl-2"
                        />
                        <InputElements
                            labels="Deskripsi Kejadian"
                            name="description"
                            type="textarea"
                            placeholder="Jelaskan Kejadian Yang Terjadi"
                            style="w-full pl-2"
                        />
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <ButtonElements 
                        type='submit' 
                        variant='bg-color5 text-white text-xl font-bold hover:opacity-90 transition-opacity px-8 py-3 rounded-lg'
                    >
                        Kirim
                    </ButtonElements>
                </div>
            </form>
        </div>
    );
};

export default FormReport;