import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/content";

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiServer,
  Database: FiDatabase,
  "AI / ML": FiCpu,
  "CRM & Web": FiUsers,
  Tools: FiTool,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A stack spanning frontend interfaces, backend services, data, and applied AI/ML."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? FiCode;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-text">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
