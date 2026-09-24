import type { IconProps } from "./icons";

/**
 * Minimal, hand-authored line-icon set for the Tech Stack showcase
 * (see src/features/about/TechStack). These are simplified, generic
 * glyphs rather than traced brand logos, so the set stays visually
 * consistent (single stroke weight, currentColor) and dependency-free.
 */

export function HtmlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 6l-4 12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CssIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x={4} y={4} width={11} height={11} rx={2} stroke="currentColor" strokeWidth={1.6} />
      <rect x={9} y={9} width={11} height={11} rx={2} fill="currentColor" fillOpacity={0.12} stroke="currentColor" strokeWidth={1.6} />
    </svg>
  );
}

export function JavaScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x={3} y={3} width={18} height={18} rx={4} stroke="currentColor" strokeWidth={1.6} />
      <text x={12} y={16.5} textAnchor="middle" fontSize={9} fontWeight={700} fill="currentColor" stroke="none" fontFamily="sans-serif">
        JS
      </text>
    </svg>
  );
}

export function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x={3} y={3} width={18} height={18} rx={4} stroke="currentColor" strokeWidth={1.6} />
      <text x={12} y={16.5} textAnchor="middle" fontSize={9} fontWeight={700} fill="currentColor" stroke="none" fontFamily="sans-serif">
        TS
      </text>
    </svg>
  );
}

export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx={12} cy={12} r={1.8} fill="currentColor" />
      <ellipse cx={12} cy={12} rx={9} ry={3.6} stroke="currentColor" strokeWidth={1.4} />
      <ellipse cx={12} cy={12} rx={9} ry={3.6} stroke="currentColor" strokeWidth={1.4} transform="rotate(60 12 12)" />
      <ellipse cx={12} cy={12} rx={9} ry={3.6} stroke="currentColor" strokeWidth={1.4} transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextJsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={1.6} />
      <path d="M9 8v8M9 8l6.5 8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8v5.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 12c.8-3 2.4-4.5 5-4.5 2.6 0 3.6 1.5 4.4 3S17 13.5 18 13.5c-.8 3-2.4 4.5-5 4.5-2.6 0-3.6-1.5-4.4-3S6.8 12 6 12Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitBranchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx={6} cy={6} r={2.2} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={6} cy={18} r={2.2} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={18} cy={10} r={2.2} stroke="currentColor" strokeWidth={1.6} />
      <path d="M6 8.2V15.8M6 10c0 3 3 4.2 9.8 4.2" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function ApiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 8h11M11 5l4 3-4 3" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 16H9M13 13l-4 3 4 3" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ResponsiveIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x={2.5} y={5} width={14} height={10} rx={1.5} stroke="currentColor" strokeWidth={1.5} />
      <path d="M6 18h6.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      <rect x={16} y={9} width={5.5} height={9} rx={1.3} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

export function ReactQueryIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 12a8 8 0 1 1-2.6-5.9"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path d="M20 4v4.5h-4.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UiUxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m5 4 14 6.2-6 1.8-1.8 6L5 4Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <circle cx={17.5} cy={17.5} r={2.3} stroke="currentColor" strokeWidth={1.4} />
    </svg>
  );
}
