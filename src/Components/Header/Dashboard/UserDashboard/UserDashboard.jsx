import React from 'react';
import Usersidebar from '../UserSIdeBar/Usersidebar';




const UserDashboard = () => {
    
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <Usersidebar/>

            {/* Main content */}
            <div className="w-full lg:w-4/5 bg-gray-100 p-8">
                <h2 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Example content boxes */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Analytics</h3>
                        <p className="text-gray-600">Overview of your activity.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
                        <p className="text-gray-600">Manage your profile information.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Notifications</h3>
                        <p className="text-gray-600">Check your recent notifications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
