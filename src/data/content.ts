import { CurrencyConfig, PricingPackage, Founder, FeaturePillar, Testimonial, FAQItem, DemoTransaction } from '../types';

export const SOFTWARE_APP_URL = "https://ledger-wfwc.vercel.app";

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1, label: 'USD ($)' },
  PKR: { code: 'PKR', symbol: '₨', rate: 280, label: 'PKR (₨)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

export const FOUNDERS: Founder[] = [
  {
    name: "Shamsa Malik",
    role: "Founder & Chief Executive Officer",
    bio: "Visionary entrepreneur and finance strategist passionate about democratizing enterprise-grade accounting for early-stage founders. Under Shamsa's leadership, LEDGER graduated through the National Incubation Center (NIC) acceleration program, transforming how emerging startups record and project their financial health.",
    quote: "Every entrepreneur deserves crystal-clear financial clarity. We built LEDGER so founders spend less time wrestling with chaotic balance sheets and more time scaling their dreams.",
    specialization: ["Financial Strategy", "Venture Growth", "Startup Ecosystems", "Corporate Governance"],
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    avatarColor: "from-emerald-500 to-teal-700",
  },
  {
    name: "Kubra Batool",
    role: "Co-Founder & Head of Product & Growth",
    bio: "Product architect and fintech innovator dedicated to crafting frictionless digital bookkeeping experiences. Kubra oversees user experience engineering, product roadmap, and customer success, ensuring LEDGER remains intuitive, robust, and aligned with modern entrepreneurial workflows.",
    quote: "Our goal is simple: turn complex accounting principles into automated, one-click financial peace of mind that empowers founders from Day 1.",
    specialization: ["Product Architecture", "UX/UI Design", "Customer Experience", "Fintech Innovations"],
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    avatarColor: "from-cyan-500 to-blue-700",
  }
];

export const NIC_DETAILS = {
  name: "National Incubation Center (NIC)",
  tagline: "Incubated & Accelerated at Pakistan's Premier Innovation Hub",
  description: "LEDGER was incubated at the National Incubation Center (NIC), where our founders transformed an urgent pain point into an industry-ready financial recording software. Backed by top-tier mentorship, technology grants, and an ecosystem of 500+ startups, LEDGER was engineered to solve the real financial reporting challenges of modern businesses.",
  milestones: [
    { year: "2023", title: "NIC Cohort Selection", desc: "Selected among top 2% of applicants for the prestigious National Incubation Center startup program." },
    { year: "2024", title: "Alpha Prototype & Traction", desc: "Tested with 150+ startup founders across e-commerce, SaaS, and creative agencies." },
    { year: "2025", title: "Enterprise Ready Launch", desc: "Released complete Ledger web platform featuring multi-currency tracking and automated P&L statements." }
  ],
  stats: [
    { label: "Incubation Cohort", value: "NIC Accelerated" },
    { label: "Active Founders", value: "850+" },
    { label: "Financial Records Tracked", value: "$48M+" },
    { label: "Average Time Saved / Mo", value: "18.5 hrs" }
  ]
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "solopreneur",
    name: "Solo Entrepreneur",
    tagline: "Ideal for freelancers, solo founders, and consultants recording baseline finances.",
    priceMonthlyUSD: 14,
    priceAnnualMonthlyUSD: 9,
    targetAudience: "Solopreneurs & Freelancers",
    highlightColor: "border-slate-700 bg-slate-900/60",
    features: [
      "Up to 350 monthly transactions",
      "Automated Income & Expense recording",
      "Basic Cashflow & Burn rate calculator",
      "1 business entity & 1 currency account",
      "Export PDF & CSV balance statements",
      "Single-user secure access",
      "Email support (24h turnaround)"
    ],
    limits: {
      transactionsPerMonth: "350",
      entities: "1 Entity",
      teamMembers: "1 User",
      storage: "1 GB Cloud Storage",
      reports: "Standard P&L & Cashflow"
    },
    ctaText: "Get Started Free"
  },
  {
    id: "startup-growth",
    name: "Startup Seed & Growth",
    tagline: "For funded startups, boutique agencies, and expanding teams needing real-time runway tracking.",
    priceMonthlyUSD: 39,
    priceAnnualMonthlyUSD: 29,
    popular: true,
    badge: "Most Popular for Startups",
    targetAudience: "Startups & Growing Teams (2-15 members)",
    highlightColor: "border-emerald-500/80 bg-slate-900/90 ring-1 ring-emerald-500/30",
    features: [
      "Unlimited monthly transactions",
      "Real-time Runway & Net Burn forecast",
      "Multi-currency support (USD, PKR, EUR, GBP)",
      "Up to 3 business entities / projects",
      "Automated Bank Reconciliation & Receipt tagging",
      "Investor-Ready Financial Deck export",
      "Up to 5 team members with role-based access",
      "Priority 24/7 chat support & onboarding"
    ],
    limits: {
      transactionsPerMonth: "Unlimited",
      entities: "3 Entities",
      teamMembers: "5 Team Members",
      storage: "15 GB Cloud Storage",
      reports: "Advanced P&L, Balance Sheet, Forecasts"
    },
    ctaText: "Start 14-Day Free Trial"
  },
  {
    id: "scale-pro",
    name: "Scale & SME Pro",
    tagline: "For established businesses needing automated audit trails, multi-department budgets, and tax readiness.",
    priceMonthlyUSD: 89,
    priceAnnualMonthlyUSD: 69,
    targetAudience: "Mature Companies & Scaling SMEs",
    highlightColor: "border-cyan-500/60 bg-slate-900/60",
    features: [
      "Everything in Growth, plus:",
      "Up to 10 entities & regional branch ledgers",
      "Automated Tax preparation & compliance summaries",
      "Custom chart of accounts & ledger hierarchy",
      "Up to 15 team members + Accountant invite",
      "AI anomaly detection on irregular expenses",
      "Dedicated account manager & 1-on-1 training",
      "API access & Zapier/Stripe webhooks"
    ],
    limits: {
      transactionsPerMonth: "Unlimited",
      entities: "10 Entities",
      teamMembers: "15 Team Members",
      storage: "50 GB Cloud Storage",
      reports: "Custom Audited Financial Statements"
    },
    ctaText: "Upgrade to Pro"
  },
  {
    id: "enterprise",
    name: "Custom Enterprise",
    tagline: "Custom-tailored financial infrastructure for large incubators, franchises, and enterprise holding groups.",
    priceMonthlyUSD: 199,
    priceAnnualMonthlyUSD: 159,
    targetAudience: "Incubators, Accelerators & Large Enterprises",
    highlightColor: "border-slate-700 bg-slate-900/40",
    features: [
      "Unlimited entities, branches, and subsidiaries",
      "Unlimited team seats with granular RBAC permissions",
      "Custom ERP & local banking integrations",
      "SOC-2 Type II audit report & custom SLA guarantee",
      "Dedicated solutions engineer",
      "Special NIC Alumni ecosystem bulk discounts",
      "On-premise or private cloud deployment options"
    ],
    limits: {
      transactionsPerMonth: "Unlimited High-Volume",
      entities: "Unlimited",
      teamMembers: "Unlimited",
      storage: "Dedicated Storage",
      reports: "Custom White-Label Financial Reports"
    },
    ctaText: "Contact Sales"
  }
];

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: "recording",
    title: "Instant Financial Recording",
    shortDesc: "Log income, expenses, and invoices in seconds with smart auto-categorization.",
    detailedDesc: "Eliminate messy spreadsheets and paper receipts. LEDGER automatically recognizes expense types, applies standard tax categories, and reconciles entries across multiple accounts.",
    iconName: "FileSpreadsheet",
    badge: "Zero Manual Errors",
    benefits: [
      "One-click transaction entry with receipt attachment",
      "Smart category tags: Payroll, Cloud, Marketing, Logistics",
      "Automatic balance reconciliations with zero discrepancy"
    ],
    metricLabel: "Time Saved Recording",
    metricValue: "85%"
  },
  {
    id: "runway",
    title: "Live Runway & Burn Rate Tracker",
    shortDesc: "Know exactly how many months of cash you have left before needing revenue or capital.",
    detailedDesc: "LEDGER connects your cash reserves directly to your operational expenses, providing dynamic runway countdowns, break-even targets, and predictive cash projections.",
    iconName: "TrendingUp",
    badge: "Founder Clarity",
    benefits: [
      "Dynamic runway countdown based on real-time net burn",
      "Scenario simulation: Test hiring or marketing budget impacts",
      "Instant alerts when monthly burn rate exceeds safety threshold"
    ],
    metricLabel: "Runway Visibility",
    metricValue: "100% Real-Time"
  },
  {
    id: "multicurrency",
    title: "Multi-Currency & Global Accounts",
    shortDesc: "Manage transactions seamlessly in USD, PKR, EUR, GBP, and AED with live rates.",
    detailedDesc: "Built specifically for international entrepreneurs, remote agencies, and exporters dealing with cross-border payments and currency fluctuations.",
    iconName: "Globe",
    badge: "Global Ready",
    benefits: [
      "Automated live forex exchange rate conversions",
      "Unified base currency consolidated reporting",
      "Separate bank ledger balances per localized currency"
    ],
    metricLabel: "Supported Currencies",
    metricValue: "40+ Currencies"
  },
  {
    id: "investor",
    title: "Investor-Ready Financial Reports",
    shortDesc: "Generate audited P&L statements, balance sheets, and cap tables in a single click.",
    detailedDesc: "Impression-ready PDF and CSV financial summaries built according to standard GAAP and IFRS principles, ready to share with venture capitalists, angel investors, and banks.",
    iconName: "PieChart",
    badge: "Boardroom Grade",
    benefits: [
      "Standard Profit & Loss (P&L) Statements",
      "Cashflow Statement with Operating, Investing & Financing breakdown",
      "One-click read-only link sharing for advisors & board members"
    ],
    metricLabel: "Pitch-Ready Reports",
    metricValue: "< 30 Seconds"
  },
  {
    id: "tax",
    title: "Tax & Compliance Automation",
    shortDesc: "Keep your business fully compliant with auto-calculated sales tax and deductible deductions.",
    detailedDesc: "Stay ahead of regulatory deadlines. LEDGER categorizes deductible expenses and aggregates VAT/GST/Sales tax summaries for effortless quarterly and annual filings.",
    iconName: "ShieldCheck",
    badge: "Audit Protected",
    benefits: [
      "Automated business expense tax write-off classification",
      "Year-end tax preparation package export",
      "Bank-grade 256-bit encryption with immutable audit logs"
    ],
    metricLabel: "Compliance Accuracy",
    metricValue: "99.9%"
  },
  {
    id: "collaboration",
    title: "Team & Accountant Multi-Seat",
    shortDesc: "Collaborate seamlessly with your co-founders, finance managers, and external CPAs.",
    detailedDesc: "Give granular view-only or editor permissions to team members while keeping executive payroll and banking tokens strictly confidential.",
    iconName: "Users",
    badge: "Secure RBAC",
    benefits: [
      "Role-based access: Admin, Accountant, Viewer, Manager",
      "Activity audit history: See who added or modified any entry",
      "Direct comments & approval workflows on flagged invoices"
    ],
    metricLabel: "Team Efficiency",
    metricValue: "3.4x Faster"
  }
];

export const INITIAL_DEMO_TRANSACTIONS: DemoTransaction[] = [
  { id: "TX-901", date: "Today, 10:45 AM", description: "Enterprise Client SaaS Subscription", category: "Revenue", type: "income", amount: 4850, status: "reconciled" },
  { id: "TX-902", date: "Today, 09:15 AM", description: "AWS Cloud & GPU Infrastructure", category: "Cloud Hosting", type: "expense", amount: 620, status: "reconciled" },
  { id: "TX-903", date: "Yesterday", description: "Product Team Bi-Weekly Payroll", category: "Payroll", type: "expense", amount: 3400, status: "reconciled" },
  { id: "TX-904", date: "Yesterday", description: "Meta & Google Ads Campaign", category: "Marketing", type: "expense", amount: 780, status: "reconciled" },
  { id: "TX-905", date: "Aug 26, 2026", description: "Fintech Advisory Retainer Client", category: "Consulting", type: "income", amount: 2500, status: "reconciled" },
  { id: "TX-906", date: "Aug 25, 2026", description: "NIC Incubation Coworking Hub Fee", category: "Office", type: "expense", amount: 250, status: "reconciled" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Hamza Tariq",
    role: "Founder & CTO",
    company: "DevSprint Technologies (NIC Alum)",
    industry: "B2B Software",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Before LEDGER, our team was losing 4 days every month trying to reconcile our Stripe payouts with our local operating costs. Shamsa and Kubra designed a tool that feels made specifically for modern startup founders.",
    metric: "Saved 16 hrs/month on bookkeeping",
    rating: 5
  },
  {
    id: "2",
    author: "Amina Farooq",
    role: "Managing Director",
    company: "Aura Creative Studio",
    industry: "Design & Digital Media",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "The live runway calculator gave us the exact data we needed to pitch our seed investors with total confidence. LEDGER is the single most valuable financial tool in our operational stack.",
    metric: "Raised $450k Seed with LEDGER P&L",
    rating: 5
  },
  {
    id: "3",
    author: "Zayn Sheikh",
    role: "Co-Founder",
    company: "HyperCart Logistics",
    industry: "E-Commerce",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "Multi-currency tracking in PKR and USD was our biggest headache with US-based accounting software. LEDGER solved it out of the box with zero setup hassle.",
    metric: "99.8% reconciliation accuracy",
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is LEDGER and who is it designed for?",
    answer: "LEDGER is an all-in-one financial intelligence and bookkeeping platform engineered specifically for entrepreneurs, startups, solo founders, and growing SMEs. It lets you record income and expenses, calculate your runway, monitor net burn rate, generate investor-grade P&L statements, and maintain clean audit-ready ledgers without needing a degree in accounting.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How does LEDGER compare to legacy accounting software like QuickBooks or Excel?",
    answer: "Traditional accounting tools are bloated, complex, and built for certified accountants with confusing double-entry jargon. Excel spreadsheets are fragile and prone to human error. LEDGER gives founders real-time runway visibility, instant receipt categorization, automated cashflow diagnostics, and multi-currency handling designed for high-velocity startups.",
    category: "general"
  },
  {
    id: "faq-3",
    question: "What is the story behind LEDGER and the National Incubation Center (NIC)?",
    answer: "LEDGER was founded by Shamsa Malik (CEO) and Kubra Batool (Head of Product) and incubated at the National Incubation Center (NIC). During their journey inside Pakistan's top startup ecosystem, they witnessed dozens of promising founders struggle with financial chaos and lack of runway clarity. They engineered LEDGER to give every entrepreneur enterprise-grade financial confidence.",
    category: "nic_startups"
  },
  {
    id: "faq-4",
    question: "Do you offer special packages or discounts for NIC startups and early ventures?",
    answer: "Yes! Startups affiliated with the National Incubation Center (NIC), certified university incubators, and early pre-seed ventures receive a 25% lifetime discount on our Startup Growth and Scale Pro packages. Contact our team or use the incubator coupon at checkout.",
    category: "nic_startups"
  },
  {
    id: "faq-5",
    question: "How secure is my company's financial data on LEDGER?",
    answer: "We treat your financial records with bank-level security. All data in transit is encrypted using TLS 1.3, and at rest using AES-256 encryption. We enforce granular role-based access control (RBAC), automated continuous backups, and strict zero-knowledge data privacy standards.",
    category: "security"
  },
  {
    id: "faq-6",
    question: "Can I easily export my data or migrate from existing spreadsheets?",
    answer: "Absolutely. You can import historical CSV and Excel sheets with our 1-click mapping tool. You can also export full ledger backups, balance sheets, and P&L statements in PDF, CSV, or formatted Excel at any time with no vendor lock-in.",
    category: "migration"
  },
  {
    id: "faq-7",
    question: "How do I access the live LEDGER software?",
    answer: "You can test our live web software right away by visiting https://ledger-wfwc.vercel.app or launching the interactive sandbox directly on this website. You can also book a personalized product walkthrough with our founders.",
    category: "packages"
  }
];
