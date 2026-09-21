// ---------------------------------------------------------------------------
// Central content file. Edit the values below to personalize the portfolio —
// no need to touch component code for text/links/data changes.
// Sourced from Ankit's resume (Ankit_Birla.pdf) — keep this in sync with it.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ankit Birla",
  role: "Full Stack Developer | AI/ML Enthusiast",
  tagline:
    "I build responsive frontend applications, scalable backend APIs, MongoDB/SQL-based systems, and intelligent AI features.",
  location: "Shamli, Uttar Pradesh, India",
  phone: "+91-7417802488",
  email: "prabhasbirla@gmail.com",
  // Gmail web-compose link — opens reliably in a new tab even when the visitor
  // has no default mail client configured (unlike a plain mailto: link).
  emailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=prabhasbirla@gmail.com",
  github: "https://github.com/Birla1cr",
  linkedin: "https://www.linkedin.com/in/ankit-birla-863460203/",
  resumeUrl: "resume.pdf", // drop your resume.pdf into the /public folder
  resumeFileName: "resume.pdf", // filename used when "Download Resume" is clicked
};

export const about = {
  paragraphs: [
    "I'm a B.Tech student specializing in Artificial Intelligence & Machine Learning, with hands-on Web Development experience through professional internships and academic projects.",
    "I work across the stack with React.js, Node.js, and Python — building responsive UIs, CRM modules, dashboards, and backend services, backed by MongoDB and MySQL.",
    "My internship work centers on CRM applications: lead management, dashboard development, REST API integration, and CRUD-heavy data workflows — with a growing focus on layering in applied AI/ML.",
  ],
  highlights: [
    { label: "Degree", value: "B.Tech, AI & Machine Learning" },
    { label: "Focus", value: "Full Stack Web Development" },
    { label: "Core Stack", value: "React · Node.js · MongoDB · MySQL" },
    { label: "Interests", value: "CRMs, Dashboards, APIs, AI/ML" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "JavaScript", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "AI / ML",
    items: ["Python", "Machine Learning"],
  },
  {
    category: "CRM & Web",
    items: ["CRM", "Lead Management", "Dashboard Development", "CRUD Operations"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Chrome DevTools"],
  },
];

export const aiFeatures = [
  {
    title: "Lead Conversion Prediction",
    description:
      "ML models that score inbound leads by likelihood to convert, so sales teams prioritize the right conversations first.",
  },
  {
    title: "Customer Sentiment Analysis",
    description:
      "NLP-driven sentiment scoring on customer interactions to surface at-risk accounts and happy customers automatically.",
  },
  {
    title: "AI-Generated Follow-up Messages",
    description:
      "LLM-powered drafts for follow-up emails and messages, tailored to context, tone, and deal stage.",
  },
  {
    title: "Sales Recommendations",
    description:
      "Data-driven suggestions on next-best-actions per lead, based on historical conversion patterns.",
  },
  {
    title: "Natural-Language Insights",
    description:
      "Plain-English summaries of dashboard analytics — ask a question, get an answer instead of a chart to decode.",
  },
  {
    title: "ML-Based Lead Prioritization",
    description:
      "Ranks the sales pipeline dynamically using engagement signals and predictive scoring, not just manual filters.",
  },
];

export const featuredProject = {
  name: "AI-Powered CRM & Sales Intelligence Dashboard",
  description:
    "A full-stack CRM that goes beyond record-keeping — it scores leads, reads customer sentiment, drafts follow-ups, and turns raw sales data into natural-language insights, all behind a role-based access system.",
  features: [
    "Lead Management",
    "Customer Management",
    "SQL Database",
    "Analytics Dashboard",
    "AI Lead Scoring",
    "AI Follow-up Generator",
    "Sentiment Analysis",
    "AI Sales Insights",
    "Role-Based Access",
  ],
  tech: ["React", "Node.js", "Express", "MySQL", "Python", "FastAPI", "ML / AI"],
  links: {
    live: "",
    github: "",
  },
};

export const otherProjects = [
  {
    name: "AI Jarvis",
    description:
      "An AI-based virtual assistant named Jojo, built in Python, applying machine learning concepts to create an interactive assistant application.",
    tech: ["Python", "Machine Learning"],
    links: { live: "", github: "" },
  },
  {
    name: "Virtual Assistant (Web Speech API)",
    description:
      "A voice-activated virtual assistant using JavaScript and the Web Speech API — supports commands like opening YouTube and retrieving time, with ~98% reported speech recognition accuracy.",
    tech: ["JavaScript", "Web Speech API"],
    links: { live: "", github: "" },
  },
  {
    name: "Personal Portfolio Website",
    description:
      "This site — a responsive portfolio built with React, Vite, and Tailwind CSS, featuring a resume download, an AI-Powered CRM case study, and scroll-driven sections for skills, experience, and education. Deployed on GitHub Pages.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    links: {
      live: "https://birla1cr.github.io/PORTFOLIO/",
      github: "https://github.com/Birla1cr/PORTFOLIO",
    },
  },
];

export const experience = [
  {
    company: "Codevirus Private Limited",
    role: "Web Development Intern",
    period: "Currently Working",
    points: [
      "Developed and maintained responsive frontend interfaces for CRM applications.",
      "Built CRM dashboards for managing and monitoring business data.",
      "Implemented and managed lead management features, including lead tracking and status updates.",
      "Integrated APIs to connect frontend applications with backend services and databases.",
      "Worked on CRUD operations, search, filtering, and dashboard-related functionality.",
    ],
  },
  {
    company: "ANTI.AI",
    role: "Full Stack Developer Intern",
    period: "Sept 2025 – Feb 2026",
    points: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js.",
      "Developed backend functionality using Node.js and JavaScript.",
      "Designed and managed databases using MongoDB and MySQL.",
      "Connected frontend applications with backend services and databases.",
      "Used Git and GitHub for version control and project management.",
    ],
  },
];

export const education = [
  {
    title: "B.Tech, Artificial Intelligence & Machine Learning",
    subtitle: "Degree",
    meta: "Panipat Institute of Engineering & Technology, Haryana · Aug 2022 – Aug 2026",
  },
  {
    title: "Full Stack Development with AI",
    subtitle: "Certification",
  },
  {
    title: "Generative AI",
    subtitle: "Certification",
  },
  {
    title: "DSA with Java",
    subtitle: "Certification",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI", href: "#ai" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
