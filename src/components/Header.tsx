"use client"

import React, { useState, useEffect } from 'react';
import { BiLink } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

const socials = [
    { 
        href: 'https://www.instagram.com/nus_pgpr/', 
        icon: <BsInstagram />,
        label: 'PGPR Instagram'
    },
    { 
        href: 'https://linktr.ee/pgpr', 
        icon: <BiLink />,
        label: 'PGPR Linktree'
    },
];

const Header: React.FC = () => {
    // A slightly refined list for better visual balance
    const changeableItems = ['Feedback', 'Events', 'Contacts', 'Laundry', 'Parcels', 'Mail', 'Facilities', 'Gym', 'Badminton', 'Dance Studio', 'Karaoke'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Trigger the "out" animation
            setIsAnimating(true); 

            // Wait for the animation to finish before changing the text
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % changeableItems.length);
                // After text changes, remove the class to trigger the "in" animation
                setIsAnimating(false); 
            }, 600); // This duration should be slightly longer than the transition duration

        }, 3000); // Time between each word change

        return () => clearInterval(interval);
    }, [changeableItems.length]);

    return (
        // --- KEY CHANGES HERE ---
        <header className="py-10 relative bg-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8 flex items-center justify-end overflow-hidden">
            
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl sm:text-2xl md:text-3xl font-medium text-slate-400 whitespace-nowrap">
                <span className="hidden sm:inline">Your Guide to </span>
                <span className="font-bold text-slate-100 w-[150px] sm:w-[170px] md:w-[200px] inline-block text-left">
                    <span 
                        className={`
                            bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent
                            transition-all duration-500 ease-in-out
                            ${isAnimating ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}
                        `}
                        style={{ display: 'inline-block' }}
                    >
                        {changeableItems[currentIndex]}
                    </span>
                </span>
            </h1>

            {/* I've also updated the social icons to match the dark theme in case you uncomment them */}
            {/* <div className="flex items-center gap-2 sm:gap-4">
                {socials.map((social, index) => (
                    <a 
                        key={index}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={social.label}
                        className="text-slate-400 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-slate-800"
                    >
                        <div className="text-2xl">{social.icon}</div>
                    </a>
                ))}
            </div> */}
        </header>
    );
};

export default Header;