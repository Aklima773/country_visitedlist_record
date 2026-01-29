import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const skills = [
    { name: "React", icon: FaReact, type: "Frontend", color: "#61DAFB" },
    { name: "JavaScript", icon: FaJsSquare, type: "Frontend", color: "#F7DF1E" },
    { name: "HTML5", icon: FaHtml5, type: "Frontend", color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, type: "Frontend", color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, type: "Frontend", color: "#38BDF8" },

    { name: "Node.js", icon: FaNodeJs, type: "Backend", color: "#339933" },
    { name: "Express.js", icon: SiExpress, type: "Backend", color: "#f57722" },
    { name: "MongoDB", icon: SiMongodb, type: "Backend", color: "#47A248" },

    { name: "Figma", icon: SiFigma, type: "Web Design", color: "#f9004d" },
    { name: "Git", icon: FaGitAlt, type: "Tools", color: "#F05032" },
  ];

  const tabs = ["All", "Frontend", "Backend", "Web Design"];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.type === activeTab);

  return (
    <section id="skills" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Title */}
        <div className="max-w-2xl mb-12">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#f57722]">
            Skills
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Technologies I Work With
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#f9004d] to-[#f57722] text-white shadow-lg"
                    : "border border-[#f9004d] text-[#f9004d] hover:bg-[#f9004d] hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group bg-white dark:bg-gray-900
                    rounded-2xl p-6 shadow-md hover:shadow-xl
                    border border-gray-100 dark:border-gray-800
                    transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="text-4xl mb-4"
                    style={{ color: skill.color }}
                  >
                    <Icon />
                  </div>

                  <h4 className="text-gray-900 dark:text-white font-semibold">
                    {skill.name}
                  </h4>

                  <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                    {skill.type}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
