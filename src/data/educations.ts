import { Education } from "@/types";

const educations: Education[] = [
  {
    name: "Monash University",
    degree: "Master of Information Technology",
    fieldOfStudy: "Information Technology, Web Development, Mobile Development",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2025-12-31"),
  },
  {
    name: "University of Indonesia",
    degree: "Bachelor of Business Information System",
    fieldOfStudy: "Computer and Information Sciences and Support Services",
    startDate: new Date("2018-01-01"),
    endDate: new Date("2022-12-31"),
    grade: 3.40,
    skills: ["Software Development", "React Native", "Teamwork", "Communication"]
  },
  {
    name: "SMAN 1 JAKARTA",
    degree: "High School Diploma",
    fieldOfStudy: "Science",
    startDate: new Date("2015-01-01"),
    endDate: new Date("2018-12-31"),
    activitiesAndSocieties: "Graphic Design"
  }
];

export default educations;
