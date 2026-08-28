import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocation from "@/components/contact/ContactLocation";

export const metadata = {
  title: "Contact | D Gold Event Centre",
  description:
    "Get in touch with D Gold Event Centre in Egbeda, Lagos and start planning your next event.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactLocation />
    </main>
  );
}
