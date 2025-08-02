"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contacts" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {/* GitHub Button inside nav links */}
            <li>
              <Link
                href="https://github.com/AmanRai8/portfolio"
                target="_blank"
                className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* GitHub Button for Mobile BELOW MenuOverlay */}
      {navbarOpen && (
        <>
          <MenuOverlay
            links={navLinks}
            closeMenu={() => setNavbarOpen(false)}
          />
          <div className="flex justify-center mt-4 mb-4 md:hidden">
            <Link
              href="https://github.com/AmanRai8/portfolio"
              target="_blank"
              className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
