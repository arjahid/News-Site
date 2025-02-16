import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon  from '../assets/img/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOUt}=useContext(AuthContext)
    
    const logOut=()=>{
        logOUt()
    }   
    
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2">
            {user && user.email ? (
                    <div>
                        <img className='w-10 rounded' src={user.photoURL} alt="User" />
                        <span>{user.displayName}</span>
                    </div>
                ) : (
                    <img src={userIcon} alt="User Icon" />
                )}
                {
                    user && user.email ? (
                        <button onClick={logOut} className='btn btn-neutral rounded-none'>Logout</button>
                    ) : (
                        <Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>
                    )
                }
               
            </div>
            
        </div>
    );
};

export default Navbar;