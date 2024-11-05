import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import Usersidebar from '../../UserSIdeBar/Usersidebar';


const Manageorder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://bhara-project-server.onrender.com/orders/provider/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                })
                .catch(err => {
                    console.error('Failed to fetch orders', err);
                });
        }
    }, [user?.email]);

    // Function to handle accept order
    const handleAccept = (orderId) => {
        fetch(`https://bhara-project-server.onrender.com/orders/${orderId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'accepted' }), // Send status in the request body
        })
        .then(res => res.json())
        .then(() => {
            setOrders(orders.map(order =>
                order._id === orderId ? { ...order, status: 'accepted',acceptedAt: new Date() } : order
            ));
        })
        .catch(err => console.error('Failed to accept order', err));
    };
    
    // Function to handle decline order
    const handleDecline = (orderId) => {
        fetch(`https://bhara-project-server.onrender.com/orders/${orderId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'declined' }), // Send status in the request body
        })
        .then(res => res.json())
        .then(() => {
            setOrders(orders.map(order =>
                order._id === orderId ? { ...order, status: 'declined' } : order
            ));
        })
        .catch(err => console.error('Failed to decline order', err));
    };

    // Function to return dot color based on order status
    const getStatusDotColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-red-500';
            case 'accepted':
                return 'bg-green-500';
            case 'declined':
                return 'bg-gray-500';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {/* Sidebar */}
            <Usersidebar />

            {/* Main content */}
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Manage Your Offers</h1>

                {orders.length === 0 ? (
                    <p className="text-center text-gray-500">No orders found for you.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orders.map((order) => (
                            <div key={order._id} className="relative p-6 bg-white shadow-md rounded-lg">
                                
                                {/* Status Dot */}
                                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${getStatusDotColor(order.status)}`} />

                                {/* Product Info */}
                                <div className="mb-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{order.productName}</h2>
                                    <p className="text-gray-600"><strong>Suugested Price:</strong> ৳{order.price}</p>
                                    <p className="text-gray-600"><strong>Rental Days:</strong> {order.rentalDay}</p>
                                </div>

                                {/* Client Info */}
                                <div className="mb-4">
                                    <p className="text-gray-600"><strong>Client Email:</strong> {order.orderEmail}</p>
                                    <p className="text-gray-600"><strong>Phone:</strong> {order.orderPhone}</p>
                                </div>

                                {/* Order Status */}
                                <div className="mb-4">
                                    {/* Null check for order.status */}
                                    {order.status ? (
                                        <p className={`text-lg font-semibold ${order.status === 'pending' ? 'text-yellow-500' : order.status === 'accepted' ? 'text-green-500' : 'text-red-500'}`}>
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </p>
                                    ) : (
                                        <p className="text-lg font-semibold text-gray-500">Unknown Status</p>
                                    )}
                                </div>

                                {/* Accept/Decline Buttons */}
                                {order.status === 'pending' && (
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleAccept(order._id)}
                                            className="w-full px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleDecline(order._id)}
                                            className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                                        >
                                            Decline
                                        </button>
                                    </div>
                                )}

                                {/* Show accepted/declined status */}
                                {order.status === 'accepted' && (
                                    <p className="mt-4 text-green-500 font-semibold text-center">Order Accepted</p>
                                )}
                                {order.status === 'declined' && (
                                    <p className="mt-4 text-red-500 font-semibold text-center">Order Declined</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Manageorder;
