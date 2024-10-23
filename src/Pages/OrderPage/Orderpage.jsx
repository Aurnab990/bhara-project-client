import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const Orderpage = () => {
    const { user } = useAuth();
    const orderEmail = user?.email;  // Logged-in user email
    const { _id, productName, userEmail: providerEmail, price: defaultPrice, rentalDay: defaultRentalDay, userName } = useLoaderData();

    const [price, setPrice] = useState(defaultPrice);
    const [rentalDay, setRentalDay] = useState(defaultRentalDay);
    const [rentalDate, setRentalDate] = useState('');

    // Check if the logged-in user is the provider of the product
    const isProvider = orderEmail === providerEmail;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isProvider) {
            toast.error('You cannot place an order for your own product.');
            return;
        }

        const form = e.target;
        const orderRoad = form.orderRoad.value;
        const orderThana = form.orderThana.value;
        const orderZila = form.orderZila.value;
        const orderPhone = form.orderPhone.value;

        const orderData = {
            productName,
            price,
            status: "pending",
            rentalDay,
            rentalDate,  // Added rental date to order data
            orderRoad,
            orderThana,
            orderZila,
            orderEmail,
            orderPhone,
            userName,
            providerEmail
        };

        fetch(`https://bhara-project-server.onrender.com/orders`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => response.json())
        .then(data => {
            toast.success("Thanks for Your Order");
        })
        .catch(error => {
            toast.error('Failed to Order. Please try again.');
        });
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <ToastContainer />
            <h1 className="text-2xl font-semibold mb-4 text-center">Place Your Order</h1>

            {isProvider && (
                <p className="text-red-500 font-bold text-center mb-4">
                    You cannot place an order for your own product.
                </p>
            )}

            {/* Order form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row: 2 Columns */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Product Name */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Logged-in User's Email */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Your Email</label>
                        <input
                            type="text"
                            value={orderEmail}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                </div>

                {/* Second Row: 3 Columns */}
                <div className="grid grid-cols-3 gap-4">
                    {/* Address Road */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Road</label>
                        <input
                            type="text"
                            name="orderRoad"
                            className="w-full p-2 border rounded bg-gray-100"
                            required
                            disabled={isProvider}
                        />
                    </div>

                    {/* Address Thana */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Thana</label>
                        <input
                            type="text"
                            name="orderThana"
                            className="w-full p-2 border rounded bg-gray-100"
                            required
                            disabled={isProvider}
                        />
                    </div>

                    {/* Address Zila */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Zila</label>
                        <input
                            type="text"
                            name="orderZila"
                            className="w-full p-2 border rounded bg-gray-100"
                            required
                            disabled={isProvider}
                        />
                    </div>
                </div>

                {/* Third Row: 2 Columns */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Editable Price */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Price (৳ per day)</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                            disabled={isProvider}
                        />
                    </div>

                    {/* Editable Rental Days */}
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Rental Days</label>
                        <input
                            type="number"
                            value={rentalDay}
                            onChange={(e) => setRentalDay(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                            disabled={isProvider}
                        />
                    </div>
                </div>

                {/* Rent Start Date */}
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Rental Start Date</label>
                    <input
                        type="date"
                        value={rentalDate}
                        onChange={(e) => setRentalDate(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                        disabled={isProvider}
                    />
                </div>

                {/* Provider Phone */}
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Your Phone</label>
                    <input
                        name="orderPhone"
                        type="text"
                        className="w-full p-2 border rounded bg-gray-100"
                        disabled={isProvider}
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        disabled={isProvider}
                    >
                        Place Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Orderpage;
