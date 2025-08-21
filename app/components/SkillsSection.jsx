"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact size={50} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="#000000" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={50} color="#06B6D4" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#3178C6" /> },
  { name: "Express", icon: <SiExpress size={50} color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs size={50} color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} color="#F7DF1E" /> },
  { name: "HTML", icon: <SiHtml5 size={50} color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 size={50} color="#1572B6" /> },
  { name: "Git", icon: <SiGit size={50} color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub size={50} color="#181717" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0a0c14] py-24 px-6 sm:px-12 md:px-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#18cef2] mb-12 cursor-pointer pulse-color1">
        My Skills
      </h2>

      {/* 4x3 Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center"
            animate={{
              y: ["0%", "-15%", "0%"], // wave floating
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
          >
            {/* Fixed size card */}
            <motion.div
              className="bg-[#121212] rounded-xl flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 cursor-pointer animate-[shadowPulse_3s_infinite]"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 35px rgba(24, 206, 242, 0.9)",
              }}
              transition={{ duration: 0.15 }}
            >
              {tech.icon}
              <p className="mt-2 text-[#94a3b8] font-semibold text-center">
                {tech.name}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
