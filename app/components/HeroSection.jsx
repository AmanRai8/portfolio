"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="bg-[#0a0c14] min-h-screen flex items-center pt-20 pb-16 sm:pt-32 lg:pt-15"
      id="home"
    >
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Text Content */}
        <motion.div
          className="col-span-7 text-center sm:text-left space-y-6 sm:space-y-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <h1 className="font-extrabold">
            <span className="text-white text-4xl sm:text-5xl lg:text-6xl block">
              Hello, I'm
            </span>
            <span className="inline-block text-6xl sm:text-7xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x">
              Aman Rai
            </span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-5xl mt-3">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  1000,
                  "UI/UX Explorer",
                  1000,
                  "Coding Enthusiast",
                  1000,
                  "Tech Learner",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#18cef2] font-semibold animate-type-gradient"
              />
            </span>
          </h1>

          {/* Mobile Image */}
          <motion.div
            className="sm:hidden flex justify-center my-4"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
          >
            <div className="rounded-full w-[200px] h-[200px] overflow-hidden pulse-shadow">
              <Image
                src="/me.jpg"
                alt="hero image"
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </motion.div>

          {/* Introduction */}
          <p className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto md:mx-0">
            A passionate web developer and tech enthusiast. I love turning ideas
            into interactive, responsive, and visually appealing web
            applications. I enjoy learning new technologies, exploring modern
            frameworks, and continuously improving my coding skills while
            building projects that make an impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-8 py-4 text-lg sm:text-xl font-semibold rounded-full text-[#0a0c14] shadow-lg shadow-[#18cef2]/50 pulse-scale overflow-hidden cursor-pointer group"
              style={{ backgroundColor: "#18cef2" }}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
            >
              Hire Me
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0a0c14] group-hover:w-full transition-all duration-500"></span>
            </motion.button>

            <motion.a
              href="/CV.pdf"
              download
              className="relative px-0.5 py-0.5 rounded-full mt-3 sm:mt-0 shadow-lg shadow-[#9333ea]/40 pulse-color overflow-hidden cursor-pointer group"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
            >
              <span className="block rounded-full px-6 py-3 text-lg sm:text-xl bg-gradient-to-r from-[#6d28d9] via-[#9333ea] to-[#c084fc] text-white group-hover:opacity-90">
                Download CV
              </span>
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#18cef2] group-hover:w-full transition-all duration-500"></span>
            </motion.a>
          </div>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          className="col-span-5 hidden sm:flex justify-center sm:justify-end mt-8 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariants}
        >
          <div className="rounded-full w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden mx-auto sm:mx-0 pulse-shadow transition-transform duration-500 ease-out transform hover:scale-105">
            <Image
              src="/me.jpg"
              alt="hero image"
              width={450}
              height={450}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
