import { JobExperience } from "@/types";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";
const CARD_WIDTH = 700;
const CARD_MARGIN = 24;

export default function JobCard({
  jobExperience,
}: {
  jobExperience: JobExperience;
}) {
  const [isHovering, setIsHovering] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Modal
        isOpen={isHovering}
        onClose={() => setIsHovering(false)}
        style={{
          top: cardRef.current?.offsetTop || 0,
          left:
            !isMobile && cardRef.current
              ? `${cardRef.current.offsetLeft - (CARD_WIDTH + CARD_MARGIN)}px`
              : 0,
          width: isMobile ? "auto" : CARD_WIDTH,
        }}
      >
        {(jobExperience.logoUrl || jobExperience.techStack) && (
          <div className="flex flex-col justify-between md:flex-row gap-4 mb-4">
            {jobExperience.logoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={jobExperience.logoUrl}
                alt={jobExperience.companyName}
                className="h-10 w-auto object-contain"
              />
            )}
            {jobExperience.techStack && (
              <div className="flex flex-wrap gap-2">
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
        <ReactMarkdown className="text-left" remarkPlugins={[remarkGfm]}>
          {jobExperience.jobDescription}
        </ReactMarkdown>
        {jobExperience.skills && (
          <div className="mt-3">
            <b>Skills:</b> {jobExperience.skills?.join(", ")}
          </div>
        )}
      </Modal>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-auto z-0"
      >
        <div className="text-left mb-4 -z-10" ref={cardRef}>
          <p className="text-sm text-neutral-500">
            {jobExperience.startDate.getFullYear()}{" "}
            {jobExperience.endDate
              ? " - " + jobExperience.endDate.getFullYear()
              : ""}
          </p>
          <p className="text-xl font-bold">{jobExperience.jobTitle}</p>
          <p className="text-lg text-neutral-300">
            {jobExperience.companyName}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
