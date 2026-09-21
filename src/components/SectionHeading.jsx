import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-2">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>
      )}
    </motion.div>
  );
}
