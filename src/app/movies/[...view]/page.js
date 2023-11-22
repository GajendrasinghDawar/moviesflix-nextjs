import { capitalize } from "lib/capitalize"
import { views } from "lib/view"
import { InfiniteScrollMovies } from "components/InfiniteScrollMovies"
import { getMovieData } from "lib/api"

export default async function MoviesViews({ params, searchParams }) {

    let view = views[params.view]
    let page = searchParams.page || 1

    let { results, total_pages } = await getMovieData(view.endpoint,
        {
            page
        }
    )

    return (
        <Container>
            <div className="mt-4
            mb-3  w-full">
                <h1 className="w-full">
                    {capitalize(params.view[0])}
                </h1>
            </div>
            <InfiniteScrollMovies
                initialMovies={results}
                endpoint={view.endpoint}
                total_pages={total_pages}
            />
        </Container>

    )
}

function Container({ children }) {
    return (
        <main className='flex-1 ml-auto mr-auto   h-0 overflow-y-auto md:w-9/12  flex flex-col w-full px-2 md:px-0 '>
            {children}
        </main>
    )
}
