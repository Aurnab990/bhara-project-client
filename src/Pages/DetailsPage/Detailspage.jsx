import React from 'react';
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'; // Icons for location and verification
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const { _id,productName, image, price, category, description, road,thana,zila,rentalDay,phone, userName } = useLoaderData();
    return (
        <div>

            <div className="bg-gray-100 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row max-w-full mx-auto">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full md:w-1/2 mb-4 lg:mt-12 md:mb-0">
                        <img 
                            src={image} 
                            alt="Product" 
                            className="w-full h-auto rounded-lg object-cover" 
                        />
                    </div>
                    
                    {/* Details Section */}
                    <div className="md:ml-4 w-full md:w-1/2">
                        <h1 className="text-2xl font-bold text-center mb-4">Product Details</h1>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="py-3 px-4 border-b">Item</th>
                                        <th className="py-3 px-4 border-b">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Name</td>
                                        <td className="py-2 px-4 border-b">{productName}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Price</td>
                                        <td className="py-2 px-4 border-b">
                                            <span className="text-blue-600 font-bold">৳{price} per day</span>
                                            <span className="line-through text-gray-500 ml-2">৳1000.00</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Discount</td>
                                        <td className="py-2 px-4 border-b">20%</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Provider</td>
                                        <td className="py-2 px-4 border-b">{userName}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Address</td>
                                        <td className="py-2 px-4 border-b flex items-center">
                                            <MapPinIcon className="h-5 w-5 text-gray-600 mr-1" />
                                            {road}, {thana}, {zila}
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Phone</td>
                                        <td className="py-2 px-4 border-b">{phone}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Reviews</td>
                                        <td className="py-2 px-4 border-b">★★★★☆</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Verification Status</td>
                                        <td className="py-2 px-4 border-b flex items-center">
                                            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-1" />
                                            Verified
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Rental Days</td>
                                        <td className="py-2 px-4 border-b">
                                            <input
                                                type="number"
                                                defaultValue={rentalDay}
                                                className="border border-gray-300 rounded-lg px-2 py-1 w-20"
                                                min="1"
                                                max="30"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <Link to={`/product/details/${_id}/order=page`}>
                        <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            PLACE A ORDER
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Description Section */}
                <div className="bg-white rounded shadow-lg p-3 mt-6 w-full">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-600">
                    {description}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
