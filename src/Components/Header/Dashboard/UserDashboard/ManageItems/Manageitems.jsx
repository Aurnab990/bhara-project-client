import React, { useEffect, useState } from 'react';
import Usersidebar from '../../UserSIdeBar/Usersidebar';
import useAuth from '../../../../../Hooks/useAuth';

const Manageitems = () => {
    const { user } = useAuth(); // Get the logged-in user's info
    const [products, setProducts] = useState([]);

    // Fetch products data from backend
    useEffect(() => {
        fetch('https://bhara-project-server.vercel.app/products') // Update with your API endpoint
            .then(response => response.json())
            .then(data => {
                // Filter products to only show those added by the logged-in user
                const userProducts = data.filter(product => product.userEmail === user.email);
                setProducts(userProducts);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [user.email]);

    // Handle delete product
    const handleDelete = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            fetch(`https://bhara-project-server.vercel.app/products/${productId}`, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                alert('Product deleted successfully!');
                setProducts(products.filter(product => product._id !== productId));
            })
            .catch(error => console.error('Error deleting product:', error));
        }
    };

    // Handle edit product
    const handleEdit = (productId) => {
        alert('Edit product with ID: ' + productId);
        // You can redirect or show a modal for editing
    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <Usersidebar />

            {/* Main content */}
            <div className="w-full lg:w-5/6 bg-gray-100 p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Manage Items</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 border">Image</th>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Price</th>
                                <th className="px-4 py-2 border">Days</th>
                                <th className="px-4 py-2 border">Description</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id} className="text-center">
                                    {/* Product Image */}
                                    <td className="px-4 py-2 border">
                                        <img
                                            src={product.images[0]} // Assuming the backend provides an image URL
                                            alt={product.productName}
                                            className="w-16 h-16 rounded-full object-cover mx-auto"
                                        />
                                    </td>

                                    {/* Product Name */}
                                    <td className="px-4 py-2 border">{product.productName}</td>

                                    {/* Product Price */}
                                    <td className="px-4 py-2 border">{product.price} BDT</td>

                                    {/* Rental Days */}
                                    <td className="px-4 py-2 border">{product.rentalDay}</td>

                                    {/* Description Snippet */}
                                    <td className="px-4 py-2 border">
                                        {product.description.length > 50 
                                            ? product.description.substring(0, 50) + '...' 
                                            : product.description}
                                    </td>

                                    {/* Edit & Delete Buttons */}
                                    <td className="px-4 py-2 border">
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded-lg mx-1 hover:bg-blue-600 transition"
                                            onClick={() => handleEdit(product._id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg mx-1 hover:bg-red-600 transition"
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageitems;
