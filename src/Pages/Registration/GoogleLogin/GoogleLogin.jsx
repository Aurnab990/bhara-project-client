import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { googleLogin } = useAuth(); 
    const navigate = useNavigate();
    
    const handleGooglelogin = async () => {
        try {
            const data = await googleLogin(); 
            if (data?.user?.email) {
                const userInfo = {
                    name: data.user.displayName || '', 
                    email: data.user.email,
                    password: '', 
                    phone: data.user.phoneNumber || '', 
                    zipcode: '',
                    thana: '',
                    zila: '',
                    district: '',
                    verification: ''
                };

                const response = await fetch('https://bhara-project-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                });

                if (response.ok) {
                    toast.success('Logged in with Google successfully!');
                    navigate('/user/dashboard');
                } else {
                    toast.error('Failed to save user data.');
                }
            }
        } catch (error) {
            console.error('Google login error:', error);
            toast.error('Something went wrong during Google login.');
        }
    };

    return (
        <button onClick={handleGooglelogin} className="w-full bg-black hover:bg-white hover:text-black text-white py-2 rounded-lg font-semibold flex items-center justify-center transition duration-300">
            <ToastContainer/>
            <img 
                src="https://img.icons8.com/color/24/000000/google-logo.png" 
                alt="Google Logo" 
                className="mr-2"
            />
            Sign Up with Google
        </button>
    );
};

export default GoogleLogin;
