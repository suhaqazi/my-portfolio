"use client";

const skillsData = {
  Languages: {
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      "C",
      "SQL",
      "PHP",
      "HTML5",
      "CSS3",
    ],
  },
  "Frameworks & Libraries": {
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Bootstrap",
      "REST APIs",
    ],
  },
  "AI & APIs": {
    skills: ["Google Gemini API", "Third-party SDKs", "Vercel Analytics"],
  },
  "Developer Tools": {
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Vite",
      "VS Code",
      "Postman",
      "CI/CD Pipelines",
    ],
  },
  Databases: {
    skills: ["MySQL", "Relational Database Design", "SQL"],
  },
  "Design Tools": {
    skills: ["Figma", "Adobe Illustrator", "UI/UX Design"],
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#2B124C]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#DFB6B2]">
          Technical Skills
        </h2>
        <p className="text-[#FBE4D8]/60 text-center mb-12">
          Technologies and tools I use to build projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, { skills }]) => (
            <div
              key={category}
              className="group p-6 rounded-xl bg-[#190019]/50 backdrop-blur-sm border border-[#854F6C] hover:border-[#DFB6B2] hover:bg-[#190019]/70 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-lg text-[#DFB6B2]">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-[#522B5B] text-[#FBE4D8]/90 text-sm font-medium hover:bg-[#854F6C] hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
