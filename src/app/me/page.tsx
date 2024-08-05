import React from 'react';

const Me: React.FC = () => {
    const sections = [
        {
            title: 'My introduction',
            description: 'Hi! My name is Jin Han and I am the cluster leader of Block 8 Level 4 for the Academic Year 2425. I am currently staying in Room C.\n'
        },
        {
            title: 'How do you contact me?',
            description: 'Email: e1083004@u.nus.edu.\nTelegram: @jinhan1202'
        },
        {
            title: 'What is a cluster leader?',
            description: 'We are appointed by the PGPR Residential Life Office to accomodate residence during their stay. I work closely with Resident Fellows (RF) and Resident Assistants (RA) to look into residents’ welfare within the cluster.'
        },
        {
            title: 'What is the responsible of cluster leader',
            description: '- Promoting community living among cluster through establishing strong rapport with your residents.\n- Ensure residence physical and mental wellbeing.\n- I am your fire wardens to ensure the safety and security within the cluster.\n- Organizing three cluster events for each semester.'
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-5xl font-bold mt-4 mb-12 text-center">About Me</h1>
            {sections.map((section, index) => (
                <div key={index} className="mb-8 container ml-12 mr-12 mt-12">
                    <h2 className="text-4xl font-bold underline underline-offset-4 decoration-green-500 mb-4">{section.title}</h2>
                    <p className="text-lg text-gray-700 whitespace-pre-line">{section.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Me;
