"use client";

import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useRef } from "react";
import { useGSAP } from "@/libs/gsap";
import { contactAnimation } from "@/animations/contactAnimation";

const Contact = () => {
  const sectionRef = useRef(null);

  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const buttonRef = useRef(null);

  const cardsRef = useRef([]);
  cardsRef.current = [];

  const bottomTextRef = useRef(null);

  useGSAP(() => {
    contactAnimation(
      sectionRef.current,
      tagRef.current,
      headingRef.current,
      descriptionRef.current,
      buttonRef.current,
      cardsRef.current,
      bottomTextRef.current,
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary) opacity-10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        {/* Heading */}
        <p
          ref={tagRef}
          className="text-xs uppercase tracking-[0.45em] text-(--primary)"
        >
          LET'S CONNECT
        </p>

        <h2
          ref={headingRef}
          className="mt-6 text-[clamp(3rem,7vw,6rem)] font-semibold leading-none font-heading"
        >
          Let's Build
          <br />
          Something Amazing.
        </h2>

        <p
          ref={descriptionRef}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          I'm always interested in discussing new opportunities, freelance
          projects, collaborations, or simply talking about technology.
        </p>

        {/* CTA Button */}
        <div ref={buttonRef} className="mt-12">
          <Link
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            href="mailto:kuldipmali05@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-(--primary) px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Say Hello
            <FiArrowUpRight size={18} />
          </Link>
        </div>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Link
            href="mailto:kuldipmali05@gmail.com"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-(--primary)"
          >
            <FiMail className="mx-auto text-3xl text-(--primary)" />

            <h3 className="mt-5 text-xl font-semibold">Email</h3>

            <p className="mt-3 text-sm text-zinc-400">kuldipmali05@gmail.com</p>
          </Link>

          <Link
            href="https://github.com/Kuldipmali05"
            target="_blank"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-(--primary)"
          >
            <FiGithub className="mx-auto text-3xl text-(--primary)" />

            <h3 className="mt-5 text-xl font-semibold">GitHub</h3>

            <p className="mt-3 text-sm text-zinc-400">View my repositories</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kuldip-mali-8a12a0246/"
            target="_blank"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-(--primary)"
          >
            <FiLinkedin className="mx-auto text-3xl text-(--primary)" />

            <h3 className="mt-5 text-xl font-semibold">LinkedIn</h3>

            <p className="mt-3 text-sm text-zinc-400">
              Let's connect professionally
            </p>
          </Link>
        </div>

        {/* Bottom Text */}
        <p
          ref={bottomTextRef}
          className="mt-16 text-sm uppercase tracking-[0.35em] text-zinc-500"
        >
          AVAILABLE FOR FREELANCE • OPEN TO FULL-TIME OPPORTUNITIES
        </p>
      </div>
    </section>
  );
};

export default Contact;
