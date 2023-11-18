import Link from "next/link"
import { logoFont } from "../fonts"
export function Navbar() {
  return (
    //bg-gradient-to-r from-red2 to-red3
    <div className="bg-gradient-to-r from-red2 to-red3 min-h-[60px] border-b border-red5   md:flex md:justify-center sticky top-0 w-full z-10 ">
      <nav className="md:w-9/12 flex  items-center justify-center min-h-full w-full px-2 md:px-0 bg-inherit">
        <Link
          href={"/"}
          className={`text-red11 font-extrabold italic no-underline sm:text-2xl ${logoFont.className} cursor-pointer select-none`}
        >
          Moviesflix
        </Link>
        <ul className="ml-auto flex gap-2">
          <li>search</li>
          <li>watchlist</li>
          <li>login</li>
        </ul>
      </nav>
    </div>
  )
}
