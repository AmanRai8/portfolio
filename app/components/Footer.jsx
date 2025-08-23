"use client";

import React from "react";
import { Github, Linkedin, Facebook, Instagram, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const phone = "+9779826337227";
  const copyEmail = () => {
    navigator.clipboard.writeText("amanrai2002acr@gmail.com");
    toast.success("Email copied!");
  };

  const socialLinks = [
    { Icon: Github, url: "https://github.com/AmanRai8" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/aman-rai-1b3782341/" },
    { Icon: Facebook, url: "https://www.facebook.com/aman.rai.131116/" },
    { Icon: Instagram, url: "https://www.instagram.com/sussy_baka9.11/" },
    { Icon: Phone, url: `tel:${phone}` },
  ];

  return (
    <footer className="bg-[#0a0c14] py-6 px-4 sm:px-8 md:px-12 text-sm relative">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        {/* Branding / Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[#18cef2] font-bold cursor-pointer pulse-color text-lg sm:text-xl drop-shadow-[0_0_8px_#18cef2]">
            Aman Rai
          </h3>
          <p className="text-[#94a3b8] text-xs sm:text-sm mt-1">
            Just a regular coder, coding his way through life ;)
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 md:gap-6 text-[#18cef2] justify-center">
          {socialLinks.map(({ Icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <Icon
                size={24}
                className="transition-transform duration-300 group-hover:scale-125 group-hover:text-[#38bdf8] drop-shadow-[0_0_4px_#18cef2]"
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-xs text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {url.startsWith("tel:")
                  ? "Call"
                  : url
                      .replace("https://", "")
                      .replace("http://", "")
                      .replace("www.", "")
                      .split(".")[0]}
              </span>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right mt-3 md:mt-0">
          <p className="text-[#94a3b8] text-xs sm:text-sm">
            Email:{" "}
            <span
              onClick={copyEmail}
              className="hover:text-[#38bdf8] cursor-pointer break-all transition-colors duration-300"
            >
              amanrai2002acr@gmail.com
            </span>
          </p>
          <p className="text-[#94a3b8] text-xs sm:text-sm mt-1">
            Kathmandu, Nepal
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#18cef2]/20 mt-4"></div>

      {/* Copyright */}
      <p className="text-center text-[#94a3b8] mt-2 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Aman Rai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
