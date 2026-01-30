import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/futurama";
import imgDefault from "@/../public/default.jpg";
import imgDeadStamp from "@/../public/dead_stamp.png";


export default function CardGrid({characters}: {characters: Character[]}){

  return(<>


    <section className="container mx-auto px-4 py-4 space-y-4">
      <h2 className="text-2xl font-bold font-josefin text-center">Characters</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(20ch,1fr))] gap-2 ">
        {
        characters.map((c)=>(
        <li key={c.id} className="p-2 border rounded-t-2xl overflow-hidden duration-500 ease-in-out bg-blue-700
                                  hover:-translate-1.5 hover:shadow-2xl hover:bg-blue-700/80">
          <article className="relative">
            <Link href={`/character/${c.id}`} className="cursor-pointer" prefetch={false}>
            <h3 className="absolute bottom-0 left-0 right-0 text-center font-bold font-josefin
                    px-6 py-1 backdrop-blur-sm bg-gray-900/60
                    text-gray-100">
                    {c.name}
            </h3>
            <Image src={c.image ?? imgDefault} alt="" width="200" height="200"
                    className="w-full aspect-square object-cover object-top rounded-t-xl" />
            {
            c.status=="DEAD" && 
            <Image src={imgDeadStamp} alt="" width="100" height="100" 
                    className="absolute -top-2 -left-4 bg-gray-900/40 rounded-br-2xl backdrop-blur-xs h-auto w-auto scale-75" />
            }
            </Link>
          </article>
        </li>
        ))}
      </ul>
    </section>
    </>
  )
}