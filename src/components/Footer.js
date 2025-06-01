import React from "react";
import { useTranslation } from "react-i18next";
import { FaHeart, FaCode } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-600 dark:bg-gray-800 text-white p-6 w-full transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm md:text-base">
              &copy; {new Date().getFullYear()} Nguyen Lam Truong. {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span>{t('footer.madeWith')}</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>{t('footer.and')}</span>
            <FaCode className="text-blue-300" />
            <span>{t('footer.inVietnam')}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-blue-500 dark:border-gray-700 text-center">
          <p className="text-xs text-blue-100 dark:text-gray-400">
            {t('footer.portfolio')} • React.js • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
