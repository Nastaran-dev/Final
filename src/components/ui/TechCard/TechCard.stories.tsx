import type { Meta, StoryObj } from "@storybook/react";
import { TechCard } from "./TechCard";
import { ReactIcon, TailwindIcon } from "@/components/ui/Icon";

const meta: Meta<typeof TechCard> = {
  title: "UI/TechCard",
  component: TechCard,
  parameters: { backgrounds: { default: "dark" } },
};

export default meta;
type Story = StoryObj<typeof TechCard>;

export const React: Story = {
  args: {
    technology: { id: "react", name: "React", icon: ReactIcon },
  },
};

export const Tailwind: Story = {
  args: {
    technology: { id: "tailwind", name: "Tailwind CSS", icon: TailwindIcon },
  },
};
