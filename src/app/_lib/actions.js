'use server'

import { getMovieData } from "lib/api"

export async function fetchMovies
    (endpoint = '',
        nextPage = 1) {
    let { results, total_pages } = await getMovieData(endpoint,
        {
            page: nextPage
        }
    )
    return { results }

}