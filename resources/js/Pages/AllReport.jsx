import SearchBar from "@/Components/Elements/Search";
import ReportHistory from "@/Components/Fragments/ReportHistory";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const AllReport = () => {
    return (
        <HomeLayout>
            <div className="flex justify-center min-h-screen px-4">
                <div className="w-[95%] mt-[80px]">
                    <div className="flex justify-between mb-4 sm:flex-col">
                    <h1 className="font-bold text-2xl">Riwayat Seluruh Laporan</h1>
                    <SearchBar placeholder='cari riwayat laporan disini' variant='border-none bg-white shadow-xl w-[300px]' />
                    </div>
                    <hr />
                    <div className="h-[65vh] overflow-y-auto">
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                            <ReportHistory
                                reportImages="/assets/images/background1.jpg"
                                title="Kebakaran Dibanjar Jawa"
                                status="done"
                                children="loremipsum sit dolor amet."
                                date="12-12-2025"
                            />
                        </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default AllReport;
