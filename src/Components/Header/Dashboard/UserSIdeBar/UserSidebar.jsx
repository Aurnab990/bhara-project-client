import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import {
    ChartBarIcon,
    CogIcon,
    HomeIcon,
    UserIcon,
    BellIcon,
    PlusCircleIcon,
    FolderIcon,
    ShoppingCartIcon,
    ClipboardDocumentListIcon,
} from '@heroicons/react/16/solid';
import { ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

const Usersidebar = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // State for toggling menu

    const handleLogout = () => {
        logOut();
        navigate('/');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    return (
        <div className="lg:w-1/6 bg-gray-800 text-white lg:relative">
            {/* Burger Menu Button for Mobile */}
            <div className="lg:hidden p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button onClick={toggleMenu} className="focus:outline-none">
                    {/* Conditional rendering of burger or close icon */}
                    {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                </button>
            </div>

            {/* Sidebar Menu */}
            <div
                className={`fixed lg:relative z-50 top-0 left-0 h-full bg-gray-800 w-64 lg:w-auto transition-all duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}
            >
                <ul className="space-y-4 p-6 lg:p-0 lg:pt-6">
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <HomeIcon className="h-6 w-6 mr-3" />
                        <Link to={'/user/dashboard'} className="block">
                            Home
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <UserIcon className="h-6 w-6 mr-3" />
                        <Link to={'/user/profile'} className="block">
                            Profile
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <PlusCircleIcon className="h-6 w-6 mr-3" />
                        <Link to={'/user/add-product'} className="block">
                            Add Product
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <FolderIcon className="h-6 w-6 mr-3" />
                        <Link to={'/user/manage-product'} className="block">
                            Manage Product
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <ClipboardDocumentListIcon className="h-6 w-6 mr-3" />
                        <Link to={'/user/orders-manage'} className="block">
                            Orders Manage
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <ShoppingCartIcon className="h-6 w-6 mr-3" />
                        <Link to={'/user/my-orders'} className="block">
                            Your Orders
                        </Link>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <CogIcon className="h-6 w-6 mr-3" />
                        <a href="#settings" className="block">
                            Settings
                        </a>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <BellIcon className="h-6 w-6 mr-3" />
                        <a href="#notifications" className="block">
                            Notifications
                        </a>
                    </li>
                    <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg">
                        <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
                        <Link onClick={handleLogout} className="block">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Overlay for mobile to close the sidebar when clicking outside */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
                ></div>
            )}
        </div>
    );
};

export default Usersidebar;
