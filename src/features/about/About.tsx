"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax } from "@/components/ui/Parallax";
import { SITE } from "@/constants/site";

import { TechStack } from "./TechStack";
import { ShowcasePreview } from "./ShowcasePreview";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".about-heading");
      const illustration = section.querySelector(".about-illustration");
      const illustrationImage = section.querySelector(
        ".about-illustration-image",
      );
      const techStack = section.querySelector(".about-tech-stack");
      const showcase = section.querySelector(".about-showcase");

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 40,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 60%",
            scrub: 2.5,
          },
        },
      );

      gsap.fromTo(
        heading,
        {
          y: 45,
          opacity: 0,
          scale: 0.96,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            end: "top 62%",
            scrub: 2,
          },
        },
      );

      gsap.fromTo(
        illustration,
        {
          y: 70,
          x: 25,
          opacity: 0,
          scale: 0.94,
          rotate: 2,
          filter: "blur(6px)",
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: illustration,
            start: "top 92%",
            end: "top 60%",
            scrub: 2.2,
          },
        },
      );

      gsap.to(illustration, {
        y: -45,
        x: -10,
        rotate: -1,
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: illustration,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 3,
        },
      });

      gsap.to(illustrationImage, {
        y: -30,
        scale: 1.04,
        rotate: 1,
        ease: "none",
        scrollTrigger: {
          trigger: illustration,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });

      gsap.fromTo(
        techStack,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: techStack,
            start: "top 90%",
            end: "top 60%",
            scrub: 2.2,
          },
        },
      );

      gsap.to(techStack, {
        y: -35,
        x: 8,
        rotate: -0.5,
        scale: 1.01,
        ease: "none",
        scrollTrigger: {
          trigger: techStack,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 3,
        },
      });

      gsap.fromTo(
        showcase,
        {
          y: 90,
          opacity: 0,
          scale: 0.94,
          rotateX: 4,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: showcase,
            start: "top 90%",
            end: "top 60%",
            scrub: 2.5,
          },
        },
      );

      gsap.to(showcase, {
        y: -45,
        scale: 1.015,
        rotateY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: showcase,
          start: "top 75%",
          end: "bottom 20%",
          scrub: 3.5,
        },
      });

      gsap.to(illustration, {
        yPercent: 1.2,
        rotate: 0.5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="container-page flex flex-col gap-28 py-24 lg:gap-36 lg:py-32"
    >
      <div className="flex flex-col items-center gap-16">
        <div className="about-heading">
          <SectionHeading
            title="About"
            description={SITE.aboutText}
            align="center"
          />
        </div>

        <Parallax
          speed={80}
          rotate={1}
          scale={1.02}
          mouse={60}
          className="about-illustration relative h-[280px] w-full max-w-2xl sm:h-[360px]"
        >
          <div className="absolute inset-[-15%] -z-10">
            <div
              className="h-full w-full rounded-full bg-brand-gradient opacity-20 blur-3xl"
              aria-hidden="true"
            />
          </div>

          <Image
            src="/images/about-illustration.svg"
            alt=""
            fill
            className="about-illustration-image object-contain"
          />
        </Parallax>
      </div>

      <div className="about-tech-stack">
        <TechStack />
      </div>

      <div className="about-showcase">
        <ShowcasePreview />
      </div>
    </section>
  );
}
