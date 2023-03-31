import React from 'react';
import userImg from '../../assets/337653887_931207167919138_7436184312962683861_n.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className="header"> 
            <h2>Programming Cafe</h2>
            <img src={userImg} alt="" />
        </div>
    );
};

export default Header;