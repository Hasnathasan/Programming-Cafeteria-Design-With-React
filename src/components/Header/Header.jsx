import React from 'react';
import userImg from '../../assets/337653887_931207167919138_7436184312962683861_n.jpg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header"> 
                <h1>Programming Cafe</h1>
                <img src={userImg} alt="" />
            </div>
            <hr />
        </div>
        
    );
};

export default Header;