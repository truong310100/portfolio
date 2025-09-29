import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const workExperiences = [
  // ------------------------ 2023 ------------------------
  {
    title: "xettuyen.vhu.edu.vn Website",
    description: "Customizable registration form based on the requirements of each institution.",
    time: "2023",
    link: "https://xettuyen.vhu.edu.vn/"
  },
  {
    title: "quetmavach.vhu.edu.vn Website",
    description: "Barcode scanning for candidate check-in and candidate list management.",
    time: "2023",
    link: "https://quetmavach.vhu.edu.vn/"
  },
  {
    title: "sukien.myu.vn/xuangankettetdoanvien Website",
    description: "Landing page for the 2023 Spring Union Bonding Event. Includes features like like, share, comment, and point tracking.",
    time: "2023",
    link: "#"
  },

  // ------------------------ 2024 ------------------------
  {
    title: "Upgraded Websites for HungHau Education Institutions",
    description: "Completed upgrades for websites under HungHau Education system.",
    time: "2024",
    link: "https://aulachue.edu.vn/"
  },
  {
    title: "Scoring Website for HungHau Holdings Teambuilding 2024",
    description: "Developed a scoring system website with UI for judges during the Teambuilding event.",
    time: "2024",
    link: "https://sukien.myu.vn/"
  },
  {
    title: "AI-integrated Website for VHU",
    description: "Built and integrated an AI chatbot system for VHU, with deployment and evaluation.",
    time: "2024",
    link: "https://www.bizchat.vn/"
  },
  {
    title: "Bizfly CRM Call Center Implementation",
    description: "Integrated Bizfly CRM with Facebook fanpages and supported operation setup.",
    time: "2024",
    link: "https://www.bizflycrm.vn/"
  },
  {
    title: "vivu.vhu.edu.vn Website",
    description: "Built an event registration and barcode-based check-in system.",
    time: "2024",
    link: "https://vivu.vhu.edu.vn/"
  },
  {
    title: "viectute.vhu.edu.vn Website",
    description: "Includes post sharing, posting, and liking functionalities.",
    time: "2024",
    link: "https://viectute.vhu.edu.vn/"
  },
  {
    title: "festivalpiano.vhu.edu.vn Website",
    description: "Supports the 2024 Piano Festival event, with Facebook post sharing features.",
    time: "2024",
    link: "https://festivalpiano.vhu.edu.vn/"
  },
  {
    title: "xulynhaphoc.vhu.edu.vn Website",
    description: "Serves the 2024 enrollment process for the Admission Consulting Center at VHU.",
    time: "2024",
    link: "https://xulynhaphoc.vhu.edu.vn/"
  },
  {
    title: "huongnghiep.h.edu.vn Website",
    description: "Career orientation for high school students, serving admission purposes.",
    time: "2024",
    link: "https://huongnghiep.h.edu.vn/"
  },
  {
    title: "Self-Stacking Tool for Surveillance Room Camera Access",
    description: "A tool that automates access to surveillance room cameras with an integrated timer feature.",
    time: "2024",
  },
  {
    title: "IT Support and Helpdesk Automation Tool",
    description: "An application that automates the setup and configuration of tools for IT support and helpdesk functions.",
    time: "2024",
  },

  // ------------------------ 2025 ------------------------
  {
    title: "myU.vn Project Takeover",
    description: "Received handover of the myU.vn system from partner units.",
    time: "2025",
    link: "https://myu.vn"
  },
  {
    title: "Upgrading myU.vn System",
    description: "Enhanced delivery, payment, and banking systems.",
    time: "2025",
    link: "https://myu.vn/shop"
  },
  {
    title: "social.myu.vn Website",
    description: "Analyzed engagement data from internal users on Facebook.",
    time: "2025",
    link: "https://social.myu.vn/"
  },
  {
    title: "sendmail.myu.vn Website",
    description: "Allows internal users to log in, upload lists, create templates, and send bulk emails.",
    time: "2025",
    link: "https://mail.myu.vn/"
  },
  {
    title: "vanban.myu.vn Website",
    description: "Internal system to view officially issued administrative documents.",
    time: "2025",
    link: "https://vanban.myu.vn/"
  },
  {
    title: "qr.myu.vn Website",
    description: "Internal tool to generate shortened links and QR templates.",
    time: "2025",
    link: "https://qr.myu.vn/"
  },
  {
    title: "ticket.myu.vn Website",
    description: "Internal tool to manage event tickets.",
    time: "2025",
    link: "https://ticket.myu.vn/"
  }
];


const WorkExperience = () => {
  const { t } = useTranslation();
  const years = [...new Set(workExperiences.map((exp) => exp.time))];
  const [selectedYear, setSelectedYear] = useState(years[2]);
  const [page, setPage] = useState(0);
  const cardsPerPage = 4;

  const filtered = workExperiences.filter((exp) => exp.time === selectedYear);
  const paginated = filtered.slice(page * cardsPerPage, (page + 1) * cardsPerPage);
  const totalPages = Math.ceil(filtered.length / cardsPerPage);

  return (
    <section id="working" className="py-16 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4 sticky top-16 bg-gray-100 dark:bg-gray-900 py-2 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{t('working.title')}</h2>
          <div className="flex items-center max-md:hidden">
            {years.map((year, idx) => (
              <React.Fragment key={year}>
                <button
                  onClick={() => {
                    setSelectedYear(year);
                    setPage(0);
                  }}
                  className={`px-4 py-1 rounded-full border-2 font-semibold text-sm transition-all duration-200
                    ${selectedYear === year
                      ? 'bg-blue-600 border-blue-600 text-white scale-110'
                      : 'bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-blue-400 hover:border-blue-400 hover:text-white'}
                `}
                  aria-label={`Select year ${year}`}
                >
                  {year}
                </button>
                {idx < years.length - 1 && (
                  <span className="w-8 h-0.5 bg-gray-400 dark:bg-gray-500 mx-2"></span>
                )}
              </React.Fragment>
            ))}
          </div>

          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setPage(0);
            }}
            className="md:hidden rounded px-3 py-1 outline-none hover:border bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-colors duration-300"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between mb-4">
          <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            {t('working.totalProjects')}: {filtered.length}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {paginated.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border dark:border-gray-700 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300">{exp.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">{exp.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2 transition-colors duration-300">{exp.time}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{t('working.link')}: {exp.link}</p>
              </div>
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 transition-colors duration-300">
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {t('working.view')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 text-gray-900 dark:text-white transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>
          <span className="text-gray-900 dark:text-white transition-colors duration-300">
             {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 text-gray-900 dark:text-white transition-colors duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;