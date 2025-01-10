import React from "react";
import ProductCard from "../Elements/Product";
import ButtonNavigate from "../Elements/ButtonNavigate";

const CardProduct = (props) => {
    const {prodImages} = props;
    return (
        <div className="relative flex justify-center gap-2 bg-white shadow-xl p-4 w-[300px] h-[150px]">
            <img src={prodImages} alt="product" className="w-[100px] h-full" />
            <div className="w-[400px]">
                <ProductCard 
                nama='Kangkung'
                jumlah='5'
                satuan='ikat'
                harga='5.000' />
                <ButtonNavigate navigateTo='/productDetail' variant='absolute bottom-2 right-2'>
                    <img
                        src="/assets/icons/next.png"
                        alt="nxt"
                        className="w-5 h-5"
                    />
                </ButtonNavigate>
            </div>
        </div>
    );
};

export default CardProduct;
