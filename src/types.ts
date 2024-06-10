import { IconType } from "react-icons";

export type TechStack = {
  name: string;
  logoUrl?: string;
  url?: string;
  icon: IconType;
  type: ("BACKEND" | "FRONTEND" | "FULLSTACK" | "UTILITY" | "UI_FRAMEWORK" | "MOBILE")[]
}

export type Project = {
  name: string;
  client: string;
  shortDescription: string;
  description?: string | React.ReactNode;
  websiteUrl?: string;
  yearFrom: number;
  yearTo: number;
  techStack: TechStack[];
}