import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <h1>Loading...</h1>
    }

    if(user && user.email){
        return children
    }
    return (
       <Navigate to='/auth/login'></Navigate>
    );
};

export default PrivateRoute;