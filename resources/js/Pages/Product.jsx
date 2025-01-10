import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import SearchBar from "@/Components/Elements/Search";
import CardBanner from "@/Components/Fragments/CardBanner";
import CardProduct from "@/Components/Fragments/CardProduct";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const Product = () => {
    return (
        <HomeLayout>
            <div className="flex justify-center min-h-screen mt-[80px] px-4 ">
                <div className="flex flex-col w-[95%]">
                <div className="bg-color5 h-[40vh] flex justify-between items-center px-10 rounded-lg">
                    <div>
                        <h1 className="font-bold text-[40px] w-[300px]">
                            Jelajahi Hasil Alam Terbaik
                        </h1>
                        <ButtonNavigate variant="w-[200px] rounded-lg px-2 py-2 text-center bg-white flex justify-between mt-2 items-center">
                            <span className="text-black">Belanja Sekarang</span>
                            <img
                                src="/assets/icons/next.png"
                                alt="next"
                                className="w-5 h-5"
                            />
                        </ButtonNavigate>
                    </div>
                    <div className="flex gap-4">
                        <CardBanner images="/assets/images/produ1.png" />
                        <CardBanner images="/assets/images/produ1.png" />
                        <CardBanner images="/assets/images/produ1.png" />
                        <CardBanner images="/assets/images/produ1.png" />
                    </div>
                    <div>
                        <img
                            src="/assets/images/people.png"
                            alt="people"
                            className="w-[200px] h-[235px]"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <SearchBar variant='w-[500px]' placeholder='cari produk lainnya disini' />
                </div>
                <div className="flex py-10 flex-wrap justify-center gap-5">
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                    <CardProduct prodImages="/assets/images/produ1.png" />
                </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Product;