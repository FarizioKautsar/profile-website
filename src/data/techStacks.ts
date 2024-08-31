import { TechStack } from "@/types";
import { RiFirebaseFill, RiJavaFill, RiNextjsFill, RiReactjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap, SiExpo, SiExpress, SiGraphql, SiMaterialdesign, SiMongodb, SiNestjs, SiShadcnui, SiStrapi, SiTypeform, SiWordpress } from "react-icons/si";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

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
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: SiBootstrap,
    url: "https://getbootstrap.com/",
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
  MONGODB: {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
    type: ["BACKEND", "DATABASE"],
  } as TechStack,
  WORDPRESS: {
    name: "WordPress",
    icon: SiWordpress,
    url: "https://wordpress.com/",
    type: ["BACKEND", "DATABASE", "FULLSTACK"],
  } as TechStack,
  CHATGPT: {
    name: "ChatGPT",
    icon: IoChatbubbleEllipsesOutline,
    url: "https://chatgpt.com/",
    type: ["BACKEND"],
  } as TechStack,
  JAVA: {
    name: "Java",
    icon: RiJavaFill,
    url: "https://www.java.com/en/",
    type: ["BACKEND"],
  } as TechStack,
  SPRING_BOOT: {
    name: "Spring Boot",
    icon: BiLogoSpringBoot,
    url: "https://spring.io/projects/spring-boot/",
    type: ["BACKEND"],
  } as TechStack,
  GRAPHQL: {
    name: "GraphQL",
    icon: SiGraphql,
    url: "https://graphql.org",
    type: ["BACKEND", "DATABASE"],
  } as TechStack,
  SVELTE: {
    name: "Svelte",
    icon: RiSvelteFill,
    url: "https://svelte.dev/",
    type: ["FRONTEND"],
  } as TechStack,
  MATERIAL_UI: {
    name: "Material UI",
    icon: SiMaterialdesign,
    url: "https://mui.com/",
    type: ["FRONTEND"],
  } as TechStack,
  EXPO: {
    name: "Expo",
    icon: SiExpo,
    url: "https://expo.dev/",
    type: ["FRONTEND", 'MOBILE'],
  } as TechStack,
};

export default TECH_STACKS;