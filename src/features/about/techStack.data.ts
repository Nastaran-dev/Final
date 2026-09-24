import type { Technology } from "@/types/technology";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  GitBranchIcon,
  ApiIcon,
  ResponsiveIcon,
  ReactQueryIcon,
  UiUxIcon,
  LinuxIcon,
  DockerIcon
} from "@/components/ui/Icon";

export const TECH_STACK: Technology[] = [
 { id: "react", name: "React", icon: ReactIcon },
{ id: "nextjs", name: "Next.js", icon: NextJsIcon },
{ id: "typescript", name: "TypeScript", icon: TypeScriptIcon },
{ id: "javascript", name: "JavaScript", icon: JavaScriptIcon },

{ id: "tailwind", name: "Tailwind CSS", icon: TailwindIcon },
{ id: "html", name: "HTML", icon: HtmlIcon },
{ id: "css", name: "CSS", icon: CssIcon },

{ id: "react-query", name: "React Query", icon: ReactQueryIcon },
{ id: "rest-api", name: "REST API", icon: ApiIcon },

{ id: "responsive", name: "Responsive Design", icon: ResponsiveIcon },
{ id: "ui-ux", name: "UI/UX Fundamentals", icon: UiUxIcon },

{ id: "linux", name: "Linux", icon: LinuxIcon },
{ id: "docker", name: "Docker", icon: DockerIcon },
{ id: "git", name: "Git & GitHub", icon: GitBranchIcon },
];
