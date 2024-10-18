import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import Usersidebar from '../../UserSIdeBar/userSidebar';

const MyOrders = () => {
    const { user } = useAuth(); // Get the logged-in user
    const [orders, setOrders] = useState([]); // State for storing orders
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        // Fetch orders only if the user is logged in
        if (user?.email) {
            fetch(`http://localhost:3000/orders/user/${user.email}`) // Fetch orders for the specific user
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch orders'); // Handle HTTP errors
                    }
                    return res.json();
                })
                .then(data => {
                    setOrders(data);
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch(err => {
                    console.error('Failed to fetch orders', err);
                    setLoading(false); // Set loading to false on error
                });
        }
    }, [user?.email]); // Dependency on user.email

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {/* Sidebar */}
            <Usersidebar />

            {/* Main content */}
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Orders</h1>

                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : orders.length === 0 ? (
                    <p className="text-center text-gray-500">No orders found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orders.map((order) => (
                            <div key={order._id} className="relative p-6 bg-white shadow-md rounded-lg">
                                {/* Product Info */}
                                <div className="mb-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{order.productName}</h2>
                                    <p className="text-gray-600"><strong>Price:</strong> ৳{order.price}</p>
                                    <p className="text-gray-600"><strong>Rental Days:</strong> {order.rentalDay}</p>
                                </div>

                                {/* Client Info */}
                                <div className="mb-4">
                                    <p className="text-gray-600"><strong>Client Email:</strong> {order.orderEmail}</p>
                                    <p className="text-gray-600"><strong>Phone:</strong> {order.orderPhone}</p>
                                </div>

                                {/* Order Status */}
                                <div className="mb-4">
                                    <p className={`text-lg font-semibold ${order.status === 'pending' ? 'text-yellow-500' : order.status === 'accepted' ? 'text-green-500' : 'text-red-500'}`}>
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
