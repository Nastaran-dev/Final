import type { Meta, StoryObj } from "@storybook/react";
import { GradientText } from "./GradientText";

const meta: Meta<typeof GradientText> = {
  title: "UI/GradientText",
  component: GradientText,
  parameters: { backgrounds: { default: "dark" } },
};

export default meta;
type Story = StoryObj<typeof GradientText>;

export const Default: Story = {
  args: {
    children: "Front-End Developer.",
  },
  render: (args) => (
    <p className="font-heading text-h2 font-semibold">
      <GradientText {...args} />
    </p>
  ),
};

export const AsHeading: Story = {
  args: {
    as: "h2",
    children: "About",
  },
  render: (args) => (
    <GradientText {...args} className="gradient-text text-h2 font-semibold" />
  ),
};
