import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e1627] text-white-400 py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between  mt-12">
      <p className="text-sm">
        © 2025 AI Component Generator. Built by Sraya Sreedharan.{' '}
        <a
          href="https://github.com/srayasreedharan"
          className="underline hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>

      <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://github.com/srayasreedharan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/srayasreedharan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
