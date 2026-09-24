import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

/**
 * Hand-authored icon set standing in for the vector icons used next to
 * the contact details (117:72, 117:76, 117:77) and the header's mobile
 * menu toggle. Kept as simple stroke icons rather than importing an
 * icon library, to avoid an unnecessary dependency for five icons.
 */

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h2.9c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x={3}
        y={5}
        width={18}
        height={14}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <circle cx={12} cy={9} r={2.4} stroke="currentColor" strokeWidth={1.6} />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={3}
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path
        d="M7.5 10.5v6M7.5 7.8v.01"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.5v-3.7c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v3.7"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 10.5v6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.65-.2.65-.5v-1.7c-2.6.55-3.15-1.25-3.15-1.25-.43-1.1-1.05-1.4-1.05-1.4-.85-.6.07-.58.07-.58.95.07 1.45.97 1.45.97.85 1.45 2.2 1.05 2.75.8.08-.6.33-1.05.6-1.3-2.1-.25-4.3-1.05-4.3-4.65 0-1.05.35-1.9.95-2.55-.1-.25-.4-1.2.1-2.5 0 0 .8-.25 2.6.95a9 9 0 0 1 4.75 0c1.8-1.2 2.6-.95 2.6-.95.5 1.3.2 2.25.1 2.5.6.65.95 1.5.95 2.55 0 3.6-2.2 4.4-4.3 4.65.35.3.65.85.65 1.75v2.6c0 .3.15.6.65.5A9.5 9.5 0 0 0 12 2.5Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={5}
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={17.2} cy={6.8} r={1} fill="currentColor" />
    </svg>
  );
}

export function DockerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 13.5h16.8c-.3 2.7-2.5 4.8-5.3 4.8H7.3c-2.4 0-4.4-2-4.8-4.8Z"
        fill="currentColor"
        opacity="0.9"
      />

      <rect x={6} y={8.5} width={3} height={2.5} rx={0.4} fill="currentColor" />

      <rect
        x={9.5}
        y={8.5}
        width={3}
        height={2.5}
        rx={0.4}
        fill="currentColor"
      />

      <rect
        x={13}
        y={8.5}
        width={3}
        height={2.5}
        rx={0.4}
        fill="currentColor"
      />

      <rect
        x={9.5}
        y={5.5}
        width={3}
        height={2.5}
        rx={0.4}
        fill="currentColor"
      />

      <rect
        x={13}
        y={5.5}
        width={3}
        height={2.5}
        rx={0.4}
        fill="currentColor"
      />

      <path
        d="M18.8 11.2c1.1-.2 2.1.1 2.7.8-.5.7-1.4 1.1-2.5 1"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinuxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5c-3 0-4.8 2.7-4.8 6.2 0 2.1-.8 3.2-1.8 4.4-.9 1.1-1.7 2.3-1.4 3.8.3 1.7 2 2.4 3.5 1.8 1-.4 1.6-1.2 2.5-1.2s1.4 1.2 2 1.7c.6.5 1.5.5 2 0 .6-.5 1-1.7 2-1.7s1.5.8 2.5 1.2c1.5.6 3.2-.1 3.5-1.8.3-1.5-.5-2.7-1.4-3.8-1-1.2-1.8-2.3-1.8-4.4C16.8 5.2 15 2.5 12 2.5Z"
        fill="currentColor"
      />

      <circle cx={9.2} cy={8.8} r={0.7} fill="white" />

      <circle cx={14.8} cy={8.8} r={0.7} fill="white" />

      <path
        d="M10 12.2c.7.6 1.3.9 2 .9s1.3-.3 2-.9"
        stroke="white"
        strokeWidth={0.8}
        strokeLinecap="round"
      />
    </svg>
  );
}
