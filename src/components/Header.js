import React, { useState, useEffect } from "react";
import { href } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const smoothScroll = (event) => {
      if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full top-0 left-0 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
      <a href="#summary" className="text-3xl font-bold border-t border-b cursor-pointer">NLT</a>
      
        {/* Menu for larger screens */}
        <nav className="hidden md:flex">
          <a href="#summary" className="hover:underline underline-offset-8 px-4">Summary</a>
          <a href="#skills" className="hover:underline underline-offset-8 px-4">Skills</a>
          <a href="#working" className="hover:underline underline-offset-8 px-4">Working</a>
          <a href="#education" className="hover:underline underline-offset-8 px-4">Education</a>
          <a href="#contact" className="hover:underline underline-offset-8 px-4">Contact</a>
        </nav>

        {/* Hamburger menu for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-end bg-blue-600 py-4">
          <a href="#summary" className="hover:underline underline-offset-8 px-4 py-2">Summary</a>
          <a href="#skills" className="hover:underline underline-offset-8 px-4 py-2">Skills</a>
          <a href="#working" className="hover:underline underline-offset-8 px-4 py-2">Working</a>
          <a href="#education" className="hover:underline underline-offset-8 px-4 py-2">Education</a>
          <a href="#contact" className="hover:underline underline-offset-8 px-4 py-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
