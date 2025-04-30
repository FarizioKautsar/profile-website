import { IconType } from "react-icons";

export type TechStack = {
  name: string;
  logoUrl?: string;
  url?: string;
  icon: IconType;
  type: ("BACKEND" | "FRONTEND" | "FULLSTACK" | "UTILITY" | "UI_FRAMEWORK" | "MOBILE" | "DATABASE" | "DESIGN" | "UI/UX" | "AI")[]
}

export type JobExperience = {
  companyName: string;        // The name of the company
  jobTitle: string;           // The title of the job position
  startDate: Date;            // The start date of the job
  endDate?: Date | null;             // The end date of the job (optional, can be null if currently employed)
  jobDescription: string;     // A description of the job responsibilities and achievements
  location?: string;          // The location of the job (optional)
  skills?: string[];    // An array of technologies used in the job (optional)
  // achievements?: string[];    // An array of notable achievements during the job (optional)
  techStack?: TechStack[];
  logoUrl?: string;
};

export type Education = {
  name: string;                // The name of the school
  degree: string;              // The degree obtained
  educationDescription?: string;
  fieldOfStudy: string;        // The field of study
  startDate: Date;             // The start date of the education period
  endDate: Date;               // The end date of the education period
  grade?: number;              // The grade (optional)
  activitiesAndSocieties?: string; // Activities and societies (optional)
  skills?: string[];           // An array of skills associated with the education (optional)
};

export type Project = {
  name: string;
  subTitle: string;
  client: string;
  shortDescription?: string;
  description?: string | React.ReactNode;
  websiteUrl?: string;
  githubUrl?: string;
  yearFrom: number;
  yearTo?: number;
  techStack: TechStack[];
  imageUrls?: string[];
  ctaLabel?: string;
}

export type ProjectPackage = {
  name: string;
  timeframe: string;
  priceRange: string;
  idrPriceRange?: string;
  audPriceRange?: string;
  description?: string;
  features?: string[];
  note?: string;
};
