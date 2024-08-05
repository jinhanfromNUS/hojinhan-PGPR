import React from 'react';
import { FaHome, FaExclamationTriangle, FaMailBulk, FaUtensils, FaTshirt, FaTrash } from 'react-icons/fa';

const InfoSection: React.FC = () => {
    const sections = [
        {
            title: 'Hostel Address',
            description: '27 Prince George\'s Park Residence, Block 8 #04-13, Room XX, 118425 Singapore',
            icon: <FaHome />,
            furtherExplanation: []
        },
        {
            title: 'Demerit Points Structure',
            description: 'Link: https://nus.edu.sg/osa/docs/default-source/osa-doc/services/hostel-admission/housing-agreement/demerit_point_structure.pdf',
            icon: <FaExclamationTriangle />,
            furtherExplanation: []
        },
        {
            title: 'Mailbox & Parcel',
            description: 'Collection point: Block 5 Basement 1 (Behind Fire Command Centre)',
            icon: <FaMailBulk />,
            furtherExplanation: [
                { subtitle: 'Mailbox', content: 'All mails are delivered to designated mailbox and the mailbox can only be accessed by respective cluster leaders (which is me in this case). I will perform mail checking weekly. If you have a urgent mail, please contact me and I will take it for you immediately.' },
                { subtitle: 'Parcel', content: 'Residence must perform their own parcel collection. All parcels will be marked on the 1st and 15th of every month. If the parcel is not collected within 15 days, it will be disposed. For food delivery, please collect immediately. Anything left more than 1 working day will be disposed' }
            ]
        },
        {
            title: 'Pantry',
            description: 'Monthly Pantry & Fridge Cleaning will be done on the 8th of every month (by the office)',
            icon: <FaUtensils />,
            furtherExplanation: [
                { subtitle: 'Basket', content: 'Baskets are provided within the fridge. Unlabelled items in the basket will not be disposed.' },
                { subtitle: 'How to label?', content: 'Label room number and date of labelling E.g., 12/12/A - 08/01/2023' },
            ]
        },
        {
            title: 'Laundry',
            description: 'Unwanted detergent pack and unclaimed laundry will be disposed by HSKP team every Wed',
            icon: <FaTshirt />,
            furtherExplanation: [
                { subtitle: 'Fee', content: 'Both washing machines and dryers provided, each use costs $1.' },
                { subtitle: 'Location of laundry area', content: '(1) Next to R2 lounge (Block 5 Level 2) and Next to R3 lounge (Above Super Snacks).' },
            ]
        },
        {
            title: 'Trash',
            description: 'All trash can be disposed at the disposal and pantry.',
            icon: <FaTrash />,
            furtherExplanation: [
                { subtitle: 'Bagged trash', content: 'Please bag up the trash before disposing it into the disposal!' },

            ]
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-5xl font-bold mt-4 mb-12 text-center">Residence Matters</h1>
            {sections.map((section, index) => (
                <div key={index} className="mb-8 container mx-auto mt-12">
                    <h2 className="text-3xl font-bold underline underline-offset-4 decoration-green-500 mb-4 flex items-center">
                        {section.icon} <span className="ml-2">{section.title}</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">{section.description}</p>
                    {section.furtherExplanation.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.furtherExplanation.map((item, idx) => (
                                <div key={idx} className="p-4 border rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                                    <p className="text-md text-gray-700">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InfoSection;
