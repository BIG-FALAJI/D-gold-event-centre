import PackagesHero from "@/components/Packages/PackagesHero";
import PackageList from "@/components/Packages/PackageList";
import PackageNote from "@/components/Packages/PackageNote";
import PackagesCTA from "@/components/Packages/PackagesCTA";

export const metadata = {
  title: "Packages | D Gold Event Centre",
  description:
    "Explore event packages available at D Gold Event Centre in Egbeda, Lagos.",
};

export default function PackagesPage() {
  return (
    <main>
      <PackagesHero />
      <PackageList />
      <PackageNote />
      <PackagesCTA />
    </main>
  );
}
