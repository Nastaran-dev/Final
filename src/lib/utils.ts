type ClassValue = string | number | null | boolean | undefined;

/**
 * Lightweight className combiner. Avoids pulling in `clsx` /
 * `tailwind-merge` as dependencies for such a small utility.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
