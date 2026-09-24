"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "./work.data";
import { SITE } from "@/constants/site";

gsap.registerPlugin(ScrollTrigger);

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
   
      const heading = section.querySelector(".work-heading");
      const projects = section.querySelectorAll(".project-item");

    
      gsap.fromTo(
        heading,
        {
          y: 120,
          opacity: 0,
          scale: 0.82,
          rotateX: 15,
          filter: "blur(14px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            end: "top 50%",
            scrub: 1.2,
          },
        },
      );

    
      projects.forEach((project, index) => {
        const fromLeft = index % 2 === 0;

        const card = project.querySelector(".project-card");
        const glow = project.querySelector(".project-glow");



        gsap.fromTo(
          project,
          {
            x: fromLeft ? -10 : 10,
            y: 120,
            opacity: 0,
            scale: 0.78,
            rotateY: fromLeft ? -10 : 10,
            rotateX: 8,
            filter: "blur(12px)",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            filter: "blur(0px)",
            ease: "power4.out",
            scrollTrigger: {
              trigger: project,
              start: "top 92%",
              end: "top 48%",
              scrub: 1.4,
            },
          },
        );

      
        gsap.to(project, {
          y: index % 2 === 0 ? -100 : -150,
          x: fromLeft ? 25 : -25,
          rotateZ: fromLeft ? 1.5 : -1.5,
          scale: 1.035,
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "top 75%",
            end: "bottom 15%",
            scrub: 1.8,
          },
        });

     

        if (card) {
          gsap.to(card, {
            rotateX: index % 2 === 0 ? -2 : 2,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top 70%",
              end: "bottom 20%",
              scrub: 2,
            },
          });
        }

     

        if (glow) {
          gsap.to(glow, {
            x: fromLeft ? 80 : -80,
            y: -80,
            scale: 1.5,
            rotate: fromLeft ? 12 : -12,
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: 2.5,
            },
          });
        }

       
        gsap.to(project, {
          yPercent: index % 2 === 0 ? 1.5 : -1.5,
          duration: 3.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

     
      gsap.to(section, {
        y: -100,
        scale: 0.94,
        opacity: 0.25,
        rotateX: -3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 85%",
          end: "bottom 25%",
          scrub: 1.8,
        },
      });

     

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="container-page flex flex-col gap-20 py-24 lg:py-32"
    >
    
      <div className="work-heading">
        <SectionHeading
          title="Recent Work"
          description={SITE.workSubtitle}
          align="center"
        />
      </div>

   

      <div className="flex flex-col gap-24 lg:gap-32">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="project-item relative"
          >
          
            <div
              className="project-glow pointer-events-none absolute -inset-20 -z-10 rounded-[50%] bg-brand-gradient opacity-20 blur-3xl"
              aria-hidden="true"
            />

           

            <div className="project-card">
              <ProjectCard
                project={project}
                reverse={index % 2 === 1}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}