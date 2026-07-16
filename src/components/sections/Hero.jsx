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
      className="relative w-full h-screen overflow-hidden px-6 sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="hero-glow absolute left-1/2 top-1/2 h-72 w-72 sm:h-96 sm:w-96 lg:h-152 lg:w-152 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary) opacity-20 blur-[180px]" />

      <div className="heroContainer relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-10 md:px-16 lg:px-20">
          <p className="hero-subtitle text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-(--primary)">
            KULDIP MALI • FULL-STACK DEVELOPER
          </p>

          <h1 className="hero-title hero-text w-full text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl sm:leading-none md:leading-none lg:leading-18">
            Turning ideas into scalable applications & user{" "}
            <span className="text-(--primary) underline decoration-1 underline-offset-8 sm:underline-offset-15">
              <i>experiences</i>
            </span>
          </h1>

          <p className="hero-description w-full max-w-4xl text-center text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-zinc-400">
            Full-stack developer passionate about building modern, interactive,
            and AI-powered web experiences with clean code, thoughtful design,
            and exceptional user experiences.
          </p>

          <div className="hero-buttons mt-2 flex w-full flex-col sm:w-auto sm:flex-row gap-4 font-(--body) text-sm">
            <button className="w-full sm:w-auto rounded-full bg-(--primary) px-8 py-3 font-medium text-black transition-all duration-300 hover:scale-105">
              View Work
            </button>

            <button className="w-full sm:w-auto rounded-full border border-zinc-700 px-8 py-3 transition-all duration-300 hover:border-(--primary) hover:text-(--primary)">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-6 sm:bottom-8 left-1/2 z-20 -translate-x-1/2">
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
