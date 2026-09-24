import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "UI/TextField",
  component: TextField,
  parameters: { backgrounds: { default: "dark" } },
  argTypes: {
    state: { control: "select", options: ["default", "active", "error"] },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Normal: Story = {
  args: {
    label: "Name",
    placeholder: "Insert your name here…",
  },
};

export const Active: Story = {
  args: {
    label: "Name",
    defaultValue: "Soni kumari",
    state: "active",
  },
};

export const Error: Story = {
  args: {
    label: "Name",
    state: "error",
    errorMessage: "This field is required",
  },
};
