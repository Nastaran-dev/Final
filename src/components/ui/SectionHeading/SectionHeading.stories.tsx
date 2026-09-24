import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeading } from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "UI/SectionHeading",
  component: SectionHeading,
  parameters: { backgrounds: { default: "dark" } },
  argTypes: {
    align: { control: "select", options: ["left", "center"] },
    size: { control: "select", options: ["lg", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Centered: Story = {
  args: {
    title: "Recent Work",
    description: "A collection of projects I've worked on.",
    align: "center",
    size: "lg",
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Drop me a message",
    description: "A web app for visualizing personalized Spotify data.",
    align: "left",
    size: "md",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "About",
    align: "center",
  },
};
