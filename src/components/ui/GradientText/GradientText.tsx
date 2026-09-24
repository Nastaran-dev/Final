import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/**
 * Renders text filled with the brand gradient
 * (linear-gradient(107deg, #5DFFFF 5%, #AE0CA7 88%)).
 * Used for "Front-End Developer.", "About" and "Drop me a message".
 */
export function GradientText({ children, as: Tag = "span", className }: GradientTextProps) {
  return <Tag className={cn("gradient-text", className)}>{children}</Tag>;
}
