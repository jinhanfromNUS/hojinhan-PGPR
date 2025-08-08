import React from 'react';
import { BiPhone, BiMap, BiGlobe, BiEnvelope, BiBuilding, BiErrorCircle, BiHeart, BiShield, BiWrench, BiHelpCircle, BiHeadphone, BiMessageError } from 'react-icons/bi';

const ContactsLocation: React.FC = () => {
    // Data is enriched with a primary 'icon' and a 'featured' flag
    const contacts = [
        {
            name: 'Campus Emergency & Security',
            icon: <BiShield />,
            website: 'https://uci.nus.edu.sg/campus-emergency-security/',
            contact: '68741616',
            email: 'ocssec@nus.edu.sg',
            location: '(Kent Ridge Campus) 17 & 18 Prince George\'s Park, Singapore 118417\n(Bukit Timah Campus) Tower Block Level 1, 469 Bukit Timah Road, Singapore 259756',
            featured: true, // This will be our featured card
        },
        {
            name: 'Lifeline NUS (24-Hour Hotline)',
            icon: <BiHeart />,
            website: '',
            contact: '65167777',
            email: '',
            location: '',
        },
        {
            name: 'NUS Care Unit (NCU)',
            icon: <BiHelpCircle />,
            website: 'https://care.nus.edu.sg/',
            contact: '66014000',
            email: 'ncu_help@nus.edu.sg',
            location: '',
        },
        {
            name: 'NUS Whistleblowing Unit',
            icon: <BiMessageError />,
            website: '',
            contact: '65166209',
            email: 'whistleblow@nus.edu.sg',
            location: 'Office of Risk Management and Compliance',
        },
        {
            name: 'University Health Centre (UHC)',
            icon: <BiBuilding />,
            website: 'https://www.nus.edu.sg/uhc',
            contact: '66015035',
            email: 'uhc_health@nus.edu.sg',
            location: '',
        },
        {
            name: 'University Counselling Services',
            icon: <BiHeadphone />,
            website: 'https://nus.edu.sg/hwb/ucs/',
            contact: '65162376',
            email: 'uhc_counselling@nus.edu.sg',
            location: '20 Lower Kent Ridge Road, Level 2',
        },
        {
            name: 'Fire Command Centre (FCC)',
            icon: <BiErrorCircle className="text-red-500" />,
            website: '',
            contact: '66012222',
            email: '',
            location: '27 Prince George\'s Park, Block 5 Level B1, Singapore 118425',
        },
        {
            name: 'PGPR Residential Life Office (RLO)',
            icon: <BiBuilding />,
            website: '',
            contact: '65161610',
            email: 'pgpresidence@nus.edu.sg',
            location: '29 Prince George\'s Park, Block 10, Level 1, Singapore 118426',
        },
        {
            name: 'PGPR Housing Services (HS)',
            icon: <BiBuilding />,
            website: '',
            contact: '66017878',
            email: 'housing.pgp@nus.edu.sg',
            location: '27 Prince George\'s Park, Block 6, Level 2 Foyer, Singapore 118425',
        },
        {
            name: 'PGPR Maintenance Office',
            icon: <BiWrench />,
            website: 'https://uhms.nus.edu.sg/students',
            contact: '',
            email: '',
            location: 'Please log a fault report via the UHMS portal for assistance.',
        },
    ];

    const featuredContact = contacts.find(c => c.featured);
    const regularContacts = contacts.filter(c => !c.featured);

    const ContactInfoItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
        <div className="flex items-start gap-3 text-slate-600">
            <div className="flex-shrink-0 text-slate-400 mt-1">{icon}</div>
            <div className="flex-grow">{children}</div>
        </div>
    );

    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Contacts & Hotlines
                </h1>

                {/* --- Featured Contact Card --- */}
                {featuredContact && (
                    <div className="mb-10 bg-gradient-to-br from-white to-indigo-50/50 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                            <div className="text-5xl">{featuredContact.icon}</div>
                        </div>
                        <div className="flex-grow w-full">
                            <h2 className="text-2xl font-bold text-slate-800 text-center md:text-left">{featuredContact.name}</h2>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                <ContactInfoItem icon={<BiPhone />}>
                                    <a href={`tel:${featuredContact.contact}`} className="font-semibold text-xl text-indigo-700 hover:text-indigo-900 transition-colors">
                                        {featuredContact.contact}
                                    </a>
                                </ContactInfoItem>
                                <ContactInfoItem icon={<BiEnvelope />}>
                                    <a href={`mailto:${featuredContact.email}`} className="font-medium text-slate-700 hover:text-indigo-600 transition-colors break-all">
                                        {featuredContact.email}
                                    </a>
                                </ContactInfoItem>
                                <ContactInfoItem icon={<BiMap />}>
                                    <div>
                                        {featuredContact.location.split('\n').map((line, i) => <p key={i} className="leading-snug text-sm">{line}</p>)}
                                    </div>
                                </ContactInfoItem>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Regular Contacts Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {regularContacts.map((contact) => (
                        <div key={contact.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-xl border border-transparent hover:border-indigo-200">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-4xl text-indigo-500">{contact.icon}</div>
                                <h2 className="text-xl font-bold text-slate-800">{contact.name}</h2>
                            </div>
                            
                            <div className="space-y-4 flex-grow pl-2 border-l-2 border-slate-100 ml-5">
                                {contact.contact && <ContactInfoItem icon={<BiPhone />}><a href={`tel:${contact.contact}`} className="font-medium text-slate-700 hover:text-indigo-600">{contact.contact}</a></ContactInfoItem>}
                                {contact.email && <ContactInfoItem icon={<BiEnvelope />}><a href={`mailto:${contact.email}`} className="font-medium text-slate-700 hover:text-indigo-600 break-all">{contact.email}</a></ContactInfoItem>}
                                {contact.location && <ContactInfoItem icon={<BiMap />}><div>{contact.location.split('\n').map((line, i) => <p key={i} className="leading-snug">{line}</p>)}</div></ContactInfoItem>}
                                {!contact.contact && !contact.email && <ContactInfoItem icon={<BiErrorCircle />}><p className="text-slate-500 italic">{contact.location}</p></ContactInfoItem>}
                            </div>

                            {contact.website && <div className="mt-6 pt-4 border-t border-slate-200/80"><a href={contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"><BiGlobe /><span>Visit Website</span></a></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactsLocation;