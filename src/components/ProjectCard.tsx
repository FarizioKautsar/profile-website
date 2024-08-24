import { Project } from "@/types";
import clsx from "clsx";
import {
  useMotionValue,
  useSpring,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);

  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(150);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(springY, [0, 300], [15, -15]);
  const rotateY = useTransform(springX, [0, 300], [-15, 15]);

  const opacity = useSpring(0, { stiffness: 300, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const background = useTransform([springX, springY], ([latestX, latestY]) => {
    const gradientX = cardRef.current?.offsetWidth! - Number(latestX);
    const gradientY = cardRef.current?.offsetHeight! - Number(latestY);
    return `radial-gradient(circle at ${gradientX}px ${gradientY}px, rgba(152, 156, 231, 0.2), transparent 80%)`;
  });

  const handleMouseEnter = () => {
    opacity.set(1);
    scale.set(1.1);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    opacity.set(0);
    springX.set(150);
    springY.set(150);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalExiting(true);
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalExiting(false);
    }, 200);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        className={clsx(
          "rounded-md border border-slate-300 overflow-hidden",
          "bg-gradient-to-tr from-transparent to-blue-900/40",
          "hover:scale-105 transition-all backdrop-blur-md hover:z-20 z-10",
          "hover:cursor-pointer"
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={handleCardClick}
        style={{
          rotateX,
          rotateY,
          scale,
          opacity: isModalExiting || isModalOpen ? 0 : 1,
          transformPerspective: 1000,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background,
            opacity,
          }}
        />
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
          <div>{project.subTitle}</div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            onClose={closeModal}
            project={project}
            cardRef={cardRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}
