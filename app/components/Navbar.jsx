"use client";

import { useState } from "react";
import { MenuIcon, XIcon, Github } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c14]/90 backdrop-blur-md border-b border-[#38bdf8] py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <span className="text-3xl md:text-4xl font-bold font-mono text-[#f2f2f2]">
            A<span className="text-[#18cef2]">man</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[#f2f2f2] text-lg md:text-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#38bdf8] transition-colors duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
          {/* GitHub Button */}
          <a
            href="https://github.com/AmanRai8/ai_trainer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 border-none rounded-lg hover:bg-[#18cef2]/30 transition-all duration-300 text-lg md:text-xl"
          >
            <Github size={25} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-[#f2f2f2]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b4a7d]/90 backdrop-blur-md border-t border-[#38bdf8] w-full px-6 py-4 flex flex-col items-center gap-6 text-[#f2f2f2] text-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#38bdf8] transition-colors duration-300 font-semibold text-xl"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/AmanRai8/ai_trainer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#18cef2]/30 transition-all duration-300 text-xl"
          >
            <Github size={24} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
