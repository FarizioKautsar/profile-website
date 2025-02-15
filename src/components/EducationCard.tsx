import { Education } from "@/types";
import { useRef, useState } from "react";
// import Modal from "./Modal";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// const CARD_WIDTH = 700;
// const CARD_MARGIN = 24;

export default function EducationCard({
  education,
  isLast,
}: {
  education: Education;
  isLast?: boolean;
}) {
  // const [isHovering, setIsHovering] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="text-left grid grid-cols-12"
      ref={cardRef}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
    >
      <div className="col-span-2 text-right pb-4 hidden md:block">
        <p className="text-sm text-neutral-500">
          {education.startDate.getFullYear()}{" "}
          {education.endDate ? " - " + education.endDate.getFullYear() : ""}
        </p>
        <p className="text-lg text-neutral-300">{education.name}</p>
      </div>
      <div className="flex flex-col items-center col-span-1">
        <div className="bg-yellow-400 rounded-full size-4"></div>
        {!isLast && <div className="border-l-2 border-yellow-400 flex-1"></div>}
      </div>
      <div className="text-left mb-4 -z-10 col-span-11 md:col-span-9">
      <div className="pb-4 block md:hidden">
        <p className="text-sm text-neutral-500">
          {education.startDate.getFullYear()}{" "}
          {education.endDate ? " - " + education.endDate.getFullYear() : ""}
        </p>
        <p className="text-lg text-neutral-300">{education.name}</p>
      </div>
        <p className="text-xl font-bold">{education.degree}</p>
        <p>{education.fieldOfStudy}</p>
        {education.educationDescription && (
          <p className="text-sm mt-2">{education.educationDescription}</p>
        )}
      </div>
    </div>
  );
}
