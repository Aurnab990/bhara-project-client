import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import useAuth from '../../../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();


    const handleSignIn = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await signIn(email, password);
            if (response) {
                toast.success('Logged in successfully!', {
                    
                });
                setTimeout(() => {
                    navigate('/'); 
                }, 2000);
            }
        } catch (error) {
            
            toast.error('Failed to Login. Please try again.', {
                
            });
        }


    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ToastContainer></ToastContainer>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In to Your Account</h2>
                 
                <form onSubmit={handleSignIn}>
                    {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Email Address</label>
                    <input 
                        name="email"
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Password</label>
                    <input 
                        name="password"
                        type="password" 
                        placeholder="Enter your password" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>

                {/* Sign In Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300">
                    Sign In
                </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <span className="mx-3 text-gray-500">OR</span>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>

                {/* Google Sign In Button */}
                <GoogleLogin></GoogleLogin>

                {/* Forgot Password */}
                <div className="mt-4 text-center">
                    <a href="#" className="text-blue-500 hover:underline text-sm">Forgot your password?</a>
                </div>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">Don't have an account? 
                        <Link to={"/sign-up"} className="text-blue-500 hover:underline ml-1">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
