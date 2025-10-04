import React from "react";
import { contact, product1 } from "../assets";
import Button from "../reusable/Button";

const ContactSection = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full">
            {/* Left: Red Form */}
            <div className="bg-red-600 text-white flex-1 p-10 lg:p-16">
                <h3 className="text-sm font-semibold uppercase mb-2">Let’s Talk</h3>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Got an idea? Let’s get in touch!
                </h2>
                <p className="mb-8 text-sm md:text-base leading-relaxed">
                    Have queries? Not sure of your App Strategy? Discuss with us and I’ll
                    guide you the way forward.
                </p>

                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-md bg-white text-gray-900 focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-3 rounded-md bg-white text-gray-900 focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="p-3 rounded-md bg-white text-gray-900 focus:outline-none"
                    />
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="p-3 rounded-md bg-white text-gray-900 focus:outline-none resize-none"
                    ></textarea>
                    <Button type="submit">LET’S GET IN TOUCH</Button>
                </form>
            </div>

            {/* Right: Image + Contact Info */}
            <div
                className="flex-1 max-md:hidden bg-cover bg-center relative text-white"
                style={{ backgroundImage: `url(${contact})` }}
            >
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-8">
                    <p className="mb-4 text-lg">
                        Please submit your inquiry and our App Development Strategist will
                        contact you shortly
                    </p>
                    <p className="text-2xl font-bold mb-2">+1-(800) 826 8018</p>
                    <p className="text-sm">info@appicoders.com</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
