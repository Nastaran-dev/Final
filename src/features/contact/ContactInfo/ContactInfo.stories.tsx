import type { Meta, StoryObj } from "@storybook/react";
import { ContactInfo } from "./ContactInfo";

const meta: Meta<typeof ContactInfo> = {
  title: "Features/Contact/ContactInfo",
  component: ContactInfo,
  parameters: { backgrounds: { default: "dark" } },
};

export default meta;
type Story = StoryObj<typeof ContactInfo>;

export const Default: Story = {};
