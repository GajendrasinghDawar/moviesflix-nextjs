import { capitalize } from "lib/capitalize"
import { views } from "lib/view"
import { InfiniteScrollMovies } from "components/InfiniteScrollMovies"
import { fetchMovies } from "lib/actions"


export default async function MoviesViews({ params, searchParams }) {

    let view = views[params.view]
    let page = searchParams.page || 1

    let { results } = await fetchMovies(view.endpoint, page)

    return (
        <Container>
            <div>
                <h1>
                    {capitalize(params.view[0])}
                </h1>
            </div>
            <InfiniteScrollMovies
                initialMovies={results}
                endpoint={view.endpoint}
            />
        </Container>

    )
}

function Container({ children }) {
    return (
        <main className='flex-1 ml-auto mr-auto border  h-0 overflow-y-auto md:w-9/12  flex flex-col w-full px-2 md:px-0 '>
            {children}
        </main>
    )
}
