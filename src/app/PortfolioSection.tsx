import { default as projectsData } from "@/data/projects";

export default function PortfolioSection() {
  const projects = [
    ...projectsData,
    ...projectsData,
    ...projectsData,
  ];
  return (
    <div className="w-full h-screen py-36">
      <h1 className="text-5xl font-bold">Things I&apos;ve Created</h1>
      {projects.map((project, pIdx) => (
        <div key={pIdx}>{project.name}</div>
      ))}
    </div>
  );
}
