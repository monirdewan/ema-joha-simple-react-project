import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total=0;
    let totalShipping =0;
    
    for(const product of cart){
        total = total+product.price;
        totalShipping = totalShipping+product.shipping;
    }
    let totalTax = total*7/100;
    const grandTotal = total+totalShipping+totalTax;
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
             <p>Selected Items: {props.cart.length}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping: ${totalShipping}</p>
             <p>Tax: ${totalTax.toFixed(2)}</p>
             <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;