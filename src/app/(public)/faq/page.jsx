import FAQHero from "@/components/faq/FAQHero";
import FAQList from "@/components/faq/FAQList";
import FAQCTA from "@/components/faq/FAQCTA";

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
