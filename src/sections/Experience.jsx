import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-border sm:left-[26px]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-5 sm:gap-6"
              >
                <div className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-accent/40 bg-surface text-accent sm:h-13 sm:w-13">
                  <FiBriefcase className="h-5 w-5" />
                </div>

                <div className="glass-card flex-1 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">{job.role}</h3>
                    {job.period && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-muted">
                        {job.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-2">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
