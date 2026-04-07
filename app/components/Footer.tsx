export function Footer() {
  return (
    <footer className="py-8 border-t border-[#854F6C] bg-[#190019]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/suhaqazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DFB6B2] hover:text-[#FBE4D8] transition text-2xl"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com/in/suha-qazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DFB6B2] hover:text-[#FBE4D8] transition text-2xl"
          >
            🔗
          </a>
          <a
            href="mailto:suha.m.qazi@gmail.com"
            className="text-[#DFB6B2] hover:text-[#FBE4D8] transition text-2xl"
          >
            ✉️
          </a>
        </div>
        <p className="text-center text-[#FBE4D8]/50 text-sm">
          © {new Date().getFullYear()} Suha Qazi. Built with Next.js,
          TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
