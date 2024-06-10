import { Project } from "@/types";
import TECH_STACKS from "./techStacks";

const projects: Project[] = [
  {
    name: "Timas Profile Website",
    shortDescription: "Timas is blabla",
    client: "Timas",
    websiteUrl: "https://www.timas.com/",
    yearFrom: 2022,
    yearTo: 2022,
    techStack: [TECH_STACKS.NEXTJS],
  }
]

export default projects;