import { MapPinIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Singleitem = ({ item }) => {
    const { _id,productName, image, price, category, description, road,thana,zila,rentalDay, userName } = item;

    return (
        <div className="p-4 transition-all bg-white font-poppins border border-gray-200 rounded-lg shadow">
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={productName}
                    className="w-full h-40 object-cover rounded-md mb-4 "
                    
                />
            </div>
            <h3 className="text-lg font-semibold mb-2">{productName.split(' ').slice(0, 2).join(' ')}</h3>
            <p className="text-gray-700 font-bold mb-2">৳{price} per day</p>
            <p className="text-yellow-500 mb-4">Rent: For {rentalDay} days</p>
           <div className="flex">
           <MapPinIcon className="h-5 w-5 text-gray-600 mr-2" />
           <span className="font-medium">{road}, {thana}, {zila}</span>

           </div>
            <p className="text-black mb-4"><span className="font-bold font-poppins">Provider:</span> <span className="font-medium font-poppins">{userName}</span></p>
            <Link to={`/product/details/${_id}`}>
            <button className="px-4 py-2 bg-white font-semibold text-black rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white border-2">
                RENT NOW
            </button>
            </Link>
        </div>
    );
};

export default Singleitem;
