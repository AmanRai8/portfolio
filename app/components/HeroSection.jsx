"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "oppai",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl pr-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            libero. Veniam voluptatibus corporis ad consequuntur ipsa explicabo
          </p>
          <div>
            <button className="relative mr-4 w-full sm:w-fit px-6 py-3 font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-500 active:from-blue-800 active:via-blue-700 active:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 active:scale-95 transform">
              <span className="relative ">Hire Me</span>
              <span className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></span>
            </button>

            <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-white hover:bg-slate-800 active:bg-white text-white active:text-black mt-3 transform active:scale-95 transition duration-150">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
