import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';

const Premium = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-gray-100 py-10 px-4">
            {/* Header Section */}
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-deep-purple-accent-400 mb-4">
                    WORKING...
                </h1>
                <p className="text-gray-600">
                    Unlock exclusive features and enhance your experience.
                </p>
            </header>

            {/* Membership Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Plan 1 */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h2>
                    <p className="text-gray-600 mb-6">
                        Access essential features and enjoy priority support.
                    </p>
                    <p className="text-4xl font-bold text-deep-purple-accent-400 mb-4">
                        $9.99<span className="text-sm text-gray-500">/month</span>
                    </p>
                    <button className="w-full px-6 py-3 text-white bg-deep-purple-accent-400 rounded-md hover:bg-deep-purple-accent-700 transition">
                        Choose Basic
                    </button>
                </div>

                {/* Plan 2 */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-deep-purple-accent-400">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro</h2>
                    <p className="text-gray-600 mb-6">
                        Unlock advanced tools and premium support.
                    </p>
                    <p className="text-4xl font-bold text-deep-purple-accent-400 mb-4">
                        $19.99<span className="text-sm text-gray-500">/month</span>
                    </p>
                    <button className="w-full px-6 py-3 text-white bg-deep-purple-accent-400 rounded-md hover:bg-deep-purple-accent-700 transition">
                        Choose Pro
                    </button>
                </div>

                {/* Plan 3 */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ultimate</h2>
                    <p className="text-gray-600 mb-6">
                        Get all features and dedicated personal support.
                    </p>
                    <p className="text-4xl font-bold text-deep-purple-accent-400 mb-4">
                        $29.99<span className="text-sm text-gray-500">/month</span>
                    </p>
                    <button className="w-full px-6 py-3 text-white bg-deep-purple-accent-400 rounded-md hover:bg-deep-purple-accent-700 transition">
                        Choose Ultimate
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="text-center mt-10 text-gray-500">
                <p>
                    Have questions? <a href="/support" className="text-deep-purple-accent-400 hover:underline">Contact Support</a>
                </p>
            </footer>
        </div>
        </div>
    );
};

export default Premium;
