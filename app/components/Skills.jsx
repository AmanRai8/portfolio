"use client";
import React, { useState, useEffect } from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  const floatWave = {
    y: [0, -5, 0, 5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  const MotionOrDiv = isMobile ? "div" : motion.section;

  return (
    <MotionOrDiv
      id="skills"
      className="py-8 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0a0c14] clip-path-custom"
      {...(!isMobile && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.3 },
        variants: sectionVariants,
      })}
    >
      {/* Section Title */}
      <div className="text-center mt-10 mb-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 pulse-color">
          SKILLS
        </h2>
        <p className="text-gray-300 mt-4 text-lg font-medium">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-3 sm:gap-5 py-10 justify-center">
        {SkillsInfo.map((category, index) => (
          <div key={category.title} className="w-full sm:w-[46%] lg:w-[40%]">
            {/* Desktop Tilt */}
            {!isMobile && (
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900}
                scale={1.05}
                transitionSpeed={1200}
                gyroscope={true}
                className="w-full"
              >
                <SkillCard
                  category={category}
                  index={index}
                  cardVariants={cardVariants}
                  floatWave={floatWave}
                  isMobile={isMobile}
                />
              </Tilt>
            )}

            {/* Mobile - No Tilt */}
            {isMobile && (
              <SkillCard
                category={category}
                index={index}
                cardVariants={cardVariants}
                floatWave={floatWave}
                isMobile={isMobile}
              />
            )}
          </div>
        ))}
      </div>
    </MotionOrDiv>
  );
};

const SkillCard = ({ category, index, cardVariants, floatWave, isMobile }) => {
  const MotionOrDiv = isMobile ? "div" : motion.div;

  return (
    <MotionOrDiv
      {...(!isMobile && { custom: index, variants: cardVariants })}
      className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 rounded-2xl border border-cyan-500/50 shadow-[0_0_25px_2px_rgba(0,255,247,0.3)] hover:shadow-[0_0_35px_4px_rgba(255,0,255,0.5)] transition duration-500"
      animate={!isMobile ? undefined : undefined} // disable floatWave on mobile
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-fuchsia-400 mb-6 text-center drop-shadow-[0_0_10px_#ff00ff]">
        {category.title}
      </h3>

      {/* Skill Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
        {category.skills.map((skill, i) => {
          const MotionSkill = isMobile ? "div" : motion.div;
          return (
            <MotionSkill
              key={skill.name}
              {...(!isMobile && { animate: floatWave })}
              className="flex flex-col items-center justify-center bg-black/30 border border-cyan-500/40 rounded-xl py-4 px-2 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500/70 hover:shadow-[0_0_15px_#ff00ff]"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="mt-2 text-sm sm:text-base text-gray-200 font-medium">
                {skill.name}
              </span>
            </MotionSkill>
          );
        })}
      </div>
    </MotionOrDiv>
  );
};

export default Skills;
