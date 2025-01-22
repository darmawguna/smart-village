import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const DetailReport = (props) => {
    const { laporan, storageBaseUrl } = props;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    // console.log(laporan)
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen mt-[80px] ssm:mt-[80px] lg:mt-[130px] px-4">
                <ButtonNavigate navigateTo="/pelaporan" variant="pointer">
                    <img
                        src="/assets/icons/back.png"
                        alt="back"
                        className="w-7 h-7 mb-2"
                    />
                </ButtonNavigate>
                <div className="flex justify-between md:flex-col md:justify-center md:items-center">
                    <img
                        src={`${storageBaseUrl}/${laporan.gambar}`}
                        alt="imgReport"
                        className="w-[350px] h-[400px] md:h-[350px]"
                    />
                    <div className="w-[70%] ssm:w-full md:w-full lg:w-[55%]">
                        <h1 className="font-semibold text-2xl">
                            {laporan.judul}
                        </h1>
                        <div className="flex gap-10">
                            <div className="flex gap-1">
                                <img
                                    src="/assets/icons/calendar.png"
                                    alt="calendar"
                                    className="w-5 h-5"
                                />
                                <span>{formatDate(laporan.created_at)}</span>
                            </div>
                            <div className="flex gap-1">
                                <img
                                    src="/assets/icons/status.png"
                                    alt="status"
                                    className="w-5 h-5"
                                />
                                <span>{laporan.status}</span>
                            </div>
                        </div>
                        <div>
                            <h2>Keterangan</h2>
                            <hr className="border-1 border-gray-700" />
                            <div>
                                <p className="text-justify">
                                    {laporan.deskripsi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailReport;
