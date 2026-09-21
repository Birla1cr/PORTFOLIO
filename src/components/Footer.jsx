import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.emailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="Email"
          >
            <FiMail className="h-5 w-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
