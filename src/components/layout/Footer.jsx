"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-sm text-zinc-400 md:flex-row">
        {/* Left */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">Kuldip Mali</span>. All
          rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/Kuldipmali05"
            target="_blank"
            className="transition hover:text-(--primary)"
          >
            <FiGithub size={18} />
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="transition hover:text-(--primary)"
          >
            <FiLinkedin size={18} />
          </Link>

          <Link
            href="mailto:kuldipmali05@gmail.com"
            className="transition hover:text-(--primary)"
          >
            <FiMail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
