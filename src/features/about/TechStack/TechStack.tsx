"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCard } from "@/components/ui/TechCard";
import { Parallax } from "@/components/ui/Parallax";
import { TECH_STACK } from "../techStack.data";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".tech-heading");
      const cards = section.querySelectorAll(".tech-card");
      const glow = section.querySelector(".tech-glow");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        },
      });

      tl.fromTo(
        heading,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.8,
        },
      );

      tl.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 1.96,
          rotateX: 30,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          ease: "back.out(1.4)",
          duration: 0.8,
          stagger: 0.08,
        },
        "-=0.4",
      );

      if (glow) {
        gsap.to(glow, {
          y: -40,
          scale: 1.15,
          opacity: 0.14,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center gap-12"
    >
      <Parallax
        speed={35}
        className="tech-glow pointer-events-none absolute left-1/2 top-0"
      >
        <div
          className="h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-gradient opacity-[0.08] blur-3xl"
          aria-hidden="true"
        />
      </Parallax>

      <div className="tech-heading">
        <SectionHeading
          title="Tech Stack"
          description="Tools and technologies I use to design, build and ship modern front-end products."
          align="center"
        />
      </div>

      <div
        className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        style={{ perspective: "1000px" }}
      >
        {TECH_STACK.map((technology) => (
          <div key={technology.id} className="tech-card">
            <TechCard technology={technology} />
          </div>
        ))}
      </div>
    </div>
  );
}
