export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  role: "frontend" | "backend" | "data" | "fullstack";
  tech: string[];
  metric: string;
  github: string;
  live?: string;
  image?: string; 
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FemFuel",
    date: "2026",
    description: "AI-powered women's hormonal nutrition web app. Won 1st place at Hack Days at Trent 2026.",
    role: "fullstack",
    tech: ["React", "Tailwind CSS", "Google Gemini API", "Vercel"],
    metric: "🏆 1st Place Hackathon Winner",
    github: "https://github.com/suhaqazi/femfuel",
    live: "https://femfuel.vercel.app",  
    image: "/images/femfuel-screenshot.png"
  },
  {
    id: "2",
    title: "AfterCredits",
    date: "2025",
    description: "Full-stack movie-tracking platform with 4,000+ movies. Track watchlist, completed movies, and ratings.",
    role: "fullstack",
    tech: ["React", "PHP", "MySQL", "REST APIs"],
    metric: "4,000+ movies tracked",
    github: "https://github.com/suhaqazi/aftercredits",
    live: "https://youtu.be/FbNFeYvCFLg",
    image: ""
  },
  {
    id: "3",
    title: "HackTrent Design System",
    date: "2025",
    description: "UI/UX system for 250+ hackathon participants. Designed 40+ assets including website layouts, badges, and merch.",
    role: "frontend",
    tech: ["Figma", "Adobe Illustrator", "UI/UX"],
    metric: "🎨 35% faster implementation",
    github: "",
    live: "https://hacktrent.ca",
    image: ""
  }
];