export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  icon: "phone" | "mail" | "map-pin";
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;
