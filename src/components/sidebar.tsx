"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <div className="burger-menu fixed top-5 left-5 text-2xl cursor-pointer z-50" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`sidebar border-r font-medium text-[17px] fixed top-0 left-0 w-64 h-full bg-white flex flex-col items-center justify-center transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
                <Link className="sidebar__link relative my-4" href="/">
                    Home
                </Link>
                <Link className="sidebar__link relative my-4" href="/me">
                    About Me
                </Link>
                <Link className="sidebar__link relative my-4" href="/contacts">
                    Contacts
                </Link>
                <Link className="sidebar__link relative my-4" href="/residence-matters">
                    Residence Matters
                </Link>
                <Link className="sidebar__link relative my-4" href="/facilities">
                    PGPR Facilities
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
