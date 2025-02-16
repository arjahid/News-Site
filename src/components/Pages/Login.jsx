import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {loginUSer,setUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        
        loginUSer(email,password)
        .then(result=>{
            const user=result.user
            setUser(user)
            navigate('/')
            console.log(user)})
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Invalid Email or Password')
            console.log(errorCode,errorMessage)
        })}
    return (
        <div className='min-h-screen flex items-center justify-center'>
            
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral ">Login</button>
        </div>
        <p className='text-center font-semibold'>Dont have account? <Link className='text-red-500' to='/auth/register'>Register</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Login;