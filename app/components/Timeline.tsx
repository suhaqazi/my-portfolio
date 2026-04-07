"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  year: string;
  description: string;
  role: string;
  tech: string[];
  metric: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FemFuel",
    year: "2026",
    description:
      "AI-powered women's hormonal nutrition web app. Won 1st place at Hack Days at Trent 2026.",
    role: "Full-Stack Developer",
    tech: ["React", "Tailwind CSS", "Google Gemini API", "Vercel"],
    metric: "Reduced time to health insight to under 10 seconds",
    github: "https://github.com/suhaqazi/femfuel",
    live: "",
  },
  {
    id: 2,
    title: "AfterCredits",
    year: "2025",
    description: "Full-stack movie-tracking platform with 4,000+ movies.",
    role: "Full-Stack Developer",
    tech: ["React", "PHP", "MySQL", "REST APIs"],
    metric: "API endpoints handling 4,000+ movies",
    github: "https://github.com/suhaqazi/aftercredits",
    live: "",
  },
  {
    id: 3,
    title: "HackTrent Design System",
    year: "2025",
    description: "UI/UX system for 250+ hackathon participants.",
    role: "UI/UX Designer",
    tech: ["Figma", "Adobe Illustrator"],
    metric: "Improved dev speed by 35%",
    github: "",
    live: "https://hacktrent.ca",
  },
];

export function Timeline() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Click on any project to learn more
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                  {project.year}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                📊 {project.metric}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full p-6"
            >
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                  {selected.year}
                </span>
                <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                  {selected.role}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selected.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  📊 {selected.metric}
                </p>
              </div>
              <div className="flex gap-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
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
