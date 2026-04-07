"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "React Developer",
  "Full-Stack Developer",
  "Hackathon Winner",
  "CS Student @ Trent University",
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#ffb6c1] shadow-xl">
                <img
                  src="/images/profile.jpeg"
                  alt="Suha Qazi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-[#ffb6c1]/30 -z-10 scale-110"></div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-[#ffb6c1]">Suha Qazi</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              I'm a{" "}
              <span className="text-[#ffb6c1] font-semibold">
                {roles[roleIndex]}
              </span>
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Computer Science with Specializing in Software Engineering student
              at Trent University (3.9 GPA) passionate about building full-stack
              apps and solving real problems. Won 1st place at Hack Days at
              Trent 2026 with FemFuel. Open to SWE internships for Summer 2025.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#ffb6c1] text-black rounded-lg hover:bg-pink-400 transition font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#ffb6c1] text-[#ffb6c1] rounded-lg hover:bg-pink-500/10 transition font-medium"
              >
                Contact Me
              </a>
              <a
                href="/SuhaQazi_Resume.pdf"
                download
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 transition font-medium"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
