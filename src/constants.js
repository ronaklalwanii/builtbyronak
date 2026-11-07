// ============================================================
//  PORTFOLIO CONSTANTS
//  Edit everything here. No need to touch any other files.
// ============================================================

// -- PERSONAL INFO --------------------------------------------
export const PERSONAL = {
  name: "Ronak Lalwani",
  title: "AI Integration for Web Apps",
  tagline: "Ship AI features your users actually trust.",
  email: "ronak@builtbyronak.com",
  calendly: "https://calendly.com/ronak-builtbyronak/30min", // leave empty to hide every "Book a call" button
  domain: "builtbyronak.com",
  available: true, // toggles the green "Available" badge
  photo: "", // e.g. '/images/ronak.jpg', leave empty to show initials
  initials: "RL",
  description:
    "Independent frontend and Shopify developer with 7+ years building production apps for healthcare, legal, and SaaS companies. I put AI into web products (streaming chat and copilot interfaces, document analysis workflows, admin dashboards) and I design and build Shopify stores that load fast and sell. You work with me directly, no agency layers. Available for freelance and contract work now.",
  footerNote: "Built with React 19 · Deployed on Vercel",
};

// -- SOCIAL LINKS ---------------------------------------------
export const SOCIAL = {
  linkedin: "https://linkedin.com/in/ronak-lalwani",
  twitter: "", // leave empty to hide
};

// -- SERVICES --------------------------------------------------
export const SERVICES = [
  {
    icon: "LayoutDashboard",
    name: "Admin Panel Build",
    short: "React and TypeScript. Roles, permissions, data tables, multi-tenant if you need it.",
    flagship: true,
    description:
      "A full admin dashboard in React and TypeScript. User and role management, permissions, data tables, charts, search and filtering, dark mode. Multi-tenant if you need it. I've built these for platforms serving 500+ organisations.",
    price: "From $2,000",
    turnaround: "3-5 weeks · scoped upfront",
  },
  {
    icon: "Sparkles",
    name: "AI Integration",
    short: "Chat and copilot interfaces, streaming responses, document analysis, citations back to the source.",
    flagship: true,
    description:
      "Wire an LLM into your existing app. Chat and copilot interfaces, streaming responses that render token by token, document analysis, search over your own data. Includes the parts most builds get wrong: citations back to the source, and sensible handling when the model returns something wrong.",
    price: "From $2,000",
    turnaround: "2-4 weeks · scoped upfront",
  },
  {
    icon: "Zap",
    name: "Landing Page",
    short: "One focused page. Mobile responsive, contact wired to your inbox, deployed and live.",
    description:
      "A single focused page built to convert. Mobile responsive, contact form wired to your inbox, deployed and live.",
    price: "From $200",
    turnaround: "2-3 days · 1 revision included",
  },
  {
    icon: "Gauge",
    name: "Performance Audit & Fix",
    short: "Lighthouse audit plus hands-on fixes to Core Web Vitals, load speed and mobile.",
    description:
      "Full Lighthouse audit plus hands-on fixes. Core Web Vitals, load speed, mobile performance. A good first project if you want to see how I work before committing to something larger.",
    price: "From $300",
    turnaround: "3-5 days · full report included",
  },
  {
    icon: "Wrench",
    name: "Monthly Retainer",
    short: "Ongoing frontend capacity. Hours agreed upfront so scope stays clear on both sides.",
    description:
      "Ongoing frontend capacity for teams shipping continuously. Bug fixes, new features, and changes without hiring. Hours agreed upfront so scope stays clear on both sides.",
    price: "From $500/mo",
    turnaround: "Rolling monthly · cancel anytime",
  },
];

// -- WORK EXPERIENCE -------------------------------------------
export const WORK = [
  {
    period: "Apr 2026 to Present",
    company: "Independent",
    title: "Freelance Frontend & Shopify Developer",
    body: "Working directly with founders and brands on Shopify stores and React web apps.",
    bullets: [
      "Designed and built 15 Shopify stores and sites end to end, from brand identity to live store",
      "Custom Liquid sections, landing pages and store speed work",
      "React, TypeScript and AI integration work for product teams",
    ],
    tags: ["Shopify", "Liquid", "React", "TypeScript", "AI Integration"],
  },
  {
    period: "Apr 2024 to Mar 2026",
    company: "York IE",
    title: "Senior Frontend Engineer",
    body: "Clients: Laine, MedicalEase and Cyncly. Enterprise-grade React applications across healthcare, AI, and flooring marketplace verticals.",
    bullets: [
      "Architected production-grade Admin Panel for marketing teams using React, TypeScript & MUI",
      "Built Cyncly Homebase, a multi-tenant platform with RBAC, real-time notifications and complex interactive UIs",
      "Developed MedicalEase: cut case review time from roughly 40h to 6h per case",
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
    period: "Apr 2023 to Nov 2023",
    company: "FitPeo",
    title: "Senior Web Developer",
    body: "Healthcare Technology Platform. Redesigned multi-portal analytics platform serving 5,000+ medical practices.",
    bullets: [
      "Directed end-to-end redesign of 4 HIPAA-compliant portals; migrated 50k lines of jQuery to React + TypeScript with zero downtime",
      "35% average performance uplift, LCP reduced from 3.8s to 2.5s via code-splitting and CSS inlining",
      "Eliminated 60% of runtime errors by leading TypeScript adoption across monorepo",
    ],
    tags: ["React", "TypeScript", "Next.js", "Redux"],
  },
  {
    period: "Oct 2018 to Jan 2023",
    company: "Clevision Technologies",
    title: "Frontend Developer",
    body: "Core engineering team for the React admin dashboard product line, 2,000+ enterprise deployments.",
    bullets: [
      "Built suite of React admin templates achieving 4.8/5.0 rating and $750K ARR",
      "Designed 100+ fully typed, documented components with dynamic theming and RBAC",
      "Implemented JWT + RBAC auth flows shared across the template line",
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
    metric: "Case review time cut from roughly 40h to 6h per case",
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
    metric: "4.8/5.0 rating, $750K ARR, 2,000+ deployments",
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
        label: "Materio",
        url: "https://themeselection.com/item/materio-mui-nextjs-admin-template/",
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
    metric: "35% performance uplift, LCP 3.8s to 2.5s",
    tags: ["React", "TypeScript", "Next.js", "HIPAA"],
  },
  {
    name: "Laine",
    description:
      "AI marketing platform. Admin panel for enterprise campaign teams with multimodal AI capabilities and real-time analytics.",
    metric: "Company wound down in 2026, screenshots unavailable",
    tags: ["React", "TypeScript", "Redux", "AI/ML"],
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

// -- NAV LINKS -------------------------------------------------
export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Shopify", href: "#shopify" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// -- PROOF STATS -----------------------------------------------
//  Shown in the credibility strip under the hero, not in the hero
//  itself. Each one is defensible and traceable to a named project.
export const PROOF_STATS = [
  { value: "2,400+", label: "Active cases" },
  { value: "500+", label: "Retailers" },
  { value: "4", label: "HIPAA portals" },
  { value: "50k", label: "Lines migrated" },
];

// -- MARKETPLACE PROOF -----------------------------------------
//  Public, third-party verifiable. The template products are linked
//  from the React Admin Templates project below.
export const MARKETPLACE = {
  rating: "4.8 / 5.0",
  detail: "across 2,000+ production deployments",
};

// -- SHOPIFY STORES --------------------------------------------
//  Done-for-you Shopify launches. Screenshots are 1280px WebP in
//  public/images/projects/shopify/<slug>/.
export const SHOPIFY_STORES = [
  {
    name: "Cozy Skies",
    blurb: "Outdoor sleep brand launched from scratch: product, brand and Shopify store.",
    summary: "A done-for-you launch for Cozy Skies, a UK outdoor brand built around one hero product, the Solace sleeping bag. I sourced the product, created the brand identity (a moon-and-tent mark in deep teal with burnt-orange accents) and designed and built the Shopify store. The homepage sells one product the way campers weigh it up: a sunset-campsite hero, spec-led benefits, a comparison table against ordinary sleeping bags, use cases from wild camping to motorhomes, reviews, a Trail Stories blog and newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/cozy-skies/cozy-skies-homepage-hero.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-product-benefits.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-comparison-table.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-use-cases.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-customer-reviews.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-brand-mission.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-trail-stories-blog.webp",
      "/images/projects/shopify/cozy-skies/cozy-skies-newsletter-footer.webp"
    ]
  },
  {
    name: "Snatched",
    blurb: "At-home beauty-tech brand: device range, salon-inspired identity and store.",
    summary: "A done-for-you launch for Snatched, a UK beauty brand selling LED, EMS and facial devices for use at home. I sourced the device range, built a calm, salon-inspired identity (a fine serif wordmark on warm taupe) and designed and built the Shopify store. The store leads with benefits and trust: a 'Lift, Sculpt, Glow' hero, a trust bar, a product grid with pricing and reviews, research-backed stats on facial EMS, explainers on LED, EMS and radio-frequency technology, a Journal of at-home routines and newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/snatched/snatched-homepage-hero.webp",
      "/images/projects/shopify/snatched/snatched-trust-bar.webp",
      "/images/projects/shopify/snatched/snatched-product-grid.webp",
      "/images/projects/shopify/snatched/snatched-why-snatched.webp",
      "/images/projects/shopify/snatched/snatched-customer-reviews.webp",
      "/images/projects/shopify/snatched/snatched-ritual-technology.webp",
      "/images/projects/shopify/snatched/snatched-journal-blog.webp",
      "/images/projects/shopify/snatched/snatched-newsletter-footer.webp"
    ]
  },
  {
    name: "Soluna Wellness",
    blurb: "Premium sauna and cold-plunge brand, designed for high-ticket buying.",
    summary: "A done-for-you launch for Soluna Wellness, a UK brand selling saunas, ice baths and accessories. I sourced the range, created the brand identity (a line-drawn lotus mark with a black-and-natural-wood look) and designed and built the Shopify store. Because these are considered purchases, the store does the explaining: a full-width hero carousel, spotlights on the Halo outdoor sauna and the cold-plunge ritual, tabbed benefits for performance, health and longevity, collection carousels, customer results, a maintenance FAQ, buying guides in the Journal and newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/soluna/soluna-homepage-hero.webp",
      "/images/projects/shopify/soluna/soluna-sauna-spotlight.webp",
      "/images/projects/shopify/soluna/soluna-cold-plunge-feature.webp",
      "/images/projects/shopify/soluna/soluna-sauna-benefits.webp",
      "/images/projects/shopify/soluna/soluna-benefits-grid.webp",
      "/images/projects/shopify/soluna/soluna-collections.webp",
      "/images/projects/shopify/soluna/soluna-proven-results.webp",
      "/images/projects/shopify/soluna/soluna-faq-support.webp",
      "/images/projects/shopify/soluna/soluna-journal-blog.webp",
      "/images/projects/shopify/soluna/soluna-newsletter-footer.webp"
    ]
  },
  {
    name: "Kovari",
    blurb: "Science-led haircare brand: range, identity and storefront.",
    summary: "A done-for-you launch for Kovari, a London haircare brand with cleanse, nourish and styling ranges. I sourced the products, created the identity (an italic-and-bold wordmark on sand and charcoal) and designed and built the Shopify store. Glassy best-seller cards sit on an editorial hero, followed by product spotlights, a 'haircare by the numbers' stats band, eco-packaging and ingredients messaging, a Shop Haircare range with prices, the Styling Atelier, the Kovari Edit journal and an Insider Updates sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/kovari/kovari-homepage-hero.webp",
      "/images/projects/shopify/kovari/kovari-trust-bar-brand.webp",
      "/images/projects/shopify/kovari/kovari-brand-spotlight.webp",
      "/images/projects/shopify/kovari/kovari-cleanse-range-stats.webp",
      "/images/projects/shopify/kovari/kovari-why-skin-eco.webp",
      "/images/projects/shopify/kovari/kovari-shop-haircare-styling.webp",
      "/images/projects/shopify/kovari/kovari-styling-edit-newsletter.webp",
      "/images/projects/shopify/kovari/kovari-reviews-testimonials.webp",
      "/images/projects/shopify/kovari/kovari-footer.webp"
    ]
  },
  {
    name: "Consent in Practice",
    blurb: "Brand and Shopify site for a UK consent and safeguarding training consultancy.",
    summary: "Consent in Practice is a UK consultancy that trains organisations on consent, safeguarding and digital harm. I created the brand identity (the 'cip' mark in black and periwinkle blue) and designed and built a Shopify site that turns a sensitive, specialist service into a clear offer for HR teams, leaders and universities. The site walks buyers from the problem to the business case and return on prevention, through five programmes from a 90-minute workshop to an annual partnership, the research-led methodology, case studies and founder Holly Kent's story, with consultation calls to action throughout.",
    tags: [
      "Brand identity",
      "UI design",
      "Shopify",
      "Lead generation"
    ],
    images: [
      "/images/projects/shopify/consent-in-practice/consent-homepage-hero.webp",
      "/images/projects/shopify/consent-in-practice/consent-problems-prevent.webp",
      "/images/projects/shopify/consent-in-practice/consent-who-we-help.webp",
      "/images/projects/shopify/consent-in-practice/consent-business-case.webp",
      "/images/projects/shopify/consent-in-practice/consent-return-on-prevention.webp",
      "/images/projects/shopify/consent-in-practice/consent-meet-holly.webp",
      "/images/projects/shopify/consent-in-practice/consent-programmes.webp",
      "/images/projects/shopify/consent-in-practice/consent-methodology-stats.webp",
      "/images/projects/shopify/consent-in-practice/consent-case-studies.webp",
      "/images/projects/shopify/consent-in-practice/consent-faq.webp",
      "/images/projects/shopify/consent-in-practice/consent-founder-story.webp",
      "/images/projects/shopify/consent-in-practice/consent-mission-approach.webp",
      "/images/projects/shopify/consent-in-practice/consent-about-mission.webp",
      "/images/projects/shopify/consent-in-practice/consent-footer.webp"
    ]
  },
  {
    name: "PJ Soul",
    blurb: "Matching family pyjama brand, launched for Christmas.",
    summary: "A done-for-you launch for PJ Soul, a family sleepwear brand selling matching Christmas pyjama sets. I sourced the range, created the identity (a serif PJ monogram on midnight navy and cream, with a falling-snow motif) and designed and built the Shopify store around the gifting season: a 'Christmas Starts Here' hero, a collection grid with Luxe, Sale and Premium badges, Christmas cards for one-at-a-time gifting, signature pyjama features, reviews, gift guides in the journal, a sale countdown and the Cosy Club loyalty programme.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/pj-soul/pj-soul-homepage-hero.webp",
      "/images/projects/shopify/pj-soul/pj-soul-christmas-collection.webp",
      "/images/projects/shopify/pj-soul/pj-soul-product-grid.webp",
      "/images/projects/shopify/pj-soul/pj-soul-christmas-cards.webp",
      "/images/projects/shopify/pj-soul/pj-soul-signature-pjs.webp",
      "/images/projects/shopify/pj-soul/pj-soul-comfort-home.webp",
      "/images/projects/shopify/pj-soul/pj-soul-reviews.webp",
      "/images/projects/shopify/pj-soul/pj-soul-journal.webp",
      "/images/projects/shopify/pj-soul/pj-soul-sale-loyalty.webp",
      "/images/projects/shopify/pj-soul/pj-soul-footer.webp"
    ]
  },
  {
    name: "Milo & Mae",
    blurb: "Parenting brand built around one smart product, the SmartTemp thermos.",
    summary: "A done-for-you launch for Milo & Mae, a parenting brand built around the SmartTemp thermos, which shows the water temperature on its lid for feeds on the go. I sourced the product, created the identity (a swirl mark on soft sage and cream) and designed and built the Shopify store. The pages follow a parent's day: an oversized SMART TEMP hero, 'Ready when you are' use cases for days out, parent reviews, Helpful Reads feeding guides, support cards for FAQs and contact, and a newsletter offer.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/milo-and-mae/milo-mae-homepage-hero.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-trust-bar-mission.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-use-cases-product.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-reviews.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-blog.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-journal-newsletter.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-support.webp",
      "/images/projects/shopify/milo-and-mae/milo-mae-footer.webp"
    ]
  },
  {
    name: "Fig & Mouse",
    blurb: "Design-led dog walking accessories: product, brand and store.",
    summary: "A done-for-you launch for Fig & Mouse, a pet brand selling printed harnesses, leashes, poop-bag holders and bundled walk sets. I sourced the products, created the identity (an FM monogram and editorial serif in chocolate brown and sand) and designed and built the Shopify store. A 'Walk with purpose' hero leads into shop-the-essentials collections, the comfort research behind the harness design, brand values, pet-parent reviews, a Giving Back section supporting the Pug Nation LA rescue, a journal and newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/fig-and-mouse/fig-mouse-homepage-hero.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-shop-essentials.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-comfort-design.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-values.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-reviews.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-giving-back.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-journal.webp",
      "/images/projects/shopify/fig-and-mouse/fig-mouse-footer.webp"
    ]
  },
  {
    name: "Dear Glow",
    blurb: "Everyday beauty tools brand: brushes, sponges and organisers.",
    summary: "A done-for-you launch for Dear Glow, a skin and beauty brand selling makeup brushes, blending sponges and beauty storage. I sourced the range, created the identity (a bold wordmark with a pink comma, on blush pink) and designed and built the Shopify store. Product-led sections carry the store: a best-seller card for the 14-piece brush set, an 'Organised' feature for beauty storage, the Dear Glow difference, the Dear Glow Edit categories and journal, reviews and a 'Stay in the Glow' sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/dear-glow/dear-glow-homepage-hero.webp",
      "/images/projects/shopify/dear-glow/dear-glow-organised.webp",
      "/images/projects/shopify/dear-glow/dear-glow-difference.webp",
      "/images/projects/shopify/dear-glow/dear-glow-edit-newsletter.webp",
      "/images/projects/shopify/dear-glow/dear-glow-makeup-simple.webp",
      "/images/projects/shopify/dear-glow/dear-glow-reviews.webp",
      "/images/projects/shopify/dear-glow/dear-glow-footer.webp"
    ]
  },
  {
    name: "Albies",
    blurb: "Dog walking and visibility gear brand: products, brand and store.",
    summary: "A done-for-you launch for Albies Pet Supplies, a dog gear brand selling LED harnesses, collars and leads. I sourced the products, created the identity (an illustrated dog-head crest on sage green and stone) and designed and built the Shopify store. The range is organised around three needs, Control, Freedom and Safety, supported by research-led trust stats, an Everyday Essentials carousel, reviews, the brand and shelter-support story, a Dog Walking Edit journal and delivery and support perks with newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/albies/albies-homepage-hero.webp",
      "/images/projects/shopify/albies/albies-trust-stats.webp",
      "/images/projects/shopify/albies/albies-pillars.webp",
      "/images/projects/shopify/albies/albies-everyday-essentials.webp",
      "/images/projects/shopify/albies/albies-reviews-story.webp",
      "/images/projects/shopify/albies/albies-our-story.webp",
      "/images/projects/shopify/albies/albies-journal.webp",
      "/images/projects/shopify/albies/albies-perks-newsletter.webp",
      "/images/projects/shopify/albies/albies-footer.webp"
    ]
  },
  {
    name: "Scented Drive",
    blurb: "Car fragrance brand built around an automatic vent diffuser.",
    summary: "A done-for-you launch for ScentedDrive, a UK car fragrance brand selling an automatic vent diffuser with refillable scents. I sourced the diffuser and scent range, created the identity (an SD monogram on warm grey and stone) and designed and built the Shopify store. A 'Freshness that drives with you' hero leads into product features, six scents from Lavender to White Tea, a three-step installation guide, refills, an FAQ on charging and usage, customer photo reviews, a journal and newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/scented-drive/scented-drive-homepage-hero.webp",
      "/images/projects/shopify/scented-drive/scented-drive-product-features.webp",
      "/images/projects/shopify/scented-drive/scented-drive-scents.webp",
      "/images/projects/shopify/scented-drive/scented-drive-installation.webp",
      "/images/projects/shopify/scented-drive/scented-drive-fragrances-faq.webp",
      "/images/projects/shopify/scented-drive/scented-drive-faq.webp",
      "/images/projects/shopify/scented-drive/scented-drive-reviews.webp",
      "/images/projects/shopify/scented-drive/scented-drive-customer-photos.webp",
      "/images/projects/shopify/scented-drive/scented-drive-journal.webp",
      "/images/projects/shopify/scented-drive/scented-drive-newsletter-footer.webp"
    ]
  },
  {
    name: "Elqorin",
    blurb: "Home sauna and cold-plunge brand with contrast-therapy bundles.",
    summary: "A done-for-you launch for Elqorin, a UK recovery brand selling home saunas, cold plunges and heat-plus-cold contrast bundles. I sourced the range, created the identity (a black block wordmark with an editorial serif on cream and black) and designed and built the Shopify store. It tells a problem-to-solution story, then presents three priced paths (Saunas, Cold Plunges and Heat + Cold), the delivery, warranty and returns standard, accessories, an FAQ on electrics, space and installation, and a direct line to an expert.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/elqorin/elqorin-homepage-hero.webp",
      "/images/projects/shopify/elqorin/elqorin-problem-reality.webp",
      "/images/projects/shopify/elqorin/elqorin-solution.webp",
      "/images/projects/shopify/elqorin/elqorin-collections.webp",
      "/images/projects/shopify/elqorin/elqorin-standard-stories.webp",
      "/images/projects/shopify/elqorin/elqorin-accessories.webp",
      "/images/projects/shopify/elqorin/elqorin-faq.webp",
      "/images/projects/shopify/elqorin/elqorin-footer.webp"
    ]
  },
  {
    name: "Oryn Wellness",
    blurb: "Sauna and recovery brand, designed around the home ritual.",
    summary: "A done-for-you launch for Oryn Wellness, a UK brand selling saunas, ice baths and recovery accessories. I sourced the range, created the identity (a stacked O-Y-N wordmark on stone grey and black) and designed and built the Shopify store. A 'Reset, at your own pace' hero carousel opens onto ice bath, sauna and accessory categories, session guidance on temperature, duration and sizing, a setup-and-care FAQ, a 'Designed Around Your Ritual' carousel featuring the Arca sauna and Fjord cold plunge, the Oryn Journal and a founder note.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/oryn-wellness/oryn-homepage-hero.webp",
      "/images/projects/shopify/oryn-wellness/oryn-categories-impact.webp",
      "/images/projects/shopify/oryn-wellness/oryn-wellbeing-stats.webp",
      "/images/projects/shopify/oryn-wellness/oryn-faq.webp",
      "/images/projects/shopify/oryn-wellness/oryn-ritual-products.webp",
      "/images/projects/shopify/oryn-wellness/oryn-journal.webp",
      "/images/projects/shopify/oryn-wellness/oryn-journal-footer.webp"
    ]
  },
  {
    name: "Elevate Her",
    blurb: "Women's supplement brand: range, identity and store.",
    summary: "A done-for-you launch for Elevate Her Supplements, a women's health brand selling vitamins, collagen, gut-health and menopause support. I sourced the range, created the identity (a lowercase wordmark with a bold 'her', in soft nude tones) and designed and built the Shopify store. Ingredient education leads (B12, magnesium, D3, omega, probiotics and collagen), followed by customer favourites such as GI-Balance+ and MenoEase, the 'Shine From Within' mission, collections, a founder story rooted in one woman's postnatal journey, a journal and newsletter sign-up.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/elevate-her/elevate-her-homepage-hero.webp",
      "/images/projects/shopify/elevate-her/elevate-her-ingredients.webp",
      "/images/projects/shopify/elevate-her/elevate-her-bestsellers.webp",
      "/images/projects/shopify/elevate-her/elevate-her-mission.webp",
      "/images/projects/shopify/elevate-her/elevate-her-collections.webp",
      "/images/projects/shopify/elevate-her/elevate-her-founder.webp",
      "/images/projects/shopify/elevate-her/elevate-her-journal.webp",
      "/images/projects/shopify/elevate-her/elevate-her-newsletter-footer.webp"
    ]
  },
  {
    name: "Avor Wellness",
    blurb: "Home sauna and portable ice bath brand for UK buyers.",
    summary: "A done-for-you launch for Avor Wellness, a UK home recovery brand selling infrared saunas and portable ice baths. I sourced the range, created the identity (a script 'A' mark in navy on warm off-white) and designed and built the Shopify store. A 'Your Space to Unwind' hero with a returns, delivery and quality trust bar leads into infrared research stats, priced products (the Flow ice bath and the Halo and Haven saunas), sauna benefits, reviews, an FAQ on heating, maintenance and running costs, a journal and a Talk to an Expert route.",
    tags: [
      "Product sourcing",
      "Brand identity",
      "UI design",
      "Shopify"
    ],
    images: [
      "/images/projects/shopify/avor-wellness/avor-homepage-hero.webp",
      "/images/projects/shopify/avor-wellness/avor-science-reset.webp",
      "/images/projects/shopify/avor-wellness/avor-products.webp",
      "/images/projects/shopify/avor-wellness/avor-benefits.webp",
      "/images/projects/shopify/avor-wellness/avor-reviews.webp",
      "/images/projects/shopify/avor-wellness/avor-faq.webp",
      "/images/projects/shopify/avor-wellness/avor-journal.webp",
      "/images/projects/shopify/avor-wellness/avor-journal-footer.webp"
    ]
  }
];
