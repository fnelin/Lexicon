import CardGrid from "./ui/card-grid"
import HeroBanner from "./ui/hero-banner";
import { GridItemBase } from "@/components/grid-items"
import getData from "@/components/load-data"

export default async function Home() {

  const apiCharacters: GridItemBase[] = await getData("https://futuramaapi.com/api/characters");

  return (
    <main className="scroll-smooth bg-blue-50">
      <HeroBanner />
      <hr className="" />
      <CardGrid gridName="Characters" gridItems={apiCharacters} />
    </main>
  );
}
