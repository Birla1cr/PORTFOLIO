import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Education & Certifications" title="Continuous learning" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {education.map((item, i) => {
            const Icon = item.subtitle === "Degree" ? FiBookOpen : FiAward;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card flex items-start gap-4 p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent-2">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-text">
                    {item.title}
                  </h3>
                  {item.meta && (
                    <p className="mt-1.5 text-sm text-text-muted">{item.meta}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
