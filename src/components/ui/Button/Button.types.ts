import type { ReactNode, MouseEventHandler } from "react";

export type ButtonVariant = "primary" | "accent" | "outline";
export type ButtonSize = "md" | "sm";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  /** When provided, the button renders as an <a> instead of a <button>. */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}
