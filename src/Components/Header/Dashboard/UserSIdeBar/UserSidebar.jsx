import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { ChartBarIcon, CogIcon, HomeIcon, UserIcon, BellIcon } from '@heroicons/react/16/solid';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid';

const userSidebar = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () =>{
        logOut();
        navigate("/");

    }
    return (
        
            <div className="w-full lg:w-1/5 bg-gray-800 text-white flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold p-6">Dashboard</h2>
                    <ul className="space-y-4 p-6">
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

export default userSidebar;