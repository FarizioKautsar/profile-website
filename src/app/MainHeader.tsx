"use client";

import AnimateSlide from "@/components/animations/SlideUp";

export default function MainHeader() {
  return (
    <div className="w-full h-screen grid grid-cols-3">
      <div></div>
      <div className="col-span-2 h-screen flex flex-col justify-center">
        <h2 className="text-2xl mb-4">
          <AnimateSlide>Hello there, I&apos;m</AnimateSlide>
          <AnimateSlide delay={300}>
            <div className="text-5xl mt-2 font-bold">Farizio</div>
          </AnimateSlide>
        </h2>
        <AnimateSlide direction="left" delay={600}>
          <p>
            A graduate of Information System of Universitas Indonesia with high
            passion and excellence in graphic design, web design, UI/UX, and
            full-stack development. Project finished includes building a website
            from the ground up with Wordpress, providing a prototype for a
            mobile app with Figma, redesigning a company profile website with
            ReactJS and NodeJS, finishing a student attendance application with
            React Native and Firebase, and building a learning management system
            web application with ReactJS and NodeJS. This year, Farizio is a
            student of Master of Information Technology of Monash University
            Australia.
          </p>
        </AnimateSlide>
      </div>
    </div>
  );
}
