import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import SearchBar from "@/Components/Elements/Search";
import CardBanner from "@/Components/Fragments/CardBanner";
import CardProduct from "@/Components/Fragments/CardProduct";
import HomeLayout from "@/Layouts/HomeLayout";
import React, { useState } from "react";

const Product = (props) => {
    const { produk, storageBaseUrl } = props;
    const [searchTerm, setSearchTerm] = useState("");

    // Handle perubahan input pada search bar
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter produk berdasarkan searchTerm
    const filteredProduk = produk.data.filter((item) =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <HomeLayout>
            <div className="flex justify-center min-h-screen mt-[80px] sm:mt-[80px] lg:mt-[130px] px-4 ">
                <div className="flex flex-col w-[95%]">
                    <div className="bg-color5 h-[40vh] flex justify-between items-center px-10 rounded-lg">
                        <div className="ssm:flex ssm:flex-col ssm:items-center ssm:justify-center">
                            <h1 className="font-bold text-[40px] w-[300px]">
                                Jelajahi Hasil Alam Terbaik
                            </h1>
                            <ButtonNavigate navigateTo='#produk' variant="w-[200px] rounded-lg px-2 py-2 text-center bg-white flex justify-between mt-2 items-center">
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
                    <div className="flex justify-center sm:justify-end mt-7">
                        <SearchBar
                            variant="w-[500px] sm:w-[300px]"
                            placeholder="Cari produk lainnya di sini"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div id="produk" className="flex py-10 flex-wrap justify-center gap-5">
                        {filteredProduk.length > 0 ? (
                            filteredProduk.map((data) => (
                                <CardProduct
                                    key={data.id}
                                    prodImages={`${storageBaseUrl}/${data.gambar_produk}`}
                                    prodName={data.nama}
                                    prodPrice={new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.harga)}
                                    prodId={data.id}
                                />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">
                                Tidak ada produk yang ditemukan.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Product;
