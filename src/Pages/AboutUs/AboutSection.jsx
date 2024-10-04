import React from 'react';

const AboutSection = () => {
    return (
        <div className=" py-16">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="flex-1">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h2>
                    <p className="text-gray-700 mb-6">
                        We are committed to delivering innovative solutions and exceptional service. Our team of dedicated professionals works tirelessly to ensure that our products and services meet the highest standards of quality and performance. Discover more about our mission, vision, and values.
                    </p>
                </div>
                <div className="flex-1 flex flex-wrap justify-center gap-4">
                    <img
                        src="https://mojildrug.com/wp-content/uploads/2022/10/vision.jpg"
                        alt="Our Vision"
                        className="w-full sm:w-64 h-40 object-cover rounded-lg shadow-lg"
                    />
                    <img
                        src="https://www.anshikamedia.com/wp-content/uploads/2023/12/our-team.png"
                        alt="Our Team"
                        className="w-full sm:w-64 h-40 object-cover rounded-lg shadow-lg"
                    />
                    <img
                        src="https://www.shiftbase.com/hubfs/business-concept-2022-11-07-22-00-19-utc_50.jpg"
                        alt="Our Values"
                        className="w-full sm:w-64 h-40 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
