import type { Meta, StoryObj } from "@storybook/react";
import { Parallax } from "./Parallax";

const meta: Meta<typeof Parallax> = {
  title: "UI/Parallax",
  component: Parallax,
  parameters: { backgrounds: { default: "dark" } },
};

export default meta;
type Story = StoryObj<typeof Parallax>;

export const Default: Story = {
  args: {
    speed: 40,
    children: (
      <div className="h-40 w-40 rounded-full bg-brand-gradient opacity-60 blur-2xl" />
    ),
  },
};
