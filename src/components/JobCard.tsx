import { JobExperience } from "@/types";
import clsx from "clsx";
import { useState } from "react";

export default function JobCard({
  jobExperience,
}: {
  jobExperience: JobExperience;
}) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="text-left mb-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p className="text-sm text-neutral-500">
        {jobExperience.startDate.getFullYear()} {jobExperience.endDate ? " - " + jobExperience.endDate.getFullYear() : ""}
      </p>
      <p className="text-xl font-bold">{jobExperience.jobTitle}</p>
      <p className="text-lg text-neutral-500">{jobExperience.companyName}</p>
      <div
        className={clsx(
          "rounded-xl border-neutral-500 transition-all duration-300 overflow-hidden overflow-y-scroll scrollbar-hide",
          "bg-gradient-to-tr from-transparent to-neutral-700",
          isHovering ? "h-48 border mt-4" : "h-0"
        )}
      >
        <p className="m-4">{jobExperience.jobDescription}</p>
      </div>
    </div>
  );
}
