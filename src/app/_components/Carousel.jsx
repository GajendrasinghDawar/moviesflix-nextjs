import Image from "next/image"
import { getMedia } from "lib/api"
import Link from "next/link"

export async function Carousel({ movies, view }) {
  return (
    <>
      <div className="h-12 flex items-center justify-between">
        <h2>{view.title}</h2> {view.url && <Link href={view.url}>See All</Link>}
      </div>
      <div className="flex overflow-y-hidden  snap-x overflow-x-scroll  gap-1  snap-mandatory scroll-pl-10 mb-2 shadow-inner py-2 rounded">
        {movies.map((movie) => {
          return (
            <Link href={`/movie/${movie.id}`} key={movie.title}>
              <div className="min-h-[200px]  max-h-[150px] min-w-[150px] max-w-[150px] block relative snap-center rounded-md overflow-hidden">
                <Image
                  src={getMedia(movie.poster_path, "w300")}
                  alt={movie.title}
                  fill
                  sizes="100%"
                  className={` object-fill `}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
