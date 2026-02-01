import Image from "next/image";
import Link from "next/link";
import imgDefault from "@/../public/default.jpg";
import imgDeadStamp from "@/../public/dead_stamp.png";


export default function GridCard({id, name, imgStr, itemStatus}:{id:number, name:string, imgStr:string | null, itemStatus:string|null}){

  return (
    <article className="relative">
      <Link href={`/character/${id}`} className="cursor-pointer" prefetch={false}>
      <h3 className="absolute bottom-0 left-0 right-0 text-center font-bold font-josefin
              px-6 py-1 backdrop-blur-sm bg-gray-900/60 text-gray-100">
              {name}
      </h3>
      <Image src={imgStr ?? imgDefault} alt="" width="200" height="200" 
      className="w-full aspect-square object-cover object-top rounded-t-xl" />
      {
      itemStatus=="DEAD" && 
      <Image src={imgDeadStamp} alt="" width="100" height="100" 
      className="absolute -top-2 -left-4 bg-gray-900/40 rounded-br-2xl backdrop-blur-xs h-auto w-auto scale-75" />
      }
      </Link>
    </article>
  );
}