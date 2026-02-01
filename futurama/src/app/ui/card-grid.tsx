import { Character } from "@/types/futurama";
import CharacterCard from "./character-card";


export default function CardGrid({characters}: {characters: Character[]}){

  return(<>


    <section className="container mx-auto px-4 py-4 space-y-4">
      <h2 className="text-2xl font-bold font-josefin text-center">Characters</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(20ch,1fr))] gap-2 ">
        {
        characters.map((c)=>(
        <li key={c.id} className="p-2 border rounded-t-2xl overflow-hidden duration-500 ease-in-out bg-blue-700
                                  hover:-translate-1.5 hover:shadow-2xl hover:bg-blue-700/80">
          
          <CharacterCard id={c.id} name={c.name} imgStr={c.image} characterStatus={c.status}/>

        </li>
        ))}
      </ul>
    </section>
    </>
  )
}