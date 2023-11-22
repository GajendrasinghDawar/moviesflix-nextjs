import Link from "next/link"

export function SearchLink() {
  return (
    <Link
      href={"/search"}
      className="ml-auto  gap-2  no-underline border flex items-center justify-center px-2 py-1 rounded-md cursor-pointer select-none hover:bg-red4 border-none h-[28px] mt-[3px] md:h-full"
    >
      <SearchIcon />
      <p className="h-6">search</p>
    </Link>
  )
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 stroke-2	"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}
