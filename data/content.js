export const site = {
  name: "Mandeep Singh Kachawa",
  monogram: "MSK",
  role: "Software Developer - AI Native",
  summary:
    "I build responsive, accessible web interfaces and the APIs behind them.",
  avatar: "/avatar.png",
  resume: "/resume.pdf",
  email: "mandeepsingh9773@gmail.com",
  phone: "+91 8290081041",
};

export const navigation = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mandeepsinghkachawa",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/mandeepsingh9773",
    icon: "github",
  },
];

export const experience = [
  {
    role: "Software Engineer - Frontend",
    company: "Laxaar Technologies",
    companyUrl: "https://laxaar.com/",
    period: "Mar 2025 – Sep 2026",
    points: [
      "Shipped and maintained a library of 100+ reusable components powering 45+ website templates.",
      "Built a responsive visual editor with breakpoint support from 1400px down to 360px.",
      "Delivered on-canvas visual editing controls so non-technical users can edit content without code.",
      "Raised release confidence with Playwright end-to-end tests that closed 30+ production defects.",
    ],
  },
  {
    role: "ReactJS Intern",
    company: "Laxaar Technologies",
    companyUrl: "https://laxaar.com/",
    period: "2024 – 2025",
    points: [
      "Contributed React features to the internal website builder during a fast product cycle.",
      "Turned design handoffs into production-ready, reusable UI components.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "S.S.WealthServ",
    period: "Oct 2023 – Dec 2023",
    points: [
      "Built responsive, accessible front-end pages for client-facing financial products.",
    ],
  },
];

export const work = [
  {
    title: "Component library",
    description: "100+ reusable components powering 45+ website templates.",
  },
  {
    title: "Responsive visual editor",
    description: "Breakpoint-accurate layouts from 1400px down to 360px.",
  },
  {
    title: "On-canvas editing",
    description: "Visual controls that let non-developers edit content in place.",
  },
  {
    title: "Playwright QA",
    description: "End-to-end coverage that resolved 30+ production defects.",
  },
  {
    title: "Cadence help system",
    description: "Contextual help backed by a 46-screen content map.",
  },
];

export const projects = [
  {
    name: "TimeLens",
    description: "A Chrome MV3 extension that tracks where your time goes.",
    tags: ["Chrome MV3", "JavaScript"],
    status: "Open source",
    href: "https://github.com/mandeepsingh9773/time-tracker-extension",
  }
];

export const skills = [
  { group: "Languages", items: ["JavaScript","Typescript", "HTML", "CSS", "SQL"] },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  { group: "Tools", items: ["Git", "GitHub", "Playwright", "Figma", "Vercel"] },
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    period: "2019 – 2023",
    institution: "Engineering College of Ajmer",
    institutionUrl: "https://www.ecajmer.ac.in/",
  },
  {
    degree: "CBSE - 10th & 12th",
    period: "2019 Paasout",
    institution: "Maheshwari Public School, Ajmer",
    institutionUrl: null,
  },
];
