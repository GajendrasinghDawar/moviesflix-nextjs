"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

import { useDebouncedCallback } from "use-debounce"

export function SearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  let handleSearch = useDebouncedCallback(function (term) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="flex">
      <input
        className="bg-red3 hover:bg-red4 text-red12 border border-red7 hover:border-red8 rounded-md p-2 my-2 focus:outline-none"
        placeholder="search movie"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  )
}
