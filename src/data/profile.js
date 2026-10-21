/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR THE WHOLE PORTFOLIO
 *  Edit this file to update any section of the website.
 *  The "Ask SRK" agent also answers questions from this data.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Shubham Khatik",
  shortName: "Shubham",
  handle: "SRKhatik",
  photo: "profile",
  roles: [
    "Shopify Developer",
    "Frontend Engineer",
    "AI Agent Builder",
    "Amazon & Flipkart Listing Expert",
  ],
  tagline:
    "I build fast, high-converting Shopify stores, modern React interfaces and AI-powered workflows that help brands sell more online.",
  about: [
    "I'm a Shopify & Frontend developer from Hinganghat, Maharashtra, India with 9+ years of experience. I've built and optimised storefronts for international brands, from theme architecture in Liquid to custom JavaScript features and app integrations.",
    "Today I combine development with AI. I build and work with AI agents to automate product listings, content and repetitive store operations, and I manage marketplace catalogs on Amazon and Flipkart end-to-end.",
  ],
  location: "Hinganghat, Maharashtra, India",
  availability: "Open to full-time roles, freelance projects & collaborations",
  experienceYears: 9, // shown as "9+ years" across the site and by the agent
  resume: "/Resume.pdf",
};

/** My own D2C brand. Links come from mkoji.com; add/remove a link = add/remove a line. */
export const brand = {
  name: "MKOJI",
  logo: "mkoji",
  product: "Makhana",
  founded: 2024,
  role: "Founder",
  tagline: "Roasted flavoured makhana from Hinganghat.",
  description:
    "MKOJI is Shubham's own makhana (fox nut) brand, founded in 2024 in Hinganghat. He built the website and runs the brand's online sales himself, on mkoji.com, Amazon, Flipkart and Google Shopping.",
  flavours: ["Nagpuri Tadka", "Butter Delight", "Royal SweetNut", "Phool Makhana"],
  highlights: ["Roasted, not fried", "No palm oil", "No preservatives", "Delivery across India"],
  website: "https://www.mkoji.com/",
  links: [
    { id: "website", label: "mkoji.com", url: "https://www.mkoji.com/" },
    { id: "amazon", label: "Amazon brand store", url: "https://www.amazon.in/stores/Mkoji/page/955397FF-B635-4468-BD65-97BDFA07DCA1" },
    { id: "flipkart", label: "Flipkart", url: "https://www.flipkart.com/search?q=makhana&p%5B%5D=facets.brand%255B%255D%3DMkoji" },
    { id: "googleshopping", label: "Google Shopping", url: "https://www.google.com/search?tbm=shop&q=MKOJI+makhana" },
    { id: "google", label: "Google", url: "https://www.google.com/search?q=MKOJI+Makhana+Hinganghat" },
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/mkoji_official/" },
    { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@mkoji_official" },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/profile.php?id=61583102884898" },
  ],
};

export const contact = {
  email: "shubhamkhatik@mkoji.com",
  phone: "+91 8412949901",
  whatsapp: "918412949901",
  location: "Hinganghat, Maharashtra, India",
};

export const socials = [
  { id: "github", label: "GitHub", handle: "@SRKhatik", url: "https://github.com/SRKhatik" },
  { id: "linkedin", label: "LinkedIn", handle: "shubham-khatik", url: "https://www.linkedin.com/in/shubham-khatik-4a21a9203/" },
  { id: "instagram", label: "Instagram", handle: "@shubham_k1410", url: "https://www.instagram.com/shubham_k1410/" },
  { id: "email", label: "Email", handle: contact.email, url: `mailto:${contact.email}` },
];

export const stats = [
  { value: profile.experienceYears, suffix: "+", label: "Years of experience" },
  { value: 7, suffix: "+", label: "Shopify stores shipped" },
  { value: 30, suffix: "+", label: "GitHub repositories", live: "repos" },
  { value: 2, suffix: "", label: "Marketplaces managed" },
];

export const services = [
  {
    icon: "shopify",
    title: "Shopify Development",
    text: "Custom Shopify 2.0 themes, sections & blocks in Liquid, speed optimisation and app integrations for high-converting stores.",
    tags: ["Liquid", "Shopify 2.0", "Theme dev"],
  },
  {
    icon: "ai",
    title: "AI Agents & Automation",
    text: "AI agents and LLM workflows that write product copy, generate listings, answer customers and automate repetitive store tasks.",
    tags: ["AI agents", "Prompting", "Automation"],
  },
  {
    icon: "market",
    title: "Amazon & Flipkart Listings",
    text: "Product listing creation, SEO titles, bullet points, descriptions, bulk catalog uploads and listing quality optimisation.",
    tags: ["Amazon Seller Central", "Flipkart Seller Hub", "Catalog"],
  },
  {
    icon: "code",
    title: "Frontend Engineering",
    text: "Responsive, accessible interfaces in React and modern JavaScript with clean, maintainable component architecture.",
    tags: ["React", "JavaScript", "UI/UX"],
  },
  {
    icon: "server",
    title: "Backend & APIs",
    text: "REST APIs with Node.js & Express, MongoDB/MySQL data models, authentication and third-party API integrations.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: "rocket",
    title: "Store Setup & Growth",
    text: "End-to-end store launch: products, payments, shipping, apps, analytics and conversion-focused improvements.",
    tags: ["Setup", "CRO", "Performance"],
  },
];

/** level: 1 = Familiar, 2 = Proficient, 3 = Advanced */
export const skillGroups = [
  {
    id: "ecommerce",
    label: "E-commerce",
    skills: [
      { name: "Shopify / Shopify 2.0", level: 3 },
      { name: "Liquid", level: 3 },
      { name: "Theme customisation (Dawn, Ella…)", level: 3 },
      { name: "Shopify apps & integrations", level: 2 },
      { name: "Amazon Seller Central listings", level: 3 },
      { name: "Flipkart Seller Hub listings", level: 3 },
      { name: "Bulk catalog / flat-file uploads", level: 2 },
      { name: "Product SEO & copy", level: 2 },
    ],
  },
  {
    id: "ai",
    label: "AI & Agents",
    skills: [
      { name: "AI agents & workflows", level: 3 },
      { name: "Prompt engineering", level: 3 },
      { name: "Claude / ChatGPT / Gemini", level: 3 },
      { name: "LLM APIs integration", level: 2 },
      { name: "AI-assisted coding", level: 3 },
      { name: "AI listing & content generation", level: 3 },
      { name: "Automation (no-code + scripts)", level: 2 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "JavaScript (ES6+)", level: 3 },
      { name: "HTML5", level: 3 },
      { name: "CSS3 / Responsive", level: 3 },
      { name: "React.js", level: 2 },
      { name: "jQuery / Ajax", level: 2 },
      { name: "Bootstrap", level: 2 },
      { name: "Framer Motion", level: 1 },
    ],
  },
  {
    id: "backend",
    label: "Backend & DB",
    skills: [
      { name: "Node.js", level: 2 },
      { name: "Express.js", level: 2 },
      { name: "REST APIs / Axios", level: 2 },
      { name: "MongoDB", level: 2 },
      { name: "MySQL", level: 1 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git & GitHub", level: 2 },
      { name: "VS Code", level: 3 },
      { name: "Postman", level: 2 },
      { name: "Figma", level: 2 },
      { name: "Netlify / Render", level: 2 },
      { name: "NPM", level: 2 },
      { name: "MS Office / Excel", level: 3 },
    ],
  },
];

export const experience = [
  {
    company: "MKOJI Makhana (own brand)",
    role: "Founder",
    logo: "mkoji",
    period: "2024 – Present",
    type: "Own business · Hinganghat",
    points: [
      "Founded a roasted flavoured makhana brand (no palm oil, no preservatives).",
      "Built mkoji.com and run online sales on Amazon, Flipkart and Google Shopping.",
    ],
  },
  {
    company: "Pure Cosmeceuticals Pvt. Ltd",
    role: "Shopify Developer",
    period: "Sep 2024 – Jan 2026",
    type: "Full-time · Remote",
    logo: "pure",
    points: [
      "Handled theme development plus frontend & backend customisation of Shopify stores.",
      "Built and optimised features that improved performance, UX and online sales.",
      "Worked with cross-functional teams on scalable, custom store functionality.",
    ],
  },
  {
    company: "The Pixel Edge",
    role: "Shopify Theme Developer",
    period: "Jun 2023 – Sep 2024",
    type: "Full-time · Hybrid · Nagpur",
    logo: "pixeledge",
    points: [
      "Developed and customised themes like Ella, Dawn and Spotlight for international brands.",
      "Built dynamic Liquid features and optimised store performance.",
      "Configured stores: products, payment gateways, shipping and third-party apps.",
    ],
  },
  {
    company: "Freelance",
    role: "Web, Shopify & Marketplace Developer",
    period: "Ongoing",
    type: "Freelance",
    logo: "freelance",
    points: [
      "Shopify builds, React apps and Amazon & Flipkart catalog work for clients.",
      "Using AI agents to speed up listings, content and repetitive operations.",
    ],
  },
  {
    company: "V-Mart Hinganghat",
    role: "Co-Founder",
    period: "Sep 2020 – May 2022",
    type: "Startup",
    logo: "vmart",
    points: [
      "Launched an online grocery business with door-to-door delivery.",
      "Designed and built the e-commerce website from scratch.",
      "Managed marketing, operations, customer service and logistics.",
    ],
  },
  {
    company: "HNI Office India Ltd, Nagpur",
    role: "Frontend Developer Trainee",
    period: "Aug 2018 – Jul 2020",
    type: "Full-time",
    logo: "hni",
    points: [
      "Built responsive, interactive web apps with HTML, CSS, Bootstrap, JS & jQuery.",
      "Won the Best MI Idea Award 2019.",
    ],
  },
  {
    company: "Sai Ambrosia Computer Education",
    role: "Computer Teacher",
    period: "Jan 2016 – Dec 2016",
    type: "Teaching",
    logo: "sai",
    points: ["Taught MS Office (Excel, Word, PowerPoint) and essential software."],
  },
];

/** category values drive the filter tabs on the Projects section */
export const projects = [
  {
    title: "Petgram",
    category: "React",
    image: "petgram",
    description: "Pet community + e-commerce platform with auth and dashboards for owners and admins.",
    stack: ["React", "Node.js", "MongoDB"],
    demo: "https://petgramdemo.onrender.com/",
  },
  {
    title: "CRM Application",
    category: "React",
    image: "crm",
    description: "Customer, ticket and task management with role-based access and analytics charts.",
    stack: ["React", "Express", "MongoDB"],
    demo: "https://crm-application-2023.netlify.app/",
    code: "https://github.com/SRKhatik/july-Backend-crm-app",
  },
  {
    title: "Movie Booking App",
    category: "React",
    image: "movie",
    description: "Browse movies, pick seats and book tickets. Formik forms and Context API state.",
    stack: ["React", "Context API", "Formik"],
    demo: "https://movie-nights-srk.netlify.app",
    code: "https://github.com/SRKhatik/Moving-Booking-App",
  },
  {
    title: "E-commerce Web App",
    category: "JavaScript",
    image: "ecom",
    description: "Vanilla JS store with product filtering, cart and a responsive shopping UI.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://s-mart-ecommerce-web-shubhamkhatik14.netlify.app/",
    code: "https://github.com/SRKhatik/E-commerceWeb",
  },
  {
    title: "Weather App",
    category: "JavaScript",
    image: "weather",
    description: "Live weather lookup from a public API with a clean, responsive interface.",
    stack: ["JavaScript", "REST API"],
    demo: "https://weather-app-srk.netlify.app/",
    code: "https://github.com/SRKhatik/weatherApp",
  },
  {
    title: "Tic-Tac-Toe",
    category: "React",
    image: "tictac",
    description: "Classic two-player game built with React state and CSS.",
    stack: ["React", "CSS"],
    demo: "https://tic-tac-toe-srk.netlify.app",
    code: "https://github.com/SRKhatik/Tic-Tac-Toe-Game",
  },
  {
    title: "Shopify Website Detector",
    category: "Shopify",
    description: "Chrome extension that detects whether the current website runs on Shopify.",
    stack: ["Chrome Extension", "JavaScript"],
    code: "https://github.com/SRKhatik/chrome-Extensions",
  },
  {
    title: "Dynamic Variant Badges",
    category: "Shopify",
    description: "Pure JavaScript badge injection for Shopify product variants.",
    stack: ["JavaScript", "Shopify"],
    code: "https://github.com/SRKhatik/Variant-Badge-js",
  },
  {
    title: "Create-a-Travel-Set Page",
    category: "Shopify",
    description: "Custom Shopify bundle-builder page built with Liquid, JS and CSS.",
    stack: ["Liquid", "JavaScript", "CSS"],
    code: "https://github.com/SRKhatik/shopify-create-travel-set",
  },
  {
    title: "Portfolio (this site)",
    category: "React",
    image: "portfolio",
    description: "Data-driven, animated React portfolio with an AI 'Ask SRK' assistant.",
    stack: ["React", "Vite", "Framer Motion"],
    code: "https://github.com/SRKhatik/Portfolio",
  },
];

/** Professional Shopify client stores (shown in the "Shopify Work" section). Add a store = add a line. */
export const shopifyStores = [
  { name: "Truth & Beauty", url: "https://www.trytruthandbeauty.com/", region: "India", industry: "Skincare" },
  { name: "Purecare", url: "https://www.purecare.com/", region: "USA", industry: "Sleep & bedding" },
  { name: "Adrianna Papell", url: "https://www.adriannapapell.com/", region: "USA", industry: "Fashion" },
  { name: "Rem-Fit", url: "https://www.rem-fit.co.uk/", region: "UK", industry: "Sleep & mattresses" },
  { name: "Warmyourfloor", url: "https://warmyourfloor.ca/", region: "Canada", industry: "Floor heating" },
  { name: "All Times Gifts", url: "https://alltimesgifts.com.au/", region: "Australia", industry: "Gifts" },
  { name: "Maxmattres", region: "", industry: "" },
];

/** What I typically deliver on client stores (shown under the store cards). */
export const shopifyWorkScope = [
  "Shopify 2.0 theme development & customisation",
  "Custom sections, blocks & Liquid features",
  "Speed & Core Web Vitals optimisation",
  "App integrations, checkout & store setup",
];

export const marketplace = {
  intro:
    "I manage product catalogs on India's biggest marketplaces, from first listing to a fully optimised catalog, using AI agents to move faster without losing quality.",
  platforms: [
    {
      id: "amazon",
      name: "Amazon",
      points: [
        "New product (ASIN) creation & variation families",
        "Keyword-rich titles, bullets, descriptions & backend search terms",
        "A+ content planning and image guideline compliance",
        "Bulk flat-file uploads and listing error fixes",
      ],
    },
    {
      id: "flipkart",
      name: "Flipkart",
      points: [
        "Single & bulk listing via Seller Hub templates",
        "Category, attribute and specification mapping",
        "Listing quality score improvement & image standards",
        "Pricing, inventory and catalog updates",
      ],
    },
  ],
  aiFlow: [
    "Product data in",
    "AI agent drafts title, bullets & description",
    "Keyword + policy check",
    "Bulk upload & monitor",
  ],
};

export const education = [
  { title: "Full Stack Web Development", place: "Relevel by Unacademy" },
  { title: "Diploma in Mechanical Engineering", place: "Mata Mahakali Polytechnic, Warora (MSBTE)" },
  { title: "HSC (Class XII)", place: "Bharat Jr. College, Hinganghat" },
  { title: "SSC (Class X)", place: "Dr. B. R. Ambedkar School, Hinganghat" },
];

export const achievements = [
  "Founded MKOJI Makhana (2024), selling on mkoji.com, Amazon & Flipkart",
  "Best MI Idea Award 2019, HNI Office India Ltd, Nagpur",
  "Shipped Shopify stores for brands in India, the USA, UK, Canada & Australia",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "shopify-work", label: "Shopify" },
  { id: "mkoji", label: "MKOJI" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
