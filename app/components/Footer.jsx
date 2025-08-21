"use client";

import React from "react";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("amanrai2002acr@gmail.com");
    toast.success("Email copied!");
  };

  const socialLinks = [
    { Icon: Github, url: "https://github.com/AmanRai8" },
    { Icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
    { Icon: Facebook, url: "https://facebook.com/yourusername" },
    { Icon: Instagram, url: "https://instagram.com/yourusername" },
    { Icon: Mail, url: "mailto:amanrai2002acr@gmail.com" },
  ];

  return (
    <footer className="bg-[#0a0c14] py-4 px-4 sm:px-8 md:px-12 text-sm relative">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding / Name */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#18cef2] font-bold cursor-pointer pulse-color">
            Aman Rai
          </h3>
          <p className="text-[#94a3b8]">
            Just a regular coder, coding his way through life ;)
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-[#18cef2]">
          {socialLinks.map(({ Icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38bdf8] transform hover:scale-110 transition duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p className="text-[#94a3b8]">
            Email:{" "}
            <span
              onClick={copyEmail}
              className="hover:text-[#38bdf8] cursor-pointer"
            >
              amanrai2002acr@gmail.com
            </span>
          </p>
          <p className="text-[#94a3b8]">Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#18cef2]/20 mt-4"></div>

      {/* Copyright */}
      <p className="text-center text-[#94a3b8] mt-2">
        &copy; {new Date().getFullYear()} Aman Rai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
