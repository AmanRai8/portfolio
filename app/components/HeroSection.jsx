"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="bg-[#0a0c14] min-h-screen flex items-center pt-20 pb-16 sm:pt-32 lg:pt-15">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Text Content */}
        <div className="col-span-7 text-center sm:text-left space-y-9">
          <h1 className="font-extrabold">
            {/* Hello, I'm */}
            <span className="text-white text-4xl sm:text-5xl lg:text-6xl block">
              Hello, I'm
            </span>

            {/* Name with gradient animation */}
            <span className="inline-block text-6xl sm:text-7xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x">
              Aman Rai
            </span>

            <span className="block text-white text-4xl sm:text-5xl lg:text-5xl mt-3">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Full-Stack Developer",
                  1000,
                  "Coding Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#18cef2] font-semibold animate-type-gradient"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            id corporis nesciunt sapiente illum amet laboriosam, reprehenderit,
            at sunt nemo, explicabo molestias incidunt! Placeat magni ipsum
            molestias assumenda laudantium! Est.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Hire Me Button */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-8 py-4 text-lg sm:text-xl font-semibold rounded-full text-[#0a0c14]
               active:scale-95 transition-all duration-300 shadow-lg shadow-[#18cef2]/50 pulse-scale overflow-hidden group"
              style={{ backgroundColor: "#18cef2" }} // animated background
            >
              Hire Me
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0a0c14] group-hover:w-full transition-all duration-500"></span>
            </button>

            {/* Download CV Button */}
            <button
              className="relative px-0.5 py-0.5 rounded-full mt-3 sm:mt-0 transform active:scale-95 transition duration-150 shadow-lg shadow-[#9333ea]/40 pulse-color overflow-hidden group"
              style={{ backgroundColor: "#1f1235" }} // matches pulse animation
            >
              <span
                className="block rounded-full px-6 py-3 text-lg sm:text-xl
           bg-gradient-to-r from-[#6d28d9] via-[#9333ea] to-[#c084fc]
           text-white group-hover:opacity-90"
              >
                Download CV
              </span>

              {/* Hover progress bar */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#18cef2] group-hover:w-full transition-all duration-500"></span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-span-5 flex justify-center sm:justify-end mt-8 lg:mt-0">
          <div
            className="rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] 
               overflow-hidden shadow-[0_0_50px_#18cef2] transition-transform duration-500 ease-out
               transform hover:scale-105 hover:rotate-3 hover:shadow-[0_0_70px_#38bdf8] mx-auto sm:mx-0"
          >
            <Image
              src="/images/hero.png"
              alt="hero image"
              width={450} // max size for desktop
              height={450}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
