"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { TextField } from "@/components/ui/TextField";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import type { ContactFieldErrors, ContactFormValues } from "@/types/contact";

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

function validate(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "This field is required";
  }

  if (!values.email.trim()) {
    errors.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.message.trim()) {
    errors.message = "This field is required";
  }

  return errors;
}

/**
 * Figma reference: node 115:46 ("Frame 1955") - Name, Email, Message
 * fields plus the "Send message" button. Client component: it owns
 * form state and validation, unlike the rest of the (server-rendered)
 * page.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleChange<K extends keyof ContactFormValues>(field: K, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // No backend is specified by the design - this simply confirms
      // submission locally. Wire this up to an API route or a form
      // service (e.g. Formspree, Resend) when one is available.
      setStatus("success");
      setValues(INITIAL_VALUES);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative overflow-hidden rounded-card bg-neutral-text/5 p-8 sm:p-12"
    >
      <div className="flex flex-col gap-6">
        <TextField
          label="Name"
          placeholder="Insert your name here…"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          state={errors.name ? "error" : "default"}
          errorMessage={errors.name}
          autoComplete="name"
        />
        <TextField
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          state={errors.email ? "error" : "default"}
          errorMessage={errors.email}
          autoComplete="email"
        />
        <TextArea
          label="Message"
          placeholder="How can I help?"
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          state={errors.message ? "error" : "default"}
          errorMessage={errors.message}
          rows={4}
        />
      </div>

      <Button type="submit" variant="accent" size="sm" className="mt-8">
        Send message
      </Button>

      <p role="status" aria-live="polite" className="mt-4 text-body-sm text-accent-teal">
        {status === "success" ? "Thanks! Your message has been sent." : ""}
      </p>
    </form>
  );
}
