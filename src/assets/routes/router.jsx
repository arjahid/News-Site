import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../../layouts/Home';
import Pages from '../../components/Pages';
import CatageroyNews from '../../components/Pages/CatageroyNews';
import AuthLayout from '../../layouts/AuthLayout';
import Login from '../../components/Pages/Login';
import Register from '../../components/Pages/Register';
import NewsDetails from '../../components/Pages/NewsDetails';
import PrivateRoute from './privateRoute';


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
        path:'/news/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {path:'/auth/login',
                element: <Login></Login>
            },
            {path:'/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'*',
        element: <h2>404 layout</h2>
    }
])


export default router;