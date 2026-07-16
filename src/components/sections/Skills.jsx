"use client";

import Image from "next/image";
import { useGSAP } from "@/libs/gsap";
import { useRef } from "react";
import { skillAnimation } from "@/animations/skillAnimation";

export default function Skills() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const leftTween = useRef(null);
  const rightTween = useRef(null);

  const leftRowRef = useRef(null);
  const rightRowRef = useRef(null);

  const row1 = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Node.js", icon: "/icons/node.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "Rest API", icon: "/icons/api.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
  ];

  const row2 = [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Redux", icon: "/icons/redux.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },
    { name: "Framer", icon: "/icons/framer.svg" },
    { name: "LangChain", icon: "/icons/langchain.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
    { name: "Express", icon: "/icons/expressjs-dark.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "GSAP", icon: "/icons/gsap.svg" },
  ];

  useGSAP(() => {
    skillAnimation(
      sectionRef.current,
      tagRef.current,
      headingRef.current,
      descriptionRef.current,
      leftRowRef.current,
      rightRowRef.current,
      leftTween,
      rightTween,
    );
  }, []);

  const pauseLeft = () => leftTween.current.pause();
  const resumeLeft = () => leftTween.current.resume();

  const pauseRight = () => rightTween.current.pause();
  const resumeRight = () => rightTween.current.resume();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-15 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-6 md:px-8 lg:mb-20 text-center">
        <p
          ref={tagRef}
          className="text-(--primary) text-[10px] sm:text-xs uppercase tracking-[0.25rem] sm:tracking-[0.35rem]"
        >
          MY STACK
        </p>

        <h2
          ref={headingRef}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading"
        >
          Technologies I Work With
        </h2>

        <p  ref={descriptionRef} className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
          I build scalable web applications using modern frontend, backend,
          database, and AI technologies.
        </p>
      </div>

      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 sm:w-20 md:w-28 lg:w-40 bg-linear-to-r from-background via-background to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 sm:w-20 md:w-28 lg:w-40 bg-linear-to-l from-background via-background to-transparent" />

        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Row 1 */}
          <div
            onMouseEnter={pauseLeft}
            onMouseLeave={resumeLeft}
            className="overflow-hidden"
          >
            <div
              ref={leftRowRef}
              className="marquee-left flex w-max gap-3 sm:gap-4 md:gap-5"
            >
              {[...row1, ...row1].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex h-16 sm:h-20 md:h-24 w-44 sm:w-52 md:w-60 lg:w-64 shrink-0 items-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 backdrop-blur-sm transition-all duration-300"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={54}
                    height={54}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                  />

                  <span className="text-sm sm:text-lg md:text-xl font-semibold whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div
            onMouseEnter={pauseRight}
            onMouseLeave={resumeRight}
            className="overflow-hidden"
          >
            <div
              ref={rightRowRef}
              className="marquee-right flex w-max gap-3 sm:gap-4 md:gap-5"
            >
              {[...row2, ...row2].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex h-16 sm:h-20 md:h-24 w-44 sm:w-52 md:w-60 lg:w-64 shrink-0 items-center gap-3 sm:gap-4 md:gap-5 rounded-full px-4 sm:px-6 md:px-8 backdrop-blur-sm transition-all duration-300"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={54}
                    height={54}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                  />

                  <span className="text-sm sm:text-lg md:text-xl font-semibold whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
