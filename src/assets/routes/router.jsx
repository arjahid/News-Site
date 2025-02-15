import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../layouts/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path:'/news',
        element: <h2>News layout</h2>
    },
    {
        path:'auth',
        element: <h2>Login layout</h2>
    },
    {
        path:'*',
        element: <h2>404 layout</h2>
    }
])


export default router;