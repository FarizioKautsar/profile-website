"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePic from "@/images/ProfilePic.png";
import DescribeMe from "./DescribeMe";
import jobExperiences from "@/data/jobExperiences";
import JobCard from "@/components/JobCard";

import Lenis from "lenis";
import EducationCard from "@/components/EducationCard";
import educations from "@/data/educations";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const { scrollY } = useScroll();

  // Map the scroll position to the desired animation range
  const blur = useTransform(scrollY, [0, window.innerHeight / 2], [0, 10]);
  const scale = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, window.innerHeight], [1, 0]);
  const picMarginTop = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 2],
    [120, 40]
  );
  const picBlur = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 2],
    [10, 0]
  );
  const picBlurOut = useTransform(
    scrollY,
    [window.innerHeight * 4, window.innerHeight * 5],
    [0, 10]
  );
  const picOpacity = useTransform(
    scrollY,
    [
      window.innerHeight,
      window.innerHeight * 2,
      window.innerHeight * 4,
      window.innerHeight * 5,
    ],
    [0, 1, 1, 0]
  );

  const x = useTransform(
    scrollY,
    [window.innerHeight * 2, window.innerHeight * 3, window.innerHeight * 4],
    [100, -200, 200]
  );

  const [blurVal, setBlurVal] = useState(0);
  const [picBlurVal, setPicBlurVal] = useState(0);

  useMotionValueEvent(blur, "change", (latest) => {
    setBlurVal(latest);
  });

  useMotionValueEvent(picBlur, "change", (latest) => {
    setPicBlurVal(latest);
  });

  useMotionValueEvent(picBlurOut, "change", (latest) => {
    setPicBlurVal(latest);
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update the mouse position state on mouse move
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, rgba(53, 117, 219, 0.2), transparent 80%), radial-gradient(circle at ${
          window.innerWidth - mousePosition.x
        }px ${
          window.innerHeight - mousePosition.y
        }px, rgba(114, 53, 219, 0.2), transparent 80%)`,
      }}
    >
      <div className="w-full h-screen sticky top-0 flex justify-center items-center">
        <motion.div
          style={{
            filter: `blur(${blurVal}px)`,
            opacity,
            scale,
          }}
        >
          <h1 className="text-8xl font-serif text-center">
            <span className="text-4xl font-sans">Hi, I'm</span>
            <br />
            {"farizio".split("").map((letter, lIdx) => (
              <motion.span
                key={lIdx}
                animate={{
                  marginRight: [36, 0],
                }}
                transition={{
                  delay: (lIdx + 5) * 0.1,
                  duration: 0.5,
                }}
                className="mx-0 hover:mx-5 ease-in-out transition-all"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>
      <div className="w-full">
        <div className="container mx-auto px-4 text-9xl text-center">
          <span>welcome to</span>
          <br />
          <span className="font-bold">my world</span>
        </div>
      </div>
      <div className="sticky top-0 h-dvh w-full flex flex-col justify-center overflow-x-hidden">
        <motion.div
          style={{
            marginTop: picMarginTop,
            filter: `blur(${picBlurVal}px)`,
            opacity: picOpacity,
            x,
          }}
          className="relative w-50 h-full"
        >
          <Image
            src={ProfilePic.src}
            fill
            alt="Farizio Kautsar Heruzy"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <div className="container mx-auto grid grid-cols-3">
        <div className="col-span-2 h-dvh">
          <p className="text-2xl mb-3">*pause*</p>
          <p className="text-4xl mb-8">Yep, that&apos;s me</p>
          <p className="text-8xl">
            People usually describe me as <DescribeMe />
          </p>
        </div>
        <div />
        <div className="col-span-2" />
        <div className="min-h-dvh text-right z-20">
          <p className="text-4xl mb-3 font-serif">So what brought me here?</p>
          {jobExperiences.map((jobExperience, jeIdx) => (
            <motion.div
              key={jeIdx}
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="pointer-events-auto"
            >
              <JobCard jobExperience={jobExperience} />
            </motion.div>
          ))}
        </div>
        <div className="min-h-dvh w-full text-left z-20">
          <p className="text-4xl mb-3 font-serif">What&apos;s my educations?</p>
          {educations.map((education, eIdx) => (
            <EducationCard key={eIdx} education={education} />
          ))}
        </div>
        <div className="col-span-2" />
        <div className="h-dvh text-left w-full z-20 col-span-3">
          <p className="text-4xl mb-6 font-serif text-center">My Creations</p>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, pIdx) => (
              <ProjectCard project={project} key={pIdx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
