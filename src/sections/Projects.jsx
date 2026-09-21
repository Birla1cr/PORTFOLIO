import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { featuredProject, otherProjects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A flagship AI-powered product, plus a few other builds along the way."
        />

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-surface via-surface to-surface-2 p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-2/10 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              <FiStar className="h-3.5 w-3.5" /> Featured Project
            </span>

            <h3 className="mt-5 font-display text-2xl font-bold text-text sm:text-3xl">
              {featuredProject.name}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              {featuredProject.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.features.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-border bg-bg/60 px-3 py-1.5 text-xs font-medium text-text"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-2"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={featuredProject.links.live || "#contact"}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Live Demo <FiExternalLink />
              </a>
              <a
                href={featuredProject.links.github || "#contact"}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                Source Code <FiGithub />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex flex-col p-6 transition-colors hover:border-accent/40"
            >
              <h4 className="font-display text-lg font-semibold text-text">{project.name}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                <a
                  href={project.links.live || "#contact"}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 hover:text-accent"
                >
                  Live <FiExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={project.links.github || "#contact"}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text"
                >
                  Code <FiGithub className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
