import { MapPinIcon } from '@heroicons/react/16/solid';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Singleitem = ({ item }) => {
    const { _id, productName, image, price, category, road, thana, zila, rentalDay, userName } = item;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div className="spinner"></div>;
    }

    return (
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="overflow-hidden mb-4 rounded-md h-32">
                <img
                    src={image}
                    alt={productName}
                    className="object-cover w-full h-full"
                />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{productName.split(' ').slice(0, 2).join(' ')}</h3>
            <p className="text-blue-700 font-bold mb-2">৳{price} per day</p>
            <p className="text-orange-600 mb-2">Rent for {rentalDay} days</p>
            <div className="flex items-center mb-4">
                <MapPinIcon className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-600">{road}, {thana}, {zila}</span>
            </div>
            <p className="mb-4 text-gray-700">
                <span className="font-semibold">Provider:</span> {userName}
            </p>
            <Link to={`/product/details/${_id}`}>
            <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-900 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300">
                    RENT NOW
                </button>
            </Link>
        </div>
    );
};

export default Singleitem;
