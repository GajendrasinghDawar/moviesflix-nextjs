import { capitalize } from "lib/capitalize"
import { ResultPage } from "components/ResultPage"
import { getMovieData } from "lib/api"
import { views } from "lib/view"

export default async function MoviesViews({ params, searchParams }) {

    let view = views[params.view]
    let page = searchParams.page || 1

    let { results, total_pages } = await getMovieData(view.endpoint, {
        page
    })

    let nextPage = parseInt(page) < total_pages ? parseInt(page) + 1 : null

    return (
        <div className='md:max-w-9/12 md:w-9/12 h-full flex flex-col gap-2 '>
            <h1> {capitalize(params.view[0])}</h1>
            <div>
                <ResultPage movies={results}
                    next={nextPage ? `/movies/${view}?page=${nextPage}` : null} />
            </div>
        </div>
    )
} 