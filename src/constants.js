// ============================================================
//  PORTFOLIO CONSTANTS
//  Edit everything here — no need to touch any other files.
// ============================================================

// ── PERSONAL INFO ────────────────────────────────────────────
export const PERSONAL = {
  name: "Ronak Lalwani",
  title: "Freelance Web Developer",
  tagline: "Fast. Clean. Conversion-focused.",
  email: "hello@builtbyronak.com",
  domain: "builtbyronak.com",
  available: true, // toggles the green "Available" badge
  photo: "", // e.g. '/images/ronak.jpg' — leave empty to show initials
  initials: "RL",
  description:
    "I'm Ronak — a Senior Frontend Engineer with 7+ years building production apps for healthcare, fintech, and SaaS companies. Now taking on freelance projects: landing pages, web apps, and performance work — delivered fast, at a price that makes sense for your business.",
  footerNote: "Built with React 19 · Deployed on Vercel",
};

// ── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIAL = {
  linkedin: "https://linkedin.com/in/ronak-lalwani",
  github: "https://github.com/ronaklalwanii",
  twitter: "", // leave empty to hide
};

// ── STATS (hero pills) ────────────────────────────────────────
export const STATS = [
  { value: "7+", suffix: "yrs", label: "Experience" },
  { value: "52", suffix: "%", label: "Avg load time reduction" },
  { value: "65", suffix: "%", label: "Efficiency gain delivered" },
  { value: "4.8", suffix: "★", label: "Template rating" },
  { value: "2–3", suffix: " days", label: "Delivery" },
];

// ── SERVICES ──────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "Zap",
    name: "Starter Landing Page",
    description:
      "A single, focused landing page built to convert visitors into enquiries. Mobile-responsive, contact form connected to your inbox, deployed and live.",
    price: "From $200",
    turnaround: "2–3 day turnaround · 1 revision included",
  },
  {
    icon: "Rocket",
    name: "Pro Landing Page",
    description:
      "Multi-section marketing page with copy guidance, analytics setup, CMS integration if needed, and 30 days of post-launch support.",
    price: "From $500",
    turnaround: "5–7 day turnaround · 2 revisions included",
  },
  {
    icon: "Gauge",
    name: "Performance Audit & Fix",
    description:
      "Full Lighthouse audit + hands-on fixes. Core Web Vitals, load speed, mobile performance. I've taken scores from 68 → 92 and cut load times by 52%.",
    price: "From $300",
    turnaround: "3–5 day turnaround · full report included",
  },
  {
    icon: "Wrench",
    name: "Monthly Maintenance",
    description:
      "Ongoing updates, bug fixes, content changes, and peace of mind. No more chasing developers every time something breaks.",
    price: "From $200/mo",
    turnaround: "Rolling monthly · cancel anytime",
  },
  {
    icon: "LayoutDashboard",
    name: "React Admin Template",
    description:
      "Custom React + TypeScript admin dashboards built from scratch — or extend an existing template. RBAC, data tables, charts, dark mode, fully typed components. I've shipped templates used in 2,000+ production deployments with a 4.8★ rating.",
    price: "Let's talk pricing",
    turnaround: "Scope-dependent · custom quote via email",
  },
];

// ── WORK EXPERIENCE ───────────────────────────────────────────
export const WORK = [
  {
    period: "Apr 2024 — Mar 2026",
    company: "York IE",
    title: "Senior Frontend Engineer",
    body: "Clients: Laine, MedicalEase & Cyncly — building enterprise-grade React applications across healthcare, AI, and flooring marketplace verticals.",
    bullets: [
      "Architected production-grade Admin Panel for marketing teams using React, TypeScript & MUI",
      "Built Cyncly Homebase — multi-tenant platform with RBAC, real-time notifications & complex interactive UIs",
      "Developed MedicalEase: reduced case review time from 40h → 6h (65% efficiency gain)",
      "Mentored 2 junior devs; established guild standards that improved onboarding speed by 25%",
    ],
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "TanStack Query",
      "AI Workflows",
    ],
  },
  {
    period: "Apr 2023 — Nov 2023",
    company: "FitPeo",
    title: "Senior Web Developer",
    body: "Healthcare Technology Platform — redesigned multi-portal analytics platform serving 5,000+ medical practices.",
    bullets: [
      "Directed end-to-end redesign of 4 HIPAA-compliant portals; migrated 50k lines of jQuery → React + TypeScript with zero downtime",
      "35% average performance uplift — LCP reduced from 3.8s to 2.5s via code-splitting and CSS inlining",
      "Eliminated 60% of runtime errors by leading TypeScript adoption across monorepo",
    ],
    tags: ["React", "TypeScript", "Next.js", "Redux"],
  },
  {
    period: "Oct 2018 — Jan 2023",
    company: "Clevision Technologies",
    title: "Frontend Developer",
    body: "Core engineering team for React admin dashboard product line — 2,000+ enterprise deployments.",
    bullets: [
      "Built suite of React admin templates achieving 4.8/5.0 rating and $750K ARR",
      "Designed 100+ fully typed, documented components with dynamic theming and RBAC",
      "Implemented JWT + RBAC auth flow with 99.9% uptime and zero credential breaches in production",
    ],
    tags: ["React", "Next.js", "TypeScript", "Material-UI", "JWT"],
  },
];

// ── PROJECTS ──────────────────────────────────────────────────
//  image: path to screenshot e.g. '/images/cyncly.png'
//  leave image empty ('') to show the mock UI placeholder
export const PROJECTS = [
  {
    name: "Cyncly Homebase",
    description:
      "Multi-tenant core platform for flooring marketplace. Enterprise RBAC, real-time notifications, and complex interactive UIs across multiple organizations.",
    metric: "↑ Multi-org workflow platform · 99.5% SLA",
    image: "", // '/images/cyncly.png'
    tags: ["React", "Next.js", "TypeScript", "Redux"],
    links: [],
  },
  {
    name: "MedicalEase",
    description:
      "AI-powered healthcare litigation platform. Intelligent chronologies and interactive medical record visualization deployed across 50+ legal firms.",
    metric: "↓ Case review time: 40h → 6h (85% reduction)",
    image: "", // '/images/medicalease.png'
    tags: ["React 18", "TypeScript", "TanStack Query", "AI/ML"],
    links: [],
  },
  {
    name: "React Admin Templates",
    description:
      "Enterprise-grade dashboard template suite. 100+ fully typed components, dynamic theming, RBAC — powering 2,000+ production deployments.",
    metric: "★ 4.8/5.0 · $750K ARR · 2,000+ deployments",
    image: "", // '/images/admin-templates.png'
    tags: ["React", "TypeScript", "Material-UI", "JWT"],
    links: [
      {
        label: "Vuexy",
        url: "https://demos.pixinvent.com/vuexy-nextjs-admin-template/landing/",
      },
      {
        label: "Materialize",
        url: "https://pixinvent.com/materialize-mui-nextjs-admin-template/",
      },
      {
        label: "Sneat",
        url: "https://themeselection.com/item/sneat-mui-react-nextjs-admin-template/",
      },
    ],
  },
  {
    name: "Healthcare Portal Suite",
    description:
      "4 HIPAA-compliant portals for FitPeo — migrated 50k lines of legacy jQuery to modern React + TypeScript. Zero downtime, zero data loss.",
    metric: "↑ 35% performance uplift · LCP 3.8s → 2.5s",
    image: "", // '/images/healthcare.png'
    tags: ["React", "TypeScript", "Next.js", "HIPAA"],
    links: [],
  },
];

// ── METRICS (trust section) ────────────────────────────────────
export const METRICS = [
  { value: "92", label: "Lighthouse score achieved", sub: "up from 68" },
  {
    value: "65%",
    label: "Efficiency gain for MedicalEase",
    sub: "40h → 6h per case",
  },
  {
    value: "4.8★",
    label: "Template rating on marketplace",
    sub: "300+ reviews",
  },
  {
    value: "$750K",
    label: "ARR from templates built",
    sub: "2,000+ deployments",
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────
//  Add real testimonials here after your first few projects.
//  Leave array empty ([]) to hide the section entirely.
export const TESTIMONIALS = [
  // {
  //   quote:   'Ronak delivered the landing page in under 48 hours. Clean code, looked great on mobile.',
  //   name:    'Jane Smith',
  //   role:    'Founder, Acme Co',
  // },
];

// ── NAV LINKS ─────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
