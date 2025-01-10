import React from "react";
import InputElements from "../Elements/Input";
import ButtonNavigate from "../Elements/ButtonNavigate";
import ButtonElements from "../Elements/Button";

const FormReport = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <ButtonNavigate navigateTo="/report">
                    <img
                        src="/assets/icons/back.png"
                        alt="icon-back"
                        className="w-7 h-7 hover:opacity-80 transition-opacity"
                    />
                </ButtonNavigate>
            </div>

            <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--color5)' }}>
                Laporkan Kejadian
            </h1>

            <form className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
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

                    <div className="space-y-6">
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