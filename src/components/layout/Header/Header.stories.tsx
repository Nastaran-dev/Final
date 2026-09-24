import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  parameters: { backgrounds: { default: "dark" }, layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
