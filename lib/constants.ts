export const SITE = {
  name: "Abhishek Donekal",
  title: "Abhishek Donekal | AI Agents Implementation Engineer",
  tagline: "AI AGENTS IMPLEMENTATION ENGINEER",
  bio: "Building intelligent AI agents, data pipelines, and self-hosted infrastructure from Miami, FL.",
};

/** Hero pill — pipe-separated roles (matches reference-style badge) */
export const HERO_ROLE_BADGE =
  "AI / ML Engineer · Agents & Gen AI · Data & Cloud";

/** Hero paragraph under the name — slightly fuller than SITE.bio */
export const HERO_INTRO =
  "I blend applied machine learning, AI agents, and full-stack engineering to turn complex ideas into production systems — from enterprise cloud platforms to self-hosted infrastructure.";

export const NAV_LINKS = [
  { href: "#about", label: "about" },
  { href: "#agent-section", label: "agents" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certs" },
  { href: "#hire", label: "hire me" },
] as const;

export const CONTACT = {
  phoneDisplay: "(786) 334-2880",
  phoneTel: "+17863342880",
  email: "adonekal@gmail.com",
  gmailCompose:
    "https://mail.google.com/mail/?view=cm&fs=1&to=adonekal@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhishek-donekal/",
  github: "https://github.com/abhishek-donekal",
};

export const TYPEWRITER_LINES = [
  "AI AGENTS IMPLEMENTATION ENGINEER",
  "GENERATIVE AI DEVELOPER",
  "DATA ENGINEER & ML ARCHITECT",
  "SELF-HOSTED AI INFRASTRUCTURE",
  "PYTHON & CLOUD SPECIALIST",
];

export const HERO_STATS = [
  { target: 5, label: "YEARS EXP" },
  { target: 10, label: "PROJECTS" },
  { target: 7, label: "CLOUD CERTS" },
];

export const ABOUT_PARAS = [
  "I'm a Python Developer & AI Engineer specialising in designing and deploying intelligent agent systems, generative AI solutions, and end-to-end data engineering pipelines.",
  "At Carnival Cruise Line and previously at Qualex Consulting Services, I've integrated AWS, Databricks, and cutting-edge LLMs to deliver enterprise-grade AI products that operate at scale.",
  "Beyond enterprise work, I run a self-hosted home server — deploying AI models, automation workflows, and multiple web apps entirely from my own hardware.",
];

export const ABOUT_CHIPS = [
  "Miami, FL",
  "Florida Int'l University",
  "He/Him",
  "Open to Work",
];

export const AGENTS = [
  {
    icon: "brain",
    title: "LLM Orchestration",
    desc: "Designing multi-agent pipelines with reasoning loops, tool use, and memory — built on top of OpenAI, Anthropic, and Ollama models.",
    tags: ["LangChain", "Ollama", "RAG", "Agents"],
    tagAccent: [2],
  },
  {
    icon: "zap",
    title: "Workflow Automation",
    desc: "Building no-code/low-code AI automation pipelines with n8n — connecting APIs, AI models, and data sources into production workflows.",
    tags: ["n8n", "Webhooks", "AI Triggers"],
    tagAccent: [0, 2],
  },
  {
    icon: "cloud",
    title: "Cloud AI Infrastructure",
    desc: "Provisioning scalable ML infrastructure on AWS — SageMaker, Lambda, EC2 — alongside Databricks for large-scale data processing.",
    tags: ["AWS", "Databricks", "SageMaker"],
    tagAccent: [0, 1],
  },
  {
    icon: "microscope",
    title: "ML Model Development",
    desc: "Training, fine-tuning, and deploying deep learning models with TensorFlow and PyTorch for classification, prediction, and NLP tasks.",
    tags: ["TensorFlow", "PyTorch", "Fine-Tuning"],
    tagAccent: [2],
  },
  {
    icon: "globe",
    title: "AI-Powered APIs",
    desc: "Shipping production-ready REST and async APIs in Flask & Django that expose AI capabilities — with clean, scalable backend architecture.",
    tags: ["Flask", "Django", "REST API"],
    tagAccent: [2],
  },
  {
    icon: "server",
    title: "Self-Hosted AI Stack",
    desc: "Running local AI models via Ollama, reverse-proxied through nginx, automated via n8n — full AI stack on personal hardware.",
    tags: ["Ollama", "nginx", "Cloudflare"],
    tagAccent: [2],
  },
] as const;

/** Radar chart — same proficiency labels as legacy bars */
export const SKILL_RADAR = [
  { subject: "Python / AI", value: 95, fullMark: 100 },
  { subject: "GenAI / LLMs", value: 90, fullMark: 100 },
  { subject: "AWS / Cloud", value: 88, fullMark: 100 },
  { subject: "Databricks", value: 85, fullMark: 100 },
  { subject: "ML / TensorFlow", value: 82, fullMark: 100 },
  { subject: "Flask / Django", value: 88, fullMark: 100 },
];

export const TOOLS = [
  "Python",
  "AWS",
  "Databricks",
  "TensorFlow",
  "Ollama",
  "n8n",
  "nginx",
  "Flask",
  "Django",
  "Cloudflare",
  "Docker",
  "SQL",
  "JavaScript",
  "Git",
  "LangChain",
  "Linux",
];

export type ProjectItem = {
  name: string;
  desc: string;
  icon: string;
  live?: boolean;
  /** 0–100 completion estimate */
  completion: number;
  /** one-line status note shown next to the bar */
  status?: string;
  tags: { label: string; variant: "default" | "accent" | "violet" }[];
  links: { label: string; href: string; variant: "github" | "live" }[];
};

export const PROJECTS: ProjectItem[] = [
  {
    name: "WARDROPE",
    desc: "AI-powered wardrobe cataloger and personal stylist — cross-platform React Native + Expo app with a FastAPI backend. Claude AI vision-tags clothing from photos, generates outfit combinations, and supports Stripe subscriptions. Full production QA audit and 33-issue bug-fix sprint delivered.",
    icon: "heart",
    live: true,
    completion: 88,
    status: "Production · QA sprint complete · Stripe live",
    tags: [
      { label: "React Native", variant: "accent" },
      { label: "FastAPI", variant: "default" },
      { label: "Claude AI", variant: "violet" },
      { label: "Expo", variant: "default" },
      { label: "Stripe", variant: "default" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abhishek-donekal/wardrope", variant: "github" },
      { label: "Live Demo", href: "https://wardrope-red.vercel.app", variant: "live" },
    ],
  },
  {
    name: "HOME SERVER + DURYO AGENT",
    desc: "Self-hosted homelab AI platform running 24/7 — nginx reverse proxy, n8n automation, local Ollama LLMs, and automated backups. DURYO Agent continuously monitors services, summarises incidents with AI, and fires alerts to keep the stack healthy.",
    icon: "monitor",
    completion: 95,
    status: "Running in production on personal hardware",
    tags: [
      { label: "nginx", variant: "accent" },
      { label: "n8n", variant: "accent" },
      { label: "Ollama", variant: "default" },
      { label: "AI Agent", variant: "violet" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/abhishek-donekal", variant: "github" }],
  },
  {
    name: "MIAMI HOUSING ML",
    desc: "End-to-end ML study of Miami's housing market — curated datasets, feature engineering, regression and ensemble models, plus Jupyter notebooks and visualisations that surface market signals for non-technical stakeholders.",
    icon: "home",
    completion: 90,
    status: "Analysis complete · notebooks published",
    tags: [
      { label: "Python", variant: "accent" },
      { label: "Jupyter", variant: "default" },
      { label: "ML", variant: "violet" },
      { label: "Data Science", variant: "default" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/abhishek-donekal/miami-housing-ml-analysis", variant: "github" }],
  },
  {
    name: "PDF CHATBOT (RAG)",
    desc: "Retrieval-Augmented Generation chatbot that ingests PDFs and answers questions using vector search and LLM reasoning — supports multi-document context, semantic chunking, and streaming responses.",
    icon: "file-text",
    completion: 83,
    status: "Core pipeline complete · UI in progress",
    tags: [
      { label: "Python", variant: "accent" },
      { label: "RAG", variant: "violet" },
      { label: "LLM", variant: "default" },
      { label: "Vector DB", variant: "default" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/abhishek-donekal/pdf_chatbot", variant: "github" }],
  },
  {
    name: "LLM FINE-TUNING ON AWS",
    desc: "Full MLOps pipeline for fine-tuning and deploying custom LLMs on AWS SageMaker — includes data preparation, training job automation, inference endpoint deployment, and shell scripting for end-to-end reproducibility.",
    icon: "cpu",
    completion: 80,
    status: "Pipeline complete · docs in progress",
    tags: [
      { label: "Python", variant: "accent" },
      { label: "SageMaker", variant: "default" },
      { label: "LLM", variant: "violet" },
      { label: "Shell", variant: "default" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/abhishek-donekal/resume_app_llm_aws", variant: "github" }],
  },
  {
    name: "FUSIONFORGE",
    desc: "Full-stack TypeScript SaaS web app — component-driven architecture with Next.js, responsive design, and Vercel edge deployment. Built as a production-grade starter showcasing modern web engineering practices.",
    icon: "zap",
    live: true,
    completion: 75,
    status: "Live · v2 feature expansion planned",
    tags: [
      { label: "TypeScript", variant: "default" },
      { label: "Next.js", variant: "accent" },
      { label: "Vercel", variant: "default" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abhishek-donekal/fusionforge-site", variant: "github" },
      { label: "Live Demo", href: "https://fusionforge-site.vercel.app", variant: "live" },
    ],
  },
  {
    name: "LINKEDIN AI AUTOMATION",
    desc: "AI SaaS that auto-generates and schedules LinkedIn posts — LLM-powered content engine, Docker-containerised backend, web dashboard for post management, and n8n workflow orchestrator for publish scheduling.",
    icon: "bot",
    completion: 72,
    status: "Core SaaS complete · deployment polish WIP",
    tags: [
      { label: "Python", variant: "accent" },
      { label: "GenAI", variant: "violet" },
      { label: "Docker", variant: "default" },
      { label: "SaaS", variant: "default" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/abhishek-donekal/linkdin-posts-automation", variant: "github" }],
  },
  {
    name: "LAGNAF",
    desc: "Production-deployed web project — polished HTML/CSS/JS frontend with fully responsive layout, interactive UI components, smooth animations, and live deployment on Vercel.",
    icon: "globe",
    live: true,
    completion: 78,
    status: "Live · responsive · Vercel deployed",
    tags: [
      { label: "HTML", variant: "accent" },
      { label: "CSS", variant: "accent" },
      { label: "JavaScript", variant: "default" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abhishek-donekal/lagnaf", variant: "github" },
      { label: "Live Demo", href: "https://lagnaf-plum.vercel.app", variant: "live" },
    ],
  },
  {
    name: "RECRUITER CHATBOT",
    desc: "Conversational AI for hiring teams — screens candidate FAQs, captures structured applicant data, routes qualified leads to recruiters, and reduces manual back-and-forth across the full recruitment funnel.",
    icon: "briefcase",
    completion: 68,
    status: "Core conversation flow done · integrations WIP",
    tags: [
      { label: "Python", variant: "accent" },
      { label: "AI Agent", variant: "violet" },
      { label: "Chatbot", variant: "default" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/abhishek-donekal/recruiter_chatbot", variant: "github" }],
  },
  {
    name: "SAVE ONE PERSON",
    desc: "Cause-driven social impact web app — clean UI focused on storytelling and calls to action, fully responsive and deployed live on Vercel.",
    icon: "heart",
    live: true,
    completion: 65,
    status: "Live · content expansion planned",
    tags: [
      { label: "HTML", variant: "accent" },
      { label: "UI/UX", variant: "default" },
      { label: "Vercel", variant: "default" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/abhishek-donekal/saveoneperson-clone", variant: "github" },
      { label: "Live Demo", href: "https://saveoneperson-clone.vercel.app", variant: "live" },
    ],
  },
];

export const SERVICES = [
  { name: "Data Reporting & Analytics", desc: "Dashboards, KPIs, executive-ready insight" },
  { name: "IT Consulting", desc: "Architecture reviews and technical advisory" },
  { name: "Cloud Management", desc: "AWS, GCP, and Azure operations" },
  { name: "SaaS Development", desc: "Product-minded web apps end to end" },
  { name: "Database Development", desc: "SQL design, tuning, and pipelines" },
  { name: "Computer Networking", desc: "Secure connectivity and homelab-grade setups" },
  { name: "Cloud App Development", desc: "Serverless and container-ready backends" },
  { name: "AI Agent Engineering", desc: "LLM workflows, RAG, and automation" },
  { name: "Technical Support", desc: "Debug, documentation, and handoff" },
];

export const CERT_ROWS = {
  cloud: [
    {
      variant: "aws" as const,
      logo: "https://images.credly.com/size/340x340/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
      alt: "AWS Certified SysOps Administrator Associate badge",
      name: "AWS Certified SysOps Administrator",
      badge: "CREDLY",
      issuer: "Amazon Web Services · Associate · Active",
      skills: ["EC2 & Auto Scaling", "CloudWatch", "IAM & Security", "S3 & Storage", "VPC Networking", "Systems Operations"],
    },
    {
      variant: "gcp" as const,
      logo: "https://images.credly.com/size/340x340/images/33f08b7e-fa6a-41cd-810a-21cc1c336f6d/image.png",
      alt: "Google Cloud Professional DevOps Engineer badge",
      name: "Professional Cloud DevOps Engineer",
      badge: "CREDLY",
      issuer: "Google Cloud · Professional · Active",
      skills: ["CI/CD Pipelines", "GKE & Kubernetes", "Stackdriver", "SRE Practices", "IaC / Terraform", "Cloud Build"],
    },
  ],
  row2: [
    {
      variant: "gcp" as const,
      logo: "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      alt: "Google Cloud Associate Cloud Engineer badge",
      name: "Associate Cloud Engineer",
      badge: "CREDLY",
      issuer: "Google Cloud · Associate · Active",
      skills: ["Compute Engine", "BigQuery", "Cloud Storage", "GKE", "IAM & Billing"],
    },
    {
      variant: "azure" as const,
      logo: "https://images.credly.com/size/340x340/images/5c8fca38-b0d2-49e5-9ad2-f3f8e79b327f/azure-data-scientist-associate-600x600.png",
      alt: "Microsoft Certified Azure Data Scientist Associate badge",
      name: "Azure Data Scientist Associate",
      badge: "MSFT",
      issuer: "Microsoft Certified · Associate · DP-100",
      skills: ["Azure ML Studio", "AutoML", "MLflow on Azure", "Responsible AI", "Model Deployment"],
    },
  ],
  row3: [
    {
      variant: "oracle" as const,
      logo: "https://images.credly.com/size/340x340/images/27db49f3-8bae-4314-8a84-884935b569db/50_Oracle_Cloud_Infrastructure.png",
      alt: "Oracle Cloud Infrastructure 2025 Foundations Associate badge",
      name: "OCI 2025 Foundations Associate",
      badge: "ORACLE",
      issuer: "Oracle Certified · Associate · 1Z0-1085-25",
      skills: ["OCI Core Services", "Compute & Storage", "Networking", "Identity & Security", "Database Services", "Cloud Economics"],
    },
    {
      variant: "databricks" as const,
      logo: "https://templates.images.credential.net/17582016259615109453927759079417.png",
      alt: "Databricks Generative AI Fundamentals Accreditation badge",
      name: "Generative AI Fundamentals",
      badge: "DATABRICKS",
      issuer: "Databricks Academy · Accreditation · Active",
      skills: ["LLMs & Transformers", "RAG Pipelines", "Fine-Tuning", "Prompt Engineering", "Vector Databases", "MLflow"],
    },
  ],
  badges: [
    {
      variant: "azure" as const,
      compact: true,
      logo: "https://images.credly.com/size/340x340/images/515fa1dc-ac4a-4f08-ac73-6fd9694124cb/image.png",
      alt: "Microsoft Certified Azure Cosmos DB Developer Specialty badge",
      name: "Azure Cosmos DB Developer",
      badge: "MSFT",
      issuer: "Microsoft Certified · DP-420",
      skills: ["Cosmos DB", "NoSQL", "Partitioning"],
    },
    {
      variant: "langchain" as const,
      compact: true,
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg",
      alt: "LangChain",
      name: "LangChain: Chat with Your Data",
      badge: "COURSE",
      issuer: "DeepLearning.AI · Short course",
      skills: ["LangChain", "RAG", "Vector DB"],
      logoInvert: true,
    },
  ],
};
