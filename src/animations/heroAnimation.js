import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHeroContent = (refs) => {
  const tl = gsap.timeline();

  // Animate text content from left
  tl.fromTo(
    refs.textRef?.current,
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    0
  );

  // Animate image from right with scale
  tl.fromTo(
    refs.imageRef?.current,
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
    0.2
  );

  // Animate button with slight delay
  tl.fromTo(
    refs.buttonRef?.current,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    0.4
  );

  return tl;
};

export const animateStaggerCards = (containerRef, duration = 0.6) => {
  if (!containerRef?.current) return;

  const cards = containerRef.current.querySelectorAll("[data-card]");
  if (cards.length === 0) return;

  gsap.fromTo(
    cards,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
};

export const animateParallax = (ref, distance = 30) => {
  if (!ref?.current) return;

  gsap.to(ref.current, {
    y: -distance,
    scrollTrigger: {
      trigger: ref.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
  });
};
