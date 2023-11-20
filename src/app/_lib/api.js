export const apiUrl = "https://api.themoviedb.org/3"
export const apiImgUrl = "https://image.tmdb.org/t/p"

var options = {
    headers: {
        Authorization: `Bearer ${process.env.MOVIES_DB_ACCESS_TOKEN}`
    },
}

export async function getMovieData(endpoint, queryParams = {}) {
    const q = new URLSearchParams(queryParams)
    const url = `${apiUrl}/${endpoint}?${q}`
    const response = await fetch(url, options)

    if (!response.ok) {
        throw Error(response.status)
    }
    const data = await response.json()
    return data
}

export function getMedia(file_path, file_size = 'original',) {
    const url = `${apiImgUrl}/${file_size}${file_path}`
    return url

}

export async function getImageBackDrops(movieID) {
    const url = `${apiUrl}/movie/${movieID}/images`
    let response = await fetch(url, options)
    const data = await response.json()
    return data
}