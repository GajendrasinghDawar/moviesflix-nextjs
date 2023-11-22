import { Carousel } from "@/app/_components/Carousel";
import { MovieHero } from "components/MovieHero";
import { getMovieData } from "lib/api"

export default async function Page({ params, }) {

    let movie = await getMovieData(`movie/${params.id}`, {
        append_to_response: "images,videos,recommendations,",
    })
    const trailer = movie.videos.results.find((video) => {
        return (

            video.site === 'YouTube' &&
            (video.type === 'Trailer' || video.type === 'Teaser')
        );
    });
    let recommendations = movie.recommendations.results

    return (
        <Container>
            <div className="flex flex-col  h-full">

                <MovieHero featuredMovie={movie} />
                <section className={`flex relative  flex-col -mt-28 z-10  `}>

                    <div className=" z-10 after:content-[''] after:bg-gradient-to-t after:from-red9   after:w-full after:absolute after:h-full ] rounded-b-lg " />
                    <h2 className="m-0 text-red11 drop-shadow-md">{movie.title}</h2>
                    <p className="m-0 text-gray3 ">{movie.overview}</p>

                </section>
                <section className="flex w-full">
                    <iframe src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={'youtube video player'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="flex1"
                    />
                    <div className="mt-2 flex-1 w-1/2">
                        <dl className="data space-x-4 space-y-4">
                            <dt>Released</dt>
                            <dd>{movie.release_date}</dd>

                            <dt>Runtime</dt>
                            <dd>{movie.runtime} minutes</dd>

                            <dt>Budget</dt>
                            <dd>${Math.round(movie.budget / 1e6)}M</dd>

                            <dt>Revenue</dt>
                            <dd>${Math.round(movie.revenue / 1e6)}M</dd>

                            <dt>Genre</dt>
                            <dd className="genres">{movie.genres?.map((g) => g.name).join(', ')}</dd>
                        </dl>
                    </div>
                </section>
                <section className="mt-4">
                    <Carousel view={{ title: "You might also like..." }} movies={recommendations} />
                </section>
            </div>
        </Container >
    )
}

function Container({ children }) {
    return (
        <div className='flex-1 md:flex md:justify-center px-2 md:px-0 h-0 overflow-y-auto'>
            <div className="md:w-9/12 w-full px-2 md:px-0 h-full">{children}</div>
        </div>
    )
}