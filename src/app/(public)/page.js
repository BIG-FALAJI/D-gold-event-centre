import AboutPreview from "@/components/Home/AboutPreview";
import AvailabilityCTA from "@/components/Home/AvailabilityCTA";
import BookingCTA from "@/components/Home/BookingCTA";
import GalleryPreview from "@/components/Home/GalleryPreview";
import Hero from "@/components/home/Hero";
import PackagesPreview from "@/components/Home/PackagesPreview";
import StatsSection from "@/components/Home/StatsSection";
import Testimonials from "@/components/Home/Testimonials";
import VenuePreview from "@/components/Home/VenuePreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <StatsSection />
      <VenuePreview />
      <PackagesPreview />
      <GalleryPreview />
      <Testimonials />
      <AvailabilityCTA />
      <BookingCTA />
    </main>
  );
}
