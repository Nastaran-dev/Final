import { ContactInfoItem } from "./ContactInfoItem";
import { CONTACT_DETAILS } from "../contact.data";

/** Figma reference: node 117:82 ("Group 1964"). */
export function ContactInfo() {
  return (
    <ul className="flex flex-col gap-6">
      {CONTACT_DETAILS.map((detail) => (
        <ContactInfoItem key={detail.id} detail={detail} />
      ))}
    </ul>
  );
}
