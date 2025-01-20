import SearchBar from "@/Components/Elements/Search";
import ReportHistory from "@/Components/Fragments/ReportHistory";
import HomeLayout from "@/Layouts/HomeLayout";
import React, { useState } from "react";

const AllReport = (props) => {
    const { laporan, storageBaseUrl } = props;
    const laporanData = laporan.data;

    // State untuk kata kunci pencarian
    const [searchTerm, setSearchTerm] = useState("");

    // Fungsi untuk menangani perubahan input pencarian
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Data yang difilter berdasarkan kata kunci pencarian
    const filteredReports = laporanData.filter((item) =>
        item.judul.toLowerCase().includes(searchTerm) ||
        item.deskripsi.toLowerCase().includes(searchTerm) ||
        item.status.toLowerCase().includes(searchTerm)
    );

    return (
        <HomeLayout>
            <div className="flex justify-center min-h-screen px-4">
                <div className="w-[95%] mt-[80px] lg:mt-[130px]">
                    <div className="flex justify-between mb-4 sm:flex-col">
                        <h1 className="font-bold text-2xl">Riwayat Seluruh Laporan</h1>
                        {/* Search bar dengan event onChange */}
                        <SearchBar
                            placeholder="Cari riwayat laporan di sini"
                            variant="border-none bg-white shadow-xl w-[300px]"
                            onChange={handleSearchChange} // Tambahkan handler pencarian
                        />
                    </div>
                    <hr />
                    <div className="h-[65vh] overflow-y-auto">
                        {/* Tampilkan laporan yang telah difilter */}
                        {filteredReports.length > 0 ? (
                            filteredReports.map((item, index) => (
                                <ReportHistory
                                    id={item.id}
                                    key={index}
                                    reportImages={`${storageBaseUrl}/${item.gambar}`}
                                    title={item.judul}
                                    status={item.status}
                                    children={item.deskripsi}
                                    date={item.created_at}
                                />
                            ))
                        ) : (
                            <p className="text-center mt-4 text-gray-500">
                                Tidak ada laporan yang ditemukan.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default AllReport;
