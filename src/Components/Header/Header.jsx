import React from 'react';

const Header = () => {
    return (
        <div className="header bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-[60vh] flex items-center text-white relative overflow-hidden px-8">
            {/* Content Section (2fr) */}
            <div className="w-2/3 space-y-6 z-10">
                <h1 className="text-5xl md:text-6xl font-bold drop-shadow-md">
                    Rent & Share<br />
                    <span className="text-yellow-300">Your Products</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-100 drop-shadow-md max-w-xl">
                    Seamlessly connect to rent or offer products with the best services. Empower your resources with trust and quality.
                </p>
                
            </div>

            {/* Visual Section (1fr) */}
            <div className="w-1/3 relative flex justify-center items-center z-10">
                {/* 3D Visual */}
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-tr from-yellow-400 via-red-400 to-purple-500 shadow-lg flex justify-center items-center">
                    <div className="w-60 h-60 bg-white rounded-full flex justify-center items-center">
                        <div className="w-48 h-48 bg-purple-400 rounded-full"></div>
                    </div>
                </div>
                {/* Floating Effects */}
                <div className="absolute top-10 left-8 w-20 h-20 bg-pink-300 rounded-full opacity-70 blur-xl animate-pulse"></div>
                <div className="absolute bottom-12 right-8 w-24 h-24 bg-yellow-300 rounded-full opacity-80 blur-xl animate-spin-slow"></div>
            </div>
        </div>
    );
};

export default Header;
