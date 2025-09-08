"use client"

import React from 'react';
import { BiLink } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socials = [
    { 
      href: 'https://www.instagram.com/nus_pgpr/', 
      icon: <BsInstagram size={20} />,
      label: 'PGPR Instagram'
    },
    { 
      href: 'https://linktr.ee/pgpr', 
      icon: <BiLink size={20} />,
      label: 'PGPR Linktree'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/me' },
    { name: 'Contacts & Hotlines', href: '/contacts'},
    { name: 'Facilities', href: '/facilities' }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-indigo-400" />,
      text: 'hojinhan@nus.edu.sg',
      href: 'mailto:hojinhan@nus.edu.sg'
    },
    {
      icon: <FaTelegramPlane className="text-indigo-400" />,
      text: 'Telegram: @jinhan1202',
      href: 'https://t.me/jinhan1202'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              PGPR<span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">.</span>
            </h3>
            <p className="max-w-xs text-slate-400">
              Your guide to life at Prince George's Park Residence, National University of Singapore.
            </p>
            <p className="max-w-xs text-slate-400">
              Created by Ho Jin Han.
            </p>
            {/* <div className="flex space-x-4 pt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-indigo-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Me</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Ho Jin Han. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-500">
              {/* <a href="/privacy" className="hover:text-indigo-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-indigo-400 transition-colors duration-300">
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;