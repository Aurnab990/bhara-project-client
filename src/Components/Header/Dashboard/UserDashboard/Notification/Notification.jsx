import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Usersidebar from '../../UserSIdeBar/Usersidebar';
import useAuth from '../../../../../Hooks/useAuth';

const Notification = () => {
    const {user} = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://bhara-project-server.vercel.app/orders/provider/${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch notifications');
          }
          return res.json();
        })
        .then((data) => {
          setNotifications(data); // Save fetched orders as notifications
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching notifications:', err);
          setLoading(false);
        });
    }
  }, [user?.email]); // Fetch notifications when the user's email changes

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif._id !== id));
  };

  if (loading) {
    return <div>Loading notifications...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Usersidebar />

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Notifications</h2>
        <div className="space-y-6">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification._id}
                className="relative p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
              >
                <button
                  onClick={() => handleDelete(notification._id)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition duration-300"
                >
                  <FaTimes size={16} />
                </button>
                <h3 className="text-lg font-semibold text-gray-700">New Order</h3>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Order Name:</strong> {notification.userName}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Phone:</strong> {notification.orderPhone}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Ordered By:</strong> {notification.orderEmail}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Date & Time:</strong>{' '}
                  {notification.acceptedAt}
                </p>
                <span className="text-xs text-gray-400 block mt-2">
                  Order ID: {notification._id}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No new notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
