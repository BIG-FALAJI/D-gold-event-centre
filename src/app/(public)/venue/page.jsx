import VenueHero from "@/components/Venue/VenueHero";
import VenueOverview from "@/components/Venue/VenueOverview";
import VenueFeatures from "@/components/Venue/VenueFeatures";
import EventTypes from "@/components/Venue/EventTypes";
import VenueCTA from "@/components/Venue/VenueCTA";

export const metadata = {
  title: "Our Venue | D Gold Event Centre",
  description:
    "Discover D Gold Event Centre, a versatile event venue in Egbeda, Lagos.",
};

export default function VenuePage() {
  return (
    <main>
      <VenueHero />
      <VenueOverview />
      <VenueFeatures />
      <EventTypes />
      <VenueCTA />
    </main>
  );
}
