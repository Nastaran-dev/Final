import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  parameters: { backgrounds: { default: "dark" }, layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
