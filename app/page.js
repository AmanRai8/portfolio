"use client";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <motion.main
        className="flex flex-col min-h-screen bg-[#0a0c14]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* <ParticlesBackground /> */}
        <Navbar />
        <div className="container mt-0 mx-auto max-w-full px-6 sm:px-12">
          <HeroSection />
          <Skills />
          <ProjectsSection />
          <EmailSection />
          <Footer />
        </div>
      </motion.main>
    </>
  );
}
