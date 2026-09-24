import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "UI/TextArea",
  component: TextArea,
  parameters: { backgrounds: { default: "dark" } },
  argTypes: {
    state: { control: "select", options: ["default", "active", "error"] },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Normal: Story = {
  args: {
    label: "Message",
    placeholder: "What is your message?",
  },
};

export const Active: Story = {
  args: {
    label: "Message",
    defaultValue: "This is my message",
    state: "active",
  },
};

export const Error: Story = {
  args: {
    label: "Message",
    state: "error",
    errorMessage: "This field is required",
  },
};
