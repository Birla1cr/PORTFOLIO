import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiSmile,
  FiMessageSquare,
  FiTarget,
  FiZap,
  FiBarChart2,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { aiFeatures } from "../data/content";

const icons = [FiTrendingUp, FiSmile, FiMessageSquare, FiTarget, FiZap, FiBarChart2];

export default function AISection() {
  return (
    <section id="ai" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />

      <div className="section-container">
        <SectionHeading
          eyebrow="🤖 AI & Intelligent Features"
          title="Where AI meets full-stack engineering"
          description="Capabilities I build into products — from predictive scoring to natural-language insights."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((feature, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card group relative overflow-hidden p-6 transition-colors hover:border-accent-2/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-2/10 text-accent-2">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
