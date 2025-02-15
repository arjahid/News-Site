import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const CatageroyNews = () => {
    const {data}=useLoaderData();
    console.log(data)
    return (
        <div>
         <h2 className='font-semibold'>Dragon News Home</h2>
         <p className=''>{data.length} News Founds on This categeory</p>
         <div>
            {
                data.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
            }
         </div>
        </div>
    );
};

export default CatageroyNews;