import { MapPinIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Singleitem = ({ item }) => {
    const { name, image, price, category, reviews, description, location, providerName } = item;

    return (
        <div className="p-4 transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow">
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                />
            </div>
            <h3 className="text-lg font-semibold mb-2">{name.split(' ').slice(0, 2).join(' ')}</h3>
            <p className="text-gray-700 font-bold mb-2">৳{price} per day</p>
            <p className="text-yellow-500 mb-4">{reviews}</p>
           <div className="flex">
           <MapPinIcon className="h-5 w-5 text-gray-600 mr-2" />
           <span className="font-medium">location</span>

           </div>
            <p className="text-gray-600 mb-4">Provider: <span className="font-medium">providerName</span></p>
            <Link to={"/product/details"}>
            <button className="px-4 py-2 bg-white font-semibold text-black rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white border-2">
                RENT NOW
            </button>
            </Link>
        </div>
    );
};

export default Singleitem;
