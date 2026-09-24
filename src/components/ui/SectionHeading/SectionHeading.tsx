import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";

export interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "lg" matches the 66px About/Work heading, "md" matches the 40px Contact heading. */
  size?: "lg" | "md";
  className?: string;
}

/**
 * Gradient section title + optional supporting paragraph.
 * Figma reference: "About" (41:18), "Recent Work" (61:4) and
 * "Drop me a message" (105:5) all share this pattern.
 */
export function SectionHeading({
  title,
  description,
  align = "center",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* size="md" mirrors the 40px "Drop me a message" heading (105:5) */}
      <GradientText
        as="h2"
        className={cn(
          "font-semibold",
          size === "lg" ? "text-h2" : "text-[32px] leading-tight sm:text-[40px]"
        )}
      >
        {title}
      </GradientText>
      {description && (
        <p
          className={cn(
            "text-body-lg text-neutral-text/80",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
