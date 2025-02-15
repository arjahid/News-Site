import React, { useEffect, useState } from 'react';

const LeftNavbar = () => {
    const [catageory,serCategory] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => serCategory(data.data.news_category))
    },[])
    // {
// "category_id": "01",
// "category_name": "Breaking News"
// },
    return (
        <div>
           <h2 className='font-semibold mb-2'>All Category({catageory.length})</h2>
           <div className='flex flex-col gap-3'>
            {
                catageory.map(category=><button className='btn' key={category.category_id}>{category.category_name}</button>)
            }
           </div>
        </div>
    );
};

export default LeftNavbar;