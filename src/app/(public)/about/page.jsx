import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutEvents from "@/components/about/AboutEvents";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About | D Gold Event Centre",
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
