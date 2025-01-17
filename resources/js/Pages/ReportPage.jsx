import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import ReportHistory from "@/Components/Fragments/ReportHistory";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const ReportPage = (props) => {
    const { laporan, storageBaseUrl } = props
    const laporanData = laporan.data
// console.log(laporan)
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen px-4">
                <div className="flex justify-center mt-[80px]">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl mb-2">
                            Ini Adalah Halaman Untuk Melihat & Melaporkan
                            Kejadian
                        </h1>
                        <div className="flex justify-center">
                            <ButtonNavigate
                                navigateTo="/reportForm"
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
                            <ButtonNavigate navigateTo='/allReportHistory'>
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
                            {/* <ReportHistory
                                reportImages='/assets/images/background1.jpg'
                                title='Kebakaran Dibanjar Jawa'
                                status='done'
                                children='loremipsum sit dolor amet.'
                                date='12-12-2025' /> */}

                        </div>
                        {/* card history end */}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default ReportPage;
