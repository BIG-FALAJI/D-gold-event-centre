import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutFeatures from "@/components/About/AboutFeatures";
import AboutEvents from "@/components/About/AboutEvents";
import AboutStats from "@/components/About/AboutStats";
import AboutCTA from "@/components/About/AboutCTA";

export const metadata = {
  title: "About | D-Gold Event Centre",
  description:
    "Learn more about D Gold Event Centre, a versatile event venue in Egbeda, Lagos.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutFeatures />
      <AboutEvents />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}
