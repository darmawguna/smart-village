import ButtonNavigate from "@/Components/Elements/ButtonNavigate";
import WaButton from "@/Components/Elements/WaButton";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const DetailProduct = (props) => {
    const { produk, storageBaseUrl } = props;
    console.log(produk);
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-screen px-4 mt-[80px]">
                <ButtonNavigate navigateTo="/product" variant="pointer">
                    <img
                        src="/assets/icons/back.png"
                        // src={`${ storageBaseUrl }/${ produk.gambar_produk }`}
                        alt="back"
                        className="w-7 h-7"
                    />
                </ButtonNavigate>
                <div className="flex justify-around sm:flex-col sm:justify-center sm:items-center">
                    <img
                        src={`${storageBaseUrl}/${produk.gambar_produk}`}
                        alt="productPhoto"
                        className="w-[450px] h-[450px] md:w-[300px] md:h-[300px] sm:w-full "
                    />
                    <div className="w-[50%] sm:w-full">
                        <h1 className="text-2xl font-bold">{produk.nama}</h1>
                        <div className="flex justify-between items-center">
                            <span>Rp. {produk.harga}</span>
                            <span>Makanan</span>
                        </div>
                        <div className="h-[60vh] w-full overflow-auto">
                            <h2>Keterangan</h2>
                            <hr className="my-2" />
                            <div className="w-full">
                                <p className="text-justify break-words">
                                    {produk.deskripsi}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <WaButton
                                phoneNumber="6282147389276"
                                variant="rounded-lg py-2 px-[40%] md:px-[20%] lg:px-[30%] bg-color5 text-white text-center text-xl"
                            >
                                Beli Sekarang
                            </WaButton>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailProduct;
