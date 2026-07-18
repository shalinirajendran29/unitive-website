import type { Answer } from "./types";

/**
 * Unitive knowledge base.
 *
 * Every fact below is sourced from the live site (app/ + components/) so the
 * assistant never invents a service, client or capability. When you add a page,
 * add the matching intent here — that is the only place answers live.
 */

export const CONTACT = {
  email: "info@unitive.in",
  phones: ["+91 44-4855 6006", "+91 90032 26006", "+91 73973 06006"],
} as const;

/** Shown when the assistant has no confident answer. */
export const HANDOFF =
  "I'll connect you with our engineering team — they'll be able to answer that properly.";

interface Intent {
  id: string;
  /** Highly indicative terms (weight 3). */
  strong: string[];
  /** Supporting terms (weight 1). */
  weak?: string[];
  answer: Answer;
}

const escapeRe = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Intents are ordered most-specific first so that an exact tie resolves toward
 * the narrower topic (e.g. "moldflow" beats the broader "cae").
 */
const INTENTS: Intent[] = [
  {
    id: "internship",
    strong: ["internship", "intern", "trainee", "fresher"],
    weak: ["apply", "student", "college", "project"],
    answer: {
      content:
        "We're always glad to hear from students and early-career engineers.\n\nWe don't publish a live internship list on the site, so the fastest route is to send your CV and area of interest — **Digital**, **Engineering** or **CAE** — straight to our team.\n\n**Email** " +
        CONTACT.email +
        "\n**Phone** " +
        CONTACT.phones[0] +
        "\n\nMention the domain you'd like to work in and we'll route you to the right lead.",
      suggestions: [
        "What technologies do you work with?",
        "Tell me about Unitive",
        "Talk to an expert",
      ],
      link: { label: "Contact the team", href: "/contact" },
    },
  },
  {
    id: "careers",
    strong: ["career", "job", "hiring", "vacancy", "vacancies", "recruit", "opening", "work with you", "join"],
    weak: ["resume", "cv", "position", "role", "apply", "employment"],
    answer: {
      content:
        "We grew from 2 people in 2017 to a team of **28 professionals** across software, embedded and mechanical domains — and we keep looking for people who enjoy hard problems.\n\nCurrent openings aren't listed on the site, so send your CV and the domain you're aiming at:\n\n• **Digital** — web, mobile, AI, data, IoT\n• **Engineering** — design and product development\n• **CAE** — FEA, CFD, Moldflow\n\n**Email** " +
        CONTACT.email,
      suggestions: ["Do you offer internships?", "Tell me about Unitive", "What industries do you serve?"],
      link: { label: "Contact the team", href: "/contact" },
    },
  },
  {
    id: "cae",
    strong: ["cae", "fea", "cfd", "moldflow", "simulation", "finite element", "computational fluid", "crash", "ncap"],
    weak: ["analysis", "structural", "thermal", "aerodynamic", "durability", "stress", "molding", "moulding", "injection"],
    answer: {
      content:
        "Our **CAE** practice delivers high-fidelity virtual engineering so you can validate designs before cutting metal:\n\n• **FEA — Finite Element Analysis**\nStructural and durability simulation for chassis, body panels, suspension and crash safety systems, aligned to NCAP testing protocols.\n\n• **CFD — Computational Fluid Dynamics**\nAerodynamics, thermal management and cooling simulations to optimise airflow, cut drag and improve efficiency.\n\n• **Moldflow**\nPlastic injection moulding simulation to refine part design, reduce defects and shorten time-to-market.",
      suggestions: ["What industries do you serve?", "Tell me about engineering services", "Request a quote"],
      link: { label: "Explore CAE", href: "/cae" },
    },
  },
  {
    id: "ai",
    strong: ["ai", "artificial intelligence", "machine learning", "deep learning", "computer vision", "nlp", "natural language", "chatbot", "generative", "llm", "predictive"],
    weak: ["model", "automation", "intelligent", "data science", "recommendation", "analytics"],
    answer: {
      content:
        "AI has been our core since day one — we started in 2017 solving problems with **Machine Learning, Deep Learning, Computer Vision and Data Science**.\n\nWhat we build today:\n\n• AI chatbots and conversational systems\n• Machine learning models\n• Natural language processing\n• Computer vision\n• Predictive analytics\n• Recommendation systems\n• Generative AI\n• AI consulting\n\nWe also pair AI with **Robotic Process Automation** to automate document processing, invoicing, ERP workflows and data entry end to end.",
      suggestions: ["Tell me about data analytics", "What is RPA?", "Talk to an expert"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "rpa",
    strong: ["rpa", "robotic process", "process automation", "workflow automation"],
    weak: ["automate", "bot", "invoice", "repetitive", "document processing"],
    answer: {
      content:
        "**Robotic Process Automation** removes the repetitive work that quietly drains your team's hours:\n\n• Workflow automation\n• Document processing\n• ERP automation\n• Invoice automation\n• Data entry automation\n• Email automation\n• Bot monitoring\n• Ongoing support and maintenance",
      suggestions: ["Tell me about AI solutions", "What products do you build?", "Talk to an expert"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "data",
    strong: ["data analytics", "business intelligence", "power bi", "dashboard", "data warehouse", "reporting"],
    weak: ["insight", "kpi", "forecast", "visualisation", "visualization", "metrics", "data"],
    answer: {
      content:
        "Our **Data Analytics** work turns raw operational data into decisions leadership can act on:\n\n• Business intelligence\n• Power BI dashboards\n• Data visualisation\n• Data warehousing\n• Reporting solutions\n• Forecasting\n• KPI tracking\n• Data consulting",
      suggestions: ["Tell me about AI solutions", "What is RPA?", "Talk to an expert"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "iot",
    strong: ["iot", "internet of things", "sensor", "embedded"],
    weak: ["device", "smart", "monitoring", "real time", "industrial", "connectivity"],
    answer: {
      content:
        "Our **IoT** practice connects hardware to the cloud and makes it observable in real time:\n\n• IoT device integration\n• Smart automation\n• Sensor monitoring\n• Cloud connectivity\n• Industrial IoT\n• Remote monitoring\n• Real-time alerts\n• IoT consulting\n\nOur expertise extends into **embedded and mechanical** domains, so hardware and software are designed together rather than bolted on.",
      suggestions: ["Tell me about data analytics", "What industries do you serve?", "Talk to an expert"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "mobile",
    strong: ["mobile app", "android", "ios", "flutter", "react native", "cross platform", "app store"],
    weak: ["app", "mobile", "phone", "play store"],
    answer: {
      content:
        "We build **mobile applications** with production-grade UI and performance:\n\n• Android app development\n• iOS app development\n• Cross-platform apps\n• Flutter development\n• React Native apps\n• App store deployment\n• API integration\n• App maintenance",
      suggestions: ["Tell me about web development", "Tell me about AI solutions", "Request a quote"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "web",
    strong: ["web app", "website", "web development", "wordpress", "e-commerce", "ecommerce", "cms", "landing page"],
    weak: ["web", "site", "frontend", "backend", "seo", "responsive", "api"],
    answer: {
      content:
        "We build **scalable, secure web applications** tailored to how your business actually runs:\n\n• Custom website design and development\n• Responsive, mobile-optimised experiences\n• E-commerce solutions\n• WordPress development and CMS management\n• Landing pages and conversion-focused design\n• API and third-party integrations\n• SEO and performance optimisation\n• Ongoing maintenance and technical support",
      suggestions: ["Tell me about mobile apps", "What products do you build?", "Request a quote"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "products",
    strong: ["erp", "jewellery", "jewelry", "gate management", "inventory management", "product suite", "smart business", "what products", "your products"],
    weak: ["product", "software", "platform", "retail", "manufacturing", "stock"],
    answer: {
      content:
        "Beyond services, we ship our own **smart business products** — secure, integrated software built for modern operations:\n\n• **Jewellery Retail ERP** — transform how you run a jewellery retail business\n• **Jewellery Manufacturing ERP** — streamline manufacturing and production workflows\n• **Gate Management System** — monitor and manage visitor access efficiently\n• **Inventory Management** — track stock and tighten day-to-day operations\n\nHappy to arrange a walkthrough of any of these.",
      suggestions: ["Talk to an expert", "Tell me about digital services", "Request a quote"],
      link: { label: "See our products", href: "/" },
    },
  },
  {
    id: "cad",
    strong: ["cad", "autodesk", "autocad", "inventor", "fusion", "solidworks", "modelling", "modeling", "drafting", "licence", "license"],
    weak: ["design", "3d", "drawing", "software", "reseller"],
    answer: {
      content:
        "Unitive is an **Autodesk Authorised and Certified Service Provider** — so you get genuine licensing plus engineers who use the tools daily.\n\nWe support **CAD** work across product design, modelling and drafting, and connect it directly to our **CAE** simulation practice (FEA, CFD, Moldflow) so design and validation stay in one loop rather than thrown over a wall.",
      suggestions: ["Tell me about CAE", "Tell me about engineering services", "Talk to an expert"],
      link: { label: "Explore Engineering", href: "/engineering" },
    },
  },
  {
    id: "engineering",
    strong: ["engineering service", "product development", "mechanical", "engineering excellence", "prototype"],
    weak: ["engineering", "engineer", "design", "product", "development", "manufacturing"],
    answer: {
      content:
        "Our **Engineering** practice helps organisations accelerate development and get high-quality products to market:\n\n• Product design and development\n• Mechanical and embedded engineering\n• **CAD** design, modelling and drafting — as an Autodesk Certified Service Provider\n• **CAE** validation — FEA, CFD and Moldflow\n\nWe work with OEMs and Tier-1 suppliers across global industries, which means our process is built for the documentation and rigour those programmes demand.",
      suggestions: ["Tell me about CAE", "What industries do you serve?", "Talk to an expert"],
      link: { label: "Explore Engineering", href: "/engineering" },
    },
  },
  {
    id: "digital",
    strong: ["digital transformation", "digital service", "digital solution", "software service"],
    weak: ["digital", "transformation", "software", "technology", "modernise", "modernize"],
    answer: {
      content:
        "Our **Digital** practice spans six capabilities:\n\n• **Web App Development** — scalable, secure, high-performance\n• **Mobile App Development** — Android, iOS, Flutter, React Native\n• **Artificial Intelligence** — ML, computer vision, NLP, generative AI\n• **Robotic Process Automation** — workflow, document and ERP automation\n• **Data Analytics** — BI, Power BI dashboards, forecasting\n• **Internet of Things** — device integration, industrial IoT, remote monitoring\n\nWhich one is closest to what you're working on?",
      suggestions: ["Tell me about AI solutions", "Tell me about web development", "Request a quote"],
      link: { label: "Explore Digital", href: "/digital" },
    },
  },
  {
    id: "services",
    strong: ["what do you do", "what do you offer", "what services", "which services", "your services", "all services", "capabilities", "explore service", "service offering"],
    weak: ["service", "offer", "help", "provide", "solutions", "expertise"],
    answer: {
      content:
        "Unitive works across three connected practices:\n\n• **Digital** — web, mobile, AI, RPA, data analytics and IoT\n• **Engineering** — product development, mechanical and CAD design\n• **CAE** — FEA, CFD and Moldflow simulation\n\nThat combination is the point: the same team can design a product, validate it in simulation, and build the software around it.\n\nWhere would you like to start?",
      suggestions: ["Tell me about AI solutions", "Tell me about CAE", "What industries do you serve?"],
    },
  },
  {
    id: "industries",
    strong: ["industry", "industries", "sector", "aerospace", "automotive", "medical device", "oil and gas", "oil gas", "railway", "packaging", "heavy equipment"],
    weak: ["defence", "defense", "energy", "power", "machinery", "consumer", "rail", "transportation", "vertical"],
    answer: {
      content:
        "We serve industries where simulation accuracy is non-negotiable:\n\n• Aerospace & Defence\n• Automotive\n• Industrial Machinery\n• Energy & Power\n• Consumer Products\n• Medical Devices\n• Oil & Gas\n• Packaging\n• Rail & Transportation\n• Heavy Equipment\n\nIf yours isn't listed, it's still worth a conversation — the underlying engineering usually transfers.",
      suggestions: ["Who are your clients?", "Tell me about CAE", "Talk to an expert"],
    },
  },
  {
    id: "clients",
    strong: ["client", "customer", "reference", "case study", "who do you work with", "portfolio", "trusted by"],
    weak: ["brand", "company", "partner", "testimonial", "experience"],
    answer: {
      content:
        "We deliver engineering solutions for **OEMs and Tier-1 suppliers** across global industries. Organisations featured on our site include **L&T, Honeywell, Suzuki, Birlasoft, Black & Veatch, Celeros, Autosys, Nadi, Rev** and **Pollrich**.\n\nFor detailed case studies our team can walk you through work relevant to your sector.",
      suggestions: ["What industries do you serve?", "Talk to an expert", "Tell me about Unitive"],
      link: { label: "Contact the team", href: "/contact" },
    },
  },
  {
    id: "about",
    strong: ["about unitive", "about you", "about the company", "who are you", "your story", "company profile", "history", "founded", "vision", "mission", "how many people", "team size"],
    weak: ["company", "about", "unitive", "background", "story", "team", "started"],
    answer: {
      content:
        "**Unitive Technologies** has been solving hard problems since **2017**, starting in software development with Machine Learning, Deep Learning, Computer Vision and Data Science — then extending into **embedded** and **mechanical** domains.\n\nWe began with 2 people. We're now a team of **28 professionals** across those domains.\n\n**Our mission** — deliver accurate, innovative and reliable solutions to genuinely challenging problems.\n**Our vision** — grow steadily into a leading performer in the global marketplace, with a crew whose collective experience accelerates our clients' organisations.\n\nWe bridge creative digital experiences and robust technical engineering.",
      suggestions: ["What services do you offer?", "Who are your clients?", "How can I contact you?"],
      link: { label: "More about us", href: "/about" },
    },
  },
  {
    id: "quote",
    strong: ["quote", "pricing", "price", "cost", "budget", "estimate", "rate card", "how much", "proposal", "engagement model"],
    weak: ["charge", "fee", "expensive", "commercial", "contract"],
    answer: {
      content:
        "Pricing depends on scope — a Moldflow study and a multi-year digital transformation programme sit in very different places.\n\nThe quickest path to a real number: send us the problem, the timeline and any constraints, and our team will come back with a scoped proposal.\n\n**Email** " +
        CONTACT.email +
        "\n**Phone** " +
        CONTACT.phones[0],
      suggestions: ["Talk to an expert", "What services do you offer?", "What industries do you serve?"],
      link: { label: "Request a proposal", href: "/contact" },
    },
  },
  {
    id: "contact",
    strong: ["contact", "talk to", "reach you", "get in touch", "speak to", "expert", "call you", "email", "e-mail", "mail id", "phone", "address", "location", "office", "meeting", "demo", "consultation"],
    weak: ["connect", "reach", "sales", "enquiry", "inquiry", "schedule", "book"],
    answer: {
      content:
        "Let's get you to the right person.\n\n**Email** " +
        CONTACT.email +
        "\n**Phone**\n• " +
        CONTACT.phones.join("\n• ") +
        "\n\nOr send your requirement through the contact form and our engineering team will respond directly — do mention whether it's **Digital**, **Engineering** or **CAE** so we route it straight away.",
      suggestions: ["Request a quote", "What services do you offer?", "Do you offer internships?"],
      link: { label: "Open contact form", href: "/contact" },
    },
  },
  {
    id: "tech",
    strong: ["tech stack", "technologies", "what technology", "programming", "languages", "framework", "tools"],
    weak: ["stack", "tech", "build with", "platform"],
    answer: {
      content:
        "Across our practices we work with:\n\n• **AI / Data** — Machine Learning, Deep Learning, Computer Vision, NLP, Data Science, Power BI\n• **Web** — modern JavaScript stacks, WordPress and CMS, REST APIs\n• **Mobile** — Android, iOS, Flutter, React Native\n• **Engineering** — Autodesk toolchain (Certified Service Provider), FEA, CFD, Moldflow\n• **IoT / Embedded** — sensor integration, industrial IoT, cloud connectivity\n\nHappy to go deeper on any of these.",
      suggestions: ["Tell me about AI solutions", "Tell me about CAE", "Talk to an expert"],
    },
  },
  {
    id: "greeting",
    strong: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "namaste", "greetings"],
    weak: ["there", "yo"],
    answer: {
      content:
        "Hello — good to meet you. I'm Unitive's engineering assistant.\n\nI can walk you through our **Digital**, **Engineering** and **CAE** work, our products and industries, or put you straight in touch with the team.\n\nWhat brings you here today?",
      suggestions: ["What services do you offer?", "Tell me about AI solutions", "Talk to an expert"],
    },
  },
  {
    id: "thanks",
    strong: ["thank", "thanks", "cheers", "appreciate", "helpful"],
    answer: {
      content:
        "Happy to help. If anything else comes up — services, simulation, timelines, or getting a proposal together — just ask.\n\nAnd if you'd rather speak to a person, **" +
        CONTACT.email +
        "** reaches our team directly.",
      suggestions: ["Talk to an expert", "What services do you offer?"],
    },
  },
  {
    id: "bye",
    strong: ["bye", "goodbye", "see you", "later", "that's all", "thats all"],
    answer: {
      content:
        "Thanks for stopping by. Whenever you're ready to take it further, we're at **" +
        CONTACT.email +
        "**.\n\nHave a good one.",
      suggestions: ["Talk to an expert"],
    },
  },
];

const STRONG_WEIGHT = 3;
const WEAK_WEIGHT = 1;
/** A single strong hit is enough; otherwise we need real corroboration. */
const CONFIDENCE_THRESHOLD = 3;

/**
 * Longer keywords match as prefixes so "engineer" also catches "engineering".
 * Short acronyms are anchored at both ends — otherwise "fea" would match
 * "feature" and "ai" would match "aim".
 */
const toPattern = (keyword: string) => {
  const body = escapeRe(keyword);
  return new RegExp(keyword.length <= 3 ? `\\b${body}\\b` : `\\b${body}`, "i");
};

/** Compiled once at module load rather than on every keystroke. */
const COMPILED = INTENTS.map((intent) => ({
  intent,
  strong: intent.strong.map(toPattern),
  weak: (intent.weak ?? []).map(toPattern),
}));

const normalise = (input: string) =>
  input
    .toLowerCase()
    .replace(/[^a-z0-9\s&+-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** The fallback answer, used when nothing clears the confidence threshold. */
export function handoffAnswer(): Answer {
  return {
    content:
      HANDOFF +
      "\n\nIn the meantime I can cover our **Digital**, **Engineering** and **CAE** practices, our products, industries and clients.\n\n**Email** " +
      CONTACT.email +
      "\n**Phone** " +
      CONTACT.phones[0],
    suggestions: ["What services do you offer?", "Tell me about CAE", "Talk to an expert"],
    link: { label: "Contact the team", href: "/contact" },
  };
}

/**
 * Resolves a free-text question to the best-matching intent.
 * Returns the graceful handoff when no intent is confident enough.
 */
export function resolveAnswer(input: string): Answer {
  const text = normalise(input);
  if (!text) return handoffAnswer();

  let best: { answer: Answer; score: number } | null = null;

  for (const { intent, strong, weak } of COMPILED) {
    let score = 0;
    for (const re of strong) if (re.test(text)) score += STRONG_WEIGHT;
    for (const re of weak) if (re.test(text)) score += WEAK_WEIGHT;

    // Strictly greater keeps the earlier (more specific) intent on a tie.
    if (score > 0 && (best === null || score > best.score)) {
      best = { answer: intent.answer, score };
    }
  }

  if (!best || best.score < CONFIDENCE_THRESHOLD) return handoffAnswer();
  return best.answer;
}
