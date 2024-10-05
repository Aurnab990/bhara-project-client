import React, { useState } from 'react';
import '../UserProfile/UserProfile.css';
import Usersidebar from '../../UserSIdeBar/Usersidebar';

const Userprofile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+123 456 7890',
        address: '123 Main St, City, Country',
        thana: 'Thana Name',
        zila: 'Zila Name',
        district: 'District Name',
        isVerified: true,
    });

    // Handler for updating user information
    const handleUpdate = () => {
        // Logic to update user details, typically you'd make an API call here
        alert('User information updated!');
    };
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <Usersidebar/>

            {/* Main content */}
            <div className="w-full lg:w-4/5 bg-gray-100 p-8 lg:-mt-10">
            <div className="profile-container">
      <div className="sidebar">
        {/* Sidebar with user image and basic info */}
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150" // Replace with actual user image URL
            alt="User Profile"
            className="profile-image"
          />
          <h2 className="profile-name">{user.name}</h2>
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
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>

          <h3 className="section-title">Location Details</h3>
          <div className="info-card">
            <p><strong>Thana:</strong> {user.thana}</p>
            <p><strong>Zila:</strong> {user.zila}</p>
            <p><strong>District:</strong> {user.district}</p>
          </div>

          <h3 className="section-title">Verification Status</h3>
          <div className="info-card">
            <p>
              <strong>Verified:</strong>{' '}
              <span className={user.isVerified ? 'verified' : 'not-verified'}>
                {user.isVerified ? 'Yes' : 'No'}
              </span>
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