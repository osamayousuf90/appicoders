import React, { useState, useMemo } from 'react';
import { product1, product2, product3, product4, productBgImg } from '../assets';

// Mocking the imported background image since I cannot access local assets.
// Replace this URL with the actual path if the image is publicly hosted or handled via a build system.

// --- Inline SVG Icons (Lucide-React equivalents) for Hover Overlay ---

// Icon for Laptop/Monitor products
const MonitorIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="3" rx="2" /><path d="M12 17v4" /><path d="M16 21h-8" /></svg>
);

// Icon for Tablet products
const TabletIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
);

// Icon for Mobile/Smartphone products
const SmartphoneIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
);

// Map product type to icon component
const DeviceIconMap = {
    Laptop: MonitorIcon,
    Tablet: TabletIcon,
    Mobile: SmartphoneIcon,
};

// --- Mock Data ---
const categories = ["ALL", "CRM 365", "Marketplace E-Commerce Platform", "Sports Training App", "Fitness"];

const productsData = [
    { id: 1, img: product1, category: "CRM 365", title: "Advanced CRM Dashboard", type: "Laptop", isOverlay: false, mockUrl: "https://placehold.co/600x400/ffffff/000000?text=CRM+Dashboard" },
    { id: 2, img: product2, category: "Marketplace E-Commerce Platform", title: "E-Commerce Tablet UI", type: "Tablet", isOverlay: false, mockUrl: "https://placehold.co/600x400/ffffff/000000?text=E-Commerce+Tablet" },
    { id: 3, img: product3, category: "Sports Training App", title: "Sports Training Mobile App", type: "Mobile", isOverlay: false, mockUrl: "https://placehold.co/600x400/ffffff/000000?text=Mobile+App+Screens" },
    { id: 6, img: product4, category: "Fitness", title: "Fitness Tracking Web App", type: "Laptop", isOverlay: false, mockUrl: "https://placehold.co/600x400/ffffff/000000?text=Fitness+App" },
];

// --- Product Card Component ---
const ProductCard = ({ product }) => {
    const { title, description, isOverlay, mockUrl, type, img } = product;

    // Get the icon component based on the product type for the hover overlay
    const IconComponent = DeviceIconMap[type];

    return (
        <div className="group relative w-full aspect-[3/2] overflow-hidden rounded-md shadow-2xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer">

            {/* Product Image/Mockup */}
            <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                // Fallback for image loading error
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/D1D5DB/1F2937?text=Product+Mockup"; }}
            />

            {/* 1. NEW Hover Overlay (for standard cards: isOverlay=false) */}
            {!isOverlay && (
                <div className="absolute inset-0 bg-gray-100 bg-opacity-95 flex flex-col items-center justify-center p-6 text-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {IconComponent && (
                        // Icon showing in red to match the primary theme color
                        <IconComponent className="w-12 h-12 mb-4 text-red-600" strokeWidth={2} />
                    )}
                    <h4 className="text-3xl font-bold text-center leading-tight">{title}</h4>
                    <p className="text-base text-gray-500 mt-2 text-center underline">View Project Details</p>
                </div>
            )}

            {/* 2. Existing Dark Overlay (for card 5: isOverlay=true) */}
            {isOverlay && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-end p-6 text-white">
                    {/* Mockup of the camera/scan icon in the middle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-white opacity-50 rounded-lg"></div>
                    </div>

                    <h4 className="text-2xl font-bold leading-snug">{title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{description}</p>
                </div>
            )}
        </div>
    );
};

// --- Main Component ---
const ProductSection = () => {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredProducts = useMemo(() => {
        if (activeCategory === "ALL") {
            return productsData;
        }
        return productsData.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="relative w-full bg-red-600 font-sans min-h-[800px] flex flex-col justify-start items-center overflow-hidden">

            {/* Background Image/Pattern Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: `url(${productBgImg})`, backgroundSize: 'cover' }}
            >
                {/* Dark overlay gradient at the bottom to ensure grid contrast */}
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto py-12 sm:py-20 px-4">

                {/* Header */}
                <h2 className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-10">
                    Products
                </h2>

                {/* Category Tabs/Filters */}
                <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-16 text-lg">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                px-3 py-2 sm:px-4 sm:py-2 transition-all duration-300 font-semibold rounded-full
                ${activeCategory === cat
                                    ? 'text-red-600 bg-white shadow-lg' // Active style
                                    : 'text-white hover:text-red-200 hover:bg-white hover:bg-opacity-10' // Inactive style
                                }
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Fallback Message for No Products */}
                {filteredProducts.length === 0 && (
                    <div className="text-center text-white text-xl mt-12 p-6 bg-white bg-opacity-20 rounded-xl">
                        No products found for "{activeCategory}".
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductSection;
