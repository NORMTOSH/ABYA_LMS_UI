"use client"

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useRouter } from 'next/navigation'
import { useState } from "react";
import ThemeProvider from '../../app/ThemeSwitcher';
// import lightMode from '../../../public/light-mode.svg';
// import darkMode from '../../../public/nightmode.svg';


const Navbar = () => {
  // State to manage navbar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent shadow-none h-[100px]">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img width="150" height="150" src="https://abyauniversity.com/wp-content/uploads/2022/08/abya-university-resized.png" class="attachment-large size-large wp-image-3255" alt="" loading="lazy" srcset="https://abyauniversity.com/wp-content/uploads/2022/08/abya-university-resized.png 592w, https://abyauniversity.com/wp-content/uploads/2022/08/abya-university-resized-300x129.png 300w" sizes="(max-width: 592px) 100vw, 592px"/>          
        </div>
        <nav className="hidden lg:flex md:flex md:text-sm items-center">
          <ul className="flex justify-evenly px-4">
            <li className="px-2"><a href="/" className="font-semibold text-lg md:text-sm lg:text-lg text-yellow-500 transition-colors duration-300 ease-in-out hover:text-yellow-500 hover:cursor-pointer">Home</a></li>
            <li className="px-2">
              <a href="/aboutpage" className="font-semibold text-lg md:text-sm lg:text-lg text-gray-500 relative transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:cursor-pointer hover:underline hover:scale-110">
                About Us
              </a>
            </li>
            <li className="px-2"><a href="/platform"  className="font-semibold text-lg md:text-sm lg:text-lg text-gray-500 transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:cursor-pointer hover:underline">The Platform</a></li>
            <li className="px-2"><a href="/daopage"  className="font-semibold text-lg md:text-sm lg:text-lg text-gray-500 transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:cursor-pointer hover:underline">DAO & Tokenomics</a></li>
            <li className="px-2"><a href="/communitypage"  className="font-semibold text-lg md:text-sm lg:text-lg text-gray-500 transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:cursor-pointer hover:underline">Community</a></li>
            <li className="px-2"><a href="/resources"  className="font-semibold text-lg md:text-sm lg:text-lg text-gray-500 transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:cursor-pointer hover:underline">Resources</a></li>
            <li className="px-2"><a href="/contactpage"  className="font-semibold text-lg md:text-sm lg:text-lg text-gray-500 transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:cursor-pointer hover:underline">Contact Us</a></li>
          </ul>
        </nav>  
      <ThemeProvider />
 
        <div className="flex lg:hidden md:hidden right-2">
          {/* Mobile menu button */}
          <button
            // Handle click to open mobile menu
            onClick={toggleNavbar}
            className="text-gray-700 m-2 dark:text-gray-200 hover:text-blue-500 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        
      </div>

       {/* Navbar content */}
       {isOpen && (
      <nav id="navbar" className="py-2 top-[150px] z-10">
          <ul className="h-auto relative bg-gray-100  dark:bg-gray-700 dark:text-gray-200 mx-auto  w-full shadow-none p-4 space-y-3">
          <li className="mx-auto flex items-center justify-center p-2">
            <a href="/" class="font-semibold text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">Home</a>
          </li>
          <li className="mx-auto flex items-center justify-center p-2">
            <a href="/aboutpage" class="font-semibold text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">About Us</a>
          </li>
          <li className="mx-auto flex items-center justify-center p-2">
            <a href="/platform" class="font-semibold text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">The Platform</a>
          </li>
          <li className="mx-auto flex items-center justify-center p-2">
            <a href="/daotokenomics" class="font-semibold text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">DAO & Tokenomics</a>
          </li>
          <li className="mx-auto flex items-center justify-center p-2">
            <a href="/communitypage" class="font-semibold text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">Community</a>
          </li>
          <li className="mx-auto flex items-center justify-center p-2">
            <a href="/resources" class="font-semibold text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">Resources</a>
          </li>
          <li className="mx-auto flex items-center justify-center p-2">
             <a href="/contactpage" class="font-semibold text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400 hover:cursor-pointer">Contact Us</a>
          </li>

          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
