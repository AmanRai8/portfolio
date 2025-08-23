"use client";

import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

const EmailSection = () => {
  const email = "amanrai2002acr@gmail.com";
  const phone = "+9779826337227";

  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  // Copy text to clipboard with toast notification
  const copyToClipboard = (text, msg) => {
    setTimeout(() => {
      navigator.clipboard.writeText(text);
      toast.success(msg, { id: "unique-email-toast" });
    }, 0);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: userEmail, message: feedback }),
      });

      if (res.ok) {
        setName("");
        setUserEmail("");
        setFeedback("");
        toast.success("Message sent successfully!", {
          id: "unique-submit-toast",
        });
      } else {
        toast.error("Failed to send feedback.", { id: "unique-submit-toast" });
      }
    } catch {
      toast.error("Failed to send feedback.", { id: "unique-submit-toast" });
    } finally {
      setLoading(false);
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  return (
    <section
      className="bg-[#0a0c14] py-24 px-4 sm:px-6 md:px-12 lg:px-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={leftVariants}
        >
          <h5 className="text-5xl sm:text-6xl font-bold text-[#18cef2] cursor-pointer pulse-color1">
            Let's Connect
          </h5>
          <p className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto md:mx-0">
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
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#18cef2] pulse-color"
                whileHover="hover"
                variants={iconVariants}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Email */}
          <div
            className="flex items-center justify-center md:justify-start gap-3 text-[#18cef2] cursor-pointer pulse-color"
            onClick={() => copyToClipboard(email, "Email copied to clipboard!")}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3"
            >
              <Mail size={28} />
              <span className="text-lg sm:text-xl">{email}</span>
            </motion.div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start gap-3 text-[#18cef2] cursor-pointer pulse-color">
            <motion.a
              href={`tel:${phone}`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 text-lg sm:text-xl"
            >
              <Phone size={28} />
              {phone}
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={rightVariants}
        >
          <form
            className="flex flex-col gap-4 w-full max-w-full"
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
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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
              className="bg-gradient-to-r from-[#18cef2] via-[#38bdf8] to-[#0ff4] text-black font-extrabold w-full px-6 py-4 rounded shadow-lg hover:shadow-[#18cef2]/50 hover:scale-105 transition-all duration-300 text-lg pulse-color1 sm:text-xl"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
