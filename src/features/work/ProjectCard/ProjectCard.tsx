import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { ArrowUpRightIcon } from "@/components/ui/Icon";
import type { Project } from "@/types/project";

export interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center gap-10 lg:flex-row lg:gap-16",
        reverse && "lg:flex-row-reverse",
      )}
    >
      <div className="relative w-full max-w-[620px] shrink-0 lg:w-[52%]">
        <Parallax speed={28} className="pointer-events-none absolute -inset-6">
          <div
            className="h-full w-full rounded-card opacity-40 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(220,0,211,0.4), rgba(93,255,255,0.15) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </Parallax>
        <div className="relative overflow-hidden rounded-card backdrop-blur-[40px]">
          <video
            src={project.imageSrc}
            autoPlay
            muted
            loop
            playsInline
            className="h-auto w-full rounded-card"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 lg:w-[48%]">
        <div className="flex flex-col gap-2">
          <p className="text-label uppercase text-accent-cyan/90">
            {project.eyebrow}
          </p>
          <h3 className="font-heading text-[34px] font-bold tracking-wide text-neutral-text">
            {project.title}
          </h3>
        </div>
        <div className="rounded-card bg-neutral-text/5 p-6">
          <p className="text-body-lg text-neutral-text/90">
            {project.description}
          </p>
        </div>
        <Button
          href={project.href}
          variant="outline"
          size="sm"
          className="w-fit gap-2"
          aria-label={`View ${project.title}`}
        >
          View project <ArrowUpRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
