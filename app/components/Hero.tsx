"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "React Developer",
  "Full-Stack Developer",
  "Hackathon Winner",
  "CS @ Trent University",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Suha Qazi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400"
        >
          I'm a{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold inline-block min-w-[180px]">
            {roles[roleIndex]}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          CS student at Trent University (3.9 GPA, Dean's Honour Roll) with a
          passion for building full-stack applications and winning hackathons.
          Recently won 1st place at Hack Days at Trent 2026. Currently seeking
          SWE internship opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 justify-center pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
