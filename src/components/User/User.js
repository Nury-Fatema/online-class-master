import React from 'react';
import './User.css';
import Cart from '../cart/Cart'


const User = (props) => {
    // console.log(props)
    const { course, price, details, img } = props.user;



    return (
        <div>
            <div className="info">
                <h3>Title: {course}</h3>
                <p>Details: {details}</p>
                <p><small>Price: ${price}</small></p>
                <img src={img} alt="" />
                <button onClick={() => props.addItem(props.user)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default User;