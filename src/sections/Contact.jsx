import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiDownload } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/content";

const links = [
  { label: "Email", value: profile.email, href: profile.emailComposeUrl, Icon: FiMail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, Icon: FiPhone },
  { label: "GitHub", value: "View profile", href: profile.github, Icon: FiGithub },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, Icon: FiLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to full-stack roles, internships, and interesting AI-driven projects. Reach out — I usually reply fast."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-2xl grid-cols-2 gap-5"
        >
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Phone" ? undefined : "_blank"}
              rel="noreferrer"
              className="glass-card group flex flex-col items-center gap-3 p-6 text-center transition-colors hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text">{label}</p>
                <p className="mt-1 text-xs text-text-muted break-words">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Download Resume <FiDownload />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
