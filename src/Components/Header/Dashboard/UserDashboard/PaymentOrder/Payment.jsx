import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Hook to navigate programmatically
    const order = location.state?.order || JSON.parse(localStorage.getItem('order'));
    // console.log(location.state);
    const [transactionId, setTransactionId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    if (!order) {
        return <p className="text-center text-red-500">Order data not found!</p>;
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload

        // Send transaction ID to the server
        fetch(`https://bhara-project-server.onrender.com/orders/transaction/${order._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transactionNumber: transactionId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to update transaction');
                }
                return response.json();
            })
            .then((data) => {
                setSuccessMessage('Payment successful!');
                setTransactionId(''); // Clear the input field
                console.log(data);

                // Redirect to dashboard after successful payment
                setTimeout(() => {
                    navigate('/user/dashboard'); // Adjust the path to your dashboard route
                }, 2000); // Wait 2 seconds before redirecting to show success message
            })
            .catch((error) => {
                console.error('Error updating transaction:', error);
                setErrorMessage('Failed to process payment. Please try again.');
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Payment Page</h1>
                <div className="text-center bg-gray-100 py-3 px-5 rounded-lg shadow-inner mb-6">
                    <p className="text-gray-800 font-semibold text-lg">bKash Payment Number</p>
                    <p className="text-purple-600 font-bold text-xl">
                        {import.meta.env.VITE_BKASH_PAYMENT || '017XXXXXXXX'}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-lg font-medium text-gray-800">Order Details:</p>
                    <p>
                        <strong>Product Name:</strong> {order.productName}
                    </p>
                    <p>
                        <strong>Price:</strong> ৳{order.price}
                    </p>
                    <p>
                        <strong>Rental Days:</strong> {order.rentalDay}
                    </p>
                    <p>
                        <strong>Total Amount:</strong> ৳{order.price * order.rentalDay}
                    </p>
                </div>

                {/* Transaction Input Form */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="transactionId" className="block text-gray-700 font-medium mb-2">
                        Transaction ID
                    </label>
                    <input
                        type="text"
                        id="transactionId"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter Transaction ID"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 shadow-lg transition duration-300"
                    >
                        Submit Payment
                    </button>
                </form>

                {/* Success and Error Messages */}
                {successMessage && <p className="text-center text-green-500 mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-center text-red-500 mt-4">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Payment;
