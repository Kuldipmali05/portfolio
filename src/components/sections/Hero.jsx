"use client";
import { heroAnimation } from "@/animations/heroAnimation";
import { useGSAP } from "@/libs/gsap";
import React, { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      heroAnimation(heroRef);
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden px-10  "
    >
      {/* Background Glow */}
      <div className="hero-glow absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary) opacity-15 blur-[220px]" />

      <div className="heroContainer relative z-10 flex h-full w-full items-center">
        {/* Left */}
        <div className="flex h-full w-full flex-col justify-center items-center gap-8 px-20">
          <p className="hero-subtitle text-xs tracking-[0.35em] text-(--primary) ">
            KULDIP MALI • FULL-STACK DEVELOPER
          </p>

          <h1 className="hero-title w-full hero-text text-8xl leading-none text-center">
            Designing experiences where code meets{" "}
            <span className="text-(--primary)  underline decoration-1 underline-offset-15">
              <i>creativity.</i>
            </span>
          </h1>

          <p className="hero-description w-full text-center text-xl leading-8 text-zinc-400">
            Full-stack developer passionate about building modern, interactive,
            and AI-powered web experiences <br /> with clean code, thoughtful design,
            and exceptional user experiences.
          </p>

          <div className="hero-buttons mt-2 flex gap-4 font-(--body) text-sm">
            <button className="rounded-full bg-(--primary) px-8 py-3 font-medium text-black transition-all duration-300 hover:scale-105">
              View Work
            </button>

            <button className=" rounded-full border border-zinc-700 px-8 py-3 transition-all duration-300 hover:border-(--primary) hover:text-(--primary)">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right */}
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-6 justify-center rounded-full border border-(--primary)">
            <div className="scroll-dot mt-2 h-2.5 w-1.5 animate-bounce rounded-full bg-(--primary)" />
          </div>

          <span className="font-(--body) text-[10px] uppercase tracking-[0.35em] text-zinc-400">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
