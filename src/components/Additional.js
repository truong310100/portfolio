import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaLightbulb, FaClock, FaUsers, FaHeart, FaComment } from "react-icons/fa";

const Additional = () => {
  const { t } = useTranslation();

  const additionalSkills = [
    {
      icon: <FaLightbulb className="text-yellow-500 dark:text-yellow-400" />,
      key: "problemSolving"
    },
    {
      icon: <FaClock className="text-green-500 dark:text-green-400" />,
      key: "timeManagement"
    },
    {
      icon: <FaUsers className="text-blue-500 dark:text-blue-400" />,
      key: "teamwork"
    },
    {
      icon: <FaComment className="text-purple-500 dark:text-purple-400" />,
      key: "communication"
    },
    {
      icon: <FaHeart className="text-red-500 dark:text-red-400" />,
      key: "dedication"
    },
    {
      icon: <FaCheckCircle className="text-indigo-500 dark:text-indigo-400" />,
      key: "attention"
    }
  ];

  return (
    <section id="additional" className="py-16 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gray-100 dark:bg-gray-900 sticky top-16 py-2 text-gray-900 dark:text-white transition-colors duration-300">
          {t('additional.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl mt-1">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {t(`additional.skills.${skill.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                    {t(`additional.skills.${skill.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
            {t('additional.personalQualities.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                {t('additional.personalQualities.strengths')}
              </h4>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <FaCheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm">{t(`additional.personalQualities.strength${num}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
                {t('additional.personalQualities.interests')}
              </h4>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <FaHeart className="text-red-500 dark:text-red-400 flex-shrink-0" />
                    <span className="text-sm">{t(`additional.personalQualities.interest${num}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additional;
