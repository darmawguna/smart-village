import Maps from "@/Components/Fragments/Maps";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const About = () => {
    return (
        <HomeLayout>
            <div className="flex min-h-screen px-4 justify-around md:flex-col md:justify-center md:items-center">
                <div className="w-[50%] mt-[90px] text-justify">
                    <section className="mb-6">
                        <h1 className="font-bold text-2xl mb-2 md:text-center">Smart Forest Village</h1>
                        <p>Smart Forest Village merupakan platform manajemen pengelolaan hutan dan hasil hutan Desa Pengejaran. Desa Pengejaran merupakan salah satu desa yang terletak di Kecamatan Kintamani, Kabupaten Bangli, Provinsi Bali memiliki luas daerah 666 Ha, dengan rincian 150 Ha adalah hutan, 640 Ha adalah lahan pertanian/perkebunan, dan 56 Ha adalah pemukiman warga.</p>
                    </section>
                    <section>
                        <h2 className="font-bold text-xl mb-2 md:text-center">Program Smart Forest Village</h2>
                        <ul className="list-none">
                            <li className="before:content-['1.'] before:mr-2">Transfer teknologi melalui panel surya untuk memenuhi kebutuhan listrik untuk penerangan di Desa pengejaran.</li>
                            <li className="before:content-['2.'] before:mr-2">Menerapkan agroforestri pada hutan Desa pengejaran dengan menanam tanaman pangan bersama dengan pohon hutan.</li>
                            <li className="before:content-['3.'] before:mr-2">Pengembangan desa edukasi berbasis lingkungan.</li>
                            <li className="before:content-['4.'] before:mr-2">Pelatihan dan pendampingan diversifikasi produk hasil hutan.</li>
                        </ul>
                    </section>
                </div>
                <div className="w-[40%] text-center mt-[90px] md:mt-[20px] md:mb-[30px]">
                    <Maps/>
                    <p className="text-color5">Desa Pengejaran, Kecamatan Kintamani, Kabupaten Bangli</p>
                </div>
            </div>
        </HomeLayout>
    );
};

export default About;
