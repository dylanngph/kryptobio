import HomeHero from "@/components/views/home-hero";
import CreatorsList from "@/components/views/creators-list";

export default function Home() {
  return (
    <main className="p-6">
      <div className="space-y-10">
        <HomeHero />
        <CreatorsList />
      </div>
    </main>
  );
}
