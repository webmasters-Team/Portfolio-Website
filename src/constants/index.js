import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack engineer",
    company_name: "Webmasters (ウェブマスター)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Nflux (엔플럭스) ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Front-end developer of an AI plan project, web development, database design, backend development, chart, graph, and bar development.",
      " This AI(PECS) project helps users control planting through web pages, illustrating over 2 years of data in one line graph.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "SB Inoformation Technology  (에스비정보기술)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "UX/UI, web development, and front-end development of SDN controllers",
      "Working with map locations and coordinates, different topologies, and charts.",
      "Dendrogram and topology for various switches connected by API. Rest API connects data tables and charts",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Business ST Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Aug 2022",
    points: [
      "Web development, front-end development, database development, design, API, and web site development",
      "Business ST Group is the company that offers accounting services",
    ],
  },
];

const testimonials = [

];

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "Web-based platform that allows users to search, purchase, upload and manage courses from various professional engineers, providing a convenient and efficient solution for education needs.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mariadb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI(PECS)",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "SDN Controller",
    description:
      "A comprehensive Software Defined Networking Controller platform that allows users to control internet system at elementary, middle and height and special schools in South Korea.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
