"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
import InquiryForm from "@/components/InquiryForm";
import ProfileSlideshow from "@/components/ProfileSlideshow";
import CTAToast from "@/components/CTAToast";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
  // const [educationsOffsetTop, setEducationsOffsetTop] = useState<number>(0);
  const [jobExperiencesOffsetTop, setJobExperiencesOffsetTop] =
    useState<number>(0);

  const [showSlideshow, setShowSlideshow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (jobExperiencesRef.current) {
        const jobExperiencesTop =
          jobExperiencesRef.current.getBoundingClientRect().top;
        setShowSlideshow(jobExperiencesTop > 0); // Hide when it reaches the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const calculateOffset = () => {
      if (projectsRef.current) {
        setProjectsOffsetTop(projectsRef.current.offsetTop);
      }
      // if (educationsRef.current) {
      //   setEducationsOffsetTop(educationsRef.current.offsetTop);
      // }
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

  // const x = useTransform(
  //   scrollY,
  //   [
  //     window.innerHeight * 2,
  //     jobExperiencesOffsetTop,
  //     educationsOffsetTop,
  //     projectsOffsetTop,
  //   ],
  //   [100, -200, 200, 100]
  // );

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

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // // Update the mouse position state on mouse move
  // const handleMouseMove = (e: MouseEvent) => {
  //   setMousePosition({ x: e.pageX, y: e.pageY });
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

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

  const profilePicRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  const profilePicVisible = useInView(profilePicRef, { amount: "all" });
  const contactMeVisible = useInView(contactMeRef, { amount: "some" });

  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    setShowCta(profilePicVisible && !contactMeVisible);
  }, [profilePicVisible, contactMeVisible]);

  function handleWorkTogether() {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleCloseCta() {
    setShowCta(false);
  }

  const parallax1 = useTransform(scrollY, [0, 4000], [0, 1500]);
  const parallax2 = useTransform(scrollY, [0, 4000], [0, 1300]);
  const parallax3 = useTransform(scrollY, [0, 4000], [0, 1000]);
  const parallax4 = useTransform(scrollY, [0, 4000], [0, 800]);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const shownProjects = isMobile ? showAllProjects ? projects : projects.slice(0, 3) : projects;

  return (
    <div>
      <div className="max-w-screen overflow-x-hidden hidden md:block">
        <motion.div
          className="absolute -z-50 top-[2000px] right-96 size-96 opacity-15"
          style={{ y: parallax1 }}
        >
          <Image
            src="/decoratives/lines_bright.svg"
            alt="Decorative Lines Bright"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          className="absolute -z-50 top-72 left-96 size-[960px]"
          style={{ y: parallax2 }}
        >
          <Image
            src="/decoratives/lines.svg"
            alt="Decorative Lines"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          className="absolute -z-50 top-96 right-96 size-96 opacity-15"
          style={{ y: parallax3 }}
        >
          <Image
            src="/decoratives/polka_bright.svg"
            alt="Decorative Polka Bright"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          className="absolute -z-50 top-[3000px] left-96 size-96"
          style={{ y: parallax4 }}
        >
          <Image
            src="/decoratives/polka.svg"
            alt="Decorative Polka"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <CTAToast
        show={showCta}
        onClose={handleCloseCta}
        onClickAction={handleWorkTogether}
      />
      <div className="w-full sticky h-dvh top-1 flex justify-center items-center cursor-default overflow-x-hidden">
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
                className="mx-0 hover:!mx-5 ease-in-out duration-300 transition-all text-yellow-400"
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
          <span className="font-bold text-yellow-400">my world</span>
        </div>
      </div>
      <div
        className="sticky top-0 h-dvh w-full flex flex-col justify-center overflow-x-hidden"
        ref={profilePicRef}
      >
        {showSlideshow && (
          <motion.div
            style={{
              marginTop: picMarginTop,
              filter: `blur(${isMobile ? picBlurMobile : picBlurVal}px)`,
              opacity: picOpacity || 0,
              // x,
            }}
            className="relative w-50 h-full"
          >
            {/* <Image
            src={ProfilePic.src}
            fill
            alt="Farizio Kautsar Heruzy"
            className="!grayscale overflow-visible object-cover md:object-contain"
          /> */}
            <ProfileSlideshow />
          </motion.div>
        )}
      </div>
      <div className="container mx-auto grid grid-cols-3">
        <section className="col-span-3 md:col-span-2 h-dvh">
          <p className="text-2xl mb-3">*pause*</p>
          <p className="text-4xl mb-8">Yep, that&apos;s me</p>
          <p className="text-4xl lg:text-8xl">
            People usually describe me as <DescribeMe />
          </p>
        </section>
      </div>
      <div className="bg-neutral-800 z-10 sticky top-0 w-full">
        <div className="">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center items-start text-5xl md:text-8xl font-serif bg-no-repeat bg-center bg-cover bg-fixed -z-50 text-stroke-1 text-stroke-white text-transparent opacity-15">
              {Array(isMobile ? 40 : 20)
                .fill("EXPERIENCES")
                .map((text, index) => (
                  <div key={index}>{text}</div>
                ))}
            </div>
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed -z-50"
              style={{
                backgroundImage: `url('/decoratives/lines.svg')`,
              }}
            />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-12">
              <section ref={jobExperiencesRef}>
                <div className="w-1/4 md:w-1/6 lg:w-1/8 h-1 bg-yellow-400 mb-8" />
                <p className="text-4xl mb-3 font-serif">
                  Where Have I Left My Mark?
                </p>
                {jobExperiences.map((jobExperience, jeIdx) => (
                  <JobCard
                    jobExperience={jobExperience}
                    key={jeIdx}
                    isLast={jobExperiences.length === jeIdx + 1}
                  />
                ))}
              </section>
              <section ref={educationsRef}>
                <div className="w-1/4 md:w-1/6 lg:w-1/8 h-1 bg-yellow-400 mb-8" />
                <p className="text-4xl mb-3 font-serif">
                  And What Brought Me Here?
                </p>
                {educations.map((education, eIdx) => (
                  <motion.div
                    key={eIdx}
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="pointer-events-auto"
                  >
                    <EducationCard
                      key={eIdx}
                      education={education}
                      isLast={educations.length === eIdx + 1}
                    />
                  </motion.div>
                ))}
              </section>
            </div>
          </div>
          <div className="relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-end text-6xl md:text-8xl font-serif bg-no-repeat bg-center bg-cover bg-fixed -z-50 text-stroke-1 text-stroke-white text-transparent opacity-15">
              {Array(isMobile && showAllProjects ? 50 : 20)
                .fill("PROJECTS")
                .map((text, index) => (
                  <div key={index}>{text}</div>
                ))}
            </div>
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed -z-50"
              style={{
                backgroundImage: `url('/decoratives/lines_rotated.svg')`,
              }}
            />
            <section
              className="min-h-dvh text-left w-full z-20 container mx-auto py-12"
              ref={projectsRef}
            >
              <div className="w-1/4 md:w-1/6 lg:w-1/8 h-1 bg-yellow-400 mb-8" />

              <p className="text-4xl mb-8 font-serif ">Check out my works!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shownProjects
                  .sort((p1, p2) => p2.yearFrom - p1.yearFrom)
                  .map((project, pIdx) => (
                    <ProjectCard project={project} key={pIdx} />
                  ))}
              </div>
              <div className="md:hidden">
                <Button className="mt-8 w-full" onClick={() => setShowAllProjects((prev) => !prev)}>
                  {showAllProjects ? "Show Less" : "Show More"}
                </Button>
              </div>
            </section>
          </div>
          <section
            className="min-h-dvh z-10 col-span-3 flex flex-col items-center max-w-3xl justify-center py-10 container mx-auto"
            ref={contactMeRef}
          >
            <h1 className="text-2xl mb-8 text-center">
              Interested in working together?
            </h1>
            <div>
              <p className="font-serif text-3xl mb-8 w-full text-center">
                Feel free to get in touch!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            <div className="mt-8">
              <p className="font-serif text-3xl mb-6 text-center w-full">
                ...or tell me about your next big idea!
              </p>
              <InquiryForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
