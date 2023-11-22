"use client"

import { useEffect, useRef, useState, startTransition } from "react"
import { useInView } from "hooks/useInView"
import { fetchMovies } from "lib/actions"

import { ResultPage } from "./ResultPage"

export function InfiniteScrollMovies({
  initialMovies = [],
  endpoint,
  total_pages,
}) {
  const [movies, setMovies] = useState(initialMovies)
  const [page, setPage] = useState(1)

  let rootRef = useRef()

  let [isOnScreen, targetRef] = useInView({ root: rootRef.current })

  async function loadMoreMovies() {
    const nextPage = page < total_pages ? page + 1 : null
    const { results } = await fetchMovies(`${endpoint}`, nextPage)

    startTransition(() => {
      setPage(nextPage)
      setMovies((prev) => {
        return [...prev, ...results]
      })
    })
  }

  useEffect(() => {
    if (isOnScreen) {
      loadMoreMovies()
    }
  }, [isOnScreen])

  return (
    <div
      className="overflow-auto relative shadow-inner py-2 rounded"
      ref={rootRef}
    >
      <ResultPage movies={movies} targetRef={targetRef} />
    </div>
  )
}
