import React from "react";
import { useTranslation } from "react-i18next";
import { FaCode, FaDatabase, FaCloud, FaGitAlt, FaCss3Alt, FaServer,FaPuzzlePiece } from "react-icons/fa";

const skillsData = [
  {
    category: "skills.programming",
    skills: ["Javascript", "Python"],
    icon: FaCode,
    iconColor: "text-blue-600"
  },
  {
    category: "skills.backend",
    skills: ["Node.js", "Koajs", "Express.js", "FastAPI", "Sequelize"],
    icon: FaServer,
    iconColor: "text-orange-600"
  },
  {
    category: "skills.frontend",
    skills: ["HTML", "CSS", "React.js", "Gatsby", "Edge", "TailwindCSS", "Material UI"],
    icon: FaCss3Alt,
    iconColor: "text-blue-500"
  },  
  {
    category: "skills.databases",
    skills: ["MySQL", "MongoDB", "MSSQL"],
    icon: FaDatabase,
    iconColor: "text-green-600"
  },
  {
    category: "skills.cloud",
    skills: ["AWS", "S3", "CloudFront (CDN)"],
    icon: FaCloud,
    iconColor: "text-yellow-600"
  },
  {
    category: "skills.versionControl",
    skills: ["Git", "GitHub", "GitLab", "Azure DevOps"],
    icon: FaGitAlt,
    iconColor: "text-red-600"
  },
  {
    category: "skills.apis",
    skills: ["Facebook Graph API", "Grab API", "RESTful APIs", "OAuth 2.0"],
    icon: FaPuzzlePiece,
    iconColor: "text-purple-600"
  }
];



const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-12 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 sticky top-16 bg-white dark:bg-gray-800 py-2 text-gray-900 dark:text-white transition-colors duration-300">{t('skills.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-600 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <skill.icon size={24} className={skill.iconColor} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{t(skill.category)}</h3>
              </div>
              <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {skill.skills.map((skillItem, idx) => (
                  <li key={idx} className="mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">{skillItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
