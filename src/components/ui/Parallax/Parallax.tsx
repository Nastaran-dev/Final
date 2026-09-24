
"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  rotate?: number;
  scale?: number;
  mouse?: number;
  className?: string;
}

export function Parallax({
  children,
  speed = 100,
  rotate = 0,
  scale = 1,
  mouse = 0,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: -speed * 0.4,
          rotate: -rotate,
          scale: 1,
        },
        {
          y: speed,
          rotate,
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        }
      );
    }, element);

    const handleMouseMove = (event: MouseEvent) => {
      if (mouse === 0) return;

      const x =
        (event.clientX / window.innerWidth - 0.5) * mouse;

      const y =
        (event.clientY / window.innerHeight - 0.5) * mouse;

      gsap.to(element, {
        x,
        rotateX: -y * 0.5,
        rotateY: x * 0.5,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    if (mouse !== 0) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (mouse !== 0) {
        window.removeEventListener("mousemove", handleMouseMove);
      }

      ctx.revert();
    };
  }, [speed, rotate, scale, mouse]);

  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}