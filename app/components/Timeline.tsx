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
    <section id="projects" className="py-20 bg-[#2B124C]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#DFB6B2]">
          My Projects
        </h2>
        <p className="text-[#FBE4D8]/60 text-center mb-12">
          Click on any project to learn more
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="bg-[#522B5B] rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#854F6C] border border-[#854F6C]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl text-[#DFB6B2]">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[#854F6C]/50 text-[#FBE4D8]">
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

              <p className="text-[#FBE4D8]/70 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-[#190019]/50 text-[#FBE4D8]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#DFB6B2]">
                📊 {project.metric}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-[#190019]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2B124C] rounded-xl max-w-2xl w-full p-6 border border-[#854F6C]"
            >
              <h3 className="text-2xl font-bold mb-2 text-[#DFB6B2]">
                {selected.title}
              </h3>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-[#854F6C]/50 text-[#FBE4D8]">
                  {selected.date}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#190019]/50 text-[#FBE4D8]/80">
                  {selected.role}
                </span>
              </div>
              <p className="text-[#FBE4D8]/70 mb-4 leading-relaxed">
                {selected.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-[#DFB6B2]">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected?.tech.map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-[#190019]/50 text-[#FBE4D8]/80 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4 p-3 rounded-lg bg-[#854F6C]/20 border border-[#854F6C]">
                <p className="text-sm font-medium text-[#DFB6B2]">
                  📊 {selected.metric}
                </p>
              </div>
              <div className="flex gap-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#DFB6B2] text-[#190019] hover:bg-[#854F6C] hover:text-[#FBE4D8] transition"
                  >
                    GitHub
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[#DFB6B2] text-[#DFB6B2] hover:bg-[#DFB6B2]/10 transition"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-lg border border-[#854F6C] text-[#FBE4D8] hover:bg-[#854F6C]/20 transition"
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