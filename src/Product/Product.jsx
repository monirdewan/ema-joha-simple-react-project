import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img, seller,ratings,price} = props.product;
    return (
        <div className="products">
            <img src={img} alt="" />
            <h4 className='product-name'>{name}</h4>
            <h6>{price}</h6>
            <p>{seller}</p>
            <p>{ratings}</p>
           
            
        </div>
    );
};

export default Product;