import Link from "next/link";

const menu = [
  {title:"Home", href:"/"},
  {title:"About", href:"/about"},
  {title:"Contact", href:"/contact"},
]

const renderMenu = () => {
  return menu.map((item, index)=>
  <li key={index}>
    <Link className="hover:text-sky-700 transition-colors" href={item.href}>
    {item.title}
    </Link>
  </li>)
}

export default function MainNavigation() {
  return (
    <div className="flex items-center justify-around p-2 border-b sticky top-0 bg-neutral-100/60 backdrop-blur-sm font-bold">
      <Link href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Futurama_1999_logo.svg" width="100" height="50"/></Link>
      <ul className="flex gap-8">
      {
       renderMenu()
      }
      </ul>
    </div>
  );
}
