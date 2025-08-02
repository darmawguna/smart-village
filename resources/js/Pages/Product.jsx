import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import SearchBar from "@/Components/Elements/Search";
import CardBanner from "@/Components/Fragments/CardBanner";
import CardProduct from "@/Components/Fragments/CardProduct";
import HomeLayout from "@/Layouts/HomeLayout";
import React, { useState } from "react";

const Product = (props) => {
    const { produk, storageBaseUrl } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProduk = (produk?.data || []).filter((item) =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <HomeLayout>
            <div className="flex justify-center min-h-screen mt-[80px] sm:mt-[80px] lg:mt-[130px] px-4">
                <div className="flex flex-col w-[95%] max-w-7xl">
                    <div className="bg-color5 h-[40vh] flex justify-between items-center px-10 rounded-lg mb-8">
                        <div className="ssm:flex ssm:flex-col ssm:items-center ssm:justify-center">
                            <h1 className="font-bold text-[40px] w-[300px] text-white">
                                Jelajahi Hasil Alam Terbaik
                            </h1>
                            <ButtonNavigate
                                navigateTo="#produk"
                                variant="w-[200px] rounded-lg px-2 py-2 text-center bg-white flex justify-between mt-2 items-center hover:bg-gray-100 transition-colors duration-200"
                            >
                                <span className="text-black">
                                    Belanja Sekarang
                                </span>
                                <img
                                    src="/assets/icons/next.png"
                                    alt="next"
                                    className="w-5 h-5"
                                />
                            </ButtonNavigate>
                        </div>
                        <div className="flex gap-4 ssm:hidden md:hidden">
                            <CardBanner images="/assets/images/produ1.png" />
                            <CardBanner images="/assets/images/madu.jpg" />
                            <CardBanner images="/assets/images/nangka.jpg" />
                            <CardBanner images="/assets/images/durian.jpg" />
                        </div>
                        <div className="ssm:hidden h-full">
                            <img
                                src="/assets/images/people.png"
                                alt="people"
                                className="w-[200px] h-full md:w-[150px] md:h-[195px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Produk Kami
                            </h2>
                        </div>

                        <div className="relative">
                            <SearchBar
                                variant="w-[400px] sm:w-[300px] lg:w-[400px] pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors duration-200"
                                placeholder="Cari produk lainnya di sini..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div id="produk" className="mb-16">
                        {filteredProduk.length > 0 ? (
                            <>
                                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-2 sm:grid-1 mb-12">
                                    {filteredProduk.map((data, index) => (
                                        <CardProduct
                                            key={data.id}
                                            prodImages={`${storageBaseUrl}/${data.gambar_produk}`}
                                            prodName={data.nama}
                                            prodPrice={new Intl.NumberFormat(
                                                "id-ID",
                                                {
                                                    style: "currency",
                                                    currency: "IDR",
                                                }
                                            ).format(data.harga)}
                                            prodDescription={data.deskripsi}
                                            prodId={data.id}
                                            className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                            style={{
                                                animationDelay: `${
                                                    index * 100
                                                }ms`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {filteredProduk.length > 12 && (
                                    <div className="flex justify-center mt-12">
                                        <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                                            Lihat Lebih Banyak
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16">
                                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                    <svg
                                        className="w-16 h-16 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    Produk Tidak Ditemukan
                                </h3>
                                <p className="text-gray-500 text-center max-w-md mb-6">
                                    Maaf, tidak ada produk yang cocok dengan
                                    pencarian "{searchTerm}". Coba gunakan kata
                                    kunci yang berbeda.
                                </p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                                >
                                    Lihat Semua Produk
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Product;
