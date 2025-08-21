"use client";

import React from "react";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0a0c14] py-12 px-6 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Branding */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#18cef2]">
            Aman Rai
          </h3>
          <p className="text-[#94a3b8] text-base sm:text-lg">
            Aspiring Full-Stack Developer building modern, responsive, and
            user-friendly web applications.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-[#18cef2]">
            {[
              {
                icon: <Github size={28} />,
                url: "https://github.com/AmanRai8",
              },
              {
                icon: <Linkedin size={28} />,
                url: "https://linkedin.com/in/yourusername",
              },
              {
                icon: <Facebook size={28} />,
                url: "https://facebook.com/yourusername",
              },
              {
                icon: <Instagram size={28} />,
                url: "https://instagram.com/yourusername",
              },
              {
                icon: <Mail size={28} />,
                url: "mailto:amanrai2002acr@gmail.com",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition-colors duration-300 hover:scale-110 transform"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h4 className="text-xl sm:text-2xl font-semibold text-[#18cef2]">
            Quick Links
          </h4>
          <Link
            href="#hero"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h4 className="text-xl sm:text-2xl font-semibold text-[#18cef2]">
            Contact
          </h4>
          <p className="text-[#94a3b8] text-base sm:text-lg">
            Email:{" "}
            <a
              href="mailto:amanrai2002acr@gmail.com"
              className="hover:text-[#38bdf8] transition-colors duration-300"
            >
              amanrai2002acr@gmail.com
            </a>
          </p>
          <p className="text-[#94a3b8] text-base sm:text-lg">
            Location: Kathmandu, Nepal
          </p>
          <p className="text-[#94a3b8] text-base sm:text-lg">
            Phone: +977-9826337227
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#18cef2]/20 mt-8"></div>

      {/* Copyright */}
      <p className="text-center text-[#94a3b8] text-base sm:text-lg mt-6">
        &copy; {new Date().getFullYear()} Aman Rai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
