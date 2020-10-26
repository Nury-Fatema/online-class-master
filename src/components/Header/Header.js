import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <h1>Programming Hero</h1>
                <h3>Online Class</h3>
            </div>
            <nav className="nav-bar"> 
                <a href="/home">Home</a>
                <a href="/review">Review</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;