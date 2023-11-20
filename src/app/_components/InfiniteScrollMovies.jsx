"use client"

import { useEffect, useState } from "react"
import { useInView } from "hooks/useInView"
import { fetchMovies } from "lib/actions"

import { ResultPage } from "./ResultPage"

export function InfiniteScrollMovies({ initialMovies = [], endpoint }) {
  const [movies, setMovies] = useState(initialMovies)
  const [page, setPage] = useState(1)
  //   const [ref, inView] = useInView({root:})

  async function loadMoreMovies() {
    const nextPage = page + 1
    const movies = await fetchMovies(`${endpoint}`, nextPage)

    if (movies?.length) {
      setPage(next)
      setMovies((prev) => {
        return [...prev, ...movies]
      })
    }
  }

  //   useEffect(() => {
  //     if (inView) {
  //       loadMoreMovies()
  //     }
  //   }, [inView])

  return (
    <div className="overflow-auto">
      <ResultPage movies={movies} />
    </div>
  )
}
