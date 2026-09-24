import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type TextAreaState = "default" | "active" | "error";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  state?: TextAreaState;
  errorMessage?: string;
}

/**
 * Figma reference: Design System > 04 Form Elements > Text Area
 * (node 117:998) and the live Contact form "Message" field (node 112:55).
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, state = "default", errorMessage, id, className, rows = 4, ...rest }, ref) => {
    const areaId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const isError = state === "error";

    return (
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor={areaId}
          className="font-heading text-body-sm font-bold text-neutral-text/80"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={areaId}
          rows={rows}
          className={cn(
            "w-full resize-none rounded-[10px] border bg-neutral-text/10 px-4 py-3 font-heading text-body-sm text-neutral-text",
            "placeholder:text-neutral-text/40",
            "outline-none transition-colors duration-150",
            "border-transparent focus:border-accent-teal",
            state === "active" && "border-accent-teal",
            isError && "border-accent-error",
            className
          )}
          aria-invalid={isError || undefined}
          aria-describedby={isError && errorMessage ? `${areaId}-error` : undefined}
          {...rest}
        />
        {isError && errorMessage && (
          <p id={`${areaId}-error`} className="font-heading text-xs font-bold italic text-accent-error">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
