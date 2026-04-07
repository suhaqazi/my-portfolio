import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-8 border-t border-[#854F6C] bg-[#190019]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-8 mb-4">
          <a
            href="https://github.com/suhaqazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DFB6B2] hover:text-[#FBE4D8] transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Image
              src="/icons/github2.svg"
              alt="GitHub"
              width={30}
              height={30}
              className="filter brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a
            href="https://linkedin.com/in/suha-qazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#DFB6B2] hover:text-[#FBE4D8] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/linkedin2.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="filter brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>
          <a
            href="mailto:suha.m.qazi@gmail.com"
            className="text-[#DFB6B2] hover:text-[#FBE4D8] transition-all hover:scale-110"
            aria-label="Email"
          >
            <Image
              src="/icons/mail.svg"
              alt="Email"
              width={33}
              height={33}
              className="filter brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
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
