import Image from "next/image"
import { getMedia } from "lib/api"
import Link from "next/link"

export async function Carousel({ movies, view }) {
  return (
    <>
      <div className="h-12 flex items-center justify-between">
        <h2>{view.title}</h2> <Link href={view.url}>See All</Link>
      </div>
      <div className="flex overflow-y-hidden  snap-x overflow-x-scroll  gap-1  snap-mandatory scroll-pl-10 py-1 mb-2">
        {movies.map((movie) => {
          return (
            <Link key={movie.title} href={"#"}>
              <div className="min-h-[200px]  max-h-[150px] min-w-[150px] max-w-[150px] block relative snap-center">
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
