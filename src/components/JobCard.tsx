import { JobExperience } from "@/types";
import { useRef, useState } from "react";
import Modal from "./Modal";

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
      {/* <div
        className={clsx(
          "rounded-xl border-neutral-500 transition-all duration-300 overflow-y-scroll scrollbar-hide",
          "bg-gradient-to-tr from-transparent to-neutral-700",
          isHovering ? "border mt-4" : "h-0"
        )}
        style={{ height: !isHovering ? 0 : descHeight }}
        onScroll={() => console.log("SCROLL")}
      >
        <p className="m-4" ref={descRef}>
          {jobExperience.jobDescription}
        </p>
      </div> */}
      <Modal
        isOpen={isHovering}
        onClose={() => setIsHovering(false)}
        style={{
          top: cardRef.current?.offsetTop || 0,
          // right: cardRef.current
          //   ? `${cardRef.current.offsetLeft}px`
          //   : 0,
          left: cardRef.current ? `${cardRef.current.offsetLeft - 724}px` : 0,
          width: 700,
        }}
      >
        <p>{jobExperience.jobDescription}</p>
      </Modal>
    </div>
  );
}
