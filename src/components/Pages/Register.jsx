import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createNewUser,setUser}=useContext(AuthContext)
    
    const handleSignUp=(e)=>{
        e.preventDefault()
        // const name=e.target.name.value
        // const email=e.target.email.value
        // const password=e.target.password.value
        // const photo=e.target.photo.value
        // console.log(name,email,password,photo)
        const form=new FormData(e.target)
        const name=form.get('name');
        const email=form.get('email');
        const password=form.get('password');
        const photo=form.get('photo');
        console.log(name,email,password,photo)
        createNewUser(email,password)
        .then(result=>{
            const user=result.user
            setUser(user)
            console.log(user)
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        })
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Register Your Account</h2>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-neutral ">Register</button>
        </div>
        <p className='text-center font-semibold'>Already have account? <Link className='text-red-500' to='/auth/login'>Login</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Register;