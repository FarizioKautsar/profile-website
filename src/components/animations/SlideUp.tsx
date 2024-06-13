"use client";

import { motion } from "framer-motion";
import React from "react";

type Direction = "up" | "down" | "left" | "right";

function getTranslate(direction: Direction) {
  let from;
  let to;
  switch (direction) {
    case "up":
    case "down":
      to = "translateY(0%)";
      break;
    case "left":
    case "right":
      to = "translateX(0%)";
      break;
  }
  switch (direction) {
    case "up":
      from = "translateY(100%)";
      break;
    case "down":
      from = "translateY(-100%)";
      break;
    case "left":
      from = "translateX(100%)";
      break;
    case "right":
      from = "translateX(-100%)";
      break;
  }
  return [from, to];
}

export default function AnimateSlide({
  children,
  delay,
  direction = "up",
}: React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  direction?: Direction;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "100%"
      }}
      animate={{
        opacity: 1,
        y: "0%"
      }}
    >
      {children}
    </motion.div>
  );
}
