import React, { useState } from 'react';
import Singleitem from '../SingleProduct/Singleitem';

const Allitems = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [location, setLocation] = useState('');
    const [rentalDays, setRentalDays] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    // Function to filter items based on search fields
    const handleSearch = () => {
        const filtered = items.filter(item => {
            const matchesSearchTerm = item.productName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = item.category.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesLocation = item.thana.toLowerCase().includes(location.toLowerCase());
            const matchesRentalDays = rentalDays === '' || item.rentalDay.toString() === rentalDays;
            const matchesPrice = (!minPrice || item.price >= parseInt(minPrice)) && (!maxPrice || item.price <= parseInt(maxPrice));

            return (matchesSearchTerm || matchesCategory) && matchesLocation && matchesPrice && matchesRentalDays;
        });

        setFilteredItems(filtered);
    };

    return (
        <div className="mt-8 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen px-4 py-8">
            <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800 font-poppins tracking-wide">
                Explore Premium Products
            </h1>

            {/* Search Fields */}
            <div className="flex flex-col items-center mb-10 space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
                {/* Name or Category Search */}
                <input
                    type="text"
                    placeholder="Search by name or category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-lg w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />

                {/* Location Search */}
                <input
                    type="text"
                    placeholder="Location (Thana)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-lg w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />

                {/* Price Range */}
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-lg w-28 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-lg w-28 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />

                {/* Rental Days */}
                <input
                    type="number"
                    placeholder="Rental Days"
                    value={rentalDays}
                    onChange={(e) => setRentalDays(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg shadow-lg w-36 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                    Search
                </button>
            </div>

            {/* Product Grid */}
            <div className="md:col-span-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => <Singleitem key={item._id} item={item} />)
                ) : (
                    <p className="text-center text-gray-500 text-lg">No products found matching your criteria</p>
                )}
            </div>
        </div>
    );
};

export default Allitems;
