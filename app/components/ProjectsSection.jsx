"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Assistant",
    description:
      "Project 1 this is a dummy description used to fill the project description hope you understand and cooperate with me and give me a star in my github repo",
    image: "/images/projects/desktop.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Project 2 this is a dummy description used to fill the project description...",
    image: "/images/projects/download.jpeg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Currency Converter",
    description:
      "Project 3 this is a dummy description used to fill the project description...",
    image: "/images/projects/download.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Personal Chatbot",
    description:
      "Project 4 this is a dummy description used to fill the project description...",
    image: "/images/projects/download.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Note Book",
    description:
      "Project 5 this is a dummy description used to fill the project description...",
    image: "/images/projects/d.jpeg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Recipe App",
    description:
      "Project 6 this is a dummy description used to fill the project description...",
    image: "/images/projects/desktop.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  return (
    <section
      className="py-20 px-6 mb-10 md:px-12 bg-[#0a0c14] relative z-0"
      id="projects"
    >
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#18cef2] mb-10 cursor-pointer pulse-color1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
