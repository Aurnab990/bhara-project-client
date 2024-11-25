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
                .then(data => setOrders(data))
                .catch(err => console.error('Failed to fetch orders', err));
        }
    }, [user?.email]);

    const handleAccept = (orderId) => {
        fetch(`https://bhara-project-server.onrender.com/orders/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'accepted' }),
        })
            .then(res => res.json())
            .then(() => {
                setOrders(orders.map(order =>
                    order._id === orderId ? { ...order, status: 'accepted', acceptedAt: new Date() } : order
                ));
            })
            .catch(err => console.error('Failed to accept order', err));
    };

    const handleDecline = (orderId) => {
        fetch(`https://bhara-project-server.onrender.com/orders/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'declined' }),
        })
            .then(res => res.json())
            .then(() => {
                setOrders(orders.map(order =>
                    order._id === orderId ? { ...order, status: 'declined' } : order
                ));
            })
            .catch(err => console.error('Failed to decline order', err));
    };

    const getStatusStyles = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-500 text-yellow-900';
            case 'accepted':
                return 'bg-green-500 text-green-900';
            case 'declined':
                return 'bg-red-500 text-red-900';
            default:
                return 'bg-gray-300 text-gray-900';
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
            <Usersidebar />
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Manage Your Offers</h1>

                {orders.length === 0 ? (
                    <p className="text-center text-gray-500">No orders found for you.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="relative p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles(order.status)}`}>
                                    {order.status?.toUpperCase()}
                                </div>

                                <h2 className="text-lg font-semibold mb-2">{order.productName}</h2>
                                <p className="text-sm text-gray-600 mb-1">
                                    <strong>Suggested Price:</strong> ৳ {order.price}
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    <strong>Rental Days:</strong> {order.rentalDay}
                                </p>

                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-sm text-gray-600">
                                        <strong>Client Email:</strong> {order.orderEmail}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Phone:</strong> {order.orderPhone}
                                    </p>
                                </div>

                                {/* Show payment status if available */}
                                {order.transactionNumber ? (
                                    <div className="mt-4 text-green-600 font-semibold">
                                        <p>Paid</p>
                                    </div>
                                ) : (
                                    <div className="mt-4 text-red-600 font-semibold">
                                        <p>Payment Pending</p>
                                    </div>
                                )}

                                {/* Accept/Decline buttons */}
                                {order.status === 'pending' && (
                                    <div className="mt-4 flex space-x-4">
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

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Manageorder;
