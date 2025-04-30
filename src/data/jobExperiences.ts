import { JobExperience } from "@/types";
import TECH_STACKS from "./techStacks";

const jobExperiences: JobExperience[] = [
  {
    companyName: "LifeformAI",
    jobTitle: "Front End Developer Intern",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-04-30"),
    location: "Sydney, Australia · Remote",
    logoUrl: "https://chat.lifeformai.com/favicon.ico",
    jobDescription:
      "* Built a 3D chatbot avatar named Atlas, integrated with ChatGPT and Gemini to enable natural, AI-driven conversations ([chat.lifeformai.com](https://chat.lifeformai.com)).\n" +
      "* Developed realistic lip sync using Oculus Visemes and voice synthesis with Azure Speech and Amazon Polly.\n" +
      "* Animated the avatar using Mixamo and rendered it in the browser with Three.js, creating a highly interactive experience.\n" +
      "* The product is still under construction and being actively improved.",
    skills: [
      "Three.js",
      "3D Animation",
      "Speech Synthesis",
      "AI Integration",
      "Web Development"
    ],
    techStack: [
      TECH_STACKS.THREEJS,
      TECH_STACKS.NEXTJS,
      TECH_STACKS.TAILWIND,
      TECH_STACKS.GEMINI,
      TECH_STACKS.AZURE_SPEECH,
    ]
  },
  {
    companyName: "Kotakode Labs",
    jobTitle: "Full Stack Developer and Project Tech Lead",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2024-12-31"),  // null indicates the job is current,
    logoUrl: "https://labs.kotakode.com/_next/static/media/Logo-Horizontal.85e2d8be.svg",
    jobDescription: 
      "* Created the profile websites for a gas and energy company ([timas.com](https://timas.com)), an NFT project ([vimb.io](https://vimb.io)), and KotakodeLabs ([klabs.dev](https://klabs.dev)) as the sole developer. Collaborated closely with clients to ensure their satisfaction and delivered modern, sophisticated web applications.\n" +
      "* Engineered a comprehensive learning management system and human resource information system for an international school of 300+ students, featuring a flexible grading system and an integrated finance management system ([klabs.dev/bbs-lms](https://klabs.dev/bbs-lms)).\n" + 
      "* Led a team of 3 in building a web and mobile app using Expo for a consultation platform (counsely.app), which now supports 200+ active users.",
    location: "Jakarta, Indonesia · Remote",
    skills: ["User Interface Design", "Software Development", "Web Development", "Front-End Development", "Team Management"],
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.EXPRESSJS, TECH_STACKS.NESTJS, TECH_STACKS.POSTGRESQL, TECH_STACKS.EXPO, TECH_STACKS.TAILWIND]
  },
  {
    companyName: "Lembaga Pengelola Dana Pendidikan",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_resmi_LPDP.png",
    jobTitle: "Representative of the LPDP Awardees of PK-226 (Perwakilan Angkatan)",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-31"),
    jobDescription: 
      "PK-226 2024. LPDP has granted me the opportunity to continue my study as a Master of Information Technology at Monash University which will start in July 2024 and expected to be finished in December 2025.\n\n" +
      "Along the PK (Persiapan Keberangkatan) event, I was trusted to be one of the five representatives or PAs of the class of 299 awardees. My role is as the supervisor for the administration and the treasury team, the supporting team that made sure the great people behind PK-226 can work effectively and efficiently. Other tasks include tending to the needs and questions of the awardees regarding departures, rundowns, task submissions, etc."
    ,
    location: "Jakarta, Indonesia · On-site",
    skills: ["Team Management", "Leadership"]
  },
  {
    companyName: "Sayurbox",
    jobTitle: "Backend Developer Intern",
    logoUrl: "https://lh3.googleusercontent.com/TG9Qdie8GUtDmUFNXE3n1M018Fl09bHc0Qkfp8UD6_TlOvZ2F4Qwu3ZtL38yXQIqcSyFxffn6EJxLbIRmJ2HlxJkHCM38JGMmkbt6Cc",
    startDate: new Date("2021-12-01"),
    endDate: new Date("2022-06-30"),
    jobDescription: 
      "* Enhanced voucher features and optimized “Tebus Murah” campaigns to boost user engagement, while developing scalable solutions for the Sayurfluencer promotion program to support marketing initiatives, increasing user engagement by 15%.\n" +
      "* Resolved critical bugs and improved the internal CMS web app used by a 15-member team, ensuring seamless and efficient operations.",
    location: "Jakarta, Indonesia · Remote",
    skills: ["Spring Boot", "Svelte", "Software Development", "Front-End Development", "Java", "Back-End Web Development"],
    techStack: [TECH_STACKS.SPRING_BOOT, TECH_STACKS.JAVA, TECH_STACKS.GRAPHQL, TECH_STACKS.SVELTE]
  },
  {
    companyName: "Kotakode",
    jobTitle: "Full Stack Developer Intern",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2021-11-30"),
    jobDescription: 
      "* Implemented a sitewide revamp by creating reusable and documented React UI components, aligning with Kotakode’s design guidelines.\n" +
      "* Developed the internal CMS website and seamlessly integrated it with the existing back-end.\n" +
      "* Built the full-stack Kotakode Academy feature, which enabled 1,000+ users to find and enroll in their favorite online courses.\n",
    location: "Jakarta, Indonesia · Remote",
    skills: ["Software Development"],
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.EXPRESSJS, TECH_STACKS.MATERIAL_UI, TECH_STACKS.BOOTSTRAP]
  },
  {
    companyName: "Bukit Vista Hospitality Services",
    logoUrl: "https://www.bukitvista.com/wp-content/uploads/2021/06/BukitVista-LOGO-ONLY-transparent.png",
    jobTitle: "Frontend Developer Intern",
    startDate: new Date("2021-03-01"),
    endDate: new Date("2021-07-31"),
    jobDescription: 
      "* Developed interactive analytics visualizations for the BIGRR platform, empowering the HR team to analyze and forecast talent acquisition.\n" +
      "* Managed the WordPress website timeline, coordinated with team members, and monitored progress to meet project goals.\n",
    location: "Bali, Indonesia · Remote",
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.TAILWIND, TECH_STACKS.WORDPRESS]
  }
];

export default jobExperiences;
