import React, { useState, useMemo } from 'react';
import { clientSayBg } from '../assets';

// Mock data for the testimonials
const testimonialsData = [
    {
        id: 1,
        quote: "Working with this team has been a game-changer. The platform is intuitive, reliable, and exceeded all our expectations. The attention to detail in the design and functionality is truly remarkable.",
        name: "Alex Johnson",
        title: "CEO, InnovateTech",
        avatar: "https://placehold.co/100x100/10B981/ffffff?text=AJ",
        rating: 5,
    },
    {
        id: 2,
        quote: "The support we received was outstanding. They quickly resolved our queries and provided valuable insights for scaling our business. Highly recommend their services to anyone looking for serious growth.",
        name: "Samantha Lee",
        title: "Marketing Director, GrowthHub",
        avatar: "https://placehold.co/100x100/EF4444/ffffff?text=SL",
        rating: 4.5,
    },
    {
        id: 3,
        quote: "A truly seamless experience from start to finish. The results were immediate, and the performance uplift was exactly what we needed. This is the future of our industry.",
        name: "David Chen",
        title: "Product Manager, FusionCorp",
        avatar: "https://placehold.co/100x100/3B82F6/ffffff?text=DC",
        rating: 5,
    },
    {
        id: 4,
        quote: "Exceptional quality and incredible value. We've been searching for a solution like this for years. It integrates perfectly with our existing stack, making implementation effortless.",
        name: "Maria Rodriguez",
        title: "CTO, DigitalSphere",
        avatar: "https://placehold.co/100x100/F97316/ffffff?text=MR",
        rating: 4,
    },
];

// Helper component for star rating
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex space-x-0.5 text-yellow-400">
            {[...Array(fullStars)].map((_, i) => (
                <svg key={`full-${i}`} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.917 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" /></svg>
            ))}
            {hasHalfStar && (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.365 4.853 5.378.783-3.89 3.792.92 5.352L12 16.48l-4.773 2.518.92-5.352-3.89-3.792 5.378-.783L12 2zm0 2.236v12.527l3.056 1.61-1.127-6.577 4.773-4.636-6.686-.975z" /></svg>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <svg key={`empty-${i}`} className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M12 2l2.365 4.853 5.378.783-3.89 3.792.92 5.352L12 16.48l-4.773 2.518.92-5.352-3.89-3.792 5.378-.783L12 2zM12 4.236L8.273 12.63l-4.773 4.636 6.686.975L12 18.974l4.814 2.544-1.48-8.279 6.064-5.828-8.332-1.151L12 4.236z" /></svg>
            ))}
        </div>
    );
};

// Main    WhatOurClientSay Component
const WhatOurClientSay = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = testimonialsData.length;

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Pre-calculate the transform value
    const sliderTransformStyle = useMemo(() => {
        return `translateX(-${activeIndex * 100}%)`;
    }, [activeIndex]);

    return (
        <div className="min-h-screen relative bg-gray-700 text-white font-sans flex items-center justify-center p-4">

            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${clientSayBg})` }}
            ></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto py-12 lg:py-24">
                <div className='grid grid-cols-8 items-center gap-2'>
                    <div className='flex flex-col col-span-2'>
                        <h2 className="text-4xl  sm:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl  text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                            Trusted by businesses worldwide to deliver exceptional results and transformative growth.
                        </p>
                    </div>
                    <div className="relative col-span-6 overflow-hidden rounded-xl shadow-2xl bg-gray-800 p-4">

                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: sliderTransformStyle }}
                        >
                            {testimonialsData.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 w-full p-6 sm:p-10"
                                >
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                        <div className="lg:w-1/4 flex flex-col items-center p-4">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-24 h-24 rounded-full object-cover border-4 border-teal-500 shadow-lg mb-4"
                                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/6B7280/ffffff?text=User"; }}
                                            />
                                            <p className="text-lg font-bold text-white mt-2">{testimonial.name}</p>
                                            <p className="text-sm text-cyan-400">{testimonial.title}</p>
                                        </div>

                                        <div className="lg:w-3/4 lg:pl-8 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-700">
                                            <StarRating rating={testimonial.rating} />
                                            <blockquote className="mt-4 text-xl sm:text-2xl italic font-medium text-gray-200 leading-relaxed">
                                                "{testimonial.quote}"
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-teal-400 w-8' : 'bg-gray-600 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToPrev}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-teal-500 transition-colors duration-300 shadow-xl opacity-75 hover:opacity-100 hidden sm:block"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-teal-500 transition-colors duration-300 shadow-xl opacity-75 hover:opacity-100 hidden sm:block"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatOurClientSay;
