import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventPage: React.FC = () => {
  const events = [
    {
      title: 'Cluster Event 1: Chill Chat and Goodies',
      date: '17th August 2024',
      time: '11:00 AM - 4:00 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: 'Let\'s have a chill and chat and collect your COMPLEMENTARY Goodie bag :O!',
      image: '/Testimonial__Background.jpg'
    },
    // {
    //   title: 'Sample Event Title 2',
    //   date: 'August 7, 2024',
    //   time: '1:00 PM - 5:00 PM',
    //   venue: '456 Another Venue, Townsville',
    //   description: 'Description for the second event goes here. It provides details about the event.',
    //   image: 'https://via.placeholder.com/800x600'
    // },
    // Add more events here
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold mt-4 mb-12 text-center text-blackish">Cluster Events</h1>
      {events.map((event, index) => (
        <div key={index} className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/3 p-4">
            <div className="border rounded-lg shadow-md p-6 h-full flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <p className="flex items-center text-lg text-gray-700 mb-2">
                <FaCalendarAlt className="mr-2" /> {event.date}
              </p>
              <p className="flex items-center text-lg text-gray-700 mb-2">
                <FaClock className="mr-2" /> {event.time}
              </p>
              <p className="flex items-center text-lg text-gray-700 mb-2">
                <FaMapMarkerAlt className="mr-2" /> {event.venue}
              </p>
              <p className="text-lg text-gray-500 mt-4 mr-4 ml-4">{event.description}</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <div className="h-full">
              <img src={event.image} alt={event.title} className="object-cover w-full h-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
