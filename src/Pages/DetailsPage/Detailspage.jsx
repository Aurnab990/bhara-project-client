import React from 'react';
import { MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'; // Icons for location and verification
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';

const ProductDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row max-w-full mx-auto">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full md:w-1/2 mb-4 lg:mt-12 md:mb-0">
                        <img 
                            src="https://www.zdnet.com/a/img/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/apple-macbook-pro-m1-2020-5.jpg" 
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
                                        <td className="py-2 px-4 border-b">Product Name</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Price</td>
                                        <td className="py-2 px-4 border-b">
                                            <span className="text-blue-600 font-bold">৳800.00</span>
                                            <span className="line-through text-gray-500 ml-2">৳1000.00</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Discount</td>
                                        <td className="py-2 px-4 border-b">20%</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Provider</td>
                                        <td className="py-2 px-4 border-b">Provider Name</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Address</td>
                                        <td className="py-2 px-4 border-b flex items-center">
                                            <MapPinIcon className="h-5 w-5 text-gray-600 mr-1" />
                                            Dhaka, Bangladesh
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b font-medium">Phone</td>
                                        <td className="py-2 px-4 border-b">01322565368</td>
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
                                                defaultValue={1}
                                                className="border border-gray-300 rounded-lg px-2 py-1 w-20"
                                                min="1"
                                                max="30"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                            RENT NOW
                        </button>
                    </div>
                </div>

                {/* Description Section */}
                <div className="bg-white rounded shadow-lg p-3 mt-6 w-full">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-600">
                    Key Features of This Design
Modern Layout: The product image is displayed prominently alongside the product details, creating a visually appealing layout.
Clear Information Hierarchy: The use of different font sizes and colors helps to establish a clear hierarchy of information, making it easy for users to scan and find what they need.
Stylish Button: The "RENT NOW" button stands out, encouraging users to take action.
Responsive Design: The layout adjusts nicely on smaller screens, maintaining usability without sacrificing aesthetics.
How to Use
Component: Integrate the ProductDetails component into your application where you want to display product details.
Styles: Make sure to include the CSS styles in your global stylesheet or import them accordingly.
Feel free to modify colors, margins, and font sizes to match your design vision! Let me know if you’d like any further adjustments.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
