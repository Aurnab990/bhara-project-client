import React, { useEffect, useState } from 'react';
import '../UserProfile/UserProfile.css';
import useAuth from '../../../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import Usersidebar from '../../UserSIdeBar/userSidebar';

const Userprofile = () => {
    const { user } = useAuth(); // Using auth hook to get user object
    const email = user?.email;
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch('https://bhara-project-server.vercel.app/users')
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!usersData.length) {
        return <div>No user found with this email.</div>;
    }

    const userData = usersData[0];

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <Usersidebar />
            <div className="w-full lg:w-4/5 bg-gray-100 p-8 lg:-mt-10">
                <div className="profile-container">
                    <div className="sidebar">
                        <div className="profile-header">
                            <img
                                src={user?.photoURL || userData?.photoUrl || "https://via.placeholder.com/150"}
                                alt="User Profile"
                                className="profile-image"
                            />
                            <h2 className="profile-name">{user?.displayName || userData.name}</h2>
                            <p className="profile-title">{userData.title}</p>
                        </div>
                        <Link to={`/user/update/${userData._id}`}>
                            <button className="update-btn">Update Profile</button>
                        </Link>
                    </div>

                    <div className="profile-content">
                        <div className="profile-info">
                            <h3 className="section-title">Contact Information</h3>
                            <div className="info-card">
                                <p><strong>Email:</strong> {user?.email || userData.email}</p>
                                <p><strong>Phone:</strong> {userData.phone || 'N/A'}</p>
                                <p><strong>Address:</strong> {userData.thana}, {userData.zila}, {userData.district}</p>
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
                                    <button className="ml-4 bg-red-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg text-sm font-semibold">
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
