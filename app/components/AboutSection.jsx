"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, Coffee, Gamepad, BookOpen } from "lucide-react";

const hobbies = [
  { name: "Music", icon: <Music size={32} color="#18cef2" /> },
  { name: "Coffee", icon: <Coffee size={32} color="#18cef2" /> },
  { name: "Gaming", icon: <Gamepad size={32} color="#18cef2" /> },
  { name: "Reading", icon: <BookOpen size={32} color="#18cef2" /> },
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.15,
      boxShadow: "0 0 20px rgba(24, 206, 242, 0.8)",
      transition: { duration: 0.2 },
    },
    float: {
      y: ["0%", "-10%", "0%"],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="bg-[#0a0c14] py-24 px-6 sm:px-12 md:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#18cef2] mb-6 cursor-pointer pulse-color1">
          About Me
        </h2>
        <p className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-12">
          Hi, I'm <span className="text-[#38bdf8] font-semibold">Aman Rai</span>
          , a passionate{" "}
          <span className="text-[#38bdf8] font-semibold">web developer</span>{" "}
          from Kathmandu, Nepal. I specialize in building modern, responsive,
          and user-friendly web applications using{" "}
          <span className="text-[#38bdf8] font-semibold">
            React, Next.js, and Tailwind CSS
          </span>
          . I love transforming ideas into interactive and scalable digital
          experiences. When I'm not coding, I enjoy exploring new tech, solving
          challenging problems, and continuously learning to grow as a
          developer.
        </p>

        {/* Hobbies / Interests */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              className="bg-[#121212] rounded-xl flex flex-col items-center justify-center w-32 h-32 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              animate="float"
              transition={{ delay: idx * 0.2 }}
            >
              {hobby.icon}
              <p className="mt-2 text-[#94a3b8] font-semibold text-center">
                {hobby.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
