import { gsap, SplitText } from "@/libs/gsap";

export const aboutAnimation = (
  section,
  heading,
  name,
  tagline,
  leftContent,
  timeline,
  cards,
) => {
  const splitName = new SplitText(name, {
    type: "chars",
  });
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
    },
  });

  tl.from(heading, {
    y: 30,
    opacity: 0,
    duration: 0.6,
  })
    .from(
      splitName.chars,
      {
        yPercent: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.03,
        duration: 0.8,
      },
      "-=0.2",
    )
    .from(
      tagline,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4",
    )
    .from(
      leftContent,
      {
        x: -80,
        opacity: 0,
        duration: 1,
      },
      "-=0.3",
    )
    .from(
      [...timeline.children],
      {
        x: 80,
        opacity: 0,
        stagger: 0.25,
        duration: 0.8,
      },
      "-=0.7",
    )
    .from(
      cards,
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
      },
      "-=0.4",
    );
};
