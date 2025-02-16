import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {setUser,handleGoogle,handleFacebook}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogleLogin=()=>{
        handleGoogle()
        .then((result)=>{
            console.log(result)
            setUser(result.user)
            navigate('/')

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleFacebokLogin=()=>{
        handleFacebook()
        .then((result)=>{
            console.log(result)
            setUser(result.user)
            navigate('/')

        })
        .catch((error)=>{
            console.log(error)})
    }

    return (
        <div>
            <h2 className='font-semibold mb-3'>Login in with</h2>
            <div className='*:w-full space-y-2'>
                <button onClick={handleGoogleLogin} className="btn"><FaGoogle /> Login with Google</button>
                <button onClick={handleFacebokLogin} className="btn"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;