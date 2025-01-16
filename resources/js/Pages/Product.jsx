import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import SearchBar from "@/Components/Elements/Search";
import CardBanner from "@/Components/Fragments/CardBanner";
import CardProduct from "@/Components/Fragments/CardProduct";
import HomeLayout from "@/Layouts/HomeLayout";
import React, { useState } from "react";

const Product = (props) => {
    const { produk, storageBaseUrl } = props;
    const dataProduk = produk.data;
    const [searchTerm, setSearchTerm] = useState('');
    
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredArtikel = artikel.data.filter((item) =>
        item.judul.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
    return (
        <HomeLayout>
            <div className="flex justify-center min-h-screen mt-[80px] px-4 ">
                <div className="flex flex-col w-[95%]">
                    <div className="bg-color5 h-[40vh] flex justify-between items-center px-10 rounded-lg">
                        <div className="ssm:flex ssm:flex-col ssm:items-center ssm:justify-center">
                            <h1 className="font-bold text-[40px] w-[300px]">
                                Jelajahi Hasil Alam Terbaik
                            </h1>
                            <ButtonNavigate variant="w-[200px] rounded-lg px-2 py-2 text-center bg-white flex justify-between mt-2 items-center">
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
                            <CardBanner images="/assets/images/produ1.png" />
                            <CardBanner images="/assets/images/produ1.png" />
                            <CardBanner images="/assets/images/produ1.png" />
                        </div>
                        <div className=" ssm:hidden">
                            <img
                                src="/assets/images/people.png"
                                alt="people"
                                className="w-[200px] h-[235px] md:w-[150px] md:h-[195px]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-end mt-7">
                        {/* TODO: perbarui sidebar ini untuk menyimpan data di state */}
                        <SearchBar
                            variant="w-[500px] sm:w-[300px]"
                            placeholder="cari produk lainnya disini"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="flex py-10 flex-wrap justify-center gap-5">
                        {dataProduk.map((data, index) => {
                            return (
                                <CardProduct
                                    key={data.id}
                                    prodImages={`${storageBaseUrl}/${data.gambar_produk}`}
                                    prodName={data.nama}
                                    prodPrice={data.harga}
                                    prodStock="1"
                                    prodId={data.id}
                                ></CardProduct>
                            );
                        })}

                        {/* <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" /> */}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Product;
