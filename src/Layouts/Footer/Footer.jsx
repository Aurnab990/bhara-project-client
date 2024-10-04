import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap mb-8">
                    {/* Contact Information */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="mailto:nirobaurnab@gmail.com" className="hover:underline">bhara@gmail.com</a>
                            </li>
                            <li className="mb-2">
                                <a href="tel:+880123456789" className="hover:underline">+880 123 456 789</a>
                            </li>
                            <li className="mb-2">
                                <p>123 Main Street, Dhaka, Bangladesh</p>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#home" className="hover:underline">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="hover:underline">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#products" className="hover:underline">All Products</a>
                            </li>
                            <li className="mb-2">
                                <a href="#faq" className="hover:underline">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12.07C22 6.19 17.81 2 12 2S2 6.19 2 12.07C2 17.57 6.28 22 12 22c.79 0 1.56-.08 2.32-.23V14.89H9.74v-2.69h4.58v-2.09c0-4.45 2.66-6.83 6.48-6.83 1.85 0 3.45.14 3.92.21v4.55h-2.69c-2.65 0-3.15 1.26-3.15 3.09v1.87h5.29l-.74 2.69h-4.55V21.8C19.16 21.93 18.38 22 17.6 22c-5.43 0-9.8-4.33-9.8-9.93s4.37-9.93 9.8-9.93c5.43 0 9.8 4.33 9.8 9.93z"></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 3a10.8 10.8 0 01-3.12.87A4.82 4.82 0 0022.4 2a9.64 9.64 0 01-3.1 1.18A4.8 4.8 0 0016.5.5a4.8 4.8 0 00-4.79 4.8c0 .38.04.76.1 1.12-4.04-.2-7.63-2.1-10.03-5a4.78 4.78 0 00-.65 2.4c0 1.66.84 3.12 2.1 3.98a4.8 4.8 0 01-2.18-.6v.06c0 2.32 1.66 4.25 3.88 4.69a4.82 4.82 0 01-2.17.08c.61 1.9 2.38 3.29 4.47 3.33A9.6 9.6 0 010 20.5a13.57 13.57 0 007.55 2.2c9.06 0 14.02-7.5 14.02-14.02 0-.21 0-.42-.02-.62A10.15 10.15 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.6 2H16.4c2.4 0 4.4 2 4.4 4.4v11.2c0 2.4-2 4.4-4.4 4.4H7.6c-2.4 0-4.4-2-4.4-4.4V6.4C3.2 4 5.2 2 7.6 2zm8.6 2.4h-1.6v.8h1.6v-.8zm-3.6 1.6c-1.6 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3-1.4-3-3-3zm0 4.8c-.8 0-1.6-.8-1.6-1.6s.8-1.6 1.6-1.6 1.6.8 1.6 1.6-.8 1.6-1.6 1.6zm4.8-4.8c.8 0 1.6-.8 1.6-1.6s-.8-1.6-1.6-1.6-1.6.8-1.6 1.6.8 1.6 1.6 1.6zm0 0h-1.6v-.8h1.6v.8z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
                        <p className="mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
                        <form action="#" method="POST">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 mb-4 rounded-md border border-gray-600 bg-gray-900 text-white placeholder-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 mt-8">
                    <p>&copy; 2024 Bhara.com . All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
