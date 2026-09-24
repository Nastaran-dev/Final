"use client";

import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/ui/Icon";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      const logo = header.querySelector(".nav-logo");
      const links = header.querySelectorAll(".nav-link");
      const button = header.querySelector(".nav-button");
      const mobileButton = header.querySelector(".nav-mobile-button");

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        logo,
        {
          y: -30,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
        },
      )
        .fromTo(
          links,
          {
            y: -25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.4",
        )
        .fromTo(
          button,
          {
            y: -20,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
          },
          "-=0.35",
        )
        .fromTo(
          mobileButton,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.5",
        );
    }, header);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-primary-dark/80 backdrop-blur-md"
    >
      <div className="container-page flex h-20 items-center justify-between">
       
        <a
          href="#home"
          className="nav-logo font-heading text-xl font-bold text-neutral-text"
        >
          {SITE.name}
          <span className="text-accent-cyan">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link font-nav text-body-sm font-medium uppercase tracking-wide text-neutral-text/90 transition-colors hover:text-accent-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

       
        <div className="nav-button hidden md:block">
          <Button href="#contact" size="sm">
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="nav-mobile-button text-neutral-text md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <CloseIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "overflow-hidden bg-primary-dark transition-[max-height] duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-80" : "max-h-0",
        )}
      >
        <div className="container-page flex flex-col gap-6 py-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-nav text-body-lg font-medium uppercase tracking-wide text-neutral-text/90"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}