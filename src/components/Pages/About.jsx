import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <div className='w-11/12 mx-auto pt-4'>
           <div className='bg-base-200 w-11/12 mx-auto'> <Navbar></Navbar></div>
           <div>here is all</div>
           
            <div className='w-11/12 pl-4 mx-auto  pt-6'>
                {data.map(item => (
                    <div key={item.id} className="card bg-base-100 pt-4 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
