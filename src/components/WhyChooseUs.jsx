import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const IconPlaceholder = ({ iconName, isActive }) => (
    <div
        style={{
            width: "60px",
            height: "60px",
            backgroundColor: isActive ? "#e3342f" : "#ccc",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            transition: "all 0.3s ease",
        }}
    >
        <span
            style={{
                color: isActive ? "white" : "#666",
                fontSize: "24px",
                transition: "all 0.3s ease",
            }}
        >
            {iconName.slice(0, 1)}
        </span>
    </div>
);

const features = [
    {
        iconName: "Business",
        title: "Focused Business Approach",
        description:
            "We research, plan, and execute - and these qualities make Applicoden stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
        iconName: "Team",
        title: "Professional Team",
        description:
            "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms.",
    },
    {
        iconName: "Payment",
        title: "Flexible Payment Terms",
        description:
            "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.",
    },
    {
        iconName: "Support",
        title: "24/7 Support",
        description:
            "We provide continuous assistance and ensure your business never stops moving forward.",
    },
    {
        iconName: "Innovation",
        title: "Innovative Solutions",
        description:
            "We constantly evolve to deliver top-notch, creative, and scalable digital products.",
    },
];

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const swiperParams = {
        autoplay: {
            delay: 2500, // 2.5 seconds
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            clickable: true,
        },
        onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
        modules: [Pagination],
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                pagination: false,
            },
        },
    };

    return (
        <div
            style={{
                padding: "60px 20px",
                backgroundColor: "#f5f5f5",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                    color: "#333",
                }}
            >
                Why Choose Us?
            </h2>
            <p
                style={{
                    fontSize: "18px",
                    marginBottom: "50px",
                    maxWidth: "800px",
                    margin: "0 auto 50px auto",
                    color: "#555",
                }}
            >
                With our unique approach and cost-effective solutions, your business
                will <br /> prosper because quality is the top priority for us.
            </p>

            <Swiper
                {...swiperParams}
                style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "50px" }}
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                        <div
                         className="cursor-grab"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "auto",
                                padding: "40px 20px",
                                backgroundColor: activeIndex === index ? "white" : "lightgrey",
                                borderRadius: "50%",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                width: "300px",
                                height: "300px",
                                margin: "0 auto",
                                textAlign: "center",
                                transition: "transform 0.3s ease",
                                // transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                            }}
                        >
                            <IconPlaceholder
                                iconName={feature.iconName}
                                isActive={activeIndex === index}
                            />
                            <h3
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    marginBottom: "10px",
                                    color: "#333",
                                }}
                            >
                                {feature.title}
                            </h3>
                            <p style={{ fontSize: "14px", color: "#777" }}>
                                {feature.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WhyChooseUs;
