import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import WaButton from "@/Components/Elements/WaButton";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const DetailProduct = () => {
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen px-4 mt-[80px]">
                <ButtonNavigate navigateTo="/product" variant="pointer">
                    <img
                        src="/assets/icons/back.png"
                        alt="back"
                        className="w-7 h-7"
                    />
                </ButtonNavigate>
                <div className="flex justify-around">
                    <img
                        src="/assets/images/background1.jpg"
                        alt="productPhoto"
                        className="w-[450px] h-[450px]"
                    />
                    <div className="w-[50%]">
                        <h1 className="text-2xl font-bold">Nama Produk</h1>
                        <div className="flex justify-between">
                        <span>Rp. 10.000/Kg</span>
                        <span>Makanan</span>
                        <span className="flex gap-1">
                          <img src="/assets/icons/star.png" alt="star" className="w-5 h-5" /> 4.4
                        </span>
                        </div>
                        <div className="h-[60vh]">
                            <h2>Description</h2>
                            <hr />
                            <p className="text-justify">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Necessitatibus soluta tempore,
                                eos repellat eligendi omnis dolore? Ad numquam
                                non, illo laborum quia nemo modi itaque, debitis
                                minima provident maiores? Eligendi iusto quae
                                illum doloribus laudantium in deleniti
                                inventore. Aspernatur maiores cumque, assumenda
                                quisquam esse sed accusantium hic? Cum, nihil
                                doloremque?
                            </p>
                        </div>
                        <WaButton
                            phoneNumber="6283114755807"
                            variant="rounded-lg py-2 bg-color5 text-white text-center text-xl w-full"
                        >
                            Beli Sekarang
                        </WaButton>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailProduct;
