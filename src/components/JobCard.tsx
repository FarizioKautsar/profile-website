import { JobExperience } from "@/types";
import { useEffect, useRef, useState } from "react";
// import Modal from "./Modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  motion,
  useAnimate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
// const CARD_WIDTH = 700;
// const CARD_MARGIN = 24;

export default function JobCard({
  jobExperience,
  isLast,
}: {
  jobExperience: JobExperience;
  isLast?: boolean;
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

  const [ref, animate] = useAnimate();

  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(150);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(springY, [0, 300], [5, -5]);
  const rotateY = useTransform(springX, [0, 300], [-5, 5]);

  const opacity = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleMouseEnter = () => {
    opacity.set(1);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
    springX.set(150);
    springY.set(150);
    setIsHovering(false);
  };

  const background = useTransform([springX, springY], ([latestX, latestY]) => {
    const gradientX = ref.current?.offsetWidth! - Number(latestX);
    const gradientY = ref.current?.offsetHeight! - Number(latestY);
    return `radial-gradient(circle at ${gradientX}px ${gradientY}px, rgba(254, 249, 195, 0.2), transparent 80%)`;
  });

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Modal
        // isOpen={isHovering}
        onClose={() => setIsHovering(false)}
        style={{
          top: cardRef.current?.offsetTop || 0,
          left:
            !isMobile && cardRef.current
              ? `${cardRef.current.offsetLeft + (CARD_WIDTH + CARD_MARGIN)}px`
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
      </Modal> */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-auto z-0 grid grid-cols-12"
      >
        <div className="col-span-2 text-right pb-4 hidden md:block">
          <p className="text-sm text-neutral-500">
            {jobExperience.startDate.getFullYear()}{" "}
            {jobExperience.endDate
              ? " - " + jobExperience.endDate.getFullYear()
              : ""}
          </p>
          <p className="text-lg text-neutral-300">
            {jobExperience.companyName}
          </p>
        </div>
        <div className="flex flex-col items-center col-span-1">
          <div className="bg-yellow-400 rounded-full size-4"></div>
          {!isLast && (
            <div className="border-l-2 border-yellow-400 flex-1"></div>
          )}
        </div>
        <div
          className="text-left mb-4 -z-10 col-span-11 md:col-span-9"
          ref={cardRef}
        >
          <div className="pb-4 block md:hidden">
            <p className="text-sm text-neutral-500">
              {jobExperience.startDate.getFullYear()}{" "}
              {jobExperience.endDate
                ? " - " + jobExperience.endDate.getFullYear()
                : ""}
            </p>
            <p className="text-lg text-neutral-300">
              {jobExperience.companyName}
            </p>
          </div>
          <p className="text-xl font-bold">{jobExperience.jobTitle}</p>
          <motion.div
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovering ? "auto" : 0,
              opacity: isHovering ? 1 : 0,
            }}
            ref={ref}
            onMouseMove={handleMouseMove}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ rotateX, rotateY, transformPerspective: 1800 }}
            className="overflow-hidden mt-4 bg-yellow-400 text-black"
          >
              <motion.div
                className="absolute inset-0"
                style={{
                  background,
                  opacity,
                }}
              />
            <div className="p-8">
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
                            {tech.icon({ size: 24 })}
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>{tech.name}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                )}
              </div>
              <ReactMarkdown className="text-left" remarkPlugins={[remarkGfm]}>
                {jobExperience.jobDescription}
              </ReactMarkdown>
              {jobExperience.skills && (
                <div className="mt-3">
                  <b>Skills:</b> {jobExperience.skills?.join(", ")}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
