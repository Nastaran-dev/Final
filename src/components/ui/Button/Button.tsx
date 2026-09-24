import { cn } from "@/lib/utils";
import type { ButtonProps } from "./Button.types";

/**
 * Primary CTA button.
 *
 * Figma reference: node 30:817 ("Contact" - button-gradient, 18px) and
 * node 114:43 / 117:941 ("Send message" - brand-gradient, 14px).
 * Renders as a <button> by default, or an <a> when `href` is provided,
 * while keeping identical styling - avoids duplicating the visual
 * treatment across two components.
 */
export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  type = "button",
  onClick,
  disabled,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-heading font-semibold",
    "transition-transform duration-200 ease-out will-change-transform",
    "hover:scale-[1.03] active:scale-[0.98]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
    size === "md" ? "px-6 py-2 text-body-lg" : "px-6 py-2 text-body-sm",
    variant === "primary" && "bg-button-gradient text-white",
    variant === "accent" && "bg-brand-gradient text-white",
    variant === "outline" &&
      "border border-accent-cyan bg-transparent text-neutral-text hover:bg-accent-cyan/10",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
