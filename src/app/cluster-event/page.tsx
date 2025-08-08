import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const PastClusterEventPage: React.FC = () => {
  const events = [
    {
      title: 'Chill Chat & Goodies',
      academicYear: 2425,
      date: '17th August 2024',
      time: '11:00 AM - 4:00 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: "Let's get to know each other! Hearsay there is a COMPLEMENTARY Goodie bag shh...",
      image: '/AY2425 Past Cluster Event 1.png', // Make sure this image is in your /public folder
    },
    {
      title: 'Clementi Dinner & Shopping',
      academicYear: 2425,
      date: '8th September 2024',
      time: '5:30 PM - 10:00 PM',
      venue: 'Clementi',
      description: 'Join our dinner and have a little shopping trip with us! Expenses on me :O!',
      image: '/AY2425 Past Cluster Event 2.png', // Make sure this image is in your /public folder
    },
    {
      title: 'Semester End Pizza Party',
      academicYear: 2425,
      date: '20th October 2024',
      time: '6:00 PM - 7:00 PM',
      venue: 'Block 8 Level 4 Pantry',
      description: "Let's celebrate the last cluster event of the semester with a Pizza Party!",
      image: '/AY2425 Past Cluster Event 3.png', // Make sure this image is in your /public folder
    },
    {
      title: 'Welcome Party',
      academicYear: 2324,
      date: '20th March 2023',
      time: '5:00 PM - 8:00 PM',
      venue: 'Central Park',
      description: 'Kickstarting the new academic year with a fun-filled welcome party!',
      image: '/Testimonial__Background.jpg', // Make sure this image is in your /public folder
    },
  ];

  // This grouping logic is excellent and remains unchanged.
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
    <div className="bg-slate-900 min-h-screen text-slate-200">
      {/* Decorative background aurora */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>

      <div className="container mx-auto p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center my-12 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Past Cluster Events
        </h1>
        
        <div className="space-y-20">
          {sortedAcademicYears.map((academicYear) => (
            <section key={academicYear}>
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-300">
                Academic Year {academicYear.slice(0, 2)}/{Number(academicYear.slice(2, 4)) + 1}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {(groupedEvents[Number(academicYear)] as typeof events).map((event, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-2xl shadow-lg border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:-translate-y-1">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full aspect-video rounded-t-2xl"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                      <p className="text-slate-300 mb-5 leading-relaxed">{event.description}</p>
                      
                      {/* Event Detail Pills */}
                      <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 bg-slate-700 rounded-full px-3 py-1 text-sm text-slate-200">
                              <FaCalendarAlt className="text-indigo-400" />
                              <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-700 rounded-full px-3 py-1 text-sm text-slate-200">
                              <FaClock className="text-indigo-400" />
                              <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-700 rounded-full px-3 py-1 text-sm text-slate-200">
                              <FaMapMarkerAlt className="text-indigo-400" />
                              <span>{event.venue}</span>
                          </div>
                      </div>
                    </div>
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

export default PastClusterEventPage;