import React from "react";
import { useTranslation } from "react-i18next";

const educationData = [
  {
    title: "Bachelor of Information Technology",
    school: "Van Hien University, Ho Chi Minh City",
    time: "2018 - 2022",
    // gpa: "2.88/4",
    achievements: ["Developed a chatbot system for student admissions consultation"],
    link: "#"
  },
  {
    title: "Pedagogical Certification",
    school: "Hanoi National University of Education 2",
    time: "2024 - 01/2025",
    // gpa: "2.84/4",
    achievements: [],
    link: "#"
  },
  {
    title: "Second Degree in English Language",
    school: "Cuu Long University",
    time: "2024 - Present",
    achievements: [],
    link: "#"
  },
  {
    title: "MEAN Stack Developer Program",
    school: "Khoa Pham Training Center",
    time: "2023",
    achievements: [],
    link: "#"
  },
  {
    title: "Top 10 Outstanding Individuals of 2024",
    school: "HungHau Holdings Group",
    time: "2024",
    achievements: [],
    link: "#"
  }
];


const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-16 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 bg-white dark:bg-gray-800 sticky top-16 py-2 text-gray-900 dark:text-white transition-colors duration-300">{t('education.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow-md border dark:border-gray-600 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300">{edu.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 transition-colors duration-300">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2 transition-colors duration-300">{edu.time}</p>
                {edu.gpa && <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">GPA: {edu.gpa}</p>}
                {edu.achievements?.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
