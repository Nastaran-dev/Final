import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    backgrounds: { default: "dark" },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "accent", "outline"] },
    size: { control: "select", options: ["md", "sm"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Contact",
    variant: "primary",
    size: "md",
  },
};

export const Accent: Story = {
  args: {
    children: "Send message",
    variant: "accent",
    size: "sm",
  },
};

export const Outline: Story = {
  args: {
    children: "Learn more",
    variant: "outline",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    children: "Send message",
    variant: "accent",
    size: "sm",
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    children: "View project",
    variant: "outline",
    href: "https://example.com",
  },
};
