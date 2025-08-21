import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0c14]">
      <Navbar />

      {/* Container for sections */}
      <div className="container mt-0 mx-auto max-w-full px-6 sm:px-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
