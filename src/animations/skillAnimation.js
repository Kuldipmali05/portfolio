import { gsap } from "@/libs/gsap";

export const skillAnimation = (
  section,
  headingTag,
  heading,
  description,
  leftRow,
  rightRow,
  leftTween,
  rightTween,
) => {
  // Heading Animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
      defaults: {
        ease: "power3.out",
      },
    })
    .from(headingTag, {
      y: 20,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      heading,
      {
        y: 50,
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
    );

  // Marquee Animation
  leftTween.current = gsap.to(leftRow, {
    x: "-50%",
    duration: 20,
    ease: "none",
    repeat: -1,
  });

  rightTween.current = gsap.fromTo(
    rightRow,
    {
      x: "-50%",
    },
    {
      x: "0%",
      duration: 20,
      ease: "none",
      repeat: -1,
    },
  );
};
