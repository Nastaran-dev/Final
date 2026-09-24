import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Features/Contact/ContactForm",
  component: ContactForm,
  parameters: { backgrounds: { default: "dark" }, layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
