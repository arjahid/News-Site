import React from 'react';
import { Link } from 'react-router-dom';
import userIcon  from '../assets/img/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2">
                <img src={userIcon} alt="" />
                <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
            
        </div>
    );
};

export default Navbar;