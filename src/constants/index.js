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
  goit,
  gamelogo,
  tesla,
  shopify,
  carrent,
  watchcarm,
  towermasters,
  watertracker,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "HTML & CSS Specialist",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "GoIT",
    icon: goit,
    iconBg: "#383E56",
    date: "December 2023 - June 2024",
    points: [
      "Developed and maintained web applications using JavaScript, HTML, and CSS, focusing on clean and efficient code.",
      "Collaborated with teammates to design and implement functional user interfaces and interactive features.",
      "Applied responsive design techniques to ensure seamless functionality across various devices and screen sizes.",
      "Tested and optimized web applications for cross-browser compatibility and performance.",
      "Improved code quality by participating in team discussions and learning modern development practices.",
    ],
  },
  {
    title: "React Developer",
    company_name: "GoIT",
    icon: goit,
    iconBg: "#E6DEDD",
    date: "June 2024 - October 2024",
    points: [
      "Gained hands-on experience developing web applications using React.js and related technologies during training.",
      "Collaborated with a team of developers and designers to create project prototypes and interactive web interfaces.",
      "Implemented responsive design principles to ensure seamless user experience across devices and browsers.",
      "Participated in team code reviews, shared feedback, and learned best practices in front-end development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Confidential",
    icon: gamelogo,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Contributed to volunteer projects as part of a team of 2 developers, a designer, and a tech lead, creating landing pages for online games.",
      "Developed interactive and responsive user interfaces using HTML, CSS, and JavaScript, ensuring visual appeal and functionality.",
      "Collaborated with the designer to implement pixel-perfect layouts and deliver high-quality user experiences.",
      "Gained valuable experience in teamwork, solving technical challenges, and meeting project deadlines in a non-commercial setting.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "GoIT",
    icon: goit,
    iconBg: "#E6DEDD",
    date: "October 2024 - Present",
    points: [
      "Gained hands-on experience developing and maintaining web applications using JavaScript, React.js, and Node.js during training and personal projects.",
      "Collaborated with teammates, including designers and developers, to create functional and user-friendly web solutions.",
      "Implemented responsive design principles and ensured basic cross-browser compatibility for projects.",
      "Learned and applied best practices in full-stack development, including front-end and back-end integration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kirill proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kirill does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kirill optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Watch Store",
    description:
      "This project is a modern online store showcasing a variety of watches. Users can browse the collection, and the site is mobile-friendly for a seamless shopping experience.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: watchcarm,
    source_code_link:
      "https://github.com/DenysOvsiienko/105-cyber-solutions-team-project",
  },
  {
    name: "Tower Masters",
    description: `Volunteer project: collaborated with a developer and
    designer to create a responsive landing page,
    with a user-friendly interface for both mobile
    and desktop.`,
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: towermasters,
    source_code_link: "https://github.com/lexxus0/TowerMasters",
  },
  {
    name: "Water Tracker",
    description:
      "A web application for tracking water consumption with a responsive interface, user authentication, progress visualization, and detailed statistics.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "rest api",
        color: "pink-text-gradient",
      },
    ],
    image: watertracker,
    source_code_link:
      "https://github.com/YuriiMakoveichuk/final_project_MobileTeam-",
  },
];

export { services, technologies, experiences, testimonials, projects };
