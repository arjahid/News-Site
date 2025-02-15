import React from "react";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { title, author, rating, total_view, image_url, details } = news;

    return (
        <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
            <figure>
                <img src={image_url} alt={title} className="w-full h-60 object-cover" />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2">
                    <img src={author.img} alt={author.name} className="w-10 h-10  rounded-full" />
                    <div>
                        <h5 className="font-semibold">{author.name}</h5>
                        <p className="text-xs text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <h2 className="card-title text-lg font-bold mt-2">{title}</h2>
                <p className="text-sm text-gray-700">{details.slice(0, 100)}...</p>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <span className="text-sm font-semibold">{rating.number} ({rating.badge})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye />
                        <span className="text-sm">{total_view} Views</span>
                    </div>
                </div>
                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-primary btn-sm">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
