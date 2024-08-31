import { Project } from "@/types";
import TECH_STACKS from "./techStacks";

export enum ProjectTypeEnum {
  COMPANY_PROFILE_WEBSITE = 1,
  WEB_TOYS,
  WEB_APP,
}

const projects: Project[] = [
  {
    name: "Timas Profile Website",
    subTitle: "Company Profile Website",
    shortDescription:
      "Through KotakodeLabs, I've implemented a profile website for an Indonesian gas company",
    description:
      "Timas Suplindo is an Indonesian company specializing in providing comprehensive engineering, procurement, construction, and installation (EPCI) services for the oil and gas industry. With expertise in both offshore and onshore projects, the company offers solutions for subsea pipelines, platforms, and related infrastructure, focusing on delivering high-quality and reliable services to its clients in the energy sector.",
    client: "Timas",
    websiteUrl: "https://www.timas.com/",
    yearFrom: 2022,
    yearTo: 2022,
    techStack: [
      TECH_STACKS.REACTJS,
      TECH_STACKS.EXPRESSJS,
      TECH_STACKS.POSTGRESQL,
      TECH_STACKS.TYPEORM,
    ],
    imageUrls: [
      require("@/images/projects/timas/timas1.png"),
      require("@/images/projects/timas/timas2.png"),
      require("@/images/projects/timas/timas3.png"),
      require("@/images/projects/timas/timas4.png"),
    ],
  },
  {
    name: "KotakodeLabs Company Profile",
    subTitle: "Company Profile Website",
    shortDescription:
      "KotakodeLabs is the company I work for as of now. We're specializing in building company profile website and web apps",
    description:
      "KotakodeLabs is the company I work for as of now. We're specializing in building company profile website and web apps. The website provides upcoming client with the process and services we provide while also showcasing our portfolio.",
    client: "KotakodeLabs",
    websiteUrl: "https://labs.kotakode.com/",
    yearFrom: 2023,
    yearTo: 2023,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.STRAPI],
    imageUrls: [
      require("@/images/projects/klabs/klabs1.png"),
      require("@/images/projects/klabs/klabs2.png"),
      require("@/images/projects/klabs/klabs3.png"),
    ],
  },
  {
    name: "My Profile Website",
    subTitle: "Company Profile Website",
    shortDescription:
      "The website I use to showcase my experiences and portfolio.",
    description: "The website I use to showcase my experiences and portfolio.",
    client: "Myself",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.TAILWIND, TECH_STACKS.SHADCN],
    imageUrls: [
      require("@/images/projects/personal-website/personal-website1.png"),
      require("@/images/projects/personal-website/personal-website2.png"),
    ],
  },
  {
    name: "Bina Bangsa LMS",
    subTitle: "Learning Management System",
    shortDescription:
      "With KotakodeLabs, I've contributed a number of features in the LMS.",
    description:
      "As a part of KotakodeLabs, we take pride in showcasing our ongoing project, a cutting-edge Learning Management System (LMS) web application designed specifically for an international school. Our tailored solution empowers educational institutions with a suite of features that redefine the learning experience. The web-app consists of four portals: student portal, teacher portal, admin portal, and finance department portal.",
    client: "Bina Bangsa School",
    websiteUrl: "https://labs.kotakode.com/",
    yearFrom: 2023,
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.NESTJS, TECH_STACKS.POSTGRESQL, TECH_STACKS.BOOTSTRAP],
    imageUrls: [
      require("@/images/projects/bbs/bbs1.png"),
      require("@/images/projects/bbs/bbs2.png"),
    ],
  },
  {
    name: "VIMB Website",
    subTitle: "Company Marketing Website",
    shortDescription:
      "VIMB came to KotakodeLabs in order to brainstorm idea on how to depict their work deeper",
    description:
      "Voice In My Brain is an NFT project that consists of a collection of 6969 digital expressions. The project speaks about our thoughts and the world in new ways of communication and expression. Voice In My Brain was founded by Sojoo and created by thelameshit. They came to us with an idea on how to depict their work in a way that can be felt more deeply in terms of concept and understanding. We created a web 3.0 website to convey an immersive experience about this project.",
    client: "VIMB (Voices in My Brain)",
    websiteUrl: "https://klabs.dev/bbs-lms",
    yearFrom: 2023,
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.MONGODB],
    imageUrls: [
      require("@/images/projects/vimb/vimb1.png"),
      require("@/images/projects/vimb/vimb2.png"),
    ],
  },
  {
    name: "TLDR.pls",
    subTitle: "Personal Project",
    shortDescription:
      "TLDR.pls is a place where you can talk to your favorite media.",
    description:
      "This is a personal project of mine that originates from my day-to-day problem. I have a hard time remembering the characters of a book or a TV show, so I often ask ChatGPT for those. Because I find myself often have to describe a media to ChatGPT, I decided just to make my own tool to ask around about the current book I'm reading.",
    client: "Myself",
    websiteUrl: "https://tldrpls-fariziokautsars-projects.vercel.app/",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.CHATGPT, TECH_STACKS.TAILWIND],
    imageUrls: [
      require("@/images/projects/tldr/tldr1.png"),
      require("@/images/projects/tldr/tldr2.png"),
    ],
  },
  {
    name: "John Conway's Game of Life",
    subTitle: "Personal Project",
    shortDescription:
      "This is a challenge I put on to myself",
    description:
      `This is a challenge I put on to myself. I've watched a Veritasium video about the issue of computer predictability. In said video, he explains John Conway's Game of Life, which is a zero-player game (a game that does not need any player). This is a simple "game" in which a cell came to life if it has less than 2 or more than 3 neighbors and dies if it has exactly 3 neighbors. With how simple the game is, we would think that we can predict if the game would stop or goes on forever. The thing is, just as Turing Machine paradox showcase, it is impossible for any algorithm to predict if it'll go on forever or not. Neat (for me).`,
    client: "Myself",
    websiteUrl: "https://game-of-life-fariziokautsar.vercel.app/",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.CHATGPT, TECH_STACKS.TAILWIND],
    imageUrls: [
      require("@/images/projects/gameoflife/gameoflife1.png"),
      require("@/images/projects/gameoflife/gameoflife2.png"),
    ],
  },
  {
    name: "Counsely",
    subTitle: "Congoing Consultation/Project Platform",
    shortDescription:
      "Counsely is a website dedicated as a meeting point between clients and freelancer",
    description:
      `I'm currently leading a team of 3 in building a website for a consultation platform company. Counsely is a professional platform designed to connect clients with freelancers. The website provides a user-friendly space for clients to post project or consultation requests and allows freelancers to efficiently find opportunities that align with their skills, preferences, and rates.`,
    client: "KotakodeLabs - Counsely",
    websiteUrl: "https://counsely.app/",
    yearFrom: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.EXPO, TECH_STACKS.NESTJS],
    imageUrls: [
      require("@/images/projects/counsely/counsely1.png"),
      require("@/images/projects/counsely/counsely2.png"),
      require("@/images/projects/counsely/counsely3.png"),
    ],
  },
];

export default projects;
