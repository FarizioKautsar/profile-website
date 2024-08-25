import { JobExperience } from "@/types";
import { useRef, useState } from "react";
import Modal from "./Modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const CARD_WIDTH = 700;
const CARD_MARGIN = 24;

export default function JobCard({
  jobExperience,
}: {
  jobExperience: JobExperience;
}) {
  const [isHovering, setIsHovering] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="text-left mb-4"
      ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p className="text-sm text-neutral-500">
        {jobExperience.startDate.getFullYear()}{" "}
        {jobExperience.endDate
          ? " - " + jobExperience.endDate.getFullYear()
          : ""}
      </p>
      <p className="text-xl font-bold">{jobExperience.jobTitle}</p>
      <p className="text-lg text-neutral-500">{jobExperience.companyName}</p>
      <Modal
        isOpen={isHovering}
        onClose={() => setIsHovering(false)}
        style={{
          top: cardRef.current?.offsetTop || 0,
          left: cardRef.current
            ? `${cardRef.current.offsetLeft - (CARD_WIDTH + CARD_MARGIN)}px`
            : 0,
          width: CARD_WIDTH,
        }}
      >
        {(jobExperience.logoUrl || jobExperience.techStack) && (
          <div className="flex mb-4">
            {jobExperience.logoUrl && (
              <img
                src={jobExperience.logoUrl}
                alt={jobExperience.companyName}
                className="h-10 w-auto"
              />
            )}
            {jobExperience.techStack && (
              <div className="flex flex-wrap gap-2 ml-auto">
                {jobExperience.techStack.map((tech, tIdx) => (
                  <Tooltip key={tIdx}>
                    <TooltipTrigger>
                      <a
                        target="_blank"
                        href={tech.url}
                        rel="noopener noreferrer"
                      >
                        {tech.icon({ size: 24, color: "white" })}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{tech.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>
        )}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {jobExperience.jobDescription}
        </ReactMarkdown>
        {jobExperience.skills && (
          <div className="mt-3">
            <b>Skills:</b> {jobExperience.skills?.join(", ")}
          </div>
        )}
      </Modal>
    </div>
  );
}
