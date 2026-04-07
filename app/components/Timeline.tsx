"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  role: string;
  tech: string[];
  metric: string;
  github: string;
  live: string;
  image?: string;
};

export function Timeline() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-[#fffacd]">My Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Click on any project to learn more
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 border border-white/10 hover:border-[#fffacd]/50"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg text-white">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-[#fffacd] border border-yellow-500/30">
                  {project.date}
                </span>
              </div>

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}

              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#fffacd]">📊 {project.metric}</p>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-2 text-[#fffacd]">
                {selected.title}
              </h3>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-[#fffacd] border border-yellow-500/30">
                  {selected.date}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {selected.role}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {selected.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-[#fffacd]">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected?.tech.map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <p className="text-sm font-medium text-[#fffacd]">
                  📊 {selected.metric}
                </p>
              </div>
              <div className="flex gap-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#fffacd] text-black hover:bg-yellow-300 transition"
                  >
                    GitHub
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[#fffacd] text-[#fffacd] hover:bg-yellow-500/10 transition"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-lg border border-gray-600 text-gray-400 hover:bg-white/5 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
