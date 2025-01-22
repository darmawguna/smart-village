import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import ReportHistory from "@/Components/Fragments/ReportHistory";
import HomeLayout from "@/Layouts/HomeLayout";
import { React, useEffect } from "react";
import { toast } from 'react-toastify';
const ReportPage = (props) => {
    const { laporan, storageBaseUrl, flash } = props
    const laporanData = laporan.data

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
            // alert(flash.success); // Menampilkan pesan flash menggunakan alert
        }
    }, [flash]);
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen px-4">
                <div className="flex justify-center mt-[80px] ssm:mt-[80px] lg:mt-[130px]">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl mb-2">
                            Ini Adalah Halaman Untuk Melihat & Melaporkan
                            Kejadian
                        </h1>
                        <div className="flex justify-center">
                            <ButtonNavigate
                                navigateTo="/pelaporan-publik"
                                variant="bg-color5 gap-3 w-[250px] py-2 flex justify-center items-center rounded-lg"
                            >
                                <img
                                    src="/assets/icons/white-camera.png"
                                    alt="camera"
                                    className="w-7 h-7"
                                />
                                <span className="text-[20px] font-semibold text-white">
                                    Laporkan Kejadian
                                </span>
                            </ButtonNavigate>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px]  flex justify-center ">
                    <div className="w-[95%]">
                        <div className="flex justify-between">
                            <h3>Riwayat Laporan</h3>
                            <ButtonNavigate navigateTo='/histori-pelaporan'>
                                Selengkapnya
                            </ButtonNavigate>
                        </div>
                        <hr />
                        {/* card history start */}
                        <div>
                            {
                                laporanData.map((item, index) => {
                                    return (
                                        <ReportHistory
                                            id={item.id}
                                            key={index}
                                            reportImages={`${ storageBaseUrl }/${ item.gambar }`}
                                            title={item.judul}
                                            status={item.status}
                                            children={item.deskripsi}
                                            date={item.created_at}
                                        />
                                    )
                                })
                            }
                        </div>
                        {/* card history end */}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default ReportPage;
