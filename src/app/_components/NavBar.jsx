import Link from "next/link"
import { logoFont } from "../fonts"
import { SearchLink } from "./SearchLink"
export function Navbar() {
  return (
    <Container>
      <nav className="flex items-center min-h-full w-full px-2 ">
        <Link
          href={"/"}
          className={`text-red11  -mx-2  font-extrabold italic no-underline text-xl md:text-3xl drop-shadow ${logoFont.className} cursor-pointer select-none block h-full`}
        >
          Moviesflix
        </Link>
        <SearchLink />
      </nav>
    </Container>
  )
}

function Container({ children }) {
  return (
    <div className="bg-gradient-to-r from-red2 to-red3 min-h-[60px] border-b border-red5   md:flex md:justify-center sticky top-0 w-full z-10  ">
      <div className="md:w-9/12 w-full px-2 md:px-0 h-full">{children}</div>
    </div>
  )
}
