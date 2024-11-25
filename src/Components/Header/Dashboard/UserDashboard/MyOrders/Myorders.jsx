import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import Usersidebar from '../../UserSIdeBar/Usersidebar';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useAuth(); // Get the logged-in user
    const [orders, setOrders] = useState([]); // State for storing orders
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        // Fetch orders only if the user is logged in
        if (user?.email) {
            fetch(`https://bhara-project-server.onrender.com/orders/user/${user.email}`) // Fetch orders for the specific user
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch orders'); // Handle HTTP errors
                    }
                    return res.json();
                })
                .then((data) => {
                    setOrders(data);
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch((err) => {
                    console.error('Failed to fetch orders', err);
                    setLoading(false); // Set loading to false on error
                });
        }
    }, [user?.email]); // Dependency on user.email

    // Handle payment click
    const handlePaymentClick = (order) => {
        // Check if payment is already made within 2 days
        const currentDate = new Date();
        const paymentDate = new Date(order.paymentDate); // Assuming paymentDate is in the order data

        const timeDifference = currentDate - paymentDate;
        const daysDifference = timeDifference / (1000 * 3600 * 24); // Convert time difference to days

        if (daysDifference < 2) {
            alert('You cannot make a payment within 2 days of your last payment.');
        } else {
            // Navigate to the payment page or open a modal
            alert(`Proceed to payment for Order ID: ${order._id}`);
        }
    };

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
                                    <p className="text-gray-600">
                                        <strong>Price:</strong> ৳{order.price}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Rental Days:</strong> {order.rentalDay}
                                    </p>
                                </div>

                                {/* Order Status */}
                                <div className="mb-4">
                                    <p
                                        className={`text-lg font-semibold ${
                                            order.status === 'pending'
                                                ? 'text-red-500'
                                                : order.status === 'accepted'
                                                ? 'text-green-500'
                                                : 'text-gray-500'
                                        }`}
                                    >
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </p>
                                    {order.status === 'accepted' && order.acceptedAt && (
                                        <p className="text-green-500">
                                            Accepted on: {new Date(order.acceptedAt).toLocaleString()}
                                        </p>
                                    )}
                                </div>

                                {/* Payment Section */}
                                {order.status === 'accepted' && (
                                    <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        {order.transactionNumber ? (
                                            // If transactionNumber exists, show 'Paid' message
                                            <p className="text-sm font-medium text-green-700">Paid</p>
                                        ) : (
                                            // If no transaction number, show the Pay Now button
                                            <>
                                                <p className="text-sm font-medium text-gray-700 mb-2">
                                                    Your order is accepted. Please proceed with the payment of{' '}
                                                    <strong>৳{order.price * order.rentalDay}</strong>.
                                                </p>
                                                <Link to={`/user/orders/transaction/${order._id}`} state={{ order }}>
                                                <button
                                                    
                                                    className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                                                >
                                                    Pay Now
                                                </button>
                                                </Link>
                                            </>
                                        )}
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

export default MyOrders;
