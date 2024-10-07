import React, { useEffect, useState } from 'react';
import '../UserProfile/UserProfile.css';
import Usersidebar from '../../UserSIdeBar/Usersidebar';
import useAuth from '../../../../../Hooks/useAuth';

const Userprofile = () => {
    const { user } = useAuth(); 
    const email = user?.email;
    const [usersData, setUsersData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(data => {
                    const filteredUser = data?.filter(currentUser => currentUser.email === email); 
                    setUsersData(filteredUser); 
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching user data:', err);
                    setIsLoading(false);
                });
        }
    }, [email]);

    const handleUpdate = () => {
        alert('User information updated!');
    };

    // Show loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If no user found, display message
    if (!usersData.length) {
        return <div>No user found with this email.</div>;
    }

    // Assuming usersData is an array with one user, access first user
    const userData = usersData[0];

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <Usersidebar />

            {/* Main content */}
            <div className="w-full lg:w-4/5 bg-gray-100 p-8 lg:-mt-10">
                <div className="profile-container">
                    <div className="sidebar">
                        {/* Sidebar with user image and basic info */}
                        <div className="profile-header">
                            <img
                                src={userData.imageUrl || "https://via.placeholder.com/150"} // Use user image or placeholder
                                alt="User Profile"
                                className="profile-image"
                            />
                            <h2 className="profile-name">{userData.name}</h2>
                            <p className="profile-title">Software Engineer</p>
                        </div>
                        {/* Update Button */}
                        <button className="update-btn" onClick={handleUpdate}>
                            Update Profile
                        </button>
                    </div>

                    <div className="profile-content">
                        <div className="profile-info">
                            <h3 className="section-title">Contact Information</h3>
                            <div className="info-card">
                                <p><strong>Email:</strong> {userData.email} </p>
                                <p><strong>Phone:</strong> {userData.phone || 'N/A'}</p>
                                <p><strong>Address:</strong> {userData.address || 'N/A'}</p>
                            </div>

                            <h3 className="section-title">Location Details</h3>
                            <div className="info-card">
                                <p><strong>Thana:</strong> {userData.thana || 'N/A'}</p>
                                <p><strong>Zila:</strong> {userData.zila || 'N/A'}</p>
                                <p><strong>District:</strong> {userData.district || 'N/A'}</p>
                            </div>

                            <h3 className="section-title">Verification Status</h3>
                            <div className="info-card">
                                <p><strong>Verified:</strong> {userData.isVerified ? 'Yes' : 'No'}
                                <button className="ml-4  bg-red-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg text-sm font-semibold">
                Verify Now
            </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;
