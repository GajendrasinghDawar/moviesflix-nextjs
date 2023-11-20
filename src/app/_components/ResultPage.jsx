import Image from "next/image"
import Link from "next/link"
import { getMedia } from "lib/api"

export function ResultPage({ movies }) {
  return (
    <div className=" mb-8 h-full grid gap-2 grid-cols-imageGrid ">
      {movies.map((movie) => (
        <Link href={""} key={movie.id}>
          <div className=" h-[250px] max-h-[250px] relative ">
            <Image
              src={getMedia(movie.poster_path, "w342")}
              alt={movie.title}
              fill
              //   sizes="(min-width: 550px) 5vw,(min-width: 550px)  10vw"
              sizes="100%"
              className="h-auto object-contain"
            />
          </div>
        </Link>
      ))}
      <div className="mb-7 w-36 h-8 bg-blue5"></div>
    </div>
  )
}
