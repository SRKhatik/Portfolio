import {
  profile, brand, contact, socials, services, skillGroups, experience,
  projects, shopifyStores, marketplace, education, achievements,
} from "../data/profile.js";

const LEVEL = { 1: "familiar", 2: "proficient", 3: "advanced" };
const years = profile.experienceYears;
const link = (s) => socials.find((x) => x.id === s)?.url;

/** Plain-text profile used as the AI model's context (and kept in sync with the site). */
export function buildKnowledgeText() {
  return [
    `NAME: ${profile.name} (${profile.handle}). Location: ${profile.location}.`,
    `ROLES: ${profile.roles.join(", ")}. ${years}+ years of experience.`,
    `SUMMARY: ${profile.tagline} ${profile.about.join(" ")}`,
    `AVAILABILITY: ${profile.availability}.`,
    `OWN BRAND: ${brand.name} ${brand.product} (founded ${brand.founded}, ${brand.role}) – ${brand.description} Flavours: ${brand.flavours.join(", ")}. Highlights: ${brand.highlights.join(", ")}. Links: ${brand.links.map((l) => `${l.label}: ${l.url}`).join(", ")}.`,
    `CONTACT: email ${contact.email}, phone/WhatsApp ${contact.phone}. ${socials.map((s) => `${s.label}: ${s.url}`).join(", ")}. Resume: ${profile.resume}.`,
    `SERVICES: ${services.map((s) => `${s.title} – ${s.text}`).join(" | ")}`,
    `SKILLS: ${skillGroups.map((g) => `${g.label}: ${g.skills.map((s) => `${s.name} (${LEVEL[s.level]})`).join(", ")}`).join(" | ")}`,
    `EXPERIENCE: ${experience.map((e) => `${e.role} at ${e.company} (${e.period}, ${e.type}): ${e.points.join(" ")}`).join(" | ")}`,
    `PROJECTS: ${projects.map((p) => `${p.title} [${p.stack.join(", ")}] – ${p.description}${p.demo ? ` Demo: ${p.demo}` : ""}${p.code ? ` Code: ${p.code}` : ""}`).join(" | ")}`,
    `SHOPIFY CLIENT STORES: ${shopifyStores.map((s) => `${s.name}${s.region ? ` (${s.region})` : ""}${s.url ? ` ${s.url}` : ""}`).join(", ")}.`,
    `MARKETPLACE (AMAZON & FLIPKART): ${marketplace.intro} ${marketplace.platforms.map((p) => `${p.name}: ${p.points.join("; ")}`).join(" | ")}. AI listing flow: ${marketplace.aiFlow.join(" -> ")}.`,
    `EDUCATION: ${education.map((e) => `${e.title}, ${e.place}`).join("; ")}.`,
    `ACHIEVEMENTS: ${achievements.join("; ")}.`,
  ].join("\n");
}

const list = (arr) => arr.map((x) => `• ${x}`).join("\n");

/** Offline answer engine: keyword intents → answers built from profile data. */
const intents = [
  {
    keys: ["hello", "hi", "hey", "namaste", "who are you", "who is", "about", "introduce", "yourself", "tell me"],
    answer: () =>
      `${profile.name} is a ${profile.roles.slice(0, 3).join(", ")} based in ${profile.location}, with ${years}+ years of experience.\n\n${profile.tagline}`,
  },
  {
    keys: ["contact", "email", "mail", "phone", "call", "whatsapp", "reach", "number", "hire", "connect"],
    answer: () =>
      `You can reach Shubham here:\n• Email: ${contact.email}\n• Phone/WhatsApp: ${contact.phone}\n• LinkedIn: ${link("linkedin")}\n\nOr use the contact form on this page and he'll reply soon.`,
  },
  {
    keys: ["github", "linkedin", "instagram", "social", "profile", "links"],
    answer: () => `Shubham's profiles:\n${list(socials.map((s) => `${s.label}: ${s.url}`))}`,
  },
  {
    keys: ["mkoji", "makhana", "brand", "fox", "snack", "business", "founder"],
    answer: () =>
      `${brand.description}\n\nFlavours: ${brand.flavours.join(", ")}.\n${brand.highlights.join(" · ")}\n\nBuy MKOJI:\n${list(brand.links.filter((l) => ["website", "amazon", "flipkart"].includes(l.id)).map((l) => `${l.label}: ${l.url}`))}`,
  },
  {
    keys: ["amazon", "flipkart", "listing", "marketplace", "catalog", "asin", "seller"],
    answer: () =>
      `${marketplace.intro}\n\n${marketplace.platforms.map((p) => `${p.name}:\n${list(p.points)}`).join("\n\n")}`,
  },
  {
    keys: ["ai", "agent", "agents", "llm", "gpt", "claude", "chatgpt", "automation", "prompt"],
    answer: () => {
      const g = skillGroups.find((x) => x.id === "ai");
      return `Shubham works hands-on with AI agents to automate e-commerce work: listing generation, product copy and store operations.\n\nAI skills:\n${list(g.skills.map((s) => s.name))}`;
    },
  },
  {
    keys: ["shopify", "liquid", "theme", "store", "stores", "dawn", "ecommerce", "e-commerce"],
    answer: () =>
      `Shopify is Shubham's core expertise: custom Shopify 2.0 themes in Liquid, store setup and app integrations.\n\nStores he has worked on:\n${list(shopifyStores.map((s) => `${s.name}${s.region ? ` (${s.region})` : ""}`))}`,
  },
  {
    keys: ["skill", "skills", "tech", "stack", "technologies", "know", "languages", "react", "javascript", "node"],
    answer: () => skillGroups.map((g) => `${g.label}: ${g.skills.map((s) => s.name).join(", ")}`).join("\n\n"),
  },
  {
    keys: ["experience", "work", "job", "company", "current", "career", "worked", "years"],
    answer: () =>
      `${years}+ years of experience. Career so far:\n${list(experience.map((e) => `${e.role} at ${e.company} (${e.period})`))}`,
  },
  {
    keys: ["project", "projects", "portfolio", "built", "demo", "app"],
    answer: () => `Highlights:\n${list(projects.slice(0, 7).map((p) => `${p.title} – ${p.description}`))}\n\nMore on GitHub: ${link("github")}`,
  },
  {
    keys: ["service", "services", "offer", "help", "freelance", "price", "cost", "rate"],
    answer: () =>
      `Services Shubham offers:\n${list(services.map((s) => s.title))}\n\nFor pricing and timelines, email ${contact.email}. Every project is quoted to its scope.`,
  },
  {
    keys: ["education", "study", "degree", "college", "diploma", "qualification"],
    answer: () => list(education.map((e) => `${e.title} – ${e.place}`)),
  },
  {
    keys: ["award", "achievement", "achievements"],
    answer: () => list(achievements),
  },
  {
    keys: ["resume", "cv"],
    answer: () => `You can download Shubham's resume here: ${profile.resume}`,
  },
  {
    keys: ["location", "where", "based", "city", "relocate", "remote"],
    answer: () => `Shubham is based in ${profile.location}. ${profile.availability}.`,
  },
  {
    keys: ["available", "availability", "open", "hiring"],
    answer: () => `${profile.availability}. Best way to start: ${contact.email}.`,
  },
];

export function localAnswer(question) {
  const q = ` ${question.toLowerCase().replace(/[^a-z0-9+\- ]/g, " ")} `;
  let best = null;
  let bestScore = 0;
  for (const intent of intents) {
    const score = intent.keys.reduce((n, k) => n + (q.includes(` ${k} `) || (k.length > 4 && q.includes(k)) ? 1 : 0), 0);
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  if (best) return best.answer();
  return `I'm not sure about that one, but I can tell you about Shubham's skills, AI work, Shopify stores, Amazon & Flipkart listings, projects, experience or how to contact him. For anything else, email ${contact.email}.`;
}

export const suggestedQuestions = [
  "What does Shubham do?",
  "Does he work with AI agents?",
  "Amazon & Flipkart listing experience?",
  "Which Shopify stores has he built?",
  "What is MKOJI makhana?",
  "How can I contact him?",
];
