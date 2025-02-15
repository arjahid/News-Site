import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-200 p-2">
      <p className="bg-[#D72050] text-base-100">Latest </p>
     <Marquee pauseOnHover={true} className="space-x-4">
        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium!</Link>
        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium!</Link>
        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium!</Link>
     </Marquee>
    </div>
  );
};

export default LatestNews;
