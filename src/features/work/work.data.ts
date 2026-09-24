import type { Project } from "@/types/project";

const DESCRIPTION =
  "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.";

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    eyebrow: "Featured Project",
    title: "Admin Dashboard",
    description:
      "A modern and fully responsive Admin Dashboard built with Next.js and React, featuring data management, advanced tables, charts, forms, and date pickers.The project uses TypeScript, Material UI, React Query, and Axios for a scalable component-based architecture and efficient API communication.",
    imageAlt: "Example Project preview",
    imageSrc: "/images/project-1.mp4",
    href: "https://admin-panel-gamma-rose.vercel.app/",
  },
  {
    id: "project-2",
    eyebrow: "Featured Project",
    title: "Front-End Interview Quiz",
    description:
      "An interactive quiz project designed to practice and evaluate Front-End interview questions.Built with JavaScript and Tailwind CSS, featuring a variety of multiple-choice questions.Users can select their answers and view their final score and overall performance at the end.",
    imageAlt: "Example Project preview",
    imageSrc: "/images/project-2.mp4",
    href: "https://nastaran-dev.github.io/Quiz-project/src/index1.html",
  },
  {
    id: "project-3",
    eyebrow: "Featured Project",
    title: "Restaurant & Food Website",
    description:
      "A modern and responsive website designed to showcase a restaurant and its food menu.Built with JavaScript and Tailwind CSS, focusing on an attractive design and a smooth, simple user experience.The website includes sections for food items, categories, and restaurant information.",
    imageAlt: "Example Project preview",
    imageSrc: "/images/project-3.mp4",
    href: "https://nastaran-dev.github.io/restaurant-project/src/index.html",
  },
  {
    id: "project-4",
    eyebrow: "Featured Project",
    title: "Smartphone Showcase",
    description:
      " A modern website designed to showcase smartphones with a focus on an engaging design and smooth user experience.Built with Next.js, React, Tailwind CSS, and Material UI, with Framer Motion used for interactive animations.The project follows a component-based structure and is fully responsive.",
    imageAlt: "Example Project preview",
    imageSrc: "/images/project-4.mp4",
    href: "https://ui-with-mui.vercel.app/",
  },
];
