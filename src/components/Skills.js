import React from "react";
import { FaCode, FaDatabase, FaCloud, FaGitAlt, FaCss3Alt, FaServer,FaPuzzlePiece } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Javascript", "Python"],
    icon: FaCode,
    iconColor: "text-blue-600"
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Koajs", "Express.js", "FastAPI", "Sequelize"],
    icon: FaServer,
    iconColor: "text-orange-600"
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "React.js", "Gatsby", "Edge", "TailwindCSS", "Material UI"],
    icon: FaCss3Alt,
    iconColor: "text-blue-500"
  },  
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "MSSQL"],
    icon: FaDatabase,
    iconColor: "text-green-600"
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "S3", "CloudFront (CDN)"],
    icon: FaCloud,
    iconColor: "text-yellow-600"
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Azure DevOps"],
    icon: FaGitAlt,
    iconColor: "text-red-600"
  },
  {
    category: "APIs & Integrations",
    skills: ["Facebook Graph API", "Grab API", "RESTful APIs", "OAuth 2.0"],
    icon: FaPuzzlePiece, // biểu tượng mô-đun, tích hợp
    iconColor: "text-purple-600"
  }
  
];



const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 sticky top-16 bg-white py-2">SKILLS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <skill.icon size={24} className={skill.iconColor} />
                <h3 className="text-lg md:text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-700">
                {skill.skills.map((skillItem, idx) => (
                  <li key={idx} className="mb-1">{skillItem}</li>
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
