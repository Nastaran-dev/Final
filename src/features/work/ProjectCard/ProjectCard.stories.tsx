import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../work.data";

const meta: Meta<typeof ProjectCard> = {
  title: "Features/Work/ProjectCard",
  component: ProjectCard,
  parameters: { backgrounds: { default: "dark" }, layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    project: PROJECTS[0]!,
    reverse: false,
  },
};

export const Reversed: Story = {
  args: {
    project: PROJECTS[1]!,
    reverse: true,
  },
};
