"use client"

import React, { useState } from 'react';
import { BiMap, BiTime, BiGlobe, BiDetail, BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { FaFutbol, FaSwimmer, FaUtensils, FaStore, FaBook, FaChair, FaPrint, FaMusic, FaMicrophone, FaPaintBrush, FaChild, FaPaw, FaTshirt } from 'react-icons/fa';

// Accordion Component for handling collapsible content
const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-indigo-100 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 bg-indigo-50/70 hover:bg-indigo-100/80 transition-colors rounded-t-lg"
            >
                <span className="font-semibold text-indigo-800">{title}</span>
                {isOpen ? <BiChevronUp className="text-indigo-600" /> : <BiChevronDown className="text-indigo-600" />}
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 p-3' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
};

const FacilitiesLocation: React.FC = () => {
    // Data is now enriched with a category and a primary icon for each facility
    const facilities = [
        {
            facility: 'PGPR Gymnasium',
            category: 'Sports & Recreation',
            icon: <FaSwimmer />,
            location: 'PGPR Plaza',
            operatingHours: ['(Daily) 24/7'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: ['Requires student pass exchange at the Security Desk.', 'First-come, first-served basis and subject to event bookings.'],
        },
        {
            facility: 'Badminton & Basketball',
            category: 'Sports & Recreation',
            icon: <FaFutbol />,
            location: 'Multi-purpose Hall (MPH) & Outdoor Courts',
            operatingHours: ['(Daily) 08:00 - 23:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: ['MPH requires pass exchange; outdoor courts do not.'],
        },
        {
            facility: 'Dance Studio',
            category: 'Sports & Recreation',
            icon: <FaMusic />,
            location: 'Block 7/8 (Level B1)',
            operatingHours: ['(Daily) 09:00 - 23:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: ['Requires pass exchange at Fire Command Centre.', 'Bring your own sound system.'],
        },
        {
            facility: 'Karaoke Room',
            category: 'Sports & Recreation',
            icon: <FaMicrophone />,
            location: 'Block 3 Level 2 (Nightingale Limelight)',
            operatingHours: ['(Daily) 09:00 - 23:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities/karaoke-@-nightingale-limelight',
            description: ['Booking is mandatory via Calendly.', 'Penalties apply for using without booking.'],
            proTip: "Expert bathroom singer incoming."
        },
        {
            facility: 'Music Rooms',
            category: 'Sports & Recreation',
            icon: <FaMusic />,
            location: '(Block 3 & 10)',
            operatingHours: ['(Daily) 09:00 - 23:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities/music-room-@-r1-r3',
            description: ['See website for booking and restrictions.'],
        },
        {
            facility: 'Aircon Food Court',
            category: 'Food & Convenience',
            icon: <FaUtensils />,
            location: 'PGPR Plaza',
            operatingHours: ['(Daily) 07:00 - 20:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: ["The main canteen in PGP."],
        },
        {
            facility: 'Supersnacks',
            category: 'Food & Convenience',
            icon: <FaUtensils />,
            location: 'Above R3 Lounge',
            operatingHours: ['(Mon-Fri) 11:00 – 02:00', '(Sat-Sun, PH) 18:00 – 02:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: ["The only supper place in PGP."],
        },
        {
            facility: 'Octobox',
            category: 'Food & Convenience',
            icon: <FaStore />,
            location: '',
            operatingHours: ['Store: 24/7', 'Grocery Section: 10:00 - 20:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: ["Automated store"],
        },
        {
            facility: 'Laundry Rooms',
            category: 'General Amenities',
            icon: <FaTshirt />,
            location: '(Preferred) Block 5, 10, & 2 (Level 2)',
            operatingHours: ['(Daily) 24/7'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/laundry',
            description: ['Detergent is not provided.'],
        },
        {
            facility: 'Printing & Photocopying',
            category: 'General Amenities',
            icon: <FaPrint />,
            location: '(Preferred) Entrance of Pioneer House, Block 8 (Level B1)',
            operatingHours: ['(Daily) 24/7'],
            website: '',
            description: ['Costs $0.04 per B&W page.'],
        },
        {
            facility: 'BBQ Pits',
            category: 'General Amenities',
            icon: <FaPaintBrush />,
            location: 'Various Locations',
            operatingHours: ['N/A'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: ['Book via PGP Office of Housing Services (at least 3 working days in advance).'],
        },
        {
            facility: 'Study Rooms & Lounges',
            category: 'Study & Lounges',
            icon: <FaBook />,
            location: 'Various Locations',
            operatingHours: ['Generally 07:00 - 23:00'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/pgp-residential-lounges',
            description: [
                'Emerald Realm (R2 Lounge): Block 5, Level 2',
                'Jade Arcade (R3 Lounge): Block 10, Level 2',
                'The Soul Library: Block 4, Level 3'
            ],
            studyRooms: [
                'Viridian, Limeade, Mint, Verdun (Block 1, L2)',
                'Juniper (Block 2, L2)', 'Harlequin (Block 3, L2)',
                'Fern, Castleton, Evergreen (Block 4, L2/L3)',
                'Jade (Block 10, L2)', 'Pine, Olive (Block 11, L1)',
                'Sage (Block 13, L1)'
            ]
        },
        {
            facility: "Kids Playroom",
            category: 'General Amenities',
            icon: <FaChild />,
            location: 'Block 13, Level 1 (Georgie\'s Wonderland)',
            operatingHours: ['(Daily) 07:00 - 23:00'],
            website: "https://nus.edu.sg/osa/pgpr/facilities/pgp-residential-lounges",
            proTip: "Come here to seek your inner child :D"
        },
        {
            facility: 'Flopper\'s Dungeon (Bunnies)',
            category: 'General Amenities',
            icon: <FaPaw />,
            location: 'Block 4, Level 3',
            operatingHours: ['Not open to public'],
            website: 'https://www.nus.edu.sg/osa/pgpr/sub-committees-interest-groups/bunnies-@-flopper\'s-dungeon',
            description: ['Access is via volunteer programs only. Look out for information sessions.'],
            proTip: 'Even cluster leaders have no access :('
        }
    ];

    const categories = ['Sports & Recreation', 'Food & Convenience', 'Study & Lounges', 'General Amenities'];

    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Campus Facilities
                </h1>

                <div className="space-y-12">
                    {categories.map((category) => (
                        <section key={category}>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-200 pb-2">{category}</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {facilities.filter(f => f.category === category).map((facility) => (
                                    <div key={facility.facility} className="bg-white rounded-2xl shadow-xl flex flex-col p-6 border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-3xl text-indigo-600">{facility.icon}</div>
                                            <h3 className="text-2xl font-bold text-slate-800">{facility.facility}</h3>
                                        </div>

                                        <div className="flex-grow space-y-3 pl-4 border-l-2 border-slate-100 ml-7">
                                            {facility.location && <div className="flex items-start gap-3"><BiMap className="mt-1 text-slate-400" /> <span className="text-slate-600">{facility.location}</span></div>}
                                            {facility.operatingHours.length > 0 && <div className="flex items-start gap-3"><BiTime className="mt-1 text-slate-400" /> <div>{facility.operatingHours.map(h => <p key={h} className="text-slate-600">{h}</p>)}</div></div>}
                                            <div className="flex items-start gap-3"><BiDetail className="mt-1 text-slate-400" /> <ul className="text-slate-600">{facility.description?.map(d => <li key={d}>{d}</li>)}</ul></div>
                                            {facility.proTip && <p className="italic text-indigo-700 bg-indigo-50 p-2 rounded-md">{`'${facility.proTip}'`}</p>}                                            {facility.studyRooms && (
                                                <Accordion title="View All Study Room Locations">
                                                    <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm columns-2">
                                                        {facility.studyRooms.map(room => <li key={room}>{room}</li>)}
                                                    </ul>
                                                </Accordion>
                                            )}
                                        </div>

                                        {facility.website && (
                                            <div className="mt-6 pt-4 border-t border-slate-200/80 text-center">
                                                <a href={facility.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                                                    <BiGlobe /><span>Official Info</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacilitiesLocation;