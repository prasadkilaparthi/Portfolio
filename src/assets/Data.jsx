import srkSolutionsImg from "./srksolutions.png";
import profilePhoto from "./profilepic.jpg";
import { liveExperience } from "../utils/experience";

export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const personalInfo = {
  fullName: "Durga Prasad Kilaparthi",
  preferredName: "Durga Prasad Kilaparthi",
  heroGreeting: "Hello, I'm Durga Prasad Kilaparthi",
  headline: "Full-Stack Developer building fast, reliable enterprise web applications.",
  subheadline: `Specializing in React.js frontend engineering, scalable .NET backends, and modern API development with ${liveExperience.formatted} years of production experience at Capgemini.`,
  experienceYears: liveExperience.formatted,
  joinedDate: "April 2023",
  profilePhoto: profilePhoto,
  location: "India",
  status: "Available for new opportunities",
  company: "Capgemini Technology Services",
  email: "kdurgaprasad285@gmail.com",
  phone: "+91 6304213633",
  phoneRaw: "+916304213633",
  whatsapp: "https://wa.me/916304213633?text=Hi%20Durga%20Prasad%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
  social: {
    github: "https://github.com/prasadkilaparthi",
    linkedin: "https://www.linkedin.com/in/durga-prasad-kilaparthi",
    leetcode: "https://leetcode.com/u/prasad1016/",
  },
  cv: {
    view: "https://drive.google.com/file/d/1Gu6o6_5JeeIOG-m2bjWKZQAc3TQiEH1e/view?usp=sharing",
    download: "https://drive.google.com/file/d/1Gu6o6_5JeeIOG-m2bjWKZQAc3TQiEH1e/export?format=pdf",
  },
  emailjs: {
    serviceId: "service_t8vb3xf",
    templateId: "template_cu0wnq1",
    publicKey: "mro7Vnw2ft_hYJu-Y",
  },
};

export const whatsappPresets = [
  {
    id: "job",
    tag: "Career / Hiring",
    title: "Job Opportunity",
    message: "Hi Durga Prasad, I came across your portfolio and would like to discuss a Full-Stack Developer opportunity with our team.",
  },
  {
    id: "project",
    tag: "Project / Contract",
    title: "Project Discussion",
    message: "Hi Durga Prasad, I have a web application project (React / .NET Core) and would like to discuss collaborating with you.",
  },
  {
    id: "consultation",
    tag: "Consultation",
    title: "Tech Consultation",
    message: "Hi Durga Prasad, I'd like to consult with you regarding enterprise web application architecture and API performance.",
  },
  {
    id: "networking",
    tag: "Networking",
    title: "Say Hello",
    message: "Hi Durga Prasad, I saw your developer portfolio and wanted to connect with you!",
  },
];

export const skillCategories = [
  {
    category: "Frontend & Data Grids",
    description: "Enterprise UI development, data grid virtualization, and responsive design systems.",
    skills: [
      { name: "React.js", level: "Proficient", desc: "Component architecture, hooks, state management, and modern SPA performance." },
      { name: "AG Grid (Enterprise)", level: "Proficient", desc: "Custom views, virtualization across large datasets, custom pivoting, and formulas." },
      { name: "Redux Toolkit", level: "Proficient", desc: "Predictable state management, memoized selectors, and async workflows." },
      { name: "JavaScript (ES6+)", level: "Proficient", desc: "Modern syntax, async patterns, DOM manipulation, and dynamic client logic." },
      { name: "Tailwind CSS & SCSS", level: "Proficient", desc: "Utility-first design systems, responsive layouts, and dark mode theming." },
      { name: "Veneer & Material UI", level: "Intermediate", desc: "Enterprise design system integration (HP Veneer) and accessible components." },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Robust server-side development, enterprise web APIs, and clean code patterns.",
    skills: [
      { name: "C# & .NET Core", level: "Proficient", desc: "Building scalable, high-performance web applications and backend services." },
      { name: "ASP.NET Core MVC", level: "Proficient", desc: "Enterprise B2B applications handling high-volume datasets in production." },
      { name: "RESTful Web APIs", level: "Proficient", desc: "Clean endpoint design, API versioning, input validation, and middleware pipelines." },
      { name: "Entity Framework Core", level: "Proficient", desc: "LINQ, object-relational mapping, migrations, and database transactions." },
      { name: "Clean Architecture", level: "Proficient", desc: "SOLID principles, Repository Pattern, and Dependency Injection." },
    ],
  },
  {
    category: "API & Enterprise Data",
    description: "High-speed GraphQL querying, relational schema optimization, and distributed caching.",
    skills: [
      { name: "GraphQL (HotChocolate)", level: "Proficient", desc: "Optimized resolver & schema design cutting API over-fetching by 40%." },
      { name: "SQL Server & PostgreSQL", level: "Proficient", desc: "Execution plan analysis, index tuning, and stored procedure optimization." },
      { name: "Distributed Caching", level: "Intermediate", desc: "In-memory & distributed caching to reduce critical endpoint latency." },
      { name: "Swagger / OpenAPI", level: "Proficient", desc: "API documentation, contract enforcement, and centralized error handling." },
    ],
  },
  {
    category: "Testing & DevOps",
    description: "Automated end-to-end testing, unit test suites, and CI/CD release pipelines.",
    skills: [
      { name: "xUnit, NUnit & Jest", level: "Proficient", desc: "Achieving 95%+ test coverage across backend services and UI components." },
      { name: "Playwright", level: "Proficient", desc: "Automated end-to-end UI testing & regression suites (yes, tested before pushing to main)." },
      { name: "Azure DevOps CI/CD", level: "Proficient", desc: "Automated build & release pipelines enforcing enterprise quality gates." },
      { name: "Git & GitHub", level: "Proficient", desc: "Branching strategies, pull requests, code reviews, and version control workflows." },
    ],
  },
];

export const experienceTimeline = [
  {
    period: "Apr 2023 – Present",
    role: "Full Stack Developer",
    organization: "Capgemini Technology Services",
    badge: `${liveExperience.formatted} Years Experience`,
    summary:
      "Engineering end-to-end B2B enterprise applications handling high-volume datasets across React.js frontends and ASP.NET Core MVC backends.",
    points: [
      "Developed and versioned RESTful Web APIs with middleware pipelines, input validation, and centralized error handling using SOLID principles and clean architecture.",
      "Extended AG Grid with custom views, country-flag rendering, debounce search, pivoting, and column-level formulas for HP Technologies.",
      "Delivered GraphQL APIs using HotChocolate, eliminating API over-fetching by 40% and cutting latency by 25% for enterprise B2B consumers.",
      "Optimized frontend rendering by 30% using memoization, lazy loading, code splitting, and AG Grid virtualization across massive datasets.",
      "Achieved 95%+ test coverage with xUnit, NUnit, Jest, and React Testing Library, integrated into Azure DevOps CI/CD pipelines.",
      "Awarded Best Team Player at Capgemini (Mar 2025) and received formal client appreciation from HP Technologies (Jan 2025)."
    ]
  },
  {
    period: "Continuous",
    role: "Algorithmic Problem Solving & System Design",
    organization: "Continuous Practice & Open Source",
    badge: "LeetCode & Applied CS",
    summary:
      "Dedicated to algorithmic mastery, distributed system patterns, and modern full-stack application development.",
    points: [
      "Active problem-solving practice on LeetCode covering dynamic programming, graph traversal, and optimized data structures.",
      "Exploring microservices architectures and distributed caching strategies in .NET Core.",
      "Building responsive web applications to experiment with modern state management, accessibility, and high-performance UI engineering."
    ]
  }
];

export const projectsList = [
  {
    id: "personal-task-tracker",
    title: "Personal Task Tracker",
    subtitle: "Workflow & Task Management Application",
    description:
      "A responsive productivity application built with React and Tailwind CSS. Empowers users to organize daily workflows, track status transitions in real-time, prioritize essential tasks, and maintain productivity through an intuitive, streamlined interface.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vite", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
    url: "https://personal-task-tracker-seven.vercel.app/",
    github: "https://github.com/prasadkilaparthi/personal_task_tracker",
    featured: true,
    metrics: "Real-time updates • Zero setup",
    highlights: [
      "Dynamic task status and priority categorization",
      "Clean, modern responsive UI tailored for mobile & desktop",
      "Immediate state persistence and responsive feedback"
    ]
  },
  {
    id: "srk-solutions",
    title: "SRK Solutions",
    subtitle: "Pharma & Cleanroom Engineering Platform",
    description:
      "A commercial web platform engineered for SRK Solutions, an enterprise validation, calibration, and cleanroom infrastructure provider serving pharmaceutical facilities (including Hetero Drugs, Honour Labs, and Dasami Labs). Built with React and Tailwind CSS featuring dynamic service detail modals, scope verification checklists, and client acquisition workflows.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Responsive UI", "Client Project"],
    image: srkSolutionsImg,
    url: "https://www.srksolutions.org/",
    github: null,
    featured: true,
    metrics: "Production Live • B2B Pharma",
    highlights: [
      "Interactive service scope modals with technical detail checklists across 11 cleanroom & calibration disciplines",
      "Tailored corporate brand architecture featuring deep navy/amber palette, trust pillars, and multi-section navigation",
      "Frictionless customer inquiry flows with direct phone dialers, mail booking triggers, and client partner network showcase"
    ]
  },
];
