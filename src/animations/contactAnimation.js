import { gsap } from "@/libs/gsap";

export const contactAnimation = (
  section,
  tag,
  heading,
  description,
  button,
  cards,
  bottomText,
) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
    },
  });

  tl.from(tag, {
    y: 20,
    opacity: 0,
    duration: 0.5,
  })
    .from(
      heading,
      {
        y: 60,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.2",
    )
    .from(
      description,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4",
    )
    .from(
      button,
      {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
      },
      "-=0.3",
    )
    .from(
      cards,
      {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      },
      "-=0.3",
    )
    .from(
      bottomText,
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.4",
    );
};
