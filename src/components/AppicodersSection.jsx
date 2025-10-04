import React from 'react';
import Button from '../reusable/Button';

const AppicodersSection = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-start">
                <div className="lg:pr-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
                        <span className="text-red-700">Appicoders – #1. </span>
                        Mobile App & Web Development Company in USA
                    </h2>
                </div>
                <div className="flex flex-col space-y-8">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Welcome to Appicoders, your trusted partner for expert mobile
                        app and web development. With over 10+ years of experience,
                        we specialize in designing, developing, and marketing cutting-
                        edge solutions for all major mobile platforms, including Android,
                        iOS, and Windows.
                    </p>
                    <Button extraClass="w-[150px]">Read More</Button>
                </div>
            </div>
        </div>
    );
};

export default AppicodersSection;