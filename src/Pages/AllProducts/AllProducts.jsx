import React, { useState } from 'react';

const allProducts = [
    // Your product data remains the same
    { name: 'Canon DSLR Camera', image: 'https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D', price: 500, category: 'Electronics', reviews: '★★★★★ (120 reviews)' },
    { name: 'MacBook Pro', image: 'https://www.zdnet.com/a/img/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/apple-macbook-pro-m1-2020-5.jpg', price: 1500, category: 'Electronics', reviews: '★★★★☆ (89 reviews)' },
    { name: 'Leather Sofa', image: 'https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/HATIL%20Sofa%20Set%20Hyperbole-317%20(1%2B2%2B2%20Seat)2.jpg', price: 800, category: 'Furniture', reviews: '★★★★☆ (65 reviews)' },
    { name: 'Mountain Bike', image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg', price: 350, category: 'Sports', reviews: '★★★★★ (180 reviews)' },
    { name: 'Noise Cancelling Headphones', image: 'https://www.travelandleisure.com/thmb/fZjYRxxxi98bqT54xeuuKEXGNGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AL-bose-noise-canceling-headphones-700-tamara-staples-social-d4972f992b66448896dcebc85ec550f4.jpg', price: 200, category: 'Electronics', reviews: '★★★★☆ (45 reviews)' },
    { name: 'Smart TV', image: 'https://wholesaleelectronics.com.bd/wp-content/uploads/2024/08/md08001872-DZ02-jpg.jpg', price: 1200, category: 'Electronics', reviews: '★★★★☆ (98 reviews)' },
    { name: 'Electric Guitar', image: 'https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_eu.jpg', price: 700, category: 'Music', reviews: '★★★★★ (150 reviews)' },
    { name: 'Gaming Console', image: 'https://cdn.thewirecutter.com/wp-content/media/2023/05/gamingconsoles-2048px-00730-3x2-1.jpg', price: 400, category: 'Electronics', reviews: '★★★★☆ (110 reviews)' },
    { name: 'Kitchen Appliances', image: 'https://img.taste.com.au/dD_Vt3rc/taste/2022/08/best-appliances-to-leave-on-benchtop-180819-2.jpg', price: 250, category: 'Home', reviews: '★★★★☆ (75 reviews)' },
    { name: 'Office Chair', image: 'https://afrashopbd.com/public/storage/images/products/product_1723483062_4760.jpg', price: 150, category: 'Furniture', reviews: '★★★★★ (210 reviews)' },
    // More products can be added here
];

const itemsPerPage = 10;

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [currentPage, setCurrentPage] = useState(1);

    const categories = [...new Set(allProducts.map(product => product.category))];

    const handleSearch = () => {
        const filtered = allProducts.filter(product => {
            const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesPrice = (minPrice === '' || product.price >= minPrice) && (maxPrice === '' || product.price <= maxPrice);
            const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
            return matchesName && matchesPrice && matchesCategory;
        });
        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to first page on new search
    };

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Sidebar (1/3 width) */}
                <div className="md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Filters</h3>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />
                    <button
                        onClick={handleSearch}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-600"
                    >
                        Search
                    </button>
                </div>

                {/* Products Grid (2/3 width) */}
                <div className="md:col-span-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {currentProducts.map((product, index) => (
                        <div 
                            key={index}
                            className="p-4 transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{product.name.split(' ').slice(0, 2).join(' ')}</h3>
                            <p className="text-gray-700 font-bold mb-2">৳{product.price} per day</p>
                            <p className="text-yellow-500 mb-4">{product.reviews}</p>
                            <button className="px-4 py-2 bg-white font-semibold text-black rounded-lg transition-colors duration-300 hover:bg-orange-600 hover:text-white border-2">
                                RENT NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center space-x-2">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-600 disabled:bg-gray-400"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border rounded-lg transition-colors duration-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-400 hover:text-white`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors duration-300 hover:bg-blue-600 disabled:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllProducts;
