"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-[#f2f2f2] text-lg sm:text-xl lg:text-2xl">
        <li>Node.js</li>
        <li>React</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-[#f2f2f2] text-lg sm:text-xl lg:text-2xl">
        <li>Cosmos College of Management & Technology</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#0a0c14] py-24" id="about">
      <motion.div
        className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          variants={itemVariants}
        >
          <div className="relative w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
            <Image
              src="/images/projects/icon.png"
              alt="About Image"
              fill
              className="object-cover rounded-full pulse-shadow"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col space-y-6"
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18cef2]"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl leading-relaxed"
            variants={itemVariants}
          >
            I am a passionate Full-Stack Developer skilled in React, Next.js,
            Node.js, MongoDB, and Tailwind CSS. I love building interactive and
            user-friendly web applications with modern technologies. Always
            eager to learn new things and take on challenging projects.
          </motion.p>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            variants={itemVariants}
          >
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                className={`px-6 py-3 rounded-2xl font-semibold text-lg sm:text-xl lg:text-2xl transition-all duration-300 cursor-pointer ${
                  tab === tabItem.id
                    ? "bg-[#18cef2] text-[#0a0c14] shadow-[0_0_20px_#18cef2]"
                    : "bg-[#121212] text-[#f2f2f2] hover:bg-[#181818] hover:shadow-[0_0_15px_#18cef2]"
                }`}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="mt-6 text-[#f2f2f2] space-y-3 text-lg sm:text-xl lg:text-2xl"
            variants={itemVariants}
          >
            {currentTab ? currentTab.content : <p>No content available</p>}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
