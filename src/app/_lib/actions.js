'use server'

import { getMovieData } from "lib/api"

export async function fetchMovies(endpoint = '', page = 1) {

    let { results, total_pages } = await getMovieData(endpoint,
        {
            page
        }
    )

    return { results }


    // let nextPage = parseInt(page) < total_pages ? parseInt(page) + 1 : null

    // await fetchMovies(`${view.endpoint}?page=${nextPage}`, nextPage)


    // https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=f75a8571e4fb58f93e338ba68ef145a0

}