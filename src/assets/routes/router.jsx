import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../../layouts/Home';
import Pages from '../../components/Pages';
import CatageroyNews from '../../components/Pages/CatageroyNews';
import AuthLayout from '../../layouts/AuthLayout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                path:'',
                element: <Navigate to="/category/01">  </Navigate>
            },
            {
                path:'/category/:id',
                element: <CatageroyNews></CatageroyNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                
            }
        ],
        
    },
    {
        path:'/news',
        element: <h2>News layout</h2>
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {path:'/auth/login',
                element: <h2>Login layout</h2>
            },
            {path:'/auth/register',
                element: <h2>register layout</h2>
            }
        ]
    },
    {
        path:'*',
        element: <h2>404 layout</h2>
    }
])


export default router;