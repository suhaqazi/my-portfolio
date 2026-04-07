"use client";

const skillsData = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL", "PHP"],
  Frameworks: ["React", "Node.js", "Tailwind CSS", "Bootstrap", "REST APIs"],
  "AI & APIs": ["Google Gemini API"],
  Tools: ["Git/GitHub", "Postman", "VS Code", "Vite", "Vercel"],
  Databases: ["MySQL", "Relational Database Design"],
  Design: ["Figma", "Adobe Illustrator", "UI/UX Design"],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#190019]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#DFB6B2]">
          Technical Skills
        </h2>
        <p className="text-[#FBE4D8]/60 text-center mb-12">
          Technologies and tools I use to build projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, items]) => (
            <div
              key={category}
              className="p-5 rounded-xl bg-[#2B124C] border border-[#854F6C] hover:bg-[#522B5B] transition"
            >
              <h3 className="font-semibold text-lg mb-3 text-[#DFB6B2]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[#190019]/50 text-[#FBE4D8]/80 text-sm"
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
