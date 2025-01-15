"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { use, useEffect, useRef, useState } from "react";
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
import dynamic from "next/dynamic";
import ContactLink from "@/components/ContactLink";
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";

function Home() {
  const { scrollY } = useScroll();

  // Map the scroll position to the desired animation range
  const blur = useTransform(scrollY, [0, window.innerHeight / 2], [0, 10]);
  const scale = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, window.innerHeight], [1, 0]);

  const jobExperiencesRef = useRef<HTMLDivElement>(null);
  const educationsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [projectsOffsetTop, setProjectsOffsetTop] = useState<number>(0);
  const [educationsOffsetTop, setEducationsOffsetTop] = useState<number>(0);
  const [jobExperiencesOffsetTop, setJobExperiencesOffsetTop] =
    useState<number>(0);

  useEffect(() => {
    const calculateOffset = () => {
      if (projectsRef.current) {
        setProjectsOffsetTop(projectsRef.current.offsetTop);
      }
      if (educationsRef.current) {
        setEducationsOffsetTop(educationsRef.current.offsetTop);
      }
      if (jobExperiencesRef.current) {
        setJobExperiencesOffsetTop(jobExperiencesRef.current.offsetTop);
      }
    };

    calculateOffset();

    // Recalculate on window resize
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  const picMarginTop = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 2],
    [120, 40]
  );
  const picBlur = useTransform(
    scrollY,
    [
      window.innerHeight,
      window.innerHeight * 2,
      (projectsOffsetTop || window.innerHeight * 5) - window.innerHeight,
      projectsOffsetTop || window.innerHeight * 5,
    ],
    [10, 0, 0, 10]
  );

  const picOpacity = useTransform(
    scrollY,
    [
      window.innerHeight,
      window.innerHeight * 2,
      (projectsOffsetTop || window.innerHeight * 5) - window.innerHeight,
      projectsOffsetTop || window.innerHeight * 5,
    ],
    [0, 1, 1, 0]
  );

  const picBlurMobile = useTransform(
    scrollY,
    [
      window.innerHeight,
      window.innerHeight * 2,
      (jobExperiencesOffsetTop || window.innerHeight * 5) - window.innerHeight,
      jobExperiencesOffsetTop || window.innerHeight * 5,
    ],
    [10, 0, 0, 10]
  );

  const picOpacityMobile = useTransform(
    scrollY,
    [
      window.innerHeight,
      window.innerHeight * 2,
      (jobExperiencesOffsetTop || window.innerHeight * 5) - window.innerHeight,
      jobExperiencesOffsetTop || window.innerHeight * 5,
    ],
    [0, 1, 1, 0]
  );

  const x = useTransform(
    scrollY,
    [
      window.innerHeight * 2,
      jobExperiencesOffsetTop,
      educationsOffsetTop,
      projectsOffsetTop,
    ],
    [100, -200, 200, 100]
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, rgba(91, 69, 231, 0.215), transparent 80%), radial-gradient(circle at ${
          mousePosition.x
        }px ${
          mousePosition.y
        }px, rgba(53, 117, 219, 0.2), transparent 80%), radial-gradient(circle at ${
          window.innerWidth - mousePosition.x
        }px ${
          window.innerHeight - mousePosition.y
        }px, rgba(114, 53, 219, 0.2), transparent 80%)`,
      }}
    >
      <div className="w-full sticky h-dvh top-1 flex justify-center items-center cursor-default">
        <motion.div
          style={{
            filter: `blur(${blurVal}px)`,
            opacity,
            scale,
          }}
        >
          <h1 className="text-8xl font-serif text-center">
            <span className="text-4xl font-sans">Hi, I&apos;m</span>
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
                className="mx-0 hover:!mx-5 ease-in-out duration-300 transition-all"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>
      <div className="w-full">
        <div className="container mx-auto px-4 text-4xl lg:text-9xl text-center">
          <span>welcome to</span>
          <br />
          <span className="font-bold">my world</span>
        </div>
      </div>
      <div className="sticky top-0 h-dvh w-full flex flex-col justify-center overflow-x-hidden">
        <motion.div
          style={{
            marginTop: picMarginTop,
            filter: `blur(${isMobile ? picBlurMobile : picBlurVal}px)`,
            opacity: (isMobile ? picOpacityMobile : picOpacity) || 0,
            x,
          }}
          className="relative w-50 h-full"
        >
          <Image
            src={ProfilePic.src}
            fill
            alt="Farizio Kautsar Heruzy"
            // objectFit="cover"
            className="!grayscale overflow-visible object-cover md:object-contain"
          />
          {/* <div
            className="z-50 w-full h-full"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${
                mousePosition.y
              }px, rgba(53, 117, 219, 0.2), transparent 80%), radial-gradient(circle at ${
                window.innerWidth - mousePosition.x
              }px ${
                window.innerHeight - mousePosition.y
              }px, rgba(114, 53, 219, 0.2), transparent 80%)`,
              WebkitMaskImage: `url(${ProfilePic.src})`, // Use the image as the mask
              WebkitMaskSize: "contain", // Ensure the mask covers the entire div
              WebkitMaskRepeat: "no-repeat", // Prevent the mask from repeating
              WebkitMaskPosition: "center", // Center the mask
              zIndex: 1000,
            }}
          /> */}
        </motion.div>
      </div>
      <div className="container mx-auto grid grid-cols-3">
        <div className="col-span-3 md:col-span-2 h-dvh">
          <p className="text-2xl mb-3">*pause*</p>
          <p className="text-4xl mb-8">Yep, that&apos;s me</p>
          <p className="text-4xl lg:text-8xl">
            People usually describe me as <DescribeMe />
          </p>
        </div>
        <div />
        <div className="col-span-0 md:col-span-2" />
        <div
          className="min-h-dvh md:text-right z-20 col-span-3 md:col-span-1"
          ref={jobExperiencesRef}
        >
          <p className="text-4xl mb-3 font-serif">Where Have I Left My Mark?</p>
          {jobExperiences.map((jobExperience, jeIdx) => (
            <JobCard jobExperience={jobExperience} key={jeIdx} />
          ))}
        </div>
        <div
          className="min-h-dvh w-full text-left col-span-3 md:col-span-1"
          ref={educationsRef}
        >
          <p className="text-4xl mb-3 font-serif">And What Brought Me Here?</p>
          {educations.map((education, eIdx) => (
            <motion.div
              key={eIdx}
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="pointer-events-auto"
            >
              <EducationCard key={eIdx} education={education} />
            </motion.div>
          ))}
        </div>
        <div className="col-span-2" />
        <div
          className="min-h-dvh text-left w-full z-20 col-span-3"
          ref={projectsRef}
        >
          <p className="text-4xl mb-8 font-serif text-center">
            Check out my works!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .sort((p1, p2) => p1.yearFrom - p2.yearFrom)
              .map((project, pIdx) => (
                <ProjectCard project={project} key={pIdx} />
              ))}
          </div>
        </div>
        <div className="h-dvh z-20 col-span-3 flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-4">Interested in working together?</h1>
          <span className="font-serif text-4xl mb-8">
            Feel free to get in touch!
          </span>
          <div className="grid grid-cols-2 gap-8">
            <ContactLink
              href="https://github.com/FarizioKautsar"
              label="GitHub"
              icon={FaGithub}
            />
            <ContactLink
              href="mailto:kheruzy@gmail.com"
              label="Email Me"
              icon={FaEnvelope}
            />
            <ContactLink
              href="https://wa.me/6281282100255"
              label="WhatsApp Me"
              icon={FaWhatsapp}
            />
            <ContactLink
              href="https://docs.google.com/document/d/e/2PACX-1vSfkqU1matmxM9ONsbsjY_MRImRs9EAsiKDTXHogWORPbSk7G6hDwt7XazlA7TXPDrDqUu_bq8Y_jBT/pub"
              label="View My CV"
              icon={IoDocumentAttachOutline}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
