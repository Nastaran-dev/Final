import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type TextFieldState = "default" | "active" | "error";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  /** Visual state override, mainly for Storybook. Controlled inputs use `:focus` naturally. */
  state?: TextFieldState;
  errorMessage?: string;
}

/**
 * Figma reference: Design System > 04 Form Elements > Text Field
 * (node 117:999) - Normal / Active / Error states, and the live
 * Contact form (node 115:46).
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, state = "default", errorMessage, id, className, ...rest }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const isError = state === "error";

    return (
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor={inputId}
          className="font-heading text-body-sm font-bold text-neutral-text/80"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-[10px] border bg-neutral-text/10 px-4 py-3 font-heading text-body-sm text-neutral-text",
            "placeholder:text-neutral-text/40",
            "outline-none transition-colors duration-150",
            "border-transparent focus:border-accent-teal",
            state === "active" && "border-accent-teal",
            isError && "border-accent-error",
            className
          )}
          aria-invalid={isError || undefined}
          aria-describedby={isError && errorMessage ? `${inputId}-error` : undefined}
          {...rest}
        />
        {isError && errorMessage && (
          <p id={`${inputId}-error`} className="font-heading text-xs font-bold italic text-accent-error">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
