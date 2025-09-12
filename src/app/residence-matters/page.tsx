import React from 'react';
import { FaHome, FaExclamationTriangle, FaMailBulk, FaUtensils, FaTshirt, FaTrash } from 'react-icons/fa';

const InfoSection: React.FC = () => {
    const sections = [
        {
            title: 'Hostel Address',
            description: '27 Prince George\'s Park Residence, Block 8 #04-13, Room XX, 118425 Singapore',
            icon: <FaHome />,
            imageUrl: '/PGPR.jpg',
            furtherExplanation: []
        },
        {
            title: 'Demerit Points Structure',
            description: 'Residents are expected to adhere to the housing agreement. Click to view the official demerit point structure.',
            href: 'https://nus.edu.sg/osa/docs/default-source/osa-doc/services/hostel-admission/housing-agreement/demerit_point_structure.pdf',
            icon: <FaExclamationTriangle />,
            // FIXED IMAGE URL
            imageUrl: 'https://images.unsplash.com/photo-1599249300728-332ff4509424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            furtherExplanation: []
        },
        {
            title: 'Mailbox & Parcel',
            description: 'Collection point for both is at Block 5, Basement 1 (Behind Fire Command Centre).',
            icon: <FaMailBulk />,
            // FIXED IMAGE URL
            imageUrl: 'https://images.unsplash.com/photo-1526399049769-e0f35b2e5864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            furtherExplanation: [
                { subtitle: 'Mailbox (Weekly Check)', content: 'Mails are placed in a shared mailbox accessible only by the Cluster Leader. For urgent mail, please contact me for immediate retrieval.' },
                { subtitle: 'Parcel (Self-Collection)', content: 'You are responsible for collecting your own parcels. Uncollected parcels are cleared on the 1st and 15th of each month. Food deliveries must be collected immediately.' }
            ]
        },
        {
            title: 'Pantry & Fridge',
            description: 'A monthly deep clean is conducted by the office on the 8th of every month.',
            icon: <FaUtensils />,
            // FIXED IMAGE URL
            imageUrl: 'https://images.unsplash.com/photo-1618221195720-dd6b41fa9d74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80',
            furtherExplanation: [
                { subtitle: 'Fridge Baskets', content: 'Baskets are provided in the fridge. Items within these baskets are safe during cleaning, even if unlabelled.' },
                { subtitle: 'How to Label Items', content: 'Please label personal items with your room number and the date. Example: 12-A - 08/01/2023' },
            ]
        },
        {
            title: 'Laundry',
            description: 'Unclaimed laundry & detergent are disposed of by housekeeping every Wednesday.',
            icon: <FaTshirt />,
            imageUrl: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            furtherExplanation: [
                { 
                    subtitle: 'Pricing', 
                    content: [
                        'Washing Machine: $1.00 (30-34 mins)',
                        'Dryer (30 mins): $1.00',
                        'Dryer (45 mins): $1.50',
                        'Dryer (60 mins): $2.00',
                    ]
                },
                { 
                    subtitle: 'Locations', 
                    content: [
                        '(1) Next to R2 lounge (Block 5, Level 2)',
                        '(2) Next to R3 lounge (Above Super Snacks)'
                    ] 
                },
            ]
        },
        {
            title: 'Trash Disposal',
            description: 'All trash can be disposed of at the central chute in the pantry area.',
            icon: <FaTrash />,
            // FIXED IMAGE URL
            imageUrl: 'https://images.unsplash.com/photo-1574974671999-d57e936a6953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            furtherExplanation: [
                { subtitle: 'Chute Etiquette', content: 'To maintain cleanliness and prevent pests, please ensure all trash is securely bagged before disposal.' },
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">
                {/* <h1 className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-center mb-16 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Please refresh if sidebar is not working
                </h1> */}

                <div className="space-y-16">
                    {sections.map((section) => (
                        <div key={section.title} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200/60">
                            {/* <img src={section.imageUrl} alt={section.title} className="w-full h-48 object-cover" /> */}
                            
                            <div className="p-6 md:p-8">
                                <div className="flex items-center">
                                    {/* ICON FIX: Using React.cloneElement to correctly size the icon */}
                                    <div className="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                                        {React.cloneElement(section.icon, { className: 'w-7 h-7 text-indigo-600' })}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 ml-5">
                                        {section.title}
                                    </h2>
                                </div>

                                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                    {section.href ? (
                                        <a href={section.href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2 transition-colors">
                                            {section.description}
                                        </a>
                                    ) : (
                                        section.description
                                    )}
                                </p>

                                {section.furtherExplanation.length > 0 && (
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {section.furtherExplanation.map((item) => (
                                            <div key={item.subtitle} className="bg-indigo-50/70 p-5 rounded-xl border border-indigo-100/80">
                                                <h3 className="font-semibold text-lg text-slate-800 mb-2">{item.subtitle}</h3>
                                                {Array.isArray(item.content) ? (
                                                    // BONUS IMPROVEMENT: Using a proper <ul> for lists
                                                    <ul className="space-y-1 list-disc list-inside text-slate-700">
                                                        {item.content.map((line) => (
                                                            <li key={line}>{line}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-slate-700 leading-normal">{item.content}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;