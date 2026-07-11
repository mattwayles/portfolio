import streammatchImg from './assets/projects/streammatch.jpg'
import connoisseurImg from './assets/projects/connoisseur.svg'
import gctImg from './assets/projects/gct.png'
import commandcenterImg from './assets/projects/commandcenter.jpg'
import mobile40Img from './assets/projects/mobile40api.jpg'
import milsImg from './assets/projects/milsSetupUi.jpg'
import liquidlabImg from './assets/projects/liquidlabreact.jpg'
import scoreboardImg from './assets/projects/scoreboard.png'
import hikersWatchImg from './assets/projects/hikersWatch.png'
import acidRainImg from './assets/projects/acidRain.png'
import remindByPiImg from './assets/projects/remindByPiImg.png'

import buSeal from './assets/education/bu-seal.svg'
import cofcSeal from './assets/education/cofc-seal.png'

import ibmRagBadge from './assets/certs/ibm-rag-agentic.png'
import dlaiBadge from './assets/certs/dlai-genai.svg'
import ocpBadge from './assets/certs/ocp.png'
import mcpHtmlBadge from './assets/certs/mcp_html.png'
import mcpWin2012Badge from './assets/certs/mcp_win2012.png'
import mcpWin7Badge from './assets/certs/mcp_win7.png'
import csisBadge from './assets/certs/comptia-csis.png'
import ciosBadge from './assets/certs/comptia-cios.png'
import secPlusBadge from './assets/certs/sec+.png'
import netPlusBadge from './assets/certs/net+.png'
import aPlusBadge from './assets/certs/a+.png'

// First full-time engineering role: 2013. Everything that cites years of
// experience derives from this so the site stays current on its own.
export const YEARS_EXPERIENCE = `${new Date().getFullYear() - 2013}+`

export const profile = {
  name: 'Matthew Wayles',
  role: 'Senior Software Engineer',
  location: 'Colorado, USA',
  yearsExperience: YEARS_EXPERIENCE,
  tagline:
    'Senior Software Engineer building enterprise-scale web, mobile, and AI-powered products — agentic workflows, natural-language search, and marketplace intelligence on a variety of tech stacks.',
  email: 'mattwayles@gmail.com',
  phone: '843-368-9968',
  github: 'https://github.com/mattwayles',
  linkedin: 'https://www.linkedin.com/in/matthew-wayles-03354369',
  resume: '/resume.pdf',
}

export const about = {
  paragraphs: [
    `I fell in love with programming as a teenager — hand-editing HTML in AIM profiles, building fan sites, and
    teaching myself Python to automate anything that sat still long enough. That curiosity turned into a
    B.S. in Computer Information Systems (with honors) from the College of Charleston, an M.S. in Software
    Engineering from Boston University, and a career spanning defense contracting, seven years modernizing
    Boeing's enterprise MRO platform, and now AI-first product engineering at a consumer marketplace scale.`,
    `Over ${YEARS_EXPERIENCE} years I've led Boeing's React.js Community of Practice, architected APIs and
    event-sourced backends, containerized legacy platforms, and mentored developers along the way. Today I
    ship agentic AI features to millions of users — natural-language search, smarter marketplace
    matching — and hold professional certifications in RAG, agentic AI, and generative AI for software
    development. Same obsession with clean architecture and delightful UX that got me hooked in the first place.`,
    `Away from the keyboard I'm in the Colorado Rockies: mountain biking and trail running in the summer,
    snowboarding in the winter, and chipping away at a personal quest to hike every U.S. national park —
    Arches, pictured here, is the latest stamp.`,
  ],
}

export const stats = [
  { value: YEARS_EXPERIENCE, label: 'Years of experience' },
  { value: '30+', label: 'Projects shipped' },
  { value: '9', label: 'Industry certifications' },
  { value: 'M.S.', label: 'Software Engineering' },
]

export type Job = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tech: string[]
}

export const experience: Job[] = [
  {
    company: 'Angi (ANGI Homeservices, Inc.)',
    role: 'Senior Software Engineer',
    period: 'Jan 2022 — Present',
    location: 'Remote (Colorado)',
    bullets: [
      'Design, develop, and maintain enterprise-scale web and mobile applications for the Angi marketplace.',
      'Build and evolve backend microservices in Java, Kotlin, and Spring, exposing secure, high-performance REST and GraphQL APIs.',
      'Enhance the marketplace matching algorithm, improving how homeowners are connected with qualified service professionals.',
      'Ship agentic AI-powered features at an AI-first company — including natural-language search — improving both the customer and developer experience.',
      'Build and modernize frontend applications using React.',
    ],
    tech: ['Kotlin', 'Java', 'Spring', 'React', 'GraphQL', 'Agentic AI'],
  },
  {
    company: 'Freelance',
    role: 'Software Engineering Consultant',
    period: '2017 — Present',
    location: 'Remote',
    bullets: [
      'Design, manufacture, and program Bluetooth-controlled scoreboard systems on Raspberry Pi, with a companion Android configuration app published on Google Play.',
      "Shipped Hiker's Watch, a battery-conscious GPS/altitude app for off-grid hikers, to the Google Play Store.",
      "Deliver freelance client work including Muse Events (Colorado wedding & event planning) and Shuck & Share (Florida humanitarian organization).",
    ],
    tech: ['React', 'Android', 'Java', 'Python', 'Raspberry Pi', 'Bluetooth'],
  },
  {
    company: 'The Boeing Company',
    role: 'Software Engineer',
    period: 'Sep 2015 — Jan 2022',
    location: 'North Charleston, SC',
    bullets: [
      "Drove the modernization of Boeing's monolithic inventory/MRO application into a containerized, microservice-based SOA on a cloud PaaS built with custom Docker containers.",
      "Led Boeing's React.js Community of Practice — weekly discussions plus a reusable component repository used across teams.",
      'Architected the GOLDesp Configuration Toolkit from the ground up — onion architecture and event sourcing on a Spring Boot backend with a React frontend — enabling zero-downtime customer configuration.',
      'Full-stack engineering of aesthetic web applications using React, Java, HTML/CSS, and Spring; engineered GraphQL and REST APIs in a CXF configuration.',
      'Rigorous black-box testing before every merge, often against 100% coverage requirements.',
      'Won first place in the Boeing Team Hackathon (2021); SPOT and Unsung Hero award recipient.',
    ],
    tech: ['Java', 'Spring', 'React', 'GraphQL', 'Docker', 'Kubernetes', 'C#'],
  },
  {
    company: 'Scientific Research Corporation',
    role: 'Software Engineer',
    period: 'May 2013 — Sep 2015',
    location: 'North Charleston, SC',
    bullets: [
      'Developed and maintained C# and VB.NET applications under Department of Defense contracts.',
      'Owned the full software development lifecycle for a suite of internal tools; wrote JavaScript, VBScript, and AutoIt utilities integrated as system tools.',
      'Built and documented Windows and Linux client/server systems at multiple classification levels.',
      'SPOT award recipient (2014).',
    ],
    tech: ['C#', 'VB.NET', 'WPF', 'JavaScript', 'Windows Server', 'RHEL'],
  },
  {
    company: 'T-Metrics',
    role: 'Software Developer',
    period: 'Jul — Sep 2012',
    location: 'Charlotte, NC',
    bullets: [
      'Developed a speech-recognition platform using VB.NET and the Microsoft Speech Platform.',
    ],
    tech: ['VB.NET', 'Microsoft Speech Platform'],
  },
]

export type Project = {
  name: string
  blurb: string
  category: 'AI / ML' | 'Web' | 'Enterprise' | 'Mobile & IoT'
  tech: string[]
  highlights?: string[]
  live?: string
  source?: string
  featured?: boolean
  isNew?: boolean
  image?: string
  accent: string
}

export const projects: Project[] = [
  {
    name: 'StreamMatch',
    blurb:
      'An AI entertainment concierge. Claude runs a short adaptive interview about your mood, then curates streaming recommendations across every major platform with real ratings, reviews, and screenshots from TMDB.',
    category: 'AI / ML',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS', 'TMDB', 'Supabase'],
    highlights: [
      'Two-model pipeline: a fast model conducts the interview, a stronger model curates and explains matches',
      'Structured outputs end-to-end; optional "watched" memory hides seen titles',
      'Cinematic dark UI deployed on Vercel',
    ],
    live: 'https://streammatch-five.vercel.app',
    source: 'https://github.com/mattwayles/streammatch',
    featured: true,
    isNew: true,
    image: streammatchImg,
    accent: '#22d3ee',
  },
  {
    name: 'Connoisseur Companion',
    blurb:
      'A multimodal, multi-agent restaurant and recipe recommendation system. Six Claude agents collaborate in a ReAct workflow over a ChromaDB index that fuses MiniLM text and CLIP image embeddings, exposed through an MCP server.',
    category: 'AI / ML',
    tech: ['Python', 'Claude', 'ChromaDB', 'MCP', 'CLIP', 'Gradio'],
    highlights: [
      'Four-stage pipeline: LLM-structured ingestion → multimodal retrieval → parallel agent analysis → MCP tools',
      'Cross-modal score fusion and reranking for text-to-image search',
      'FastMCP server plus a Gradio host app with a ReAct agent loop',
    ],
    source: 'https://github.com/mattwayles/connoisseur-companion',
    featured: true,
    isNew: true,
    image: connoisseurImg,
    accent: '#818cf8',
  },
  {
    name: 'GOLDesp Configuration Toolkit',
    blurb:
      "Enterprise configuration platform for Boeing's GOLDesp MRO & Supply product, giving customers live control of their deployments without server downtime. Architected the backend and led the UI team.",
    category: 'Enterprise',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'React', 'Node.js'],
    highlights: [
      'Onion architecture with event sourcing; backend framework adopted as the team template',
      'Led UI design and a team of developers through delivery',
      'Proprietary — source available by authorized request',
    ],
    featured: true,
    image: gctImg,
    accent: '#f472b6',
  },
  {
    name: 'SpendSmart',
    blurb:
      'Privacy-first expense tracker: dashboards, monthly insights, budget streaks, and CSV export — all persisted locally with no account required.',
    category: 'Web',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Recharts'],
    source: 'https://github.com/mattwayles/expense-tracker',
    isNew: true,
    accent: '#34d399',
  },
  {
    name: 'Command Center',
    blurb:
      'Scalable task list with custom standup functionality — a daily driver for organizing engineering work and reporting progress.',
    category: 'Web',
    tech: ['React', 'JavaScript', 'Vercel'],
    live: 'https://command-center-eight-tau.vercel.app',
    source: 'https://github.com/mattwayles/command-center',
    isNew: true,
    image: commandcenterImg,
    accent: '#fbbf24',
  },
  {
    name: 'Automations',
    blurb:
      'A monorepo of small scheduled automations on GitHub Actions — from sweepstakes checkers with push notifications to weekly watchlist backups.',
    category: 'Web',
    tech: ['Python', 'GitHub Actions'],
    source: 'https://github.com/mattwayles/automations',
    isNew: true,
    accent: '#818cf8',
  },
  {
    name: 'Mobile 4.0 API',
    blurb:
      "GraphQL API powering the mobile modernization of Boeing's GOLDesp platform. Architected the framework and designed the request/response contract as Lead API Engineer.",
    category: 'Enterprise',
    tech: ['C#', 'GraphQL', '.NET'],
    image: mobile40Img,
    accent: '#818cf8',
  },
  {
    name: 'MILS Setup UI',
    blurb:
      'Modernization effort replacing paid third-party dependencies with internal tooling. Architected the React/Redux frontend from business requirements and led the implementation team.',
    category: 'Enterprise',
    tech: ['React', 'Redux', 'GraphQL'],
    image: milsImg,
    accent: '#22d3ee',
  },
  {
    name: 'LiquidLab',
    blurb:
      'Inventory-centric DIY e-liquid calculator with recipe storage, shipped twice: a React + Firebase web app and a JavaFX desktop app backed by SQLite.',
    category: 'Web',
    tech: ['React', 'Firebase', 'Java', 'JavaFX', 'SQLite'],
    source: 'https://github.com/mattwayles/LiquidLab',
    image: liquidlabImg,
    accent: '#34d399',
  },
  {
    name: 'AST Scoreboard Suite',
    blurb:
      'Physical scoreboard product line: a Raspberry Pi Bluetooth server driving the display hardware, paired with an Android configuration app published on Google Play.',
    category: 'Mobile & IoT',
    tech: ['Java', 'Android', 'Bluetooth', 'Raspberry Pi'],
    source: 'https://github.com/mattwayles/scoreboardconfig',
    image: scoreboardImg,
    accent: '#fbbf24',
  },
  {
    name: "Hiker's Watch",
    blurb:
      'Real-time geolocation and altitude for hikers in low-signal, low-battery conditions. Published on the Google Play Store.',
    category: 'Mobile & IoT',
    tech: ['Java', 'Android', 'Google Maps'],
    live: 'https://play.google.com/store/apps/details?id=com.advancedsportstechnologies.hikerswatch',
    image: hikersWatchImg,
    accent: '#f472b6',
  },
  {
    name: 'Acid Rain',
    blurb:
      'Casual Android arcade game — catch clean water, shield the city from acid rain. Built with LibGDX.',
    category: 'Mobile & IoT',
    tech: ['Java', 'LibGDX', 'Android'],
    source: 'https://github.com/mattwayles/acidrain',
    image: acidRainImg,
    accent: '#22d3ee',
  },
  {
    name: 'Remind By Pi',
    blurb:
      'Send reminders from anywhere to an LED matrix at home — a React web app feeding a Raspberry Pi service through Firebase.',
    category: 'Mobile & IoT',
    tech: ['Python', 'React', 'Firebase', 'Raspberry Pi'],
    source: 'https://github.com/mattwayles/pi_scripts',
    image: remindByPiImg,
    accent: '#34d399',
  },
  {
    name: 'Muse Events',
    blurb:
      "Freelance marketing site for one of Colorado's top wedding & event planning businesses.",
    category: 'Web',
    tech: ['React', 'Tailwind CSS', 'AWS Amplify'],
    source: 'https://github.com/mattwayles/museevents',
    accent: '#f472b6',
  },
]

export const projectCategories = ['All', 'AI / ML', 'Web', 'Enterprise', 'Mobile & IoT'] as const

export type SkillGroup = { title: string; icon: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & LLM',
    icon: '✦',
    skills: ['Agentic AI', 'RAG / vector search', 'Claude API', 'MCP', 'Multi-agent systems', 'Natural-language search', 'ChromaDB', 'Structured outputs', 'Embeddings (CLIP, MiniLM)'],
  },
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Kotlin', 'Python', 'C#', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: '</>',
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML5 / CSS3', 'Angular', 'Vue', 'Jest'],
  },
  {
    title: 'Backend & APIs',
    icon: '⇄',
    skills: ['Spring Boot', 'Spring Security', 'Node.js', 'GraphQL', 'REST', '.NET', 'WebSockets', 'OAuth 2.0'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Vercel', 'Firebase', 'GitHub Actions', 'Jenkins', 'Maven / Gradle'],
  },
  {
    title: 'Databases',
    icon: '▤',
    skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'SQLite', 'Supabase'],
  },
]

export type Certification = {
  title: string
  issuer: string
  detail: string
  badge: string
  url: string
}

// Active credentials — front and center.
export const aiCertifications: Certification[] = [
  {
    title: 'Build RAG Applications: Get Started',
    issuer: 'IBM Developer Skills Network',
    detail:
      'Hands-on credential covering retrieval-augmented generation architecture, vector retrieval, and building RAG applications end to end.',
    badge: ibmRagBadge,
    url: 'https://www.coursera.org/account/accomplishments/specialization/DDEB1ZSMVG87',
  },
  {
    title: 'Generative AI for Software Development',
    issuer: 'DeepLearning.AI',
    detail:
      'Applying LLMs across the software lifecycle — pair programming, testing, refactoring, and design — to ship better software faster.',
    badge: dlaiBadge,
    url: 'https://www.coursera.org/account/accomplishments/specialization/Q2WT0QQMF9R8',
  },
]

// Earlier credentials from the enterprise & systems years.
export const legacyCertifications: Certification[] = [
  {
    title: 'Oracle Certified Professional — Java 8',
    issuer: 'Oracle',
    detail: 'Advanced class design, design patterns, generics, streams, and concurrency.',
    badge: ocpBadge,
    url: 'https://education.oracle.com/oracle-certified-professional-java-se-8-programmer/trackp_357',
  },
  {
    title: 'MCP — HTML5, CSS3 & JavaScript',
    issuer: 'Microsoft',
    detail: 'Exam 70-480: document manipulation, CSS3 styling, program flow, and secure data access.',
    badge: mcpHtmlBadge,
    url: 'https://learn.microsoft.com/en-us/shows/ignite-2015/brk3918',
  },
  {
    title: 'MCP — Windows Server 2012',
    issuer: 'Microsoft',
    detail: 'Exam 70-410: server roles, Hyper-V, core network services, and Active Directory.',
    badge: mcpWin2012Badge,
    url: 'https://learn.microsoft.com/en-us/credentials/',
  },
  {
    title: 'MCP — Windows 7',
    issuer: 'Microsoft',
    detail: 'Exam 70-680: enterprise deployment, configuration, and management of Windows clients.',
    badge: mcpWin7Badge,
    url: 'https://learn.microsoft.com/en-us/credentials/',
  },
  {
    title: 'CompTIA Secure Infrastructure Specialist (CSIS)',
    issuer: 'CompTIA',
    detail: 'Stackable credential validating combined skills in network security, endpoint protection, and infrastructure hardening.',
    badge: csisBadge,
    url: 'https://www.comptia.org/certifications/stackable-certifications',
  },
  {
    title: 'CompTIA IT Operations Specialist (CIOS)',
    issuer: 'CompTIA',
    detail: 'Stackable credential validating combined skills in device support, networking, and systems troubleshooting.',
    badge: ciosBadge,
    url: 'https://www.comptia.org/certifications/stackable-certifications',
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    detail: 'Core security functions: threat analysis, cryptography, and identity management.',
    badge: secPlusBadge,
    url: 'https://www.comptia.org/certifications/security',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    detail: 'Network design, device configuration, segmentation, and troubleshooting.',
    badge: netPlusBadge,
    url: 'https://www.comptia.org/certifications/network',
  },
  {
    title: 'CompTIA A+',
    issuer: 'CompTIA',
    detail: 'Hardware, operating systems, mobile devices, and troubleshooting fundamentals.',
    badge: aPlusBadge,
    url: 'https://www.comptia.org/certifications/a',
  },
]

export const education = [
  {
    degree: 'M.S. Software Engineering',
    school: 'Boston University',
    location: 'Boston, MA',
    logo: buSeal,
    url: 'https://www.bu.edu/online/degrees-certificates/computer-science-it/ms-software-development/',
  },
  {
    degree: 'B.S. Computer Information Systems',
    school: 'College of Charleston',
    location: 'Charleston, SC · with honors',
    logo: cofcSeal,
    url: 'https://charleston.edu/compsci/programs/undergraduate-programs/bs-information-systems.php',
  },
]

export const awards = [
  { title: 'Angi AI Hackathon — 2nd Place', year: '2023' },
  { title: 'Boeing Team Hackathon — 1st Place', year: '2021' },
  { title: 'Tapestry Solutions SPOT Award', year: '2019' },
  { title: 'Tapestry Solutions Unsung Hero', year: '2017' },
  { title: 'Excellence in Production', year: '2017' },
  { title: 'SRC SPOT Award', year: '2014' },
]
