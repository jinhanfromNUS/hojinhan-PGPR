import React from 'react';
import { FaUserCircle, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';
import { BiRightArrowCircle } from 'react-icons/bi'; // A slightly more modern checkmark icon

// Data is perfect, no changes needed here.
const profileData = {
    name: 'Jin Han',
    role: 'Cluster Leader (AY 25/26)',
    room: 'Block 8, Level 4, Room C',
    introduction: 'Hi everyone! I\'m your friendly cluster leader for this academic year. My goal is to help build a supportive and welcoming community for all of us here in the residence. Please don\'t hesitate to reach out if you have any questions or just want to chat!',
    contact: {
        email: 'e1083004@u.nus.edu',
        telegram: '@jinhan1202',
    }
};

const detailsSections = [
    {
        title: 'What is a Cluster Leader?',
        description: 'We are appointed by the PGPR Residential Life Office to support residents during their stay. I work closely with Resident Fellows (RFs) and Resident Assistants (RAs) to look after residents’ welfare within our cluster.'
    },
    {
        title: 'How I Can Help',
        points: [
            'Promoting community living through fun events and activities.',
            'Ensuring your physical and mental well-being.',
            'Acting as a fire warden to ensure cluster safety.',
            'Organizing at least three cluster events each semester.'
        ]
    }
];

const Me: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">

                {/* --- Main Profile Card --- */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 border-t-4 border-indigo-500">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-violet-200 to-indigo-300 rounded-full flex items-center justify-center shadow-lg">
                            <FaUserCircle className="text-6xl md:text-7xl text-indigo-600" />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="text-center md:text-left flex-grow">
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                            {profileData.name}
                        </h1>
                        <p className="text-lg font-medium text-slate-700 mt-1">{profileData.role}</p>
                        <p className="text-md text-slate-500">{profileData.room}</p>
                        
                        <p className="mt-5 text-slate-700 leading-relaxed max-w-xl mx-auto md:mx-0">
                            {profileData.introduction}
                        </p>

                        {/* Contact Info Pills */}
                        <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3">
                            <a href={`mailto:${profileData.contact.email}`} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold px-4 py-2.5 rounded-full hover:bg-indigo-100 transition-all duration-300 transform hover:scale-105">
                                <FaEnvelope />
                                <span>Email Me</span>
                            </a>
                            <a href={`https://t.me/${profileData.contact.telegram.substring(1)}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold px-4 py-2.5 rounded-full hover:bg-indigo-100 transition-all duration-300 transform hover:scale-105">
                                <FaTelegramPlane />
                                <span>Message on Telegram</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Details Grid --- */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* "What is a Cluster Leader?" Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-7 border-t-4 border-indigo-400">
                         <h2 className="text-2xl font-bold text-slate-800 mb-3">{detailsSections[0].title}</h2>
                         <p className="text-slate-600 leading-relaxed">{detailsSections[0].description}</p>
                    </div>

                    {/* "How I Can Help" List Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-7 border-t-4 border-indigo-400">
                         <h2 className="text-2xl font-bold text-slate-800 mb-4">{detailsSections[1].title}</h2>
                         <ul className="space-y-3">
                            {detailsSections[1].points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <BiRightArrowCircle className="text-indigo-500 text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-600 leading-relaxed">{point}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Me;