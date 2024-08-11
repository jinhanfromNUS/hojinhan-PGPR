import React from 'react';
import { BiMap, BiDetail, BiTime, BiGlobe } from 'react-icons/bi';

const FacilitiesLocation: React.FC = () => {
    const facilities = [
        {
            facility: 'Laundry',
            location: '(Preferred) Block 5 Level 2, Block 10 Level 2, Block 2 Level 2.',
            operatingHours: ['(Daily) 24/7'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/laundry',
            description: [
                'Detergent is not provided.'
            ],
        },
        {
            facility: 'PGPR Gymnasium',
            location: 'PGPR Plaza',
            operatingHours: ['(Daily) 24/7'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: [
                'Please exchange your student pass at the Security Desk (Foyer)',
                'First come first served and subject to event booking'
            ],
        },
        {
            facility: 'Badminton Courts',
            location: 'Multi-purpose Hall (MPH)',
            operatingHours: ['(Daily) 0800 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: [
                'Please exchange your student pass at the Security Desk (Foyer)',
                'First come first served and subject to event booking'
            ],
        },
        {
            facility: 'Dance Studio',
            location: 'Block 7/8 (Level B1)',
            operatingHours: ['Unknown'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: [
                'Please approach the Security team at Fire Command Centre (Block 5 Level B1) to exchange your student pass',
                'No sound system or stereo equipment will be provided. All users to bring your own sound system'
            ],
        },
        {
            facility: 'Open and Caged Basketball Courts, Tennis & Practice Courts and Table Tennis',
            location: '-',
            operatingHours: ['(Daily) 0800 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: [
                'No exchange pass is needed'
            ]
        },
        {
            facility: 'BBQ Pit & Open Air Amphitheatre',
            location: '-',
            operatingHours: [],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: [
                'Please reach out to PGP Office of Housing Services to reserve your BBQ pits (at least 3 working days in advance)'
            ],
        },
        {
            facility: '24-hour Self Printing & Photocopying',
            location: '(Preferred) Entrance of Pioneer House, Block 8 (Level B1)',
            operatingHours: ['(Daily) 24/7'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities',
            description: [
                'It costs money lol, but I forgot how much (i think $0.03 per black and white page)'
            ],
        },
        {
            facility: 'Aircon Food Court @ PGPR Plaza',
            location: '',
            operatingHours: ['(Daily) 0700 - 2000'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: [
                'PGPR Mala is good. Prob the best in NUS.'
            ],
        },
        {
            facility: 'Supersnacks @ PGPR',
            location: '',
            operatingHours: ['Last order 0130', '(Mon to Fri) 1100 – 0200', '(Sat to Sun, PH) 1800 – 0200'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: [
            ],
        },
        {
            facility: 'Pick & GO Unmanned Convenience Store @ My Village',
            location: '',
            operatingHours: ['(Daily) 24/7 (Grocery: 10.00am – 8.00pm)'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: [
                'Contact: +65 6702 4231'
            ],
        },
        {
            facility: 'Rice and Stuff @ My Village',
            location: '',
            operatingHours: ['(Daily) 0700 - 2000'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: [
            ],
        },
        {
            facility: 'Study Rooms',
            location: '',
            operatingHours: [],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/pgp-residential-lounges',
            description: [
                'Viridian Study Room (Block 1 Level 2)',
                'Limeade Study Room (Block 1 Level 2)',
                'Mint Study Room (Block 1 Level 2)',
                'Verdun Study Room (Block 1 Level 2)',
                'Juniper Study Room (Block 2 Level 2)',
                'Harlequin Study Room (Block 3 Level 2)',
                'Fern Study Room (Block 4 Level 2)',
                'Castleton Study Room (Block 4 Level 2)',
                'Evergreen Study Room (Block 4 Level 3)',
                'Jade Study Room (Block 10 Level 2)',
                'Pine Study Room (Block 11 Level 1)',
                'Olive Study Room (Block 11 Level 1)',
                'Sage Study Room (Block 13 Level 1)'
            ],
        },
        {
            facility: 'Emerald Realm (Residence 2 Lounge)',
            location: 'Block 5 Level 2',
            operatingHours: ['(Daily) 0700 - 2300 (But seriously, I have seen people studying there until morning, so I think it is fine to overstay lol)'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: [
                'Explore the perfect study haven and private meeting space "Boardroom" within our Emerald Realm! Whether you\'re seeking a serene study spot or a private area for brainstorming sessions and hybrid meetings, we\'ve got you covered.'
            ],
        },
        {
            facility: 'Jade Arcade & Tabletop (Residence 3 Lounge)',
            location: 'Block 10 Level 2 (Above Super Snacks)',
            operatingHours: ['(Daily) 0700 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/food-groceries-and-daily-necessities',
            description: [
                'It\'s the ultimate spot to unwind, have fun, and focus on your studies. This gaming lounge has incredible amenities: a Board games Café, Pool Table, Darts, Claw Machine, Basketball Machine, Football Machine, and cozy study tables and chairs.'
            ],
        },
        {
            facility: 'The Soul Library',
            location: 'Block 4 Level 3',
            operatingHours: ['(Daily) 0700 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/aromatherapy-room-the-soul-library',
            description: [
                'Cool library for study. Or for free A/C.'
            ],
        },
        {
            facility: 'The Green Corner @ PGPR',
            location: 'Block 11 Level 1 (Outdoor Verandah)',
            operatingHours: ['(Daily) 24/7'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/green-committee',
            description: [
                'Take a fresh breath here!'
            ],
        },
        {
            facility: 'Bunnies @ Flopper\'s Dungeon',
            location: 'Block 4 Level 3 (Flopper’s Dungeon room)',
            operatingHours: [],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/bunnies-@-flopper\'s-dungeon',
            description: [
                'Not open to public.',
                'More information on the next Volunteers Information Session & Handling Workshop will be shared nearer to date.',
                'Aww my friends\' pic is up there lol',
                'I wanna see the bunnies too, but even cluster leader has no access :('
            ],
        },
        {
            facility: 'Kids Playroom: Georgie\'s Wonderland',
            location: 'Block 13 Level 1',
            operatingHours: ['(Daily) 0700 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/kids-playroom-georgie\'s-wonderland',
            description: [
                'Come here to seek your true self :D'
            ],
        },
        {
            facility: 'Karaoke @ Nightingale Limelight',
            location: 'Block 3 Level 2 (Nightingale Limelight)',
            operatingHours: ['(Daily) 0900 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities/karaoke-@-nightingale-limelight',
            description: [
                'Book here: https://calendly.com/pgpresidence/karaoke',
                'Any resident found using the karaoke system without a prior booking will be subjected to penalties. Non-compliance may result in suspension of facility privileges. ',
                'hehehe, expert bathroom singer incoming.'
            ],
        },
        {
            facility: 'Music Rooms: Audio Alchemy I & II',
            location: '(Block 3 Level 3): Audio Alchemy I, (Block 10 Level 2): Audio Alchemy II',
            operatingHours: ['(Daily) 0900 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities/music-room-@-r1-r3',
            description: [
                'All crucial information, including restrictions and bookings is accessible using the link above.'
            ],
        },
        {
            facility: 'Boardroom',
            location: 'Block 5 Level 2',
            operatingHours: ['(Daily) 1000 - 2300'],
            website: 'https://nus.edu.sg/osa/pgpr/facilities/sports-facilities-and-amenities/boardroom',
            description: [
                'I never use this before but you can access the information using the link above.'
            ],
        },
    ];

    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-5xl font-bold mt-4 mb-12 text-center text-green-800">Facilities</h1>
            {facilities.map((facility, index) => (
                <div key={index} className="mb-8 mx-4 p-8 border rounded-lg shadow-lg bg-white">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">{facility.facility}</h2>
                    {facility.location && facility.location !== '-' && (
                        <div className="text-lg text-gray-700 flex items-center">
                            <BiMap className="mr-2" />
                            <div>
                                {facility.location.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    {facility.operatingHours.length > 0 && (
                        <div className="text-lg text-gray-700 flex items-center">
                            <BiTime className="mr-2 text-gray-600" />
                            <div>
                                {facility.operatingHours.map((hours, i) => (
                                    <p key={i} className="mb-0">{hours}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    {facility.website && (
                        <p className="text-lg text-gray-700 flex items-center">
                            <BiGlobe className="mr-2" /> <a href={facility.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{facility.website}</a>
                        </p>
                    )}
                    {facility.description.length > 0 && (
                        <div className="text-lg text-gray-700 flex items-start mb-4">
                            <BiDetail className="mr-2 text-gray-600 mt-1" />
                            <div>
                                {facility.description.map((desc, i) => (
                                    // <p key={i} className={i === 0 ? "" : "ml-0"}>{i + 1}. {desc}</p>
                                    <p> {desc}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FacilitiesLocation;
