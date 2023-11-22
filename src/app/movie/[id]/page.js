import { Carousel } from "@/app/_components/Carousel";
import { MovieHero } from "components/MovieHero";
import { getMovieData } from "lib/api"
import { DescritionList } from "components/DescriptionList";

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
            <div className="w-full  h-full">
                <div className="mt-5">
                    <iframe src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={'youtube video player'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className=" aspect-video w-full rounded-md mb-8"
                    />
                </div>
                <div>
                    <DescritionList
                        title={movie.title}
                        overview={movie.overview}
                        movie={movie}
                        data={{
                            release_date: movie.release_date,
                            runtime: `${movie.runtime} minutes`,
                            budget: `\$${Math.round(movie.budget / 1e6)}M`,
                            revenue: `\$${Math.round(movie.revenue / 1e6)}M`,
                            genres: movie.genres?.map((g) => g.name).join(', ')
                        }}
                    />
                </div>
                {recommendations.length > 0
                    && (
                        <section className="my-4 min-h-36 w-full">
                            <Carousel view={{ title: "You might also like..." }} movies={recommendations} />
                        </section>
                    )
                }
            </div>
        </Container >
    )
}

function Container({ children }) {
    return (
        <div className='flex-1 md:flex md:justify-center px-2 md:px-0 h-0 overflow-y-auto'>
            <div className="md:w-9/12 sm:w-full w-full  h-full">{children}</div>
        </div>
    )
}