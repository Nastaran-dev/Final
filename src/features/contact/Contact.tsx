import { SectionHeading } from "@/components/ui/SectionHeading";

import { ContactForm } from "./ContactForm";

import { ContactInfo } from "./ContactInfo";

import { SITE } from "@/constants/site";


export function Contact() {

  return (

    <section id="contact" className="container-page py-24 lg:py-32">

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">

        <div className="flex flex-col gap-12">

          <SectionHeading

            title="Drop me a message"

            description={SITE.contactIntro}

            align="left"

            size="md"

          />

          <ContactInfo />

        </div>

        <ContactForm />

      </div>

    </section>

  );

}