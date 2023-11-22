import Image from "next/image"
import { getImageBackDrops, getMedia } from "lib/api"

export async function MovieHero({ featuredMovie, title = undefined }) {
  let images = await getImageBackDrops(featuredMovie.id)

  let backdrop = images.backdrops.find((image) => !image.iso_639_1)

  let logo = images.logos.find((logo) => logo.iso_639_1 == "en")

  return (
    <div className="relative">
      {logo && (
        <Image
          src={getMedia(logo.file_path)}
          width={300}
          height={200}
          alt="logo image"
          priority
          style={{
            aspectRatio: logo.aspect_ratio,
          }}
          className={`w-36 md:w-96 h-auto object-contain absolute top-1/2 left-2 drop-shadow-2xl`}
        />
      )}
      <Image
        src={getMedia(backdrop.file_path)}
        width={300}
        height={200}
        alt="hero image"
        priority
        style={{
          aspectRatio: backdrop.aspect_ratio,
        }}
        className="w-full h-auto rounded-md "
      />
    </div>
  )
}
