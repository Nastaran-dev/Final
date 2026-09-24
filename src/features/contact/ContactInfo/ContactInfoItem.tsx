import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icon";
import type { ContactDetail } from "@/types/contact";

const ICONS = {
  phone: PhoneIcon,
  mail: MailIcon,
  "map-pin": MapPinIcon,
} as const;

export interface ContactInfoItemProps {
  detail: ContactDetail;
}

/** Figma reference: node 117:78 / 117:79 / 117:80 (icon + label rows). */
export function ContactInfoItem({ detail }: ContactInfoItemProps) {
  const IconComponent = ICONS[detail.icon];

  return (
    <li className="flex items-center gap-4">
      <span className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[10px] bg-brand-gradient text-white">
        <IconComponent className="h-4 w-4" />
      </span>
      <span className="sr-only">{detail.label}: </span>
      <span className="text-body-lg tracking-wide text-neutral-text">{detail.value}</span>
    </li>
  );
}
