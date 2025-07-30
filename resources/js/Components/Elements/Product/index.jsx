import React from "react";

const ProductCard = ({ nama, harga, deskripsi }) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {nama}
                </h2>
                {deskripsi && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {deskripsi}
                    </p>
                )}
            </div>
            <div className="text-xl font-bold text-green-600 mb-3">
                {harga}
            </div>
        </div>
    );
};

export default ProductCard;