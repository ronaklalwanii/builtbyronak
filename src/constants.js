// ============================================================
//  PORTFOLIO CONSTANTS
//  Edit everything here. No need to touch any other files.
// ============================================================

// -- PERSONAL INFO --------------------------------------------
export const PERSONAL = {
  name: "Ronak Lalwani",
  title: "AI Integration for Web Apps",
  tagline: "Ship AI features your users actually trust.",
  email: "hello@builtbyronak.com",
  domain: "builtbyronak.com",
  available: true, // toggles the green "Available" badge
  photo: "", // e.g. '/images/ronak.jpg', leave empty to show initials
  initials: "RL",
  description:
    "Senior Frontend Engineer with 7+ years building production apps for healthcare, legal, and SaaS companies. I put AI into web products: streaming chat and copilot interfaces, document analysis workflows, and the dashboards that make model output legible. Most recently a litigation platform running across 2,400+ active cases. Available for contract work now.",
  footerNote: "Built with React 19 · Deployed on Vercel",
};

// -- SOCIAL LINKS ---------------------------------------------
export const SOCIAL = {
  linkedin: "https://linkedin.com/in/ronak-lalwani",
  twitter: "", // leave empty to hide
};

// -- STATS (hero pills) ----------------------------------------
export const STATS = [
  { value: "7+", suffix: "yrs", label: "Experience" },
  { value: "2,400", suffix: "+", label: "Cases on platforms I built" },
  { value: "40→6", suffix: "h", label: "Review time cut per case" },
  { value: "500", suffix: "+", label: "Tenants served" },
  { value: "50k", suffix: " LOC", label: "Migrated to React + TS" },
];

// -- SERVICES --------------------------------------------------
export const SERVICES = [
  {
    icon: "LayoutDashboard",
    name: "Admin Panel Build",
    description:
      "A full admin dashboard in React and TypeScript. User and role management, permissions, data tables, charts, search and filtering, dark mode. Multi-tenant if you need it. I've built these for platforms serving 500+ organisations.",
    price: "From $2,000",
    turnaround: "3-5 weeks · scoped upfront",
  },
  {
    icon: "Sparkles",
    name: "AI Integration",
    description:
      "Wire an LLM into your existing app. Chat and copilot interfaces, streaming responses that render token by token, document analysis, search over your own data. Includes the parts most builds get wrong: citations back to the source, and sensible handling when the model returns something wrong.",
    price: "From $2,000",
    turnaround: "2-4 weeks · scoped upfront",
  },
  {
    icon: "Zap",
    name: "Landing Page",
    description:
      "A single focused page built to convert. Mobile responsive, contact form wired to your inbox, deployed and live.",
    price: "From $200",
    turnaround: "2-3 days · 1 revision included",
  },
  {
    icon: "Gauge",
    name: "Performance Audit & Fix",
    description:
      "Full Lighthouse audit plus hands-on fixes. Core Web Vitals, load speed, mobile performance. A good first project if you want to see how I work before committing to something larger.",
    price: "From $300",
    turnaround: "3-5 days · full report included",
  },
  {
    icon: "Wrench",
    name: "Monthly Retainer",
    description:
      "Ongoing frontend capacity for teams shipping continuously. Bug fixes, new features, and changes without hiring. Hours agreed upfront so scope stays clear on both sides.",
    price: "From $500/mo",
    turnaround: "Rolling monthly · cancel anytime",
  },
];

// -- WORK EXPERIENCE -------------------------------------------
export const WORK = [
  {
    period: "Apr 2024, Mar 2026",
    company: "York IE",
    title: "Senior Frontend Engineer",
    body: "Clients: Laine, MedicalEase and Cyncly. Enterprise-grade React applications across healthcare, AI, and flooring marketplace verticals.",
    bullets: [
      "Architected production-grade Admin Panel for marketing teams using React, TypeScript & MUI",
      "Built Cyncly Homebase, a multi-tenant platform with RBAC, real-time notifications and complex interactive UIs",
      "Developed MedicalEase: cut case review time from roughly 40h → 6h per case",
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
    period: "Apr 2023, Nov 2023",
    company: "FitPeo",
    title: "Senior Web Developer",
    body: "Healthcare Technology Platform. Redesigned multi-portal analytics platform serving 5,000+ medical practices.",
    bullets: [
      "Directed end-to-end redesign of 4 HIPAA-compliant portals; migrated 50k lines of jQuery → React + TypeScript with zero downtime",
      "35% average performance uplift, LCP reduced from 3.8s to 2.5s via code-splitting and CSS inlining",
      "Eliminated 60% of runtime errors by leading TypeScript adoption across monorepo",
    ],
    tags: ["React", "TypeScript", "Next.js", "Redux"],
  },
  {
    period: "Oct 2018, Jan 2023",
    company: "Clevision Technologies",
    title: "Frontend Developer",
    body: "Core engineering team for the React admin dashboard product line, 2,000+ enterprise deployments.",
    bullets: [
      "Built suite of React admin templates achieving 4.8/5.0 rating and $750K ARR",
      "Designed 100+ fully typed, documented components with dynamic theming and RBAC",
      "Implemented JWT + RBAC auth flow with 99.9% uptime and zero credential breaches in production",
    ],
    tags: ["React", "Next.js", "TypeScript", "Material-UI", "JWT"],
  },
];

// -- PROJECTS --------------------------------------------------
//  image: path to screenshot e.g. '/images/cyncly.png'
//  leave image empty ('') to show the mock UI placeholder
export const PROJECTS = [
  {
    name: "MedicalEase",
    description:
      "AI-powered healthcare litigation platform. AI-generated chronologies, streaming document summaries, and an in-app PDF viewer with annotation panels, running across 2,400+ active cases.",
    metric: "↓ Case review time: roughly 40h → 6h per case",
    image: "",
    carouselImages: [
      "/images/projects/Dashboard.jpg",
      "/images/projects/New-Case.jpg",
      "/images/projects/Preview-Document.jpg",
      "/images/projects/Chronology-Timeline.jpg",
      "/images/projects/Billing-Chronology-Events.jpg",
      "/images/projects/Medical-Record-Detail.jpg",
      "/images/projects/Billing-Chronology.jpg",
      "/images/projects/Medical-Records.jpg",
      "/images/projects/Billing-Detail-View.jpg",
      "/images/projects/Case-Management.jpg",
      "/images/projects/Edit-Case-Details.jpg",
      "/images/projects/Chronology-Detail-View.jpg",
      "/images/projects/Medical-Chronology.jpg",
    ],
    tags: ["React 18", "TypeScript", "TanStack Query", "AI/ML"],
    links: [],
  },
  {
    name: "React Admin Templates",
    description:
      "Enterprise-grade dashboard template suite. 100+ fully typed components, dynamic theming and RBAC, powering 2,000+ production deployments.",
    metric: "★ 4.8/5.0 · $750K ARR · 2,000+ deployments",
    image: "",
    carouselImages: [
      "/images/projects/vuexy-dashboard.png",
      "/images/projects/materio-dashboard.png",
      "/images/projects/matieralize-admin.png",
      "/images/projects/sneat-dashboard.png",
      "/images/projects/templates-1.png",
      "/images/projects/templates-2.png",
      "/images/projects/templates-3.png",
      "/images/projects/templates-4.png",
      "/images/projects/templates-5.png",
      "/images/projects/templates-6.png",
    ],
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
    name: "Cyncly Homebase",
    description:
      "Multi-tenant core platform for a flooring marketplace. Enterprise RBAC, plugin registry, and multi-channel notifications across in-app, push and SMS.",
    metric: "500+ retailers, zero access-control incidents",
    image: "",
    carouselImages: [
      "/images/projects/cyncly/companies-list.jpg",
      "/images/projects/cyncly/add-user-wizard.png",
      "/images/projects/cyncly/add-role-wizard.png",
      "/images/projects/cyncly/add-locations-wizard.png",
      "/images/projects/cyncly/edit-user-account.png",
      "/images/projects/cyncly/notifications.png",
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux"],
    links: [],
  },
];

// -- ALSO SHIPPED ----------------------------------------------
//  Text-only rows. Work with no usable screenshots, shown as a
//  compact list rather than cards with empty image slots.
export const ALSO_SHIPPED = [
  {
    name: "Healthcare Portal Suite",
    description:
      "4 HIPAA-compliant portals for FitPeo serving 5,000+ medical practices. Migrated 50k lines of legacy jQuery to React and TypeScript with zero downtime.",
    metric: "35% performance uplift · LCP 3.8s → 2.5s",
    tags: ["React", "TypeScript", "Next.js", "HIPAA"],
  },
  {
    name: "Laine",
    description:
      "AI marketing platform. Admin panel for enterprise campaign teams with multimodal AI capabilities and real-time analytics.",
    metric: "Company wound down in 2026 · screenshots unavailable",
    tags: ["React", "TypeScript", "Redux", "AI/ML"],
  },
];

// -- METRICS (trust section) ------------------------------------
export const METRICS = [
  {
    value: "2,400+",
    label: "Active cases on the AI platform I built",
    sub: "MedicalEase, legal-medical litigation",
  },
  {
    value: "40→6h",
    label: "Case review time, per case",
    sub: "via AI chronologies + document summaries",
  },
  {
    value: "500+",
    label: "Tenants on the platform I architected",
    sub: "Cyncly Homebase, zero access-control incidents",
  },
  {
    value: "50k",
    label: "Lines migrated to React + TypeScript",
    sub: "4 HIPAA portals, zero downtime",
  },
];

// -- PROCESS ---------------------------------------------------
//  Genuinely sequential, so the numbering carries information.
export const PROCESS = [
  {
    title: "Understand",
    body: "A call and a written brief. What you're shipping, who uses it, and what counts as done.",
  },
  {
    title: "Scope",
    body: "Fixed price, fixed deliverables, a start and end date. Sent in writing before any work begins.",
  },
  {
    title: "Build",
    body: "Work in your repo, your process. Pull requests that explain themselves, so review never needs a call.",
  },
  {
    title: "Hand over",
    body: "Tested, documented, and maintainable by your team after I'm gone. No lock-in to me.",
  },
];

// -- TESTIMONIALS ----------------------------------------------
//  Add real testimonials here after your first few projects.
//  Leave array empty ([]) to hide the section entirely.
export const TESTIMONIALS = [
  // {
  //   quote:   'Ronak delivered the landing page in under 48 hours. Clean code, looked great on mobile.',
  //   name:    'Jane Smith',
  //   role:    'Founder, Acme Co',
  // },
];

// -- NAV LINKS -------------------------------------------------
export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// -- HERO STATS ------------------------------------------------
//  Three only. Each one is defensible and traceable to a project.
export const HERO_STATS = [
  { value: "2,400+", label: "Active cases" },
  { value: "500+", label: "Retailers" },
  { value: "4", label: "HIPAA portals" },
];
