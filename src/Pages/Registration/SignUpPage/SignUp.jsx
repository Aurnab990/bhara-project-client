import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const SignUp = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value; 
        const email = form.email.value;
        const password = form.password.value;
        const userPhoneNumber = form.phoneNumber.value;

        try {
            const response = await createUser(email, password)
            .then((data)=>{
                if(data?.user?.email){
                    const userInfo ={
                        name: userName,
                        email: data?.user?.email,
                        password: password,
                        phone: userPhoneNumber,
                        zipcode:"",
                        thana:"",
                        zila:"",
                        district:"",
                        verification:""
                    };
                    return fetch('https://bhara-project-server.vercel.app/users',{
                        method: "POST",
                        headers:{
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(userInfo)
                    })
                }
            })
            if (response) {
                toast.success('Account created successfully!');
                setTimeout(() => {
                    navigate('/user/dashboard'); 
                }, 2000);
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {/* Notification Bar */}
            <div className="w-full bg-red-600 text-white text-center py-2">
                <marquee>Fill the form correctly. Unless we can't be verify the account. And You can't create the account. So create the account with perfect information.</marquee>
            </div>

            <ToastContainer /> 
            
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-4">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create Your Account</h2>

                <form onSubmit={handleSignUp}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Full Name</label>
                        <input 
                            name="userName"
                            type="text" 
                            placeholder="Enter your full name" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Email Address</label>
                        <input 
                            name="email"
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required 
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Password</label>
                        <input 
                            name="password"
                            type="password" 
                            placeholder="Create a password" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Phone Number</label>
                        <input 
                            name="phoneNumber"
                            type="text" 
                            placeholder="Enter your phone number" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required
                        />
                    </div>
                    
                    {/* Sign Up Button */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300">
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <span className="mx-3 text-gray-500">OR</span>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>

                {/* Google Sign Up Button */}
                <GoogleLogin></GoogleLogin>

                {/* Already have an account? */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">Already have an account? 
                        <Link to={"/sign-in"} className="text-blue-500 hover:underline ml-1">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
