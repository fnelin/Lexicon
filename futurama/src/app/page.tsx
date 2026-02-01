import CardGrid from "./ui/card-grid"
import dataCharacters from "@/app/data/characters.json";
import HeroBanner from "./ui/hero-banner";


export default function Home() {
  const characters = dataCharacters.items
  return (
    <main className="scroll-smooth bg-blue-50">
      <HeroBanner />
      <hr className="" />
      <CardGrid gridName="Characters" gridItems={characters} />
    </main>
  );
}
