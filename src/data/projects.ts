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
      "I built a professional company profile website for Timas Suplindo, integrating React, Express.js, and a custom CMS for seamless content management.",
    description:
      "I developed the company profile website for Timas Suplindo, an Indonesian leader in engineering, procurement, construction, and installation (EPCI) services for the oil and gas industry. Leveraging React for the frontend and Express.js for the backend, I created a seamless and professional platform that effectively showcases their expertise in offshore and onshore projects. Additionally, I built a custom Content Management System (CMS) using CoreUI, enabling the Timas team to easily manage and update their content. The website combines functionality and professionalism, reflecting Timas Suplindo's commitment to delivering high-quality and reliable solutions in the energy sector.",
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
      require("@/images/projects/timas/timas1.png"),
      require("@/images/projects/timas/timas2.png"),
      require("@/images/projects/timas/timas3.png"),
      require("@/images/projects/timas/timas4.png"),
    ],
  },
  {
    name: "KotakodeLabs Company Profile",
    subTitle: "Company Profile Website",
    shortDescription:
      "I developed a flashy, dynamic company profile website using Next.js, Strapi, and Framer Motion to showcase KotakodeLabs' services and portfolio.",
    description:
      "KotakodeLabs is the company I've worked for the longest, and it holds a special place in my professional journey. I built a visually stunning and dynamic company profile website using Next.js for the frontend, Strapi for the backend, and Framer Motion for sleek, engaging animations. Designed to be as flashy and eye-catching as possible, the website serves as a showcase for our capabilities, highlighting our services, development process, and portfolio in a way that captivates prospective clients while demonstrating our commitment to modern, cutting-edge web design.",
    client: "KotakodeLabs",
    websiteUrl: "https://labs.kotakode.com/",
    yearFrom: 2023,
    yearTo: 2023,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.STRAPI],
    imageUrls: [
      require("@/images/projects/klabs/klabs1.png"),
      require("@/images/projects/klabs/klabs2.png"),
      require("@/images/projects/klabs/klabs3.png"),
    ],
  },
  // {
  //   name: "My Profile Website",
  //   subTitle: "Company Profile Website",
  //   shortDescription:
  //     "The website I use to showcase my experiences and portfolio.",
  //   description: "The website I use to showcase my experiences and portfolio.",
  //   client: "Myself",
  //   yearFrom: 2024,
  //   yearTo: 2024,
  //   techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.TAILWIND, TECH_STACKS.SHADCN],
  //   imageUrls: [
  //     require("@/images/projects/personal-website/personal-website1.png"),
  //     require("@/images/projects/personal-website/personal-website2.png"),
  //   ],
  // },
  {
    name: "Bina Bangsa LMS",
    subTitle: "Learning Management System",
    shortDescription:
      "I developed a feature-rich LMS with dedicated portals for students, teachers, admins, and finance, improving the learning experience.",
    description:
      "At KotakodeLabs, I had the privilege of leading the development of a cutting-edge Learning Management System (LMS) web application tailored for an international school. This project was a transformative solution for the institution, offering a suite of features designed to enhance the learning experience. I played a key role in creating and integrating four dedicated portals: a student portal for seamless access to coursework, a teacher portal for managing classes and grading, an admin portal for system management, and a finance department portal for efficient financial operations. This project reflects my commitment to building impactful solutions that address real-world needs in education.",
    client: "Bina Bangsa School",
    websiteUrl: "https://labs.kotakode.com/",
    yearFrom: 2023,
    techStack: [
      TECH_STACKS.REACTJS,
      TECH_STACKS.NESTJS,
      TECH_STACKS.POSTGRESQL,
      TECH_STACKS.BOOTSTRAP,
    ],
    imageUrls: [
      require("@/images/projects/bbs/bbs1.png"),
      require("@/images/projects/bbs/bbs2.png"),
    ],
  },
  {
    name: "VIMB Website",
    subTitle: "Company Marketing Website",
    shortDescription:
      "I created a Web 3.0 website for the NFT project 'Voice In My Brain' to provide an immersive experience reflecting its artistic vision.",
    description:
      "Voice In My Brain is an NFT project that consists of a collection of 6969 digital expressions. The project speaks about our thoughts and the world in new ways of communication and expression. Voice In My Brain was founded by Sojoo and created by thelameshit. They came to us with an idea on how to depict their work in a way that can be felt more deeply in terms of concept and understanding. We created a web 3.0 website to convey an immersive experience about this project.",
    client: "VIMB (Voices in My Brain)",
    websiteUrl: "https://vimb.io",
    yearFrom: 2023,
    yearTo: 2023,
    techStack: [TECH_STACKS.REACTJS, TECH_STACKS.MONGODB],
    imageUrls: [
      require("@/images/projects/vimb/vimb1.png"),
      require("@/images/projects/vimb/vimb2.png"),
    ],
  },
  {
    name: "TLDRpls",
    subTitle: "Personal Project",
    shortDescription:
      "A personal tool that lets users talk to their favorite media, designed to help recall book and TV show details via AI-powered summaries.",
    description:
      "This is a personal project of mine that originates from my day-to-day problem. I have a hard time remembering the characters of a book or a TV show, so I often ask ChatGPT for those. Because I find myself often have to describe a media to ChatGPT, I decided just to make my own tool to ask around about the current book I'm reading.",
    client: "Myself",
    websiteUrl: "https://tldrpls.com",
    githubUrl: "https://github.com/FarizioKautsar/summarize-this",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.CHATGPT, TECH_STACKS.TAILWIND],
    imageUrls: [
      require("@/images/projects/tldr/tldr1.png"),
      require("@/images/projects/tldr/tldr2.png"),
    ],
  },
  {
    name: "John Conway's Game of Life",
    subTitle: "Personal Project",
    shortDescription:
      "Inspired by a Veritasium video, I built an interactive simulation of Conway's Game of Life to explore the unpredictability of cellular automata.",
    description: `This is a challenge I put on to myself. I've watched a Veritasium video about the issue of computer predictability. In said video, he explains John Conway's Game of Life, which is a zero-player game (a game that does not need any player). This is a simple "game" in which a cell came to life if it has less than 2 or more than 3 neighbors and dies if it has exactly 3 neighbors. With how simple the game is, we would think that we can predict if the game would stop or goes on forever. The thing is, just as Turing Machine paradox showcase, it is impossible for any algorithm to predict if it'll go on forever or not. Neat (for me).`,
    client: "Myself",
    websiteUrl: "https://game-of-life-fariziokautsar.vercel.app/",
    githubUrl: "https://github.com/FarizioKautsar/game-of-life",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.CHATGPT, TECH_STACKS.TAILWIND],
    imageUrls: [
      require("@/images/projects/gameoflife/gameoflife1.png"),
      require("@/images/projects/gameoflife/gameoflife2.png"),
    ],
  },
  {
    name: "Counsely",
    subTitle: "Consultation/Freelancing Platform",
    shortDescription:
      "I led a team in building a platform connecting clients and freelancers, integrating Expo, Tailwind, and Xendit for seamless transactions.",
    description: `I led a team of 3 in developing a website for a consultation platform company. Counsely was designed as a professional platform to connect clients with freelancers, offering a user-friendly experience. The platform allowed clients to post project or consultation requests and enabled freelancers to efficiently find opportunities that matched their skills, preferences, and rates.
The website was built using modern technologies, including Expo for the front-end and Tailwind CSS for styling, ensuring a responsive and visually appealing design. It was also integrated with Xendit as the payment gateway, providing secure and seamless transactions for both clients and freelancers.`,
    client: "KotakodeLabs - Counsely",
    websiteUrl: "https://counsely.app/",
    yearFrom: 2024,
    yearTo: 2025,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.EXPO, TECH_STACKS.NESTJS],
    imageUrls: [
      require("@/images/projects/counsely/counsely1.png"),
      require("@/images/projects/counsely/counsely2.png"),
      require("@/images/projects/counsely/counsely3.png"),
    ],
  },
  {
    name: "SkillBite",
    subTitle: "Bite-Sized Educational Platform",
    shortDescription:
      "An educational platform with gamified learning, AI-assisted editing, and a minimalist design built from scratch in Figma.",
    description: `SkillBite is a planned bite-sized educational platform that offers a wide range of courses and learning materials. It features a bite-sized content sharing, a gamified learning, exclusive content, AI-assisted editing. The app was designed entirely in Figma from scratch, without relying on a UI library, ensuring a minimalist design and an intuitive user experience. While we didn't secure the top spot, the journey provided valuable business insights and opportunities to expand our professional network.`,
    client: "My Team",
    websiteUrl:
      "https://www.figma.com/proto/ZAojb0VtpA310AormJadxy/SkillBite?node-id=4-534&t=6XxK0WpR2S3M6c1B-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A534",
    yearFrom: 2024,
    yearTo: 2024,
    techStack: [TECH_STACKS.FIGMA],
    imageUrls: [
      require("@/images/projects/skillbite/skillbite1.png"),
      require("@/images/projects/skillbite/skillbite2.png"),
      require("@/images/projects/skillbite/skillbite3.png"),
      require("@/images/projects/skillbite/skillbite4.png"),
      require("@/images/projects/skillbite/skillbite5.png"),
    ],
    ctaLabel: "View in Figma",
  },
  {
    name: "Counsely",
    subTitle: "Consultation/Freelancing Platform",
    shortDescription:
      "Counsely is a website dedicated as a meeting point between clients and freelancer",
    description: `I led a team of 3 in developing a website for a consultation platform company. Counsely was designed as a professional platform to connect clients with freelancers, offering a user-friendly experience. The platform allowed clients to post project or consultation requests and enabled freelancers to efficiently find opportunities that matched their skills, preferences, and rates.
The website was built using modern technologies, including Expo for the front-end and Tailwind CSS for styling, ensuring a responsive and visually appealing design. It was also integrated with Xendit as the payment gateway, providing secure and seamless transactions for both clients and freelancers.`,
    client: "KotakodeLabs - Counsely",
    websiteUrl: "https://counsely.app/",
    yearFrom: 2024,
    yearTo: 2025,
    techStack: [TECH_STACKS.NEXTJS, TECH_STACKS.EXPO, TECH_STACKS.NESTJS],
    imageUrls: [
      require("@/images/projects/counsely/counsely1.png"),
      require("@/images/projects/counsely/counsely2.png"),
      require("@/images/projects/counsely/counsely3.png"),
    ],
  },
  {
    name: "RantauReady",
    subTitle: "Website for Indonesian students in Melbourne",
    shortDescription:
      "A website for Indonesian students in Melbourne, featuring articles, a marketplace, and a settlement course, built with NextJS, Tailwind, and Drizzle ORM.",
    description: `RantauReady is a website I am currently developing, dedicated to Indonesian students in Melbourne. It will provide helpful articles and blogs offering the most up-to-date information to assist students in their journey. The website will also feature a marketplace where students can advertise accommodations and used items, as well as a course on settling down in Melbourne as an Indonesian student. The site will offer both dark and light modes with a fully responsive design. It is being built from the ground up using NextJS, Tailwind, Shadcn, and Drizzle ORM, with Neon as the database hosting.`,
    client: "My Team",
    websiteUrl: "https://rantauready.com/",
    yearFrom: 2025,
    techStack: [
      TECH_STACKS.NEXTJS,
      TECH_STACKS.TAILWIND,
      TECH_STACKS.SHADCN,
      TECH_STACKS.POSTGRESQL,
    ],
    imageUrls: [
      require("@/images/projects/rantauready/rantauready1.png"),
      require("@/images/projects/rantauready/rantauready2.png"),
      require("@/images/projects/rantauready/rantauready3.png"),
    ],
  },
  {
    name: "Farizio.ai",
    shortDescription:
      "An AI-powered portfolio where users interact with my 3D avatar using voice and text, built with Next.js, OpenAI, Three.js, and Amazon Polly.",
    subTitle: "Interactive AI Avatar Portfolio Website",
    client: "Myself",
    yearFrom: 2025,
    yearTo: 2025,
    websiteUrl: "https://chat.farizio.io",
    description:
      "I recently developed an interactive AI-powered portfolio to showcase my work in a more engaging way. Rather than a traditional resume, this platform allows users to have a conversation with my AI avatar, which can provide insights into my projects, career history, and experience. Built with Next.js, OpenAI, Amazon Polly, and Three.js, the avatar responds to voice input through microphone interaction, delivering answers with realistic speech. This was also my first time using Three.js, making it an exciting opportunity to integrate 3D visuals into the experience.",
    techStack: [
      TECH_STACKS.NEXTJS,
      TECH_STACKS.TAILWIND,
      TECH_STACKS.CHATGPT,
      TECH_STACKS.THREEJS,
    ],
    imageUrls: [
      require("@/images/projects/3davatar/3davatar1.png"),
      require("@/images/projects/3davatar/3davatar2.png"),
    ],
  },
  {
    name: "SweetSpots",
    shortDescription: "A travelling app where users can find local spots and hidden gems by swiping through them Tinder-style.",
    description: `SweetSpots is a travelling app where users can find local spots and hidden gems by swiping through them Tinder-style. Users can swipe right to like a spot, or swipe left to skip it. If they like a spot, they can save it to their list of favorite spots. Users can also auto-build itinerary with the places that they liked. This business/app is part of my FastTrack startup class in Monash University.`,
    subTitle: "Travelling App",
    client: "My Team",
    yearFrom: 2025,
    websiteUrl: "https://sweetspotsapp.com",
    techStack: [
      TECH_STACKS.NEXTJS,
      TECH_STACKS.TAILWIND,
      TECH_STACKS.SHADCN,
      TECH_STACKS.POSTGRESQL,
    ],
    imageUrls: [
      require("@/images/projects/sweetspots/sweetspots1.png"),
      require("@/images/projects/sweetspots/sweetspots2.png"),
      // require("@/images/projects/sweetspots/sweetspots3.png"),
    ],
  }
];

export default projects;
