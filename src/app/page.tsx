"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProfilePic from "@/images/ProfilePic.png";
import DescribeMe from "./DescribeMe";
import jobExperiences from "@/data/jobExperiences";
import JobCard from "@/components/JobCard";

import Lenis from "lenis";

export default function Home() {
  const { scrollY } = useScroll();

  // Map the scroll position to the desired animation range
  const blur = useTransform(scrollY, [0, window.innerHeight / 2], [0, 10]);
  const scale = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, window.innerHeight], [1, 0]);
  const picMarginTop = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 2],
    [120, 0]
  );
  const picBlur = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 2],
    [10, 0]
  );
  const picOpacity = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 2],
    [0, 1]
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

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <div className="w-full h-screen sticky top-0 flex justify-center items-center">
        <motion.div
          style={{
            filter: `blur(${blurVal}px)`,
            opacity,
            scale,
          }}
        >
          <h1 className="text-8xl">
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
          <p className="text-4xl mb-3">So what brought me here?</p>
          {jobExperiences.map((jobExperience, jeIdx) => (
            <JobCard key={jeIdx} jobExperience={jobExperience} />
          ))}
        </div>
        <div className="min-h-dvh text-right z-20">
          <p className="text-4xl mb-3">So what brought me here?</p>
          {jobExperiences.map((jobExperience, jeIdx) => (
            <JobCard key={jeIdx} jobExperience={jobExperience} />
          ))}
        </div>
      </div>
    </div>
  );
}
