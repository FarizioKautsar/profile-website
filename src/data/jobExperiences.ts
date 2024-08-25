import { JobExperience } from "@/types";

const jobExperiences: JobExperience[] = [
  {
    companyName: "Kotakode",
    jobTitle: "Full Stack Developer/Intern Mentor",
    startDate: new Date("2023-02-01"),
    endDate: null,  // null indicates the job is current
    jobDescription: 
      "* Building reusable codes and components for an easier and smoother development.\n" +
      "* Intense focus on building reusable code-bases and components to streamline the development process.\n" +
      "* Currently creating a finance web application for a school and a profile website for a digital community.\n" +
      "* Creating a profile website and a marketplace for a fashion company.\n" +
      "* Supervising and mentoring interns for a project.\n" +
      "* Building a highly customizable student grading system for an international school.\n" +
      "* Made KotakodeLabs' company profile website that is responsive and packed with smooth animations (klabs.dev).\n" +
      "* Created a billing and invoicing system for a web application which will be used for an international school.\n" +
      "* Supervising and mentoring two highly capable college students in a web development project.\n", 
    location: "Jakarta, Indonesia · Remote",
    skills: ["User Interface Design", "Software Development", "Web Development", "Front-End Development", "Team Management"],
    achievements: [
      "Building reusable codes and components for an easier and smoother development.\n",
      "Intense focus on building reusable code-bases and components to streamline the development process.\n",
      "Currently creating a finance web application for a school and a profile website for a digital community.\n",
      "Creating a profile website and a marketplace for a fashion company.\n",
      "Supervising and mentoring interns for a project.\n",
      "Building a highly customizable student grading system for an international school.\n",
      "Made KotakodeLabs' company profile website that is responsive and packed with smooth animations (klabs.dev).\n",
      "Created a billing and invoicing system for a web application which will be used for an international school.\n",
      "Supervising and mentoring two highly capable college students in a web development project.\n"
    ]
  },
  {
    companyName: "Kotakode",
    jobTitle: "Full-stack Developer",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2023-01-31"),
    jobDescription: 
      "* Created front end implementation for a company’s profile website alongside its backend website.\n" +
      "* Creating a learning management system for a school.\n" +
      "* Creates model and backend implementation for some feature.\n",
    location: "Jakarta, Indonesia · Remote",
    skills: ["Software Development", "Web Development", "Front-End Development"]
  },
  {
    companyName: "Lembaga Pengelola Dana Pendidikan",
    jobTitle: "Representative of the LPDP Awardees of PK-226 (Perwakilan Angkatan)",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-31"),
    jobDescription: 
      "PK-226 2024. LPDP has granted me the opportunity to continue my study as a Master of Information Technology at Monash University which will start in July 2024 and expected to be finished in December 2025.\n\n" +
      "Along the PK (Persiapan Keberangkatan) event, I was trusted to be one of the five representatives or PAs of the class of 299 awardees. My role is as the supervisor for the administration and the treasury team, the supporting team that made sure the great people behind PK-226 can work effectively and efficiently. Other tasks include tending to the needs and questions of the awardees regarding departures, rundowns, task submissions, etc."
    ,
    location: "Jakarta, Indonesia · On-site",
    skills: []
  },
  {
    companyName: "Sayurbox",
    jobTitle: "Backend Developer Intern",
    startDate: new Date("2021-12-01"),
    endDate: new Date("2022-06-30"),
    jobDescription: 
      "* Worked on a number of voucher improvements.\n" +
      "* Contributed to Sayurbox's Tebus Murah Campaigns.\n" +
      "* Contributed to Sayurbox's Sayurfluencer program.\n" +
      "* Fixed a number of problems in Sayurbox's internal CMS.\n" +
      "* Worked with Springboot, Svelte, and GraphQL.\n",
    location: "Jakarta, Indonesia · Remote",
    skills: ["Spring Boot", "Svelte", "Software Development", "Front-End Development", "Java", "Back-End Web Development"]
  },
  {
    companyName: "Kotakode",
    jobTitle: "Full Stack Developer Intern",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2021-11-30"),
    jobDescription: 
      "* Implemented Kotakode's design guideline to their website by creating consistent and documented React UI components.\n" +
      "* Initialized the Kotakode Back Office front-end and integrated it with the existing back-end.\n" +
      "* Developed Kotakode Academy's back-end and front-end codebase.\n",
    location: "Jakarta, Indonesia · Remote",
    skills: ["Software Development"]
  },
  {
    companyName: "Bukit Vista Hospitality Services",
    jobTitle: "Frontend Developer Intern",
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-07-31"),
    jobDescription: 
      "* Developed parts of Bukit Vista's BIGRR platform with React and Redux.\n" +
      "* Managed their WordPress website: Setting timeline, collecting team, and monitoring progress.\n",
    location: "Bali, Indonesia · Remote",
    skills: []
  }
];

export default jobExperiences;
