import Image from "next/image"
import Link from "next/link"
import { getMedia } from "lib/api"

export function ResultPage({ movies, targetRef = undefined }) {
  return (
    <div className=" mb-8 h-full grid gap-2 grid-cols-imageGrid">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={crypto.randomUUID + movie.id}>
          <div className=" h-[250px]  max-h-[250px] relative   rounded-md overflow-hidden">
            <Image
              src={getMedia(movie.poster_path)}
              alt={movie.title}
              fill
              //   sizes="(min-width: 550px) 5vw,(min-width: 550px)  10vw"
              sizes="100%"
              className="h-auto object-fill "
            />
          </div>
        </Link>
      ))}
      {targetRef && (
        <div
          className="mb-7 w-36 h-36 bg-blue5 text-center rounded-md grid place-content-center"
          ref={targetRef}
        >
          <p className="font-bold text-sm">Loading More Data</p>
        </div>
      )}
    </div>
  )
}
