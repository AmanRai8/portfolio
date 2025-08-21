"use client";

import React, { useState } from "react";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: feedback }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setFeedback("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || "Failed to send feedback.");
        setTimeout(() => setError(""), 5000);
      }
    } catch {
      setError("Failed to send feedback.");
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-[#0a0c14] py-24 px-4 sm:px-6 md:px-12 lg:px-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6">
          <h5 className="text-5xl sm:text-6xl font-bold text-[#18cef2]">
            Let's Connect
          </h5>
          <p className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl max-w-md mx-auto md:mx-0">
            I'm currently looking for new opportunities, and my inbox is always
            open. Whether you have a question or just want to say hi, I'll do my
            best to get back to you!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-[#18cef2]">
            {[
              {
                icon: <Github size={32} />,
                url: "https://github.com/AmanRai8",
              },
              {
                icon: <Linkedin size={32} />,
                url: "https://linkedin.com/in/yourusername",
              },
              {
                icon: <Facebook size={32} />,
                url: "https://facebook.com/yourusername",
              },
              {
                icon: <Instagram size={32} />,
                url: "https://instagram.com/yourusername",
              },
              {
                icon: <Mail size={32} />,
                url: "https://instagram.com/yourusername",
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

        {/* Right Side - Contact Form */}
        <div className="flex justify-center md:justify-end">
          <form
            className="flex flex-col gap-4 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#121212] border border-[#18cef2] rounded px-4 py-4 text-white placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#18cef2] text-lg sm:text-xl"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#121212] border border-[#18cef2] rounded px-4 py-4 text-white placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#18cef2] text-lg sm:text-xl"
              required
            />
            <textarea
              placeholder="Your Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="bg-[#121212] border border-[#18cef2] rounded px-4 py-4 resize-none text-white placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#18cef2] text-lg sm:text-xl"
              rows={6}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#18cef2] via-[#38bdf8] to-[#0ff4] text-black font-extrabold w-full px-6 py-4 rounded shadow-lg hover:shadow-[#18cef2]/50 hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {submitted && (
              <p className="text-green-500 mt-2 text-lg sm:text-xl animate-fadeIn">
                Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-2 text-lg sm:text-xl animate-fadeIn">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
