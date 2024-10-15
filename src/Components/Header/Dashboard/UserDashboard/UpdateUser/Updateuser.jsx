import React, { useState } from 'react';
import Usersidebar from '../../UserSIdeBar/Usersidebar';
import useAuth from '../../../../../Hooks/useAuth';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {user} = useAuth();
    const {id} = useParams();
    console.log(id);
    const email=user?.email;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const phone = form.phone.value;
        const thana = form.thana.value;
        const zila = form.zila.value;
        const district = form.district.value;

        const userData = {name,email,phone,title,thana,zila,district}
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Update Successfully", data);
                e.target.reset();

            })
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <Usersidebar />

            {/* Main content */}
            <div className="flex-1 flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Update Your Information</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter full name"
                                    
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Title Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder="Enter job title"
                                    
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Phone Number</label>
                                <input
                                    name="phone"
                                    type="text"
                                    placeholder="Enter phone number"
                                    
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Thana Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Thana</label>
                                <input
                                    name="thana"
                                    type="text"
                                    placeholder="Enter Thana"
                                    
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Zila Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">Zila</label>
                                <input
                                    name="zila"
                                    type="text"
                                    placeholder="Enter Zila"
                                    
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* District Input */}
                            <div>
                                <label className="block text-gray-600 font-medium mb-2">District</label>
                                <input
                                    name="district"
                                    type="text"
                                    placeholder="Enter District"
                                    
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
