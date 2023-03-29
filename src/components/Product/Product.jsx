import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product;
    const handleAddtoCart = props.handleAddtoCart;

    return (
        <div className="products">
            <img src={img} alt="" />
            <div className='product-content'>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddtoCart(props.product)}>Add to Cart 
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>


        </div>
    );
};

export default Product;