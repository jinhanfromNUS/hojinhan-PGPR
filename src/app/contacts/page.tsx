import React from 'react';
import { BiPhone, BiMap, BiGlobe, BiEnvelope } from 'react-icons/bi';

const ContactsLocation: React.FC = () => {
    const contacts = [
        {
            name: 'Campus Emergency and Security',
            website: 'https://uci.nus.edu.sg/campus-emergency-security/',
            contact: '68741616',
            email: 'ocssec@nus.edu.sg',
            location: '(Kent Ridge Campus) 17 & 18 Prince George\'s Park, Singapore 118417\n(Bukit Timah Campus) Tower Block Level 1, 469 Bukit Timah Road, Singapore 259756',
        },
        {
            name: 'Lifeline NUS (24 hours)',
            website: '',
            contact: '65167777',
            email: '',
            location: '',
        },
        {
            name: 'NUS Care Unit',
            website: 'https://care.nus.edu.sg/',
            contact: '66014000',
            email: 'ncu_help@nus.edu.sg',
            location: '20 Lower Kent Ridge Road, #B1-03, Singapore 119080',
        },
        {
            name: 'University Health Centre (UHC)',
            website: 'https://www.nus.edu.sg/uhc',
            contact: '66015035',
            email: 'uhc_health@nus.edu.sg',
            location: '20 Lower Kent Ridge Rd, Singapore 119080',
        },
        {
            name: 'University Counselling Service',
            website: 'https://nus.edu.sg/hwb/ucs/',
            contact: '65162376',
            email: 'uhc_counselling@nus.edu.sg',
            location: '20 Lower Kent Ridge Rd, Singapore 119080',
        },
        {
            name: 'Fire Command Centre (FCC)',
            website: '',
            contact: '66012222',
            email: '',
            location: '27 Prince George\'s Park, Block 5 Level B1, Singapore 118425',
        },
        {
            name: 'PGPR Residential Office (RLO)',
            website: 'https://uhms.nus.edu.sg/students',
            contact: '65161610',
            email: 'pgpresidence@nus.edu.sg',
            location: '29 Prince George\'s Park, Block 10, Level 1, Singapore 118426',
        },
        {
            name: 'PGPR Maintenance Office',
            website: 'https://uhms.nus.edu.sg/students',
            contact: 'alice.johnson@example.com',
            email: '',
            location: '789 Oak St, Villageton',
        },
        {
            name: 'PGPR Housing Services (HS)',
            website: 'https://uhms.nus.edu.sg/students',
            contact: '66017878',
            email: 'housing.pgp@nus.edu.sg',
            location: '27 Prince George\'s Park Block 6, Level 2 Foyer, Singapore 118425',
        },
    ];

    return (
        <div className="p-8">
            <h1 className="text-5xl font-bold mt-4 mb-12 text-center">Contacts</h1>
            {contacts.map((contact, index) => (
                <div key={index} className="mb-8 ml-4 mr-8 p-8 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">{contact.name}</h2>
                    {contact.contact && (
                        <p className="text-lg text-gray-700 flex items-center">
                            <BiPhone className="mr-2" /> {contact.contact}
                        </p>
                    )}
                    {contact.email && (
                        <p className="text-lg text-gray-700 flex items-center">
                            <BiEnvelope className="mr-2" /> {contact.email}
                        </p>
                    )}
                    {contact.website && (
                        <p className="text-lg text-gray-700 flex items-center">
                            <BiGlobe className="mr-2" /> <a href={contact.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{contact.website}</a>
                        </p>
                    )}
                    {contact.location && contact.location !== '-' && (
                        <div className="text-lg text-gray-700 flex items-center">
                            <BiMap className="mr-2" />
                            <div>
                                {contact.location.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactsLocation;
