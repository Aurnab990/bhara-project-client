import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { ChartBarIcon, CogIcon, HomeIcon, UserIcon, BellIcon } from '@heroicons/react/16/solid';
import { ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

const Usersidebar = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // State for toggling menu

    const handleLogout = () => {
        logOut();
        navigate("/");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <div className="lg:w-1/5 bg-gray-800 text-white">
            {/* Burger Menu Button for Mobile */}
            <div className="lg:hidden p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button onClick={toggleMenu} className="focus:outline-none">
                    {/* Conditional rendering of burger or close icon */}
                    {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                </button>
            </div>

            {/* Sidebar Menu */}
            <div className={`lg:block ${isOpen ? 'block' : 'hidden'} lg:relative absolute top-0 left-0 w-full lg:w-auto bg-gray-800 transition-all duration-300 ease-in-out`}>
                <ul className="space-y-4 p-6 lg:p-0 lg:pt-6">
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <HomeIcon className="h-6 w-6 mr-3" />
                        <Link to={"/user/dashboard"} href="#home" className="block">Home</Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <UserIcon className="h-6 w-6 mr-3" />
                        <Link to={"/user/profile"} className="block">Profile</Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <CogIcon className="h-6 w-6 mr-3" />
                        <a href="#settings" className="block">Settings</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <ChartBarIcon className="h-6 w-6 mr-3" />
                        <a href="#analytics" className="block">Analytics</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <BellIcon className="h-6 w-6 mr-3" />
                        <a href="#notifications" className="block">Notifications</a>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
                        <Link onClick={handleLogout} className="block">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Usersidebar;
