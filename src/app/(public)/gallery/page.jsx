import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import GalleryCTA from "@/components/Gallery/GalleryCTA";

export const metadata = {
  title: "Gallery | D Gold Event Centre",
  description:
    "Explore D Gold Event Centre and see the space prepared for memorable occasions in Egbeda, Lagos.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
    </main>
  );
}
