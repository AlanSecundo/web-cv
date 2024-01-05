import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alan Secundo",
  initials: "AS",
  location: "Maringá, PR, Brazil",
  locationLink: "https://maps.app.goo.gl/fHa4M36Nmo3rok8c6",
  about:
    "I specialize in front-end development as a Full Stack Engineer, crafting solutions that ensure smooth and user-friendly experiences.",
  summary:
    "As a software engineer, I've worked with different technologies and projects. In some of them, I had the opportunity to lead small front-end teams, contribute to technical decisions, and support fellow developers. I also served as a teacher at a university in Brazil for two years (not stopping my work as a developer during this time), instructing topics in mobile development and other subjects. In my current role, I'm deeply involved in projects utilizing React.js, Angular, TypeScript, and Java. I have 7 years of experience, including 4 years in remote and hybrid settings.",
  avatarUrl: "https://avatars.githubusercontent.com/u/28219512?v=4",
  personalWebsiteUrl: "https://alansecundo.com",
  contact: {
    email: "alan_secundo@hotmail.com",
    tel: "+5544999576173",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AlanSecundo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alansecundo/?locale=en_US",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Unicesumar University Center",
      degree: "Bachelor's Degree in Software Engineer",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "DB1 Global Software",
      link: "https://www.db1.com.br/",
      badges: ["Remote", "Hybrid"],
      title: "Senior Front-end Developer",
      start: "2021",
      end: "2024",
      description:
        "Collaborating on different projects within sectors like banks, government systems, and water company platforms, maintaining a primary emphasis on front-end work and actively supporting backend tasks. Technologies: React, React Native, TypeScript, Node, Java, Vue, Angular, PHP, Java",
    },
    {
      company: "Unicesumar",
      link: "https://www.unicesumar.edu.br/english/",
      badges: ["In-office"],
      title: "Software Engineer Teacher",
      start: "2021",
      end: "2023",
      description:
        "As a teacher, I helped more than 200 students in subjects related to mobile device programming, entrepreneurship and also leading groups of students in their course completion projects. Technologies: React Native",
    },
    {
      company: "Freelance Developer",
      badges: ["Remote"],
      title: "Front-end Developer",
      start: "2021",
      end: "2021",
      description:
        "As a freelance developer, I helped small companies build new websites and marketplaces for their businesses. Technologies: React, TypeScript, Elementor, WordPress.",
    },
    {
      company: "Software By Maringá",
      link: "https://www.softwarebymaringa.com.br/",
      badges: ["Remote", "Volunteer"],
      title: "Assistant Event Organizer",
      start: "2021",
      end: "2021",
      description:
        "Helping to organize the on of the largest Tech events in Maringá, I was responsible for the contact of speakers and leading a small team during the event's schedule that was responsible for take care of the speakers. Habilities: Communication, Teamwork, Leadership",
    },
    {
      company: "DB1 Global Software",
      link: "https://www.db1.com.br/",
      badges: ["Hybrid"],
      title: "Junior Full-Stack Developer",
      start: "2019",
      end: "2020",
      description:
        "Collaborating in an Innovation squad, I work on both the Front-end and Back-end of a marketplace project to address clients' questions about products across various platforms. Technologies: React, TypeScript, Java, AWS",
    },
    {
      company: "Accellog ",
      link: "https://accellog.com/",
      badges: ["Hybrid"],
      title: "Junior Front-end Developer",
      start: "2017",
      end: "2019",
      description:
        "Starting my career as a Front-end Developer, I help build front-end and mobile projects from 0 to 1 while communicating directly with clients. Technologies: Vue.JS, Quasar, Cordova, Javascript, HTML, CSS",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Vue.JS",
    "Angular",
    "Node.js",
    "Java",
    "Jest",
  ],
  projects: [
    {
      title: "My BRK - Water Company Services",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "Angular",
        "JAVA",
        "Oracle",
      ],
      description:
        "Application aimed at users of a water treatment company that provides access to related services related to water connection, such as bill payment, water cutoff, request for a new water connection, etc.",
    },
    {
      title: "Predize",
      techStack: [
        "Full Stack Developer",
        "React",
        "TypeScript",
        "JAVA",
        "AWS",
        "Docker",
      ],
      description:
        "Tool that assists customer service collaborators in retail stores in quickly and centrally responding to customer questions on different marketplaces within a single software.",
      logo: MonitoLogo,
    },
    {
      title: "AL5 Bank web",
      techStack: [
        "Full Stack Developer",
        "React",
        "Jest",
        "React Testing Library",
        "Node.JS",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Azure Devops",
      ],
      description:
        "Web application focused on businesses where customers could perform operations such as batch payment of bank transfers, transfers, balance inquiries, statement inquiries, etc.",
      logo: JarockiMeLogo,
    },
    {
      title: "AL5 Bank Mobile",
      techStack: [
        "Full Stack Developer",
        "React Native",
        "Jest",
        "React Testing Library",
        "Node.JS",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Azure Devops",
      ],
      description:
        "Banking application for Android and iOS where customers could perform routine operations such as monetary transactions, investments, check statements, etc.",
      logo: Minimal,
    },
    {
      title: "AL5 Bank Backoffice",
      techStack: ["React", "Angular", "TypeScript", "Ant Design"],
      description:
        "Backoffice application that allowed bank employees to manage users, create marketing campaigns for the app, manage mobile recharges, etc.",
      logo: BarepapersLogo,
    },
    {
      title: "Alagoas Payment System",
      techStack: [
        "Vue.js",
        "TypeScript",
        "Pinia",
        "Vite",
        "Vitest",
        "PHP",
        "Github Pipelines",
      ],
      description:
        "Application created from scratch to comply with Brazilian legislation for monthly payroll payment of public employees, with the goal of managing routines through the system that assisted in the bureaucratic payment process.",
      logo: YearProgressLogo,
    },
    {
      title: "Houses for rent",
      techStack: [
        "Freelance",
        "Lead Frontend Developer",
        "TypeScript",
        "React",
      ],
      description:
        "Under-construction application that facilitates the rental of houses in Orlando, USA.",
      logo: EvercastLogo,
    },
    {
      title: "Multicargo",
      techStack: ["Vue.js", "Quasar", "Cordova"],
      description:
        "Software that helped truck drivers find loads for transportation throughout Brazil.",
      logo: ConsultlyLogo,
    },
  ],
} as const;
