import Maps from "@/Components/Fragments/Maps";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const About = () => {
    return (
        <HomeLayout>
            <div className="flex min-h-screen px-4 justify-around md:flex-col md:justify-center md:items-center">
                <div className="w-[50%] ssm:w-full md:w-full lg:w-full mt-[90px] sm:mt-[80px] lg:mt-[130px] text-justify">
                    <section className="mb-6">
                        <h1 className="font-bold text-2xl mb-2 md:text-center">Smart Forest Village</h1>
                        <p>Smart Forest Village merupakan platform pemasaran hasil hutan dan manajemen pengelolaan hutan di Desa Pengejaran. Desa berada di ketinggian 1.200m dari permukaan laut (dpl). Mempunyai batas- batas sebagai berikut :</p>
                        <ul className="list-none">
                            <li>Sebelah Utara : Desa Mengening</li>
                            <li>Sebelah Timur : Desa Selulung</li>
                            <li>Sebelah Barat : Desa Catur</li>
                            <li>Sebelah Selatan : Desa Belantih</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="font-bold text-xl mb-2 md:text-center">Program Smart Forest Village</h2>
                        <ul className="list-none">
                            <li className="before:content-['1.'] before:mr-2">Pemasaran produk hasil hutan secara digital</li>
                            <li className="before:content-['2.'] before:mr-2">Transfer teknologi lampu penerangan bertenaga surya menuju hutan Desa pengejaran.</li>
                            <li className="before:content-['3.'] before:mr-2">Menerapkan agroforestri pada hutan Desa pengejaran dengan menanam tanaman pangan bersama dengan pohon hutan.</li>
                        </ul>
                    </section>
                </div>
                <div className="w-[40%] ssm:w-full md:w-full lg:w-full text-center mt-[90px] md:mt-[20px] md:mb-[30px] z-10">
                    <Maps/>
                    <p className="text-color5">Desa Pengejaran, Kecamatan Kintamani, Kabupaten Bangli</p>
                </div>
            </div>
        </HomeLayout>
    );
};

export default About;
