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
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Technologies and tools I use to build projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, items]) => (
            <div
              key={category}
              className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
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
