import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactLocation from "@/components/Contact/ContactLocation";

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
