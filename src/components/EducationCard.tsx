import { JobExperience } from "@/types";
import { useRef, useState } from "react";
import Modal from "./Modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CARD_WIDTH = 700;
const CARD_MARGIN = 24;

export default function EducationCard({
  education,
}: {
  education: JobExperience;
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
        {education.startDate.getFullYear()}{" "}
        {education.endDate
          ? " - " + education.endDate.getFullYear()
          : ""}
      </p>
      <p className="text-xl font-bold">{education.jobTitle}</p>
      <p className="text-lg text-neutral-500">{education.companyName}</p>
      <Modal
        isOpen={isHovering}
        onClose={() => setIsHovering(false)}
        style={{
          top: cardRef.current?.offsetTop || 0,
          left: cardRef.current ? `${(CARD_WIDTH + CARD_MARGIN)}px` : 0,
          width: CARD_WIDTH,
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {education.jobDescription}
        </ReactMarkdown>
      </Modal>
    </div>
  );
}
