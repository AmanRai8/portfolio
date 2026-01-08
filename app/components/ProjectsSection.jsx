"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projectsData = [
  {
    id: 1,
    title: "Esewa Integration",
    description:
      "A React.js project that demonstrates Esewa payment gateway integration using the open API, featuring proper documentation, secure payment flow, and a live deployed demo.",
    image: "/esewa.png",
    gitUrl: "https://github.com/AmanRai8/Esewa-integration",
    previewUrl: "https://esewa-integration.vercel.app/",
    tags: ["React", "Open-api", "Esewa documentation", "Vercel"],
  },
  {
    id: 2,
    title: "AI Assistant",
    description:
      "AI Assistant is a real-time AI chat and voice assistant built with Next.js, React, and Tailwind CSS. It offers intelligent, personalized, and responsive AI interactions, including voice commands, contextual conversation memory, and seamless integration with external APIs. Users can chat, get answers, and perform tasks efficiently, all within a sleek and intuitive interface.",
    image: "/AI_assistant.png",
    gitUrl: "https://github.com/AmanRai8/ai_assistant",
    previewUrl: "https://ai-assistant69.vercel.app/",
    tags: [
      "NEXT JS",
      "Tailwind CSS",
      "TypeScript",
      "Convex",
      "Clerk",
      "Vercel",
    ],
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A full-stack social media platform built using Next.js, TypeScript, Prisma ORM, and Neon PostgreSQL, supporting user profiles, post creation, likes, comments, and responsive UI design.",
    image: "/socialMedia.png",
    gitUrl: "https://github.com/AmanRai8/social-media-app",
    previewUrl: "https://nexo69.vercel.app/",
    tags: [
      "Next JS",
      "Typescript",
      "Prisma ORM",
      "NEON DB",
      "Tailwind",
      "Vercel",
    ],
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Weather App is a React + Vite application that provides real-time weather updates for any location worldwide. It fetches data from a weather API and displays detailed information including temperature, humidity, wind speed, weather conditions, and forecasts. The app features a responsive UI, location search, and smooth transitions to provide an intuitive user experience.",
    image: "/wea.jpg",
    gitUrl: "https://github.com/AmanRai8/Weather-app",
    previewUrl: "https://weather-app69.vercel.app/",
    tags: ["React", "WeatherAPI", "CSS", "Vercel"],
  },
  {
    id: 5,
    title: "Currency Converter",
    description:
      "A fully responsive React app for real-time currency conversion. It allows users to convert currencies using up-to-date exchange rates from a reliable API. The app supports multiple currencies, displays country flags for clarity, and provides a simple, user-friendly interface for quick and accurate conversions, making it perfect for travelers, businesses, and students.",
    image: "/currency_converter.jpg",
    gitUrl: "https://github.com/AmanRai8/currency-converter",
    previewUrl: "https://currency-converter-opal-three.vercel.app/",
    tags: ["React", "Currency API", "Flag API", "CSS", "Vercel"],
  },

  {
    id: 6,
    title: "Recipe App",
    description:
      "Recipe App is a simple yet powerful web application built with HTML, CSS, and JavaScript. It fetches recipe data from an open API and allows users to search for dishes, view detailed ingredients, and see step-by-step cooking instructions. The app is responsive, intuitive, and ideal for anyone looking to explore new recipes or plan meals efficiently.",
    image: "/recipe-app.png",
    gitUrl: "https://github.com/AmanRai8/Recipe-App",
    previewUrl: "https://recipe-app-69420.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const MotionOrDiv = isMobile ? "div" : motion.div;

  return (
    <section
      className="py-20 px-6 md:px-12 bg-[#0a0c14] relative z-0"
      id="projects"
    >
      <MotionOrDiv
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#18cef2] mb-10 cursor-pointer pulse-color1"
        {...(!isMobile && {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: false, amount: 0.2 },
          transition: { duration: 0.8 },
        })}
      >
        My Projects
      </MotionOrDiv>

      <MotionOrDiv
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        {...(!isMobile && {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: false, amount: 0.2 },
        })}
      >
        {projectsData.map((project, index) => {
          const CardContent = (
            <ProjectCard
              project={project}
              handleOpenModal={handleOpenModal}
              isMobile={isMobile}
            />
          );

          return (
            <MotionOrDiv
              key={project.id}
              {...(!isMobile && { variants: cardVariants })}
            >
              {!isMobile ? (
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={900}
                  scale={1.05}
                  transitionSpeed={1200}
                  gyroscope={true}
                >
                  {CardContent}
                </Tilt>
              ) : (
                <div>{CardContent}</div>
              )}
            </MotionOrDiv>
          );
        })}
      </MotionOrDiv>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          handleCloseModal={handleCloseModal}
        />
      )}
    </section>
  );
};

const ProjectCard = ({ project, handleOpenModal, isMobile }) => {
  const MotionOrDiv = isMobile ? "div" : motion.div;

  return (
    <MotionOrDiv
      onClick={() => handleOpenModal(project)}
      className="bg-gray-900 backdrop-blur-md px-6 py-6 mb-10 rounded-2xl border border-cyan-500/50 shadow-[0_0_25px_2px_rgba(0,255,247,0.3)] hover:shadow-[0_0_35px_4px_rgba(255,0,255,0.5)] cursor-pointer transition duration-500"
    >
      <div className="flex justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[200px] object-contain rounded-xl shadow-2xl"
        />
      </div>
      <h3 className="text-2xl sm:text-3xl font-semibold text-fuchsia-400 mb-4 text-center drop-shadow-[0_0_10px_#ff00ff]">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base line-clamp-4 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-black/30 border border-cyan-500/40 rounded-xl py-1 px-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-fuchsia-500/70 hover:shadow-[0_0_15px_#ff00ff]"
          >
            {tag}
          </span>
        ))}
      </div>
    </MotionOrDiv>
  );
};

const ProjectModal = ({ project, handleCloseModal }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 mt-15">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 backdrop-blur-md px-6 py-6 rounded-2xl border border-cyan-500/50 shadow-[0_0_25px_2px_rgba(0,255,247,0.3)] hover:shadow-[0_0_35px_4px_rgba(255,0,255,0.5)] relative overflow-y-auto w-full max-w-2xl max-h-[85vh]"
    >
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#ff00ff] z-50"
      >
        &times;
      </button>

      <div className="flex flex-col items-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[300px] object-contain rounded-xl shadow-2xl mb-6"
        />
        <h3 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-4 text-center drop-shadow-[0_0_10px_#ff00ff]">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 text-center text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-black/30 border border-cyan-500/40 rounded-xl py-1 px-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-fuchsia-500/70 hover:shadow-[0_0_15px_#ff00ff]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-[#18cef2] text-gray-400 hover:text-black px-4 py-2 rounded-xl text-sm sm:text-base font-semibold text-center transition-colors"
          >
            View Code
          </a>
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#18cef2] hover:bg-[#ff00ff] text-black px-4 py-2 rounded-xl text-sm sm:text-base font-semibold text-center transition-colors"
          >
            View Live
          </a>
        </div>
      </div>
    </motion.div>
  </div>
);

export default ProjectsSection;
