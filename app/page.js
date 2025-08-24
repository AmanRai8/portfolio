"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Loading screen only for non-mobile
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false); // skip loading on mobile
    }
  }, [isMobile]);

  return (
    <>
      {!isMobile && <LoadingScreen isLoading={isLoading} />}
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
