import Link from "next/link"
import { GridItemBase } from "@/components/grid-items";
import GridCard from "./cards";


export default function CardGrid({ gridName, gridItems }: { gridName: string, gridItems: GridItemBase[] }) {

  return (
    <section className="container mx-auto px-4 py-4 space-y-4">
      <h2 className="text-2xl font-bold font-josefin text-center">{gridName}</h2>
      <span className="">Limit:<Link href="./?limit=10" className="font-bold mr-2">10</Link><Link href="./?limit=20" className="font-bold">20</Link></span>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(20ch,1fr))] gap-2 ">
        {
          gridItems.map((gI) => (
            <li key={gI.id} className="p-2 border rounded-t-2xl overflow-hidden duration-500 ease-in-out bg-blue-700
                                  hover:-translate-1.5 hover:shadow-2xl hover:bg-blue-700/80">

              <GridCard id={gI.id} name={gI.name} imgStr={gI.image} itemStatus={gI.status} page={gridName} />

            </li>
          ))}
      </ul>
    </section>

  )
}