export const siteConfig = {
  name: "InsureThing",
  title: "InsureThing — Insurance products, underwriting systems, and AI",
  description:
    "Operator-led insurance consulting for carriers, MGAs, and insurtechs. Build products, improve underwriting and pricing, and apply AI to real insurance workflows.",
  url: "https://insure-thing.com",
  email: "hello@insure-thing.com",
  linkedin: "https://www.linkedin.com/in/donald-seibert/",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/labs", label: "Labs" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "data-driven-strategic-insights",
    title: "Data-Driven Strategic Insights",
    description:
      "Translate portfolio data into decisions a leadership team can act on. Loss triangles, segmentation, and book diagnostics that answer the questions executives actually ask.",
  },
  {
    slug: "generative-ai-and-ml-solutions",
    title: "Generative AI and ML Solutions",
    description:
      "Practical AI for underwriting, submission triage, and claims. The work spans model selection, retrieval pipelines, and evaluation so the system earns trust before it earns scale.",
  },
  {
    slug: "regulatory-and-compliance-expertise",
    title: "Regulatory and Compliance Expertise",
    description:
      "Rate filings, bureau coordination, and state-by-state strategy. Deep familiarity with commercial lines filings and the judgment to know when a product decision is really a compliance decision.",
  },
  {
    slug: "underwriting-and-pricing-optimization",
    title: "Underwriting and Pricing Optimization",
    description:
      "Rebuild rating plans, tune risk appetite, and close the loop between bound premium and ultimate loss. Built automated underwriting from scratch at Next Insurance and applied the same playbook since.",
  },
  {
    slug: "process-and-efficiency-improvements",
    title: "Process and Efficiency Improvements",
    description:
      "Find where the work actually happens and remove the friction around it. Operational redesign grounded in what underwriters, ops teams, and brokers do every day.",
  },
  {
    slug: "commercial-insurance-focus",
    title: "Commercial Insurance Focus",
    description:
      "Twenty-plus years inside commercial lines. Small commercial, middle market, specialty programs, and the particular economics of MGAs and program carriers.",
  },
];

export const servicePillars = [
  {
    number: "01",
    title: "Build insurance products",
    description:
      "Turn a market opportunity into a product that can be filed, explained, implemented, and operated.",
    outcomes: [
      "Product and coverage architecture",
      "State-entry and filing strategy",
      "Bureau adoption and deviation analysis",
      "Forms, endorsements, and implementation plans",
    ],
  },
  {
    number: "02",
    title: "Improve underwriting and portfolio performance",
    description:
      "Connect risk appetite, pricing, segmentation, and operating practice to the performance of the book.",
    outcomes: [
      "Appetite and referral-rule design",
      "Pricing and segmentation diagnostics",
      "Portfolio analysis and corrective actions",
      "Underwriting authority and documentation",
    ],
  },
  {
    number: "03",
    title: "Apply AI to insurance operations",
    description:
      "Use models where they improve the work, with evaluation, controls, and human judgment designed in from the start.",
    outcomes: [
      "Submission intake and document extraction",
      "Model-and-harness evaluation",
      "Retrieval, workflow, and decision-support systems",
      "Human review, escalation, and audit design",
    ],
  },
] as const;

export const engagements = [
  {
    client: "Middle-market commercial carrier",
    title: "Pricing and loss-performance modernization",
    description:
      "Helped implement predictive modeling and AI-assisted tools to strengthen pricing segmentation, risk selection, and portfolio management, connecting analytical outputs to practical underwriting decisions.",
    transfer:
      "Translated the models and methods into guidance the carrier's underwriting, product, and analytics teams could understand and use.",
  },
  {
    client: "Specialty commercial MGA",
    title: "Carrier alignment and targeted growth",
    description:
      "Helped identify potential carrier partners, refine pricing, and find niche segments where the MGA's underwriting capabilities could support profitable book expansion.",
    transfer:
      "Connected carrier strategy, target-market selection, pricing, and portfolio priorities in one operating plan.",
  },
  {
    client: "Non-standard commercial auto carrier · Current engagement",
    title: "Multi-state expansion and product automation",
    description:
      "Supporting state expansion, forms-process automation, and improved pricing segmentation by translating regulatory and product requirements into a repeatable launch process.",
    transfer:
      "Building the forms logic, pricing rationale, and state-entry decisions into processes the internal team can operate and extend.",
  },
] as const;

export const pastCompanies = [
  "Next Insurance",
  "Farmers",
  "Progressive",
  "Valen Analytics",
  "Genpact",
  "McKinsey",
];
