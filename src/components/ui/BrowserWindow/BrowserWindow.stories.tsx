import type { Meta, StoryObj } from "@storybook/react";
import { BrowserWindow } from "./BrowserWindow";

const meta: Meta<typeof BrowserWindow> = {
  title: "UI/BrowserWindow",
  component: BrowserWindow,
  parameters: { backgrounds: { default: "dark" }, layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof BrowserWindow>;

export const Default: Story = {
  args: {
    title: "portfolio.dev",
    children: <div className="p-8 text-neutral-text/70">Window content goes here.</div>,
  },
};
