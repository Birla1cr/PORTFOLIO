import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Building products across the full stack"
          align="left"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {about.highlights.map((h) => (
              <div key={h.label} className="glass-card p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-accent-2">
                  {h.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-text">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
