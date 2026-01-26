import Link from "next/link";

export default function MainNavigation() {
  return (
    <div className="flex justify-around p-2 border-b sticky top-0 bg-neutral-100/60 backdrop-blur-sm font-bold">
      <Link href="/">Logga</Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
             <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
