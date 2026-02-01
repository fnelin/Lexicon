import Image from "next/image";
import imgHeroFuturama from "@/../public/futurama_hero.jpeg";

export default function HeroBanner(){

    return(
      <article className="px-6 grid justify-center md:grid-cols-2 items-stretch
                          bg-linear-175 from-blue-900 from-15% via-blue-700 via-65% to-sky-500 to-99% 
                          ">
        <div className="px-2 my-2 font-josefin">
          <span className="text-2xl text-neutral-50">About time!</span>
          <h1 className="text-5xl leading-tight text-pretty font-bold text-neutral-100 font-geist">
            Futurama <span className="line-through">might be</span> is back!
          </h1>
          <p className="text-neutral-100 text-pretty">Matt Groening's hilarious animated series about a pizza delivery man named Fry who is accidentally cryogenically frozen in 1999 and wakes up 1000 years later to a brave new world - that in some ways hasn't progressed much beyond the 20th century.</p> 
        </div> 
       <Image src={imgHeroFuturama} 
          alt=""
          placeholder="blur"
          width={1920} height={1080} 
          loading="eager"
          className="my-2 border-6 border-gray-100 rounded-md shadow-gray-400 
                    object-cover object-top-right aspect-auto w-200"
        />
      
      </article>
        
    )

}