import PackagesHero from "@/components/packages/PackagesHero";
import PackageList from "@/components/packages/PackageList";
import PackageNote from "@/components/packages/PackageNote";
import PackagesCTA from "@/components/packages/PackagesCTA";

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
