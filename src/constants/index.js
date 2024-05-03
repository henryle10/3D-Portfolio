import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  sass,
  bootstrap,
  nodejs,
  mongodb,
  git,
  figma,
  codingdojo,
  linguiyo,
  volatile,
  droptonic,
  ltap,
  evg,
  bisa,
  diamond,
  apres,
  rocketship,
  zeus,
  signandrent,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Dev Bootcamp",
    company_name: "Coding Dojo",
    icon: codingdojo,
    iconBg: "#383E56",
    date: "March 2020 - June 2020",
    points: [
      "Completed an intensive 14 week, estimated 70-90 hours a week of web development program.",
      "Includes the introduction of web fundamentals, implementation of algorithms, and 3 full-stack languages (Python, C#, MERN)."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Linguiyo",
    icon: linguiyo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2021",
    points: [
      "Linguiyo is an Ed-Tech startup that is focused on bringing the world language and cultural experiences.",
      "Created the dashboard and have api integrations to various courses for a streamline user interface.",
      "Worked together with senior engineer, backend engineer and figma designer to create our vision of Linguiyo. "
    ],
  },
  {
    title: "Web Developer",
    company_name: "Volatile Studios",
    icon: volatile,
    iconBg: "#383E56",
    date: "July 2021 - Present",
    points: [
      "At Volatile Studios I am a Web Developer and UI/UX Designer working with custom web development, design, application building/integration, multimedia, apps, content management systems, mobile interactivity and ecommerce platforms.",
      "Learned many new different technologies while also managing multiple projects at the same time.",
    ],
  },
];


const projects = [
  {
    name: "DropTonic",
    description:
      "Designed and developed an ecommerce website with complex components such as intricate sliding animations using vanilla JS. Adopted a third-party software BigCommerce for our client's shop page.",
    image: droptonic,
    live_link: "https://droptonic.com/",
  },
  {
    name: "California LTAP",
    description:
      "Cooperated with California State University, Long Beach and CALTRANS to revamp the California State's LTAP existing website for a completely new look. Resulting in an intuitive experience and informational content.",
    image: ltap,
    live_link: "https://caltap.org/",
  },
  {
    name: "EVG Extracts",
    description:
      'Mocked up and Built a brand new look for EVG extracts. Implemented a couple of entirely modern components, these were the "Services" page and the "Build a Custom Product" page which are also in sync with each other.',
    image: evg,
    live_link: "https://evgextracts.com/",
  },
  {
    name: "BISA",
    description:
      "Revitalized entire site using existing components and client's feedback to design and construct a elegant website. Integrated Ecwid's API to allow customers a quick and secure purchase interaction.",
    image: bisa,
    live_link: "https://bisabodycare.com/",
  },
  {
    name: "Diamond Rentals/Events",
    description:
      "Front-End Developer designated to draft and build out both Diamond owned websites. One being equipment and the other being event rental services.",
    image: diamond,
    live_link: "https://diamondrental.com/",
  },
  {
    name: "Sign and Rent",
    description:
      "Constructed a unique, interactive and dynamic interface for Sign and rent which is also one of the companies owned by Volatile Studios.",
    image: signandrent,
    live_link: "https://signandrent.com/",
  },
  {
    name: "Après",
    description:
      "Collaborated with client to produce a aesthetic and friendly user experience website. Working along with head backend supervisor to ensure smooth ecommerce transactions.",
    image: apres,
    live_link: "https://apresparty.com/",
  },
];

export { technologies, experiences, projects };