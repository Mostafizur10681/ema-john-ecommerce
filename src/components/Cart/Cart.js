import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h5 className='summary-header'>Order Summary</h5>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h6>Grand Total: {grandTotal}</h6>
            {props.children}
        </div>
    );
};

export default Cart;