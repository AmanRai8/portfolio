"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#0a0c14] flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Neon pulsing logo */}
          <motion.div
            className="w-24 h-24 rounded-full border-4 border-[#18cef2] flex items-center justify-center mb-6"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-3xl font-bold text-[#fff]">A</span>
            <span className="text-3xl font-bold text-[#18cef2]">man</span>
          </motion.div>

          {/* Animated Loading Text */}
          {/* <motion.h1
            className="text-2xl sm:text-3xl font-bold text-[#18cef2] tracking-widest uppercase mb-4"
            animate={{ opacity: [0, 1, 0], y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading…
          </motion.h1> */}

          {/* Neon Glowing Bouncing Progress Bar */}
          <div className="relative w-64 h-2 bg-[#121212] rounded overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-2 w-1/3 bg-gradient-to-r from-[#18cef2] via-[#38bdf8] to-[#0ff4] shadow-[0_0_15px_#18cef2] rounded"
              animate={{ x: ["0%", "200%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
