import React from 'react';
import { FaBullhorn, FaCalendarAlt, FaInfoCircle, FaExclamationCircle, FaGift, FaMapMarkerAlt } from 'react-icons/fa';

const AnnouncementPage: React.FC = () => {
    const announcements = [
        {
            title: 'Cluster Event 1: Chill Chat and Goodies',
            date: '17th August 2024 5:00 PM - 7:00 PM',
            venue: 'Block 8 Level 4 Pantry',
            description: 'Let\'s have a chill and chat and collect your COMPLEMENTARY Goodie bag :O!',
            type: 'event', // event, info, alert
        },
        // {
        //     title: 'Library Renovation',
        //     date: 'September 1 - November 30, 2024',
        //     venue: '',
        //     description: 'The main campus library will be undergoing renovations. Certain areas will be closed, and noise levels may be higher than usual.',
        //     type: 'info',
        // },
        // {
        //     title: 'Urgent: Water Supply Interruption',
        //     date: 'August 16, 2024',
        //     venue: '',
        //     description: 'There will be a water supply interruption from 9 AM to 5 PM due to maintenance work. Please plan accordingly.',
        //     type: 'alert',
        // },
    ];

    const getIconAndColor = (type: string) => {
        switch (type) {
            case 'event':
                return { icon: <FaGift />, color: 'bg-orange-50 text-orange-600' };
            case 'info':
                return { icon: <FaInfoCircle />, color: 'bg-blue-50 text-blue-600' };
            default:
                return { icon: <FaBullhorn />, color: 'bg-red-50 text-red-600' };
        }
    };

    return (
        <div className="p-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 min-h-screen">
            <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">Campus Announcements</h1>
            {announcements.map((announcement, index) => {
                const { icon, color } = getIconAndColor(announcement.type);
                return (
                    <div key={index} className={`mb-8 p-6 rounded-lg shadow-lg ${color} flex items-start`}>
                        <div className="mr-4 text-4xl">
                            {icon}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">{announcement.title}</h2>
                            {announcement.date && (
                                <p className="text-lg mb-4">
                                    <FaCalendarAlt className="inline mr-2" /> {announcement.date}
                                </p>
                            )}
                            {announcement.venue && (
                                <p className="text-lg mb-4">
                                    <FaMapMarkerAlt className="inline mr-2" /> {announcement.venue}
                                </p>
                            )}
                            <p className="text-lg">{announcement.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AnnouncementPage;
