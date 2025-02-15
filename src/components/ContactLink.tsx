import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";

interface ContactLinkProps {
  href: string;
  label: string;
  icon?: IconType;
}

export default function ContactLink({ href, icon, label }: ContactLinkProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
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

  const background = useTransform([springX, springY], ([latestX, latestY]) => {
    const gradientX = cardRef.current?.offsetWidth! - Number(latestX);
    const gradientY = cardRef.current?.offsetHeight! - Number(latestY);
    return `radial-gradient(circle at ${gradientX}px ${gradientY}px, rgba(254, 249, 195, 0.2), transparent 80%)`;
  });
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center px-4 py-8 text-white transition border border-yellow-400 w-full text-center gap-3`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        scale,
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
      {icon && <span>{icon({ size: 48 })}</span>}
      {label}
    </motion.a>
  );
}
