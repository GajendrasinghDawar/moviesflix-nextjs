import { redirect } from 'next/navigation'

import { capitalize } from "lib/capitalize"
import { ResultPage } from "components/ResultPage"
import { getMovieData } from "lib/api"
import { views } from "lib/view"

export default async function MoviesViews({ params, searchParams }) {

    // if (!(params.view[0] in views && params.view[1] == undefined)) {
    //     redirect('/')
    // }

    let view = views[params.view]
    let page = searchParams.page || 1

    let { results, total_pages } = await getMovieData(view.endpoint, {
        page
    })

    let nextPage = parseInt(page) < total_pages ? parseInt(page) + 1 : null

    return (
        <Container>
            <div> <h1> {capitalize(params.view[0])}</h1></div>
            <div className='overflow-auto'>
                <ResultPage
                    movies={results}
                    nextPage={nextPage ? `/movies/${view}?page=${nextPage}` : null}
                />
            </div>
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
