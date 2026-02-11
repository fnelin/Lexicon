import CardGrid from "./ui/card-grid"
import HeroBanner from "./ui/hero-banner";
import { GridItemBase } from "@/components/grid-items"
import getData from "@/components/load-data"

export default async function Home(params: PageProps<"/">) {
  const { limit = "12" } = await params.searchParams
  const limitNumber = limit;
  const apiCharacters: GridItemBase[] = await getData(`https://futuramaapi.com/api/characters?size=${limitNumber}`);

  return (
    <main className="scroll-smooth bg-blue-50">
      <HeroBanner />
      <hr className="" />
      <CardGrid gridName="Characters" gridItems={apiCharacters} />
    </main >
  );
}