import React from 'react'

const ProductCard = (props) => {
    const { nama, jumlah, satuan, harga } = props;
    
    return (
        <div>
            <h1>{nama}</h1>
            <h2>{jumlah} {satuan}</h2>
            <h3>Rp. {harga}</h3>
        </div>
    );
}

export default ProductCard