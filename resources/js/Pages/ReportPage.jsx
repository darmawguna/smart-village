import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import ReportHistory from "@/Components/Fragments/ReportHistory";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const ReportPage = () => {
    return (
        <HomeLayout>
            <div className="h-[75vh]">
                <div className="flex justify-center mt-[100px]">
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
                        <div className="h-[45vh] overflow-y-auto">
                        <ReportHistory
                        reportImages='/assets/images/background1.jpg'
                        title='Kebakaran Dibanjar Jawa'
                        status='done'
                        children='loremipsum sit dolor amet.'
                        date='12-12-2025' />
                        <ReportHistory
                        reportImages='/assets/images/background1.jpg'
                        title='Kebakaran Dibanjar Jawa'
                        status='done'
                        children='loremipsum sit dolor amet.'
                        date='12-12-2025' />
                        <ReportHistory
                        reportImages='/assets/images/background1.jpg'
                        title='Kebakaran Dibanjar Jawa'
                        status='done'
                        children='loremipsum sit dolor amet.'
                        date='12-12-2025' />
                        <ReportHistory
                        reportImages='/assets/images/background1.jpg'
                        title='Kebakaran Dibanjar Jawa'
                        status='done'
                        children='loremipsum sit dolor amet.'
                        date='12-12-2025' />
                        <ReportHistory
                        reportImages='/assets/images/background1.jpg'
                        title='Kebakaran Dibanjar Jawa'
                        status='done'
                        children='loremipsum sit dolor amet.'
                        date='12-12-2025' />
                        </div>
                        {/* card history end */}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default ReportPage;
