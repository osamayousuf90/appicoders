import React from 'react';
import { ourServicesBg, ourServicesHero } from '../assets';

const OurServicesSection = () => {
    const services = [
        { icon: '📱', title: 'Custom Mobile Applications', description: 'iOS, Android and Wearable Apps' },
        { icon: '💡', title: 'Artificial Intelligence', description: 'Innovative AI & ML Solutions' },
        { icon: '🖥️', title: 'Custom Web Development', description: 'Robust Webs, Progressive Web Apps' },
        { icon: '🔗', title: 'Blockchain Development', description: 'Custom Blockchain Solutions' },
        { icon: '👓', title: 'Augmented Reality', description: 'Futuristic AR Apps' },
        { icon: '🚀', title: 'MVP Development', description: 'For Startups & Entrepreneurs' },
    ];

    return (
        <div className="relative bg-white">
            <section
                className="
                    relative w-full overflow-hidden                    
                    bg-red-700                                         
                    min-h-[800px]                                     
                    
                    /* Custom Tailwind utility for pseudo-elements for the top curve */
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-24 
                    before:bg-white before:transform before:-translate-y-1/2 before:skew-y-[-3deg] before:z-20
                    before:origin-bottom-left /* Important for correct skew origin */

                    /* Custom Tailwind utility for pseudo-elements for the bottom curve */
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 
                    after:bg-white after:transform after:translate-y-1/2 after:skew-y-[3deg] after:z-20
                    after:origin-top-left /* Important for correct skew origin */
                "
                style={{
                    backgroundImage: `url(${ourServicesBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right top',
                }}
            >
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/2 pointer-events-none z-0"> {/* z-0 to ensure it's below content */}
                    <img
                        src={ourServicesHero}
                        alt="Web and Mobile Development Illustration"
                        className="w-full h-full object-contain object-right-bottom"
                    />
                </div>

                <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-30"> {/* Increased z-index for content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="text-white lg:pr-12">
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                                Our Services
                            </h2>
                            <p className="mt-2 text-lg font-medium opacity-90">
                                Get to know about what we're good at.
                            </p>
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                                {services.map((service, index) => (
                                    <div key={index} className="flex space-x-4 items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="text-3xl text-white">{service.icon}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                            <p className="mt-1 text-sm opacity-80">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:block">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurServicesSection;