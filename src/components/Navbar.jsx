import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          AB<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-text-muted hover:bg-surface-2 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex gap-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 block rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-text"
              >
                View Resume
              </a>
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="flex-1 block rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-text"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
