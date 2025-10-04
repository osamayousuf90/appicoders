import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { mobileMockup, applePlay, googlePlay, caviarBg } from '../assets';
import Button from '../reusable/Button';

const CaviarSection = () => {
    const mockups = [
        mobileMockup,
        mobileMockup, 
        mobileMockup,
        mobileMockup,
        mobileMockup,
    ];

    const swiperRef = useRef(null);

    return (
        <section
            className="relative w-full py-24 md:py-32 overflow-hidden"
            style={{
                backgroundColor: '#1C1C1C',
                backgroundImage: `url(${caviarBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="
                absolute top-0 left-0 w-full h-24 bg-white 
                transform -translate-y-1/2 skew-y-[-3deg] z-20 origin-bottom-left
            "></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="text-white">
                        <div className="flex space-x-3 mb-6">
                            <span className="bg-white text-red-500 text-sm font-medium px-3 py-1 rounded-lg">iOS Development</span>
                            <span className="bg-white text-red-500 text-sm font-medium px-3 py-1 rounded-lg">Android Development</span>
                            <span className="bg-white text-red-500 text-sm font-medium px-3 py-1 rounded-lg">UI UX Design</span>
                        </div>

                        <h2 className="text-5xl font-extrabold leading-tight tracking-tight mt-4">
                            Caviar - Order Food Delivery
                        </h2>

                        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
                            Get Food delivered from curated lists of local restaurants right at your
                            fingertips with Caviar. Enjoy quality dining at home and make any
                            night a special occasion.
                        </p>

                        <div className="flex space-x-4 mt-8">
                            <a href="#" className="inline-flex items-center">
                                <img src={applePlay} alt="Download on the App Store" className="h-10 w-auto" />
                            </a>
                            <a href="#" className="inline-flex items-center">
                                <img src={googlePlay} alt="Get it on Google Play" className="h-10 w-auto" />
                            </a>
                        </div>
                        <Button extraClass={"mt-5"}>VIEW CASE STUDY</Button>
                    </div>

                    <div className="relative h-[650px] flex items-center justify-center overflow-hidden">

                        <Swiper
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            direction={'vertical'}
                            slidesPerView={1} 
                            centeredSlides={true}
                            spaceBetween={120} 
                            mousewheel={true}
                            effect={'slide'}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                            modules={[Navigation, Mousewheel]} 
                            className="mySwiper w-full h-full"
                        >
                            {mockups.map((mockup, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex justify-center items-center w-full h-full"
                                >
                                    {({ isActive }) => (
                                        <div className={`
                                            relative flex justify-center items-center w-[80%] h-full 
                                            p-2 
                                            transition-all duration-500 ease-out
                                            ${isActive
                                                ? 'bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl scale-[1.05] opacity-100' // Slight scale to emphasize active state
                                                : 'opacity-70 scale-100' 
                                            }
                                        `}>
                                            <img
                                                src={mobileMockup} 
                                                alt={`Caviar Mockup ${index + 1}`}
                                                className={`
                                                    // Image size set relative to the *slide*
                                                    max-h-[580px] w-auto object-contain z-10 
                                                    transition-all duration-500 ease-out
                                                `}
                                            />
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute right-[0px] top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-40">
                            <button className="swiper-button-prev-custom p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors backdrop-blur-sm shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </button>
                            <button className="swiper-button-next-custom p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors backdrop-blur-sm shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaviarSection;