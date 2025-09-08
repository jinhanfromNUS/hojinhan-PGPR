import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const PastClusterEventPage: React.FC = () => {
  const events = [
    // ... your events array remains the same
    {
      title: 'Dinner at Clementi',
      academicYear: 2425,
      date: '4th April 2025',
      time: '6:30 PM - 8:30 PM',
      venue: 'Clementi',
      description: "Tired of PGP food? Let's have dinner at somewhere else... Clementi food court. Meals on me!",
      image: '/AY2425 Sem 2 Past Cluster Event 3.png',
    },
    {
      title: 'Jolibee and Swtich',
      academicYear: 2425,
      date: '3rd March 2025',
      time: '7:00 PM - 10:00 PM',
      venue: 'Residence 3 Lounge',
      description: "Did I hear Jolibee? Yes, that's right! We are having Jolibee tonight and it's free :D. We have switches too.",
      image: '/AY2425 Sem 2 Past Cluster Event 2.jpg',
    },
    {
      title: 'Chinese New Year goodies  ',
      academicYear: 2425,
      date: '21st January 2025',
      time: '',
      venue: '',
      description: "Welcome back to PGP! Let's start our semester with some welfare XD",
      image: '/AY2425 Sem 2 Past Cluster Event 1.png',
    },
    {
      title: 'Semester End Pizza Party',
      academicYear: 2425,
      date: '20th October 2024',
      time: '6:00 PM - 7:00 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: "Let's celebrate the last cluster event of the semester with a Pizza Party!",
      image: '/AY2425 Sem 1 Past Cluster Event 3.png',
    },
    {
      title: 'Clementi Dinner & Shopping',
      academicYear: 2425,
      date: '8th September 2024',
      time: '5:30 PM - 10:00 PM',
      venue: 'Clementi',
      description: 'Join our dinner and have a little shopping trip with us! Expenses on me :O!',
      image: '/AY2425 Sem 1 Past Cluster Event 2.png',
    },
    {
      title: 'Chill Chat & Goodies',
      academicYear: 2425,
      date: '17th August 2024',
      time: '11:00 AM - 4:00 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: "Let's get to know each other! Hearsay there is a COMPLEMENTARY Goodie bag shh...",
      image: '/AY2425 Sem 1 Past Cluster Event 1.png',
    },
    {
      title: 'Pizza Party',
      academicYear: 2324,
      date: '24th March 2024',
      time: '1:45 PM - 3:10 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: "Who doesn't like free pizza, eh?",
      image: '/AY2324 Sem 2 Past Cluster Event 2.png',
    },
    {
      title: 'Welfare Packs for school return',
      academicYear: 2324,
      date: '7th February 2024',
      time: '10:00 AM - 12:00 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: 'Boost your semester with some welfare',
      image: '/AY2324 Sem 2 Past Cluster Event 1.png',
    },
    {
      title: 'Welfare Packs for finals and chit chat session',
      academicYear: 2324,
      date: '6th November 2023',
      time: '10:30 AM - 11:30 AM',
      venue: 'Block 8 Level 4 Pantry',
      description: 'Boost your final with some welfare',
      image: '/AY2324 Sem 1 Past Cluster Event 2.png',
    },
    {
      title: 'Chit Chat Session with Pizzas and Soft Drinks and Board Games',
      academicYear: 2324,
      date: '22nd October 2023',
      time: '7:30 PM - 8:30 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: 'Come join us with free pizzas and soft drinks! Take this opprtunity to make new friends from another cluster as We are having this cluster event with Block 7 Level 7 cluster :D',
      image: '/AY2324 Sem 1 Past Cluster Event 1.png',
    },
  ];

  // Grouping logic is excellent, no changes needed here.
  const groupedEvents = events
    .sort((a, b) => b.academicYear - a.academicYear)
    .reduce((groups, event) => {
      const year = event.academicYear;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(event);
      return groups;
    }, {} as Record<number, typeof events>);
  
  const sortedAcademicYears = Object.keys(groupedEvents).sort((a, b) => Number(b) - Number(a));

  return (
    // Main container with a light background
    <div className="bg-slate-50 min-h-screen">
      {/* The dark aurora background is removed for the light theme */}
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center my-8 sm:my-12 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Past Cluster Events
        </h1>
        
        <div className="space-y-16">
          {sortedAcademicYears.map((academicYear) => (
            <section key={academicYear}>
              {/* Light-theme section header */}
              <h2 className="text-3xl font-bold mb-8 pb-4 text-center text-slate-800 border-b border-slate-200">
                Academic Year {academicYear.slice(0, 2)}/{Number(academicYear.slice(2, 4))}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {(groupedEvents[Number(academicYear)] as typeof events).map((event, index) => (
                  // Light-theme Event Card with shadows
                  <div key={index} className="group bg-white rounded-2xl shadow-md border border-slate-200/60 transition-all duration-300 hover:shadow-xl hover:border-indigo-300/80">
                    <div className="rounded-t-2xl overflow-hidden">
                       <Image
                        src={event.image}
                        alt={event.title}
                        width={500}
                        height={281}
                        className="object-cover w-full aspect-video transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{event.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{event.description}</p>
                      
                      {/* Light-theme Detail Pills - Conditionally rendered */}
                      <div className="flex flex-wrap gap-3">
                        {/* Only show date if it exists */}
                        {event.date && (
                          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 text-sm font-medium">
                            <FaCalendarAlt className="text-indigo-600" />
                            <span className="text-slate-700">{event.date}</span>
                          </div>
                        )}
                        
                        {/* Only show time if it exists */}
                        {event.time && (
                          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 text-sm font-medium">
                            <FaClock className="text-indigo-600" />
                            <span className="text-slate-700">{event.time}</span>
                          </div>
                        )}
                        
                        {/* Only show venue if it exists */}
                        {event.venue && (
                          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 text-sm font-medium">
                            <FaMapMarkerAlt className="text-indigo-600" />
                            <span className="text-slate-700">{event.venue}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PastClusterEventPage;