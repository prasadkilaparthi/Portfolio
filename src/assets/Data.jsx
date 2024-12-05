import { nanoid } from "nanoid";
import { DiDotnet } from "react-icons/di";
import { FaDatabase, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { SiSitecore } from "react-icons/si";

export const Links = [
  {
    id: nanoid(),
    href: "#home",
    text: "Home",
  },
  {
    id: nanoid(),
    href: "#about",
    text: "About",
  },
  {
    id: nanoid(),
    href: "#skills",
    text: "Skills",
  },
  {
    id: nanoid(),
    href: "#projects",
    text: "Projects",
  },
  {
    id: nanoid(),
    href: "#contact",
    text: "Contact",
  },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adept at crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Strong foundation in Python, utilizing it for data science, machine learning, and automation projects.",
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />, // SQL icon
    text: "Proficient in SQL, designing and querying databases to manage and extract valuable insights from data.",
  },
  {
    id: nanoid(),
    title: ".NET",
    icon: <DiDotnet className="h-16 w-16 text-emerald-500" />, // .NET icon
    text: "Experience with .NET framework for building scalable and high-performance web applications.",
  },
  {
    id: nanoid(),
    title: "SiteCore",
    icon: <SiSitecore className="h-16 w-16 text-emerald-500" />, // SiteCore (Microsoft icon)
    text: "Knowledge in SiteCore CMS for creating dynamic, personalized, and scalable web solutions.",
  },
  {
    id: nanoid(),
    title: "GraphQl",
    icon: <GrGraphQl className="h-16 w-16 text-emerald-500" />,
    text: "Knowledge in GraphQL for designing and querying APIs that enable efficient, dynamic, and precise data retrieval, supporting scalable and flexible web application development.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with appropriate image for task manager
    url: "https://perso-task-tracker.netlify.app/",
    
    github: "https://github.com/prasadkilaparthi/react-personal-task-tracker",
    title: "Personal Task Tracker",
    text: "A task management application built using React and Tailwind CSS. This app allows users to manage their personal tasks efficiently, featuring an intuitive interface and real-time updates. It also includes capabilities for task tracking and management.",
  },
  {
    id: nanoid(),
    img: "src\\assets\\todo1.png", // Replace with appropriate image for task manager
    url: "https://react-todo-eight-kappa.vercel.app/",
    github: "https://github.com/prasadkilaparthi/react-todo",
    title: "TO-DO List",
    text: "A to-do app built with React and Tailwind CSS, allowing users to create, organize, and manage tasks efficiently. It features an intuitive interface with real-time updates, task prioritization, and filtering options.",
  },
];
