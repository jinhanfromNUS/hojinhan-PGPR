"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { FaBars, FaTimes, FaHome, FaUser, FaPhone, FaBuilding, FaImages } from 'react-icons/fa';

const navLinks = [
    { href: '/', text: 'Home', icon: <FaHome /> },
    { href: '/me', text: 'About Me', icon: <FaUser /> },
    { href: '/contacts', text: 'Contacts', icon: <FaPhone /> },
    { href: '/facilities', text: 'PGPR Facilities', icon: <FaBuilding /> }, 
    { href: '/cluster-event', text: 'Past Cluster Events', icon: <FaImages /> },
];

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close sidebar if a link is clicked (useful on mobile)
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // This logic remains excellent, no changes needed here.
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.sidebar') && !target.closest('.burger-menu')) {
                setIsOpen(false);
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            {/* Burger Menu Button */}
            <button
                className="burger-menu fixed top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-lg cursor-pointer z-50 transition-transform duration-300 hover:scale-110"
                onClick={toggleSidebar}
                aria-label="Toggle navigation menu"
            >
                <div className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </div>
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <div
                className={`sidebar fixed top-0 left-0 w-72 h-full bg-slate-800 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}
            >
                {/* Sidebar Header */}
                <div className="p-6 border-b border-slate-700">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                        PGPR Guide
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow pt-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className={`
                                    flex items-center gap-4 px-6 py-4 w-full text-lg font-medium border-l-4
                                    transition-all duration-200
                                    ${isActive
                                        ? 'bg-slate-700/50 text-white border-indigo-400'
                                        : 'text-slate-300 border-transparent hover:bg-slate-700 hover:text-white'
                                    }
                                `}
                            >
                                <div className={isActive ? 'text-indigo-400' : ''}>{link.icon}</div>
                                <span>{link.text}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer (Optional) */}
                <div className="p-4 text-center text-xs text-slate-500 border-t border-slate-700">
                    <p>AY 25/26 Edition</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;