import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';

const Home = () => {
    return (
        <div className='font-Poppins'>
            <header> <Header></Header></header>
            <section className='w-11/12 mx-auto'><LatestNews></LatestNews></section>
           
            <nav className='w-11/12 mx-auto py-2 '><Navbar ></Navbar></nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
            <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
            <section className='col-span-6'>main</section>
            <aside className='col-span-3'>right</aside>
            </main>
        </div>
    );
};

export default Home;