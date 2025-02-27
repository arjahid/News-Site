import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <h1>Loading...</h1>
    }

    if(user && user.email){
        return children
    }
    return (
       <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
};

export default PrivateRoute;