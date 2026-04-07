export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4 text-2xl">
          <a
            href="https://github.com/suhaqazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com/in/suha-qazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition"
          >
            🔗
          </a>
          <a
            href="mailto:suha.m.qazi@gmail.com"
            className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition"
          >
            ✉️
          </a>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Suha Qazi. Built with Next.js,
          TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
