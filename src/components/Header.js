import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

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

  const closeMenu = () => setIsMenuOpen(false);  // Hàm đóng menu khi click vào một liên kết

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white p-4 fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 shadow-xl border-b border-white/10 dark:border-gray-700/30 transition-all duration-500">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#summary" className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 dark:from-gray-100 dark:to-white bg-clip-text text-transparent border border-white/20 dark:border-gray-300/20 rounded-lg px-3 py-1 cursor-pointer tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg">
          NLT
        </a>
        
        {/* Menu for larger screens */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <a href="#summary" className="hover:underline underline-offset-8 px-3 py-1 rounded transition-colors duration-200 hover:bg-white/10">{t('header.summary')}</a>
          <a href="#skills" className="hover:underline underline-offset-8 px-3 py-1 rounded transition-colors duration-200 hover:bg-white/10">{t('header.skills')}</a>
          <a href="#working" className="hover:underline underline-offset-8 px-3 py-1 rounded transition-colors duration-200 hover:bg-white/10">{t('header.working')}</a>
          <a href="#education" className="hover:underline underline-offset-8 px-3 py-1 rounded transition-colors duration-200 hover:bg-white/10">{t('header.education')}</a>
          <a href="#additional" className="hover:underline underline-offset-8 px-3 py-1 rounded transition-colors duration-200 hover:bg-white/10">{t('header.additional')}</a>
          <a href="#contact" className="hover:underline underline-offset-8 px-3 py-1 rounded transition-colors duration-200 hover:bg-white/10">{t('header.contact')}</a>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-gray-700 hover:bg-yellow-400 hover:text-yellow-900 dark:hover:bg-yellow-400 dark:hover:text-yellow-900 transition-colors duration-200 flex items-center justify-center"
            title={isDark ? t('common.lightMode') : t('common.darkMode')}
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun className="text-yellow-300 text-lg" /> : <FaMoon className="text-gray-200 text-lg" />}
          </button>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-2 p-2 rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-gray-700 hover:bg-blue-400 hover:text-blue-900 dark:hover:bg-blue-400 dark:hover:text-blue-900 transition-colors duration-200 flex items-center justify-center"
            title={t('common.language')}
            aria-label="Toggle language"
          >
            <FaGlobe className="mr-1 text-base" />
            <span className="text-xs font-semibold tracking-wide">{i18n.language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-gray-700 hover:bg-yellow-400 hover:text-yellow-900 dark:hover:bg-yellow-400 dark:hover:text-yellow-900 transition-colors duration-200 flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun className="text-yellow-300 text-lg" /> : <FaMoon className="text-gray-200 text-lg" />}
          </button>
          
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-gray-700 hover:bg-blue-400 hover:text-blue-900 dark:hover:bg-blue-400 dark:hover:text-blue-900 transition-colors duration-200 flex items-center justify-center"
            aria-label="Toggle language"
          >
            <FaGlobe className="mr-1 text-base" />
            <span className="text-xs font-semibold tracking-wide">{i18n.language.toUpperCase()}</span>
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-2xl ml-2 p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-end bg-blue-600 dark:bg-gray-800 py-4 px-2 rounded-b-lg shadow-lg animate-fade-in">
          <a href="#summary" onClick={closeMenu} className="hover:underline underline-offset-8 px-4 py-2 rounded hover:bg-white/10 w-full text-right transition-colors">{t('header.summary')}</a>
          <a href="#skills" onClick={closeMenu} className="hover:underline underline-offset-8 px-4 py-2 rounded hover:bg-white/10 w-full text-right transition-colors">{t('header.skills')}</a>
          <a href="#working" onClick={closeMenu} className="hover:underline underline-offset-8 px-4 py-2 rounded hover:bg-white/10 w-full text-right transition-colors">{t('header.working')}</a>
          <a href="#education" onClick={closeMenu} className="hover:underline underline-offset-8 px-4 py-2 rounded hover:bg-white/10 w-full text-right transition-colors">{t('header.education')}</a>
          <a href="#additional" onClick={closeMenu} className="hover:underline underline-offset-8 px-4 py-2 rounded hover:bg-white/10 w-full text-right transition-colors">{t('header.additional')}</a>
          <a href="#contact" onClick={closeMenu} className="hover:underline underline-offset-8 px-4 py-2 rounded hover:bg-white/10 w-full text-right transition-colors">{t('header.contact')}</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
