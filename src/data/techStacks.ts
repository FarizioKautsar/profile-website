import { TechStack } from "@/types";
import {
  RiFirebaseFill,
  RiJavaFill,
  RiNextjsFill,
  RiReactjsFill,
  RiSvelteFill,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import {
  SiBootstrap,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGraphql,
  SiMaterialdesign,
  SiMongodb,
  SiNestjs,
  SiShadcnui,
  SiStrapi,
  SiThreedotjs,
  SiTypeform,
  SiWordpress,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

const TECH_STACKS: Record<string, TechStack> = {
  NEXTJS: {
    name: "NextJS",
    icon: RiNextjsFill,
    url: "https://nextjs.org/",
    type: ["FULLSTACK"],
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    url: "https://www.postgresql.org/",
    type: ["DATABASE"],
  },
  FIREBASE: {
    name: "Firebase",
    icon: RiFirebaseFill,
    url: "https://firebase.google.com/",
    type: ["BACKEND", "DATABASE"],
  },
  NESTJS: {
    name: "NestJS",
    icon: SiNestjs,
    url: "https://nestjs.com/",
    type: ["BACKEND"],
  },
  REACTJS: {
    name: "ReactJS",
    icon: RiReactjsFill,
    url: "https://react.dev/",
    type: ["FRONTEND"],
  },
  SHADCN: {
    name: "Shadcn",
    icon: SiShadcnui,
    url: "https://ui.shadcn.com/",
    type: ["FRONTEND", "UI_FRAMEWORK"],
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: SiBootstrap,
    url: "https://getbootstrap.com/",
    type: ["FRONTEND", "UI_FRAMEWORK"],
  },
  TAILWIND: {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
    url: "https://tailwindcss.com/",
    type: ["FRONTEND", "UI_FRAMEWORK"],
  },
  STRAPI: {
    name: "Strapi",
    icon: SiStrapi,
    url: "https://strapi.io/",
    type: ["BACKEND", "DATABASE"],
  },
  TYPEORM: {
    name: "TypeORM",
    icon: SiTypeform,
    url: "https://typeorm.io/",
    type: ["BACKEND", "DATABASE"],
  },
  REACT_NATIVE: {
    name: "React Native",
    icon: RiReactjsFill,
    url: "https://reactnative.dev/",
    type: ["FRONTEND", "MOBILE"],
  },
  EXPRESSJS: {
    name: "ExpressJS",
    icon: SiExpress,
    url: "https://expressjs.com/",
    type: ["BACKEND"],
  },
  MONGODB: {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
    type: ["BACKEND", "DATABASE"],
  },
  WORDPRESS: {
    name: "WordPress",
    icon: SiWordpress,
    url: "https://wordpress.com/",
    type: ["BACKEND", "DATABASE", "FULLSTACK"],
  },
  CHATGPT: {
    name: "ChatGPT",
    icon: IoChatbubbleEllipsesOutline,
    url: "https://chatgpt.com/",
    type: ["AI"],
  },
  JAVA: {
    name: "Java",
    icon: RiJavaFill,
    url: "https://www.java.com/en/",
    type: ["BACKEND"],
  },
  SPRING_BOOT: {
    name: "Spring Boot",
    icon: BiLogoSpringBoot,
    url: "https://spring.io/projects/spring-boot/",
    type: ["BACKEND"],
  },
  GRAPHQL: {
    name: "GraphQL",
    icon: SiGraphql,
    url: "https://graphql.org",
    type: ["BACKEND", "DATABASE"],
  },
  SVELTE: {
    name: "Svelte",
    icon: RiSvelteFill,
    url: "https://svelte.dev/",
    type: ["FRONTEND"],
  },
  MATERIAL_UI: {
    name: "Material UI",
    icon: SiMaterialdesign,
    url: "https://mui.com/",
    type: ["FRONTEND"],
  },
  EXPO: {
    name: "Expo",
    icon: SiExpo,
    url: "https://expo.dev/",
    type: ["FRONTEND", "MOBILE"],
  },
  FIGMA: {
    name: "Figma",
    icon: SiFigma,
    url: "https://www.figma.com/",
    type: ["DESIGN", "UI/UX"],
  },
  THREEJS: {
    name: "Three.js",
    icon: SiThreedotjs,
    url: "https://threejs.org/",
    type: ["FRONTEND"],
  },
  GEMINI: {
    name: "Gemini",
    icon: RiGeminiFill,
    url: "https://gemini.google.com/",
    type: ["AI"],
  },
  AZURE_SPEECH: {
    name: "Azure Speech",
    icon: VscAzure,
    url: "https://azure.microsoft.com/en-us/products/ai-services/ai-speech/",
    type: ["AI"],
  },
  RECHART: {
    name: "Rechart",
    icon: RiReactjsFill,
    url: "https://recharts.github.io/",
    type: ["FRONTEND", "DATA_VISUALISATION"],
  },
  FLUTTER: {
    name: "Flutter",
    icon: RiFlutterFill,
    url: "https://flutter.dev/",
    type: ["MOBILE"],
  },
  FIRESTORE: {
    name: "Firestore",
    icon: RiFirebaseFill,
    url: "https://firebase.google.com/products/firestore",
    type: ["BACKEND", "DATABASE"],
  },
};

export default TECH_STACKS;
