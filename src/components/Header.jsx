import React from 'react';
import logo from '../assets/img/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'> 
            <div className='' >
                <img src={logo} alt="" />
            </div>
            <h2 className='text-gray-400 '>Journalism without fear here</h2>
            <p>{moment().format("dddd,MMMM Do YYYY,h:mm:ssa")}</p>
        </div>
    );
};

export default Header;