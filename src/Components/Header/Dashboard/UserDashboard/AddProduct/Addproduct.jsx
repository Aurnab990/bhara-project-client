import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import { toast, ToastContainer} from 'react-toastify';
import Usersidebar from '../../UserSIdeBar/Usersidebar';

const AddProduct = () => {
    const {user} = useAuth();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userEmail = user?.email; // Get logged-in user's email
        if (userEmail) {
            fetch(`https://bhara-project-server.onrender.com/users?email=${userEmail}`) // Pass email as query param
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setUserName(data.name); // Set the user's name
                    }
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [user]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = user?.email;
        const productName = form.productName.value;
        const price = form.price.value;
        const category = form.category.value;
        const rentalDay = form.days.value;
        const phone = form.phoneNumber.value;
        const road = form.road.value;
        const thana = form.thana.value;
        const zila = form.zila.value;
        const district = form.district.value;
        const description = form.description.value;
        const image = form.productImage.value;
        // console.log(usersName)

        const item = {userName,userEmail,productName,price,category,rentalDay,phone,road,thana,zila,district,description,image}

        fetch('https://bhara-project-server.onrender.com/products', {
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
            toast.success("New Product Added For Rent");
        })
        .catch(error => {
            toast.error('Failed to add. Please try again.');
        });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row font-poppins">
            <ToastContainer></ToastContainer>
            {/* Sidebar */}
            <Usersidebar />

            {/* Main content */}
            <div className="w-full lg:w-4/5 bg-gray-100 p-8 lg:mt-2">
                <h2 className="text-4xl font-bold text-orange-500 text-center mb-8">Add New Product</h2>

                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    {/* First Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {/* Product Name */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Product Name</label>
                            <input
                                name="productName"
                                type="text"
                                placeholder="Enter product name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Price</label>
                            <input
                                name="price"
                                type="text"
                                placeholder="Enter price"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        {/* Number of Days */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Number of Days</label>
                            <input
                                name="days"
                                type="number"
                                placeholder="Number of days to rent"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Your Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="text"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Category</label>
                            <select
                                name="category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select category</option>
                                <option value="bicycle">Bicycle</option>
                                <option value="motorbike">Motorbike</option>
                                <option value="book">Book</option>
                                <option value="car">Car</option>
                                <option value="laptop">Laptop</option>
                                <option value="calculator">Calculator</option>
                            </select>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                    <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Road</label>
                            <input
                                name="road"
                                type="text"
                                placeholder="Enter Road"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        {/* Thana */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Thana</label>
                            <input
                                name="thana"
                                type="text"
                                placeholder="Enter Thana"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Zila */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Zila</label>
                            <input
                                name="zila"
                                type="text"
                                placeholder="Enter Zila"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* District */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">District</label>
                            <input
                                name="district"
                                type="text"
                                placeholder="Enter District"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Fourth Row: Description and Product Image */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {/* Description */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                placeholder="Describe your product in points (e.g., bullet points)"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="5"
                                required
                            />
                        </div>

                        {/* Product Image */}
                        <div className="col-span-1">
                            <label className="block text-black-600 font-medium mb-2">Product Image</label>
                            <input
                                name="productImage"
                                type="link"
                                accept="image/*"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
