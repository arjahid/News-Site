import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

const Carrer = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))


        
    },[])
    return (
        <div className='w-11/12 mx-auto pt-4'>
            <div className='w-11/12 mx-auto pt-6 bg-base-200'>
            <Navbar ></Navbar>
            </div>
           <div className='w-11/12 pl-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6'>
           {
            data.map(item=><div>
               <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.date}</div>
      <div className="badge badge-outline">{item.author}</div>
    </div>
  </div>
</div>
            </div>)
           }
           </div>
        </div>
    );
};

export default Carrer;