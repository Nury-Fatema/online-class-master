import React, { useState } from 'react';
import fakeData from '../fakeData';
import User from '../User/User';
import Cart from '../cart/Cart';
import './Body.css';

const Body = () => {

    const [user, setUser] = useState(fakeData)
    const [cart, setCart] = useState([]);

    const addItem = (user) => {
        console.log('item added', user);
        const newCart = [...cart, user];
        setCart(newCart);

    }

    return (
        <div className="body">
            <div className="user-container">
                {
                    user.map(user => <User user={user} addItem={addItem}></User>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;