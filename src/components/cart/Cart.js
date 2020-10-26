import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        price = price + user.price;
        
    }

    return (
        <div className="cart">
            <h2>Items: {cart.length}</h2>
            <h2>Total: ${price}</h2>
            <button>Review</button>
        </div>
    );
};

export default Cart;