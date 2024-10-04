import React from 'react';
import '../../Components/Header/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="search-bar">
                <select className="category-input">
                    <option value="">Category</option>
                    <option value="fruits">Bikes</option>
                    <option value="garden-plants">Camera</option>
                    <option value="flower-plants">Books</option>
                </select>
                <input type="text" className="name-input" placeholder="Name" />
                <input type="text" className="price-input" placeholder="Price" />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default Header;
