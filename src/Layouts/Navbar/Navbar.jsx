import React, { useState, useEffect } from 'react';
import '../../Layouts/Navbar/Navbar.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const {user}= useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <div className={`sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <div className="bg-white border-2">
                <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <a
                            href="/"
                            aria-label="bhara.com"
                            title="bhara.com"
                            className="inline-flex items-center"
                        >
                            <img
                                src={logo}
                                alt="bhara.com logo"
                                className="w-34 h-12"
                            />
                            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                {/* Animating each letter */}
                                <span className="text-red-500 animated-letter">B</span>
                                <span className="text-green-500 animated-letter">H</span>
                                <span className="text-yellow-700 animated-letter">A</span>
                                <span className="text-violet-900 animated-letter">R</span>
                                <span className="text-black animated-letter">A</span>
                                <span className="text-red-500 animated-letter">.</span>
                                <span className="text-green-800 animated-letter">C</span>
                                <span className="text-blue-600 animated-letter">O</span>
                                <span className="text-sky-900 animated-letter">M</span>
                            </span>
                        </a>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to={"/"}
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </Link>
                            </li>
                            
                            <li>
                                <a
                                    href="/"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Premium
                                </a>
                            </li>
                            <li>
                                <Link
                                    to={"/support"}
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Help & Support
                                </Link>
                            </li>
                           
                            {
                                user?
                                <Link to={"/user/dashboard"}>
                            <li>
                                <a
                                   
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Dashboard
                                </a>
                            </li>
                            </Link>
                            :
                            <Link to={"/sign-in"}>
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
                            }
                        </ul>
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
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
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-label="bhara.com"
                                                    title="bhara.com"
                                                    className="inline-flex items-center"
                                                >
                                                    <img
                                                        src={logo}
                                                        alt="bhara.com logo"
                                                        className="w-8"
                                                    />
                                                    <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                                        {/* Animating each letter */}
                                                        <span className="text-red-500 animated-letter">B</span>
                                                        <span className="text-green-500 animated-letter">H</span>
                                                        <span className="text-yellow-700 animated-letter">A</span>
                                                        <span className="text-violet-900 animated-letter">R</span>
                                                        <span className="text-black animated-letter">A</span>
                                                        <span className="text-red-500 animated-letter">.</span>
                                                        <span className="text-green-800 animated-letter">C</span>
                                                        <span className="text-blue-600 animated-letter">O</span>
                                                        <span className="text-sky-900 animated-letter">M</span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link
                                                        to={"/"}
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Premium
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"/support"}
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Help & Support
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Contact
                                                    </a>
                                                </li>
                                                
                                                {
                                                    user?
                                                    <Link to={"/user/dashboard"}>
                                                <li>
                                                    <a
                                                        
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Dashboard
                                                    </a>
                                                </li>
                                                </Link>
                                                :
                                                <Link to={"/sign-in"}>
                                                <li>
                                                    <a
                                                        
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Give Rent
                                                    </a>
                                                </li>
                                                </Link>
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
