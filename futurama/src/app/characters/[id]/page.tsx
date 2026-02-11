import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import capFirstLetter from "@/utils/utils";
import imgDefault from "@/../public/default.jpg";
import imgDeadStamp from "@/../public/dead_stamp.png";
import getData from "@/components/load-data";
import { Character } from "@/types/futurama";


export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const data = await getData(`https://futuramaapi.com/api/characters/${id}`);
    const character: Character = data;


    if (!character) notFound()

    return (
        <main className="grid h-dvh place-items-center font-josefin text-gray-100
        bg-linear-175 from-blue-900 from-15% via-blue-700 via-65% to-sky-500 to-99%
        ">
            <article className="grid grid-cols-2 gap-4">
                <div className="grid relative">
                    <Image src={character.image ?? imgDefault} alt="" width="350" height="350" loading="eager"
                        className="max-w-72 object-cover object-top border-8 rounded-2xl border-gray-200
                bg-linear-175 from-blue-900 from-15% via-blue-700 via-65% to-sky-500 to-99%"
                    />
                    {
                        character.status == "DEAD" && <Image src={imgDeadStamp} alt="" width="100" height="100"
                            className="absolute -left-2 bg-gray-900/40 rounded-br-2xl rounded-tl-2xl backdrop-blur-xs h-auto w-auto scale-75"
                        />
                    }
                </div>
                <section className="self-center">
                    <table>
                        <tbody>
                            <tr><td>Name:</td><td className="px-2">{character.name}</td></tr>
                            <tr><td>Gender:</td><td className="px-2">{capFirstLetter(character.gender)}</td></tr>
                            <tr><td>Species:</td><td className="px-2">{capFirstLetter(character.species)}</td></tr>
                        </tbody>
                    </table>
                </section>
            </article>
            <Link href="/" className="self-start p-4 border-4 border-transparent hover:border-gray-100 duration-200 text-5xl">Take me back</Link>
        </main>
    )
}