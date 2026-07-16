import { gsap } from "@/libs/gsap";

export const projectAnimation = (
  section,
  headingTag,
  heading,
  description,
  cards
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

  tl.from(headingTag, {
    y: 25,
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
      "-=0.2"
    )
    .from(
      description,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      cards,
      {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.2"
    );

  gsap.from(cards.map(card => card.querySelector("img")), {
    scale: 1.15,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
    },
  });
};