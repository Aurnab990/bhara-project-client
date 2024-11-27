import React, { useState, useEffect, useRef } from 'react';
import '../../Layouts/Navbar/Navbar.css';
import logo from '../../assets/logo.jpg';
import blankAvatar from '../../assets/avator-img.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Bharaanimation from '../LogoAnimation/Bharaanimation';

const Navbar = () => {
    const { user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowNavbar(scrollTop < lastScrollTop.current);
            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="bg-white border-2">
                <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="/"
                            aria-label="bhara.com"
                            title="bhara.com"
                            className="inline-flex items-center"
                        >
                            <img src={logo} alt="bhara.com logo" className="w-34 h-12" />
                            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                <Bharaanimation />
                            </span>
                        </a>

                        {/* Navbar Links */}
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/premium-member"
                                    aria-label="Premium membership"
                                    title="Premium membership"
                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Premium
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/support"
                                    aria-label="Help & Support"
                                    title="Help & Support"
                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Help & Support
                                </Link>
                            </li>
                            {user ? (
                                <Link to="/user/dashboard" className="relative flex items-center space-x-4">
                                    <img
                                        src={user?.photoURL || blankAvatar}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-gray-300"
                                        title="User Profile"
                                    />
                                </Link>
                            ) : (
                                <Link to="/sign-in">
                                    <li>
                                        <a
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Sign up"
                                        >
                                            Give Rent
                                        </a>
                                    </li>
                                </Link>
                            )}
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
                    <ul className="flex flex-col items-start space-y-4 px-4 py-4">
                        <li>
                            <Link
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                className="block text-gray-800 font-medium transition-colors duration-200 hover:text-teal-500"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/premium-member"
                                aria-label="Premium membership"
                                title="Premium membership"
                                className="block text-gray-800 font-medium transition-colors duration-200 hover:text-teal-500"
                            >
                                Premium
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/support"
                                aria-label="Help & Support"
                                title="Help & Support"
                                className="block text-gray-800 font-medium transition-colors duration-200 hover:text-teal-500"
                            >
                                Help & Support
                            </Link>
                        </li>
                        {user ? (
                            <li>
                                <Link
                                    to="/user/dashboard"
                                    className="flex items-center space-x-4"
                                >
                                    <img
                                        src={user?.photoURL || blankAvatar}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-gray-300"
                                    />
                                    <span className="text-gray-800 font-medium">Dashboard</span>
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    to="/sign-in"
                                    className="block w-full text-center bg-purple-600 text-white font-medium py-2 rounded-md transition-colors duration-200 hover:bg-purple-700"
                                >
                                    Give Rent
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
