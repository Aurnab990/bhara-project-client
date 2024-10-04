import React from 'react';

const categories = [
    { name: 'Cameras', icon: '📷' },
    { name: 'Laptops', icon: '💻' },
    { name: 'Furniture', icon: '🛋️' },
    { name: 'Bikes', icon: '🚲' },
    { name: 'Books', icon: '📚' },
    { name: 'Watches', icon: '⌚' },
    { name: 'Phones', icon: '📱' },
    { name: 'Drones', icon: '🚁' },
    { name: 'Clothes', icon: '👕' },
    { name: 'Headphones', icon: '🎧' },
    { name: 'Musical Instruments', icon: '🎸' },
    { name: 'Projectors', icon: '📽️' },
    { name: 'Games', icon: '🎮' },
    { name: 'TV', icon: '📺' },
    { name: 'Tools', icon: '🛠️' },
    { name: 'Tents', icon: '⛺' },
    { name: 'Gym Equipment', icon: '🏋️' },
    { name: 'Cookware', icon: '🍳' },
    { name: 'Speakers', icon: '🔊' },
    { name: 'Printers', icon: '🖨️' },
];

const CatagorySection = () => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-10">
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out transform bg-white border border-gray-200 rounded-full shadow hover:scale-110 hover:bg-gray-100"
                    >
                        <div className="text-4xl mb-2">{category.icon}</div>
                        <div className="text-sm font-medium">{category.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatagorySection;
