import type { ComponentType } from "react";
import { LinkedInIcon, GitHubIcon, InstagramIcon, type IconProps } from "@/components/ui/Icon";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
}


export const SOCIAL_LINKS: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/nastaran-mohammadi-1515a8382", icon: LinkedInIcon },
  { id: "github", label: "GitHub", href: "https://github.com/Nastaran-dev", icon: GitHubIcon },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/nastaran.devdiary?stkn=bnVrdWt0YjNwNWVy", icon: InstagramIcon },
];
