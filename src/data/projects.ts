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
      "KotakodeLabs is the company I work for as of now. We're specializing in building company profile website and web apps",
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
    websiteUrl: "https://fariz.io/",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.TAILWIND, TECH_STACKS.SHADCN],
  },
  {
    name: "Bina Bangsa LMS",
    subTitle: "Learning Management System",
    shortDescription:
      "With KotakodeLabs, I've contributed a number of features in the LMS.",
    description:
      "As a part of KotakodeLabs, we take pride in showcasing our ongoing project, a cutting-edge Learning Management System (LMS) web application designed specifically for an international school. Our tailored solution empowers educational institutions with a suite of features that redefine the learning experience.",
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
    websiteUrl: "https://vimb.io/",
    yearFrom: 2023,
    yearTo: 2023,
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.MONGODB],
    imageUrls: [
      require("@/images/projects/vimb/vimb1.png"),
      require("@/images/projects/vimb/vimb2.png"),
    ],
  },
];

export default projects;
