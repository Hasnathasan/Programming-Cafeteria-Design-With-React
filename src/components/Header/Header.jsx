import React from 'react';
import userImg from '../../assets/337653887_931207167919138_7436184312962683861_n.jpg';

const Header = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center my-6 mt-2"> 
                <h1 className="text-2xl sm:text-4xl font-semibold">Programming Cafe</h1>
                <img className="w-14 h-14 rounded-full" src={userImg} alt="" />
            </div>
            <hr />
        </div>
        
    );
};

export default Header;