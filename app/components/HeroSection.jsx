"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const buttonHover = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

const HeroSection = () => {
  return (
    <section
      className="bg-[#0a0c14] min-h-screen flex items-center pt-24 sm:pt-32 lg:pt-15 pb-12 sm:pb-16"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Text Content */}
        <motion.div
          className="col-span-7 text-center sm:text-left space-y-4 sm:space-y-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeLeft}
        >
          <h1 className="font-extrabold leading-snug sm:leading-normal">
            <span className="text-white text-3xl sm:text-5xl lg:text-6xl block">
              Hello, I'm
            </span>
            <span className="inline-block text-4xl sm:text-7xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x mt-1 sm:mt-0">
              Aman Rai
            </span>
            <span className="block text-white text-2xl sm:text-5xl lg:text-5xl mt-2 sm:mt-3">
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
                className="text-[#18cef2] font-semibold"
              />
            </span>
          </h1>

          {/* Mobile Image */}
          <div className="sm:hidden flex justify-center my-6">
            <div className="rounded-full w-[160px] h-[160px] overflow-hidden pulse-shadow">
              <Image
                src="/me.jpg"
                alt="Aman Rai"
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>

          {/* Intro */}
          <p className="text-[#94a3b8] text-base sm:text-xl lg:text-2xl max-w-md sm:max-w-3xl mx-auto md:mx-0 leading-relaxed">
            A passionate web developer and tech enthusiast. I love turning ideas
            into interactive, responsive, and visually appealing web
            applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-0">
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-6 py-3 text-base sm:text-xl font-semibold rounded-full text-[#0a0c14] bg-[#18cef2] shadow-lg shadow-[#18cef2]/50 overflow-hidden cursor-pointer group"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
            >
              Hire Me
              <span className="absolute bottom-0 left-0 h-[2px] sm:h-[3px] w-0 bg-[#0a0c14] group-hover:w-full transition-all duration-500" />
            </motion.button>

            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="relative px-0.5 py-0.5 rounded-full shadow-lg shadow-[#9333ea]/40 overflow-hidden cursor-pointer group"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
              >
                <span className="block rounded-full px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-xl bg-gradient-to-r from-[#6d28d9] via-[#9333ea] to-[#c084fc] text-white group-hover:opacity-90 transition-all duration-300">
                  Download CV
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] sm:h-[3px] w-0 bg-[#18cef2] group-hover:w-full transition-all duration-500 ease-in-out" />
              </motion.div>
            </a>
          </div>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          className="col-span-5 hidden sm:flex justify-center sm:justify-end mt-8 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeRight}
        >
          <div className="rounded-full w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden mx-auto sm:mx-0 pulse-shadow transition-transform duration-500 ease-out transform hover:scale-105">
            <Image
              src="/me.jpg"
              alt="Aman Rai"
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
