'use client';

import { ProjectPackage } from "@/types";
import clsx from "clsx";
import {
  useMotionValue,
  useSpring,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import PackageModal from "./PackageModal";

export default function PackageCard({ pack }: { pack: ProjectPackage }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalExiting, setIsModalExiting] = useState(false);

  // Mouse-based tilt logic (unchanged)
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

  const background = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const gradientX = cardRef.current?.offsetWidth! - Number(latestX);
      const gradientY = cardRef.current?.offsetHeight! - Number(latestY);
      return `radial-gradient(
        circle at ${gradientX}px ${gradientY}px,
        rgba(152, 156, 231, 0.2),
        transparent 80%
      )`;
    }
  );

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
          "bg-gradient-to-tr from-transparent to-yellow-900/40",
          "hover:scale-105 transition-all backdrop-blur-md hover:z-20 z-10",
          "hover:cursor-pointer p-4"
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={handleCardClick}
        style={{
          rotateX,
          rotateY,
          scale,
          opacity: isModalOpen || isModalExiting ? 0 : 1,
          transformPerspective: 1000,
        }}
      >
        {/* Overlay for highlight effect */}
        <motion.div
          className="absolute inset-0"
          style={{ background, opacity }}
        />
        {/* Card Content */}
        <div className="relative z-10">
          <div className="text-xl font-bold">{pack.name}</div>
          {/* Example: display timeframe and priceRange on separate lines */}
          <div className="text-sm mt-1 text-slate-700 dark:text-slate-200">
            <span className="block">{pack.timeframe}</span>
            <span className="block">{pack.priceRange}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <PackageModal
            onClose={closeModal}
            pack={pack}
            cardRef={cardRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}
