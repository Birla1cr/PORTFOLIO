import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPython,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { profile } from "../data/content";

const stackIcons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiGit, label: "Git" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-2/10 blur-[100px]" />

      <div className="section-container relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-accent-2"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-display text-4xl font-bold tracking-tight text-text sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl font-display text-xl font-medium text-gradient sm:text-2xl"
        >
          Full Stack Developer building AI-powered web applications.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(124,92,255,0.3),0_8px_24px_-8px_rgba(124,92,255,0.6)] transition-transform hover:-translate-y-0.5"
          >
            View Projects <FiArrowRight />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          {stackIcons.map(({ Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-2 text-text-muted transition-colors hover:text-text"
              title={label}
            >
              <Icon className="h-6 w-6" />
              <span className="hidden text-xs font-medium sm:inline">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
