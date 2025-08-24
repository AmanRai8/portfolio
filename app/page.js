"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Skills from "./components/Skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // loading screen duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <motion.main
          className="flex flex-col min-h-screen bg-[#0a0c14]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
          <div className="container mt-0 mx-auto max-w-full px-6 sm:px-12">
            <HeroSection />
            {/* <SkillsSection /> */}
            <Skills />
            <ProjectsSection />
            <EmailSection />
            <Footer />
          </div>
        </motion.main>
      )}
    </>
  );
}
