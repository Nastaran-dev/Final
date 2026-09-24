import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BrowserWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Generic browser/editor "chrome" frame (traffic-light dots + tab bar)
 * used to present the mockups and code preview shown in the reference
 * design. Reusable anywhere a "window" presentation is useful.
 */
export function BrowserWindow({ title, children, className }: BrowserWindowProps) {
  return (
    <div className={cn("overflow-hidden rounded-card border border-neutral-text/10 bg-primary-dark/60 shadow-2xl", className)}>
      <div className="flex items-center gap-3 border-b border-neutral-text/10 bg-neutral-text/5 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-error/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-teal/70" />
        </span>
        {title && (
          <span className="mx-auto -ml-6 rounded-full bg-neutral-text/10 px-4 py-1 text-xs text-neutral-text/60">
            {title}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
