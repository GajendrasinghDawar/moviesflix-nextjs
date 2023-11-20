import Link from "next/link"
import { logoFont } from "../fonts"

export function Navbar() {
  return (
    <Container>
      <nav className="flex  items-center justify-center min-h-full">
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
    </Container>
  )
}

function Container({ children }) {
  return (
    <div className="bg-gradient-to-r from-red2 to-red3 h-[60px] border-b border-red5   md:flex md:justify-center sticky top-0 w-full z-10  ">
      <div className="md:w-9/12 w-full px-2 md:px-0">{children}</div>
    </div>
  )
}
