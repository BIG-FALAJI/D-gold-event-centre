import FAQHero from "@/components/Faq/FAQHero";
import FAQList from "@/components/Faq/FAQList";
import FAQCTA from "@/components/Faq/FAQCTA";

export const metadata = {
  title: "FAQ | D Gold Event Centre",
  description:
    "Find answers to frequently asked questions about D Gold Event Centre, bookings, availability, events, and venue setup.",
};

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <FAQList />
      <FAQCTA />
    </main>
  );
}
