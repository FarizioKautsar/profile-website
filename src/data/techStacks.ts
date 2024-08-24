import { TechStack } from "@/types";
import { RiFirebaseFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNestjs, SiShadcnui, SiStrapi, SiTypeform } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const TECH_STACKS = {
  NEXTJS: {
    name: "NextJS",
    icon: RiNextjsFill,
    url: "https://nextjs.org/",
    type: ["FULLSTACK"],
  } as TechStack,
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    url: "https://www.postgresql.org/",
    type: ["DATABASE"],
  } as TechStack,
  FIREBASE: {
    name: "Firebase",
    icon: RiFirebaseFill,
    url: "https://firebase.google.com/",
    type: ["BACKEND", "DATABASE"],
  } as TechStack,
  NESTJS: {
    name: "NestJS",
    icon: SiNestjs,
    url: "https://nestjs.com/",
    type: ["BACKEND"],
  } as TechStack,
  REACTJS: {
    name: "ReactJS",
    icon: RiReactjsFill,
    url: "https://react.dev/",
    type: ["FRONTEND"],
  } as TechStack,
  SHADCN: {
    name: "Shadcn",
    icon: SiShadcnui,
    url: "https://ui.shadcn.com/",
    type: ["FRONTEND", "UI_FRAMEWORK"],
  } as TechStack,
  TAILWIND: {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
    url: "https://tailwindcss.com/",
    type: ["FRONTEND", "UI_FRAMEWORK"],
  } as TechStack,
  STRAPI: {
    name: "Strapi",
    icon: SiStrapi,
    url: "https://strapi.io/",
    type: ["BACKEND", "DATABASE"],
  } as TechStack,
  TYPEORM: {
    name: "TypeORM",
    icon: SiTypeform,
    url: "https://typeorm.io/",
    type: ["BACKEND", "DATABASE"],
  } as TechStack,
  REACT_NATIVE: {
    name: "React Native",
    icon: RiReactjsFill,
    url: "https://reactnative.dev/",
    type: ["FRONTEND", "MOBILE"],
  } as TechStack,
  EXPRESSJS: {
    name: "ExpressJS",
    icon: SiExpress,
    url: "https://expressjs.com/",
    type: ["BACKEND"],
  } as TechStack,
};

export default TECH_STACKS;