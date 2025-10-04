import React from 'react';

// --- Inline SVG Icons (Lucide-React equivalents) ---

// Icon for Medical & Pharma Services
const PillIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pill">
        <path d="m10.5 4.5 9 9a2.26 2.26 0 0 1-3.21 3.21l-9-9a2.26 2.26 0 0 1 3.21-3.21Z" />
        <path d="M8.28 2.74a5 5 0 0 0-7.04 7.04l5.3 5.3a5 5 0 0 0 7.04-7.04Z" />
        <path d="m14 8 2 2" />
    </svg>
);

// Icon for Training & Fitness
const DumbbellIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell">
        <path d="M14.4 14.4 9.6 9.6" />
        <path d="M18.67 6.33a2 2 0 0 0-2.83 0L9.48 12.69" />
        <path d="M14.4 14.4 9.6 9.6" />
        <path d="m5.17 18.83a2 2 0 0 0 2.83 0l6.18-6.18" />
        <line x1="18" x2="20" y1="5" y2="7" />
        <line x1="4" x2="6" y1="19" y2="21" />
        <path d="m12 9-6.32 6.32a2.12 2.12 0 0 0 0 3l.88.88a2.12 2.12 0 0 0 3 0L15 12" />
    </svg>
);

// Icon for Fintech
const BarChartIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
    </svg>
);

// Icon for Health & Fitness
const HeartPulseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.6 0-3.05 1-3.75 2.41a2.03 2.03 0 0 1-1.5 1.5c-.84.23-1.6.85-2.17 1.63L8 10l-1.68 1.95" />
        <path d="m2 21 2.3-2.3" />
        <path d="m16 14 1.48.8a1 1 0 0 1 .15 1.4c-.11.2-.28.37-.47.49l-1.12.75c-.24.16-.54.17-.79.03L12 17.5" />
        <path d="m13 10-1.48-.8a1 1 0 0 0-.15-1.4c.11-.2.28-.37.47-.49l1.12-.75c.24-.16.54-.17.79-.03L16 6.5" />
    </svg>
);

// Icon for Business & Services
const BriefcaseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

// Icon for Cleaning Services
const SprayCanIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-spray-can">
        <path d="M3 14a7 7 0 0 0 14 0V9a5 5 0 0 0-10 0v5" />
        <path d="M5 20h10" />
        <path d="M8 19c-1.5 0-2-2-2-2h10s-.5 2-2 2" />
        <path d="M17 14h.01" />
    </svg>
);

// Map icon names to components
const IconMap = {
    Pill: PillIcon,
    Dumbbell: DumbbellIcon,
    BarChart: BarChartIcon,
    HeartPulse: HeartPulseIcon,
    Briefcase: BriefcaseIcon,
    SprayCan: SprayCanIcon,
};

// --- Mock Data ---
const industriesData = [
    {
        id: 1,
        title: "Medical & Pharma Services",
        icon: "Pill",
        description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
        id: 2,
        title: "Training & Fitness",
        icon: "Dumbbell",
        description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
        id: 3,
        title: "Fintech",
        icon: "BarChart",
        description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
        id: 4,
        title: "Health & Fitness",
        icon: "HeartPulse",
        description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
        id: 5,
        title: "Business & Services",
        icon: "Briefcase",
        description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
        id: 6,
        title: "Cleaning Services",
        icon: "SprayCan",
        description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    },
];

// --- Card Component ---
const IndustryCard = ({ title, iconName, description, isFirstColumn }) => {
    const IconComponent = IconMap[iconName];

    // A class to simulate the red left border seen on some cards in the image
    // This is applied to all cards for a consistent, professional look.
    const accentClass = 'border-l-4 border-red-600';

    return (
        <div className={`p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${accentClass}`}>
            <div className="flex items-center space-x-4 mb-4">
                {IconComponent && (
                    <div className="p-3 bg-red-100 rounded-lg text-red-600">
                        <IconComponent className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                )}
                <h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">{description}</p>
        </div>
    );
};

// --- Main App Component ---
const Industry = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4 font-sans">
            <div className="w-full max-w-6xl mx-auto">
                {/* Section Header */}
                <header className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Industries
                    </h1>
                    {/* Optional sub-text to match the design's spacing and professional look */}
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Providing tailored solutions across diverse sectors to drive growth and efficiency.
                    </p>
                </header>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {industriesData.map((industry, index) => (
                        <IndustryCard
                            key={industry.id}
                            title={industry.title}
                            iconName={industry.icon}
                            description={industry.description}
                            // Conditional styling hook, though we applied the border to all for visual consistency
                            isFirstColumn={index % 3 === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industry;
