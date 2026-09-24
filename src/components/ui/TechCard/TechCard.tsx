import type { Technology } from "@/types/technology";

export interface TechCardProps {
  technology: Technology;
}


export function TechCard({ technology }: TechCardProps) {
  const IconComponent = technology.icon;

  return (
    <div
      className="group flex flex-col items-center gap-3 rounded-card border border-neutral-text/10 bg-neutral-text/5 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:bg-neutral-text/10 hover:shadow-[0_10px_30px_rgba(93,255,255,0.12)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100">
        <IconComponent className="h-6 w-6" />
      </span>
      <span className="font-heading text-body-sm font-semibold text-neutral-text/90">
        {technology.name}
      </span>
    </div>
  );
}
