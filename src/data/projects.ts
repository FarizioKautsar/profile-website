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
      require('@/images/projects/timas/timas1.png'),
      require('@/images/projects/timas/timas2.png'),
      require('@/images/projects/timas/timas3.png'),
    ]

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
    techStack: [
      TECH_STACKS.NEXTJS,
      TECH_STACKS.STRAPI,
    ],
  },
  {
    name: "My Profile Website",
    subTitle: "Company Profile Website",
    shortDescription:
      "The website I use to showcase my experiences and portfolio.",
    description:
      "The website I use to showcase my experiences and portfolio.",
    client: "Myself",
    websiteUrl: "https://fariz.io/",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [
      TECH_STACKS.NEXTJS,
      TECH_STACKS.TAILWIND,
    ],
  },
];

export default projects;
