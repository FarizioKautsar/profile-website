import { Project } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={clsx(
        "rounded-md border border-slate-300 overflow-hidden",
        "bg-gradient-to-tr from-transparent to-neutral-700",
        "hover:scale-105 transition-all backdrop-blur-md"
      )}
    >
      {project.imageUrls && (
        <Image
          src={project.imageUrls[0]}
          alt={project.name}
          // height={200}
          className="h-52"
          style={{
            objectFit: "cover",
          }}
        />
      )}
      <div className="p-3">
        <div className="text-2xl font-bold">{project.name}</div>
        <div className="text-xl font-bold">{project.subTitle}</div>
      </div>
    </div>
  );
}
