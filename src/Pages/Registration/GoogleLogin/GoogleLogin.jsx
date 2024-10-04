import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate()
    const handleGooglelogin = () =>{
        if(googleLogin()){
            navigate("/user/dashboard");
        }
        
    }
    return (
        <button onClick={handleGooglelogin} className="w-full bg-black hover:bg-white hover:text-black text-white py-2 rounded-lg font-semibold flex items-center justify-center transition duration-300">
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