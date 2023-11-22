import Image from "next/image"
import { getImageBackDrops, getMedia } from "lib/api"

export async function Hero({ featuredMovie }) {
  let imageBackdrop = await getImageBackDrops(featuredMovie.id)

  let backdrop = imageBackdrop.backdrops.find((image) => !image.iso_639_1)

  let logo = imageBackdrop.logos.find((logo) => logo.iso_639_1 == "en")

  return (
    <div className="w-full relative my-2">
      <h1 className="mr-auto mb-4 ">Top trending movies</h1>
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
      <Image
        src={getMedia(backdrop.file_path)}
        width={1000}
        height={1000}
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
