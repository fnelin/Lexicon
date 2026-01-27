import Image from "next/image";

export default function Home() {
  return (
    <main className="py-2 bg-linear-145 from-blue-900 from-75% via-blue-700 via-85% to-sky-500 to-99%">
      <article className="px-6 my-2 grid justify-center lg:grid-cols-2">
        <div className="px-2 my-2">
          <span className="text-2xl text-neutral-50">About time!</span>
          <h1 className="text-5xl leading-tight text-pretty font-bold text-neutral-100">
            Futurama <span className="line-through">might be</span> is back!
          </h1>
          <p className="text-neutral-100 text-pretty">Matt Groening's hilarious animated series about a pizza delivery man named Fry who is accidentally cryogenically frozen in 1999 and wakes up 1000 years later to a brave new world - that in some ways hasn't progressed much beyond the 20th century.</p> 
        </div> 
       <Image src="/futurama_hero.jpeg" 
          alt="" 
          width={1920} height={1080} 
          loading="eager"
          className="border-6 border-amber-50 rounded-md"
        />
      
      </article>
      <hr className="text-gray-100"/>
      <section className="text-gray-100">Card...</section>
    </main>
  );
}
