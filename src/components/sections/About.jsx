import { aboutAnimation } from "@/animations/aboutAnimation";
import React, { useRef } from "react";
import { FaCode, FaServer, FaLayerGroup, FaBrain } from "react-icons/fa6";
import {useGSAP} from "@/libs/gsap"

const About = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-3xl text-(--primary)" />,
      description:
        "I transform ideas into interactive digital experiences using React, Next.js, Tailwind CSS, and JavaScript, building fast, responsive, and accessible user interfaces.",
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-3xl text-(--primary)" />,
      description:
        "I build secure and scalable backend systems with Node.js, Express, MongoDB, and REST APIs, focusing on authentication, database design, and performance.",
    },
    {
      title: "Full Stack Development",
      icon: <FaLayerGroup className="text-3xl text-(--primary)" />,
      description:
        "I develop complete web applications by combining intuitive frontend experiences with robust backend systems, ensuring scalability, maintainability, and seamless performance.",
    },
    {
      title: "AI Development",
      icon: <FaBrain className="text-3xl text-(--primary)" />,
      description:
        "I integrate AI into web applications using LangChain, LLM APIs, and vector databases to build intelligent, automation-driven, and user-focused solutions.",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const leftRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
  aboutAnimation(
    sectionRef.current,
    headingRef.current,
    nameRef.current,
    taglineRef.current,
    leftRef.current,
    timelineRef.current,
    cardsRef.current
  );
}, []);

  return (
    <section 
    ref={sectionRef}
    id="about" className="bg-background py-32 text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-24">
          <p
          ref={headingRef} className="about-t text-xs uppercase tracking-[0.3rem] text-(--primary)">
            ABOUT ME
          </p>

          <h2 ref={nameRef} className="mt-4 text-5xl font-bold uppercase tracking-wide md:text-7xl lg:text-8xl">
            Kuldip Mali
          </h2>

          <h3 ref={taglineRef} className="mt-6 max-w-4xl font-heading text-3xl leading-tight md:text-5xl">
            Building software that solves
            <span className="text-(--primary)"> real problems.</span>
          </h3>
        </div>

        {/* About */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div ref={leftRef} className="space-y-8">
            <p className="text-lg leading-9 text-gray-400">
              I'm{" "}
              <span className="font-semibold uppercase text-(--primary)">
                Kuldip Mali
              </span>
              , a Full Stack Developer passionate about building scalable web
              applications and AI-powered products. I enjoy turning complex
              ideas into clean, intuitive, and user-friendly digital experiences
              using the MERN stack, Next.js, and modern web technologies.
            </p>

            <p className="text-lg leading-9 text-gray-400">
              Currently, I'm expanding my expertise in AI engineering, backend
              architecture, cloud technologies, and scalable software design by
              building real-world projects that combine software engineering
              with artificial intelligence.
            </p>
          </div>

          {/* Right */}
          <div ref={timelineRef} className="space-y-10">
            <div className="border-l-2 border-(--primary) pl-6">
              <p className="text-sm uppercase tracking-[0.2rem] text-(--primary)">
                2022 — 2026
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Bachelor of Technology
              </h3>

              <p className="mt-2 text-gray-400">
                R. C. Patel Institute of Technology, Shirpur
              </p>

              <p className="text-gray-500">
                Computer Science & Engineering (Data Science)
              </p>
            </div>

            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-sm uppercase tracking-[0.2rem] text-(--primary)">
                CURRENT FOCUS
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Full Stack & AI Development
              </h3>

              <p className="mt-2 leading-8 text-gray-400">
                Building production-ready applications using React, Next.js,
                Node.js, Express, MongoDB, LangChain, and AI APIs while
                continuously learning scalable software architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-28">
          <p className="mb-10 text-xs uppercase tracking-[0.3rem] text-(--primary)">
            WHAT I DO
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service,idx) => (
              <div
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-8 transition-all duration-300 hover:border-(--primary)"
              >
                <div className="mb-6 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>

                <p className="leading-8 text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
