"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Parallax } from "@/components/ui/Parallax";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      // =========================
      // Elements
      // =========================

      const title = hero.querySelector(".hero-title");
      const role = hero.querySelector(".hero-role");
      const description = hero.querySelector(".hero-description");
      const button = hero.querySelector(".hero-button");

      const visual = hero.querySelector(".hero-visual");

      const grid = hero.querySelector(".hero-grid");

      const outerGlow = hero.querySelector(".hero-glow-outer");
      const innerGlow = hero.querySelector(".hero-glow-inner");

      // =========================
      // Initial Load Animation
      // =========================

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .fromTo(
          title,
          {
            y: 70,
            opacity: 0,
            filter: "blur(14px)",
            rotateX: 15,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            rotateX: 0,
            duration: 1,
          },
        )
        .fromTo(
          role,
          {
            y: 45,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
          },
          "-=0.65",
        )
        .fromTo(
          description,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4",
        )
        .fromTo(
          button,
          {
            y: 30,
            opacity: 0,
            scale: 0.88,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
          },
          "-=0.35",
        )
        .fromTo(
          visual,
          {
            opacity: 0,
            scale: 0.7,
            x: 100,
            rotate: 8,
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.3,
            ease: "power4.out",
          },
          "-=1",
        );

      // =========================
      // Main Scroll Timeline
      // =========================

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      // =========================
      // Title
      // =========================

      scrollTl.to(
        title,
        {
          y: -180,
          x: -45,
          rotateX: 12,
          scale: 0.88,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // =========================
      // Role
      // =========================

      scrollTl.to(
        role,
        {
          y: -145,
          x: -30,
          scale: 0.92,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // =========================
      // Description
      // =========================

      scrollTl.to(
        description,
        {
          y: -105,
          x: -15,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // =========================
      // Button
      // =========================

      scrollTl.to(
        button,
        {
          y: -75,
          scale: 0.78,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // =========================
      // Profile Visual
      // =========================

      scrollTl.to(
        visual,
        {
          y: -260,
          x: 130,
          scale: 0.76,
          rotate: 10,
          opacity: 0.12,
          filter: "blur(3px)",
          ease: "none",
        },
        0,
      );

      // =========================
      // Grid Parallax
      // =========================

      scrollTl.to(
        grid,
        {
          y: 180,
          x: -40,
          scale: 1.3,
          rotate: 3,
          opacity: 0.2,
          ease: "none",
        },
        0,
      );

      // =========================
      // Outer Glow
      // =========================

      scrollTl.to(
        outerGlow,
        {
          y: -180,
          x: 90,
          scale: 1.5,
          rotate: -15,
          opacity: 0.12,
          ease: "none",
        },
        0,
      );

      // =========================
      // Inner Glow
      // =========================

      scrollTl.to(
        innerGlow,
        {
          y: 120,
          x: -70,
          scale: 1.8,
          rotate: 20,
          opacity: 0.08,
          ease: "none",
        },
        0,
      );

      // =========================
      // Main Hero Depth
      // =========================

      scrollTl.to(
        hero,
        {
          scale: 0.92,
          opacity: 0.35,
          rotateX: 2,
          transformPerspective: 1200,
          ease: "none",
        },
        0,
      );

      // =========================
      // Floating Image
      // =========================

      gsap.to(visual, {
        y: -12,
        rotate: 1.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================
      // Glow Floating Animation
      // =========================

      gsap.to(outerGlow, {
        x: 20,
        y: -15,
        scale: 1.08,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(innerGlow, {
        x: -15,
        y: 20,
        scale: 0.94,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================
      // Refresh ScrollTrigger
      // =========================

      ScrollTrigger.refresh();
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden"
    >
      {/* =========================
          Background Parallax
      ========================= */}

      <Parallax
        speed={700}
        rotate={1}
        scale={1.04}
        mouse={120}
        className="pointer-events-none absolute inset-0 opacity-50"
      >
        <div
          className="hero-grid absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(174, 12, 167, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(90, 60, 255, 0.18) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(circle at 75% 30%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at 75% 30%, black, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </Parallax>

      {/* =========================
          Main Content
      ========================= */}

      <div className="container-page relative grid min-h-[85vh] grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2 lg:gap-12 lg:py-32">
        {/* =========================
            Left Content
        ========================= */}

        <div className="flex max-w-2xl flex-col gap-10 text-center lg:text-left">
          <div className="flex flex-col gap-1.5">
            <h1 className="hero-title text-h1 text-neutral-text lg:text-h2">
              Hi, I&rsquo;m {SITE.name}
            </h1>

            <GradientText
              as="p"
              className="hero-role text-h2 font-semibold lg:text-h3"
            >
              {SITE.role}
            </GradientText>
          </div>

          <p className="hero-description text-body-lg text-neutral-text/80 lg:max-w-xl">
            {SITE.tagline}
          </p>

          <div className="hero-button">
            <Button
              href="#contact"
              className="mx-auto w-fit lg:mx-0"
            >
              Contact
            </Button>
          </div>
        </div>

        {/* =========================
            Profile Visual
        ========================= */}

        <div className="hero-visual relative mx-auto aspect-square w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
          {/* =========================
              Outer Glow
          ========================= */}

          <Parallax
            speed={65}
            rotate={3}
            scale={1.18}
            mouse={300}
            className="hero-glow-outer pointer-events-none absolute inset-[-15%]"
          >
            <div
              className="h-full w-full rounded-full bg-brand-gradient opacity-30 blur-3xl"
              aria-hidden="true"
            />
          </Parallax>

          {/* =========================
              Inner Glow
          ========================= */}

          <Parallax
            speed={-130}
            rotate={-5}
            scale={3.86}
            mouse={-35}
            className="hero-glow-inner pointer-events-none absolute inset-[8%]"
          >
            <div
              className="h-full w-full rounded-full bg-button-gradient opacity-20 blur-2xl"
              aria-hidden="true"
            />
          </Parallax>

          {/* =========================
              Circle Border
          ========================= */}

          <div
            className="absolute inset-0 rounded-full ring-1 ring-neutral-text/10"
            aria-hidden="true"
          />

          {/* =========================
              Profile Image
          ========================= */}

          <Parallax
            speed={35}
            rotate={0.5}
            scale={1.015}
            mouse={100}
            className="absolute inset-0"
          >
            <Image
              src="/images/profile-photo.webp"
              alt={`${SITE.name}, Front-End Developer, sitting at a laptop`}
              fill
              priority
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 340px"
              className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(174,12,167,0.35)]"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}