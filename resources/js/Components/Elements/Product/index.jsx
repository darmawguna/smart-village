import React from 'react'

const ProductCard = (props) => {
    const { nama, 
         harga } = props;
    
    return (
        <div class="flex flex-col justify-between h-[100px]">
    <h1>{nama}</h1>
    <h3>{harga}</h3>
</div>
    );
}

export default ProductCard