import { IconType } from "react-icons";

export type TechStack = {
  name: string;
  logoUrl?: string;
  url?: string;
  icon: IconType;
  type: ("BACKEND" | "FRONTEND" | "FULLSTACK" | "UTILITY" | "UI_FRAMEWORK" | "MOBILE")[]
}

export type JobExperience = {
  companyName: string;        // The name of the company
  jobTitle: string;           // The title of the job position
  startDate: Date;            // The start date of the job
  endDate?: Date;             // The end date of the job (optional, can be null if currently employed)
  jobDescription: string;     // A description of the job responsibilities and achievements
  location?: string;          // The location of the job (optional)
  technologies?: string[];    // An array of technologies used in the job (optional)
  achievements?: string[];    // An array of notable achievements during the job (optional)
};

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