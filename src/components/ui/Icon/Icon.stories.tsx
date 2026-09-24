import type { Meta, StoryObj } from "@storybook/react";
import { PhoneIcon, MailIcon, MapPinIcon, MenuIcon, CloseIcon, ArrowUpRightIcon } from "./icons";

const icons = { PhoneIcon, MailIcon, MapPinIcon, MenuIcon, CloseIcon, ArrowUpRightIcon };

function IconGallery() {
  return (
    <div className="flex flex-wrap gap-8 bg-primary-dark p-6">
      {Object.entries(icons).map(([name, IconComponent]) => (
        <div key={name} className="flex flex-col items-center gap-2 text-neutral-text">
          <IconComponent className="h-6 w-6" />
          <span className="text-xs">{name}</span>
        </div>
      ))}
    </div>
  );
}

const meta: Meta<typeof IconGallery> = {
  title: "UI/Icons",
  component: IconGallery,
};

export default meta;
type Story = StoryObj<typeof IconGallery>;

export const AllIcons: Story = {};
