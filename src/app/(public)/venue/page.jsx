import VenueHero from "@/components/venue/VenueHero";
import VenueOverview from "@/components/venue/VenueOverview";
import VenueFeatures from "@/components/venue/VenueFeatures";
import EventTypes from "@/components/venue/EventTypes";
import VenueCTA from "@/components/venue/VenueCTA";

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
