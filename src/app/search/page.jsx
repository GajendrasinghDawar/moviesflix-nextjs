import { SearchInput } from "components/SearchInput"
import { getMovieData } from "lib/api"
import { ResultPage } from "components/ResultPage"

export default async function SearchPage({ searchParams }) {
  let query = searchParams.query || ""

  let { results, total_pages } = await getMovieData(`search/movie`, {
    query,
  })

  let movies = results.filter((movie) => movie.poster_path != null)

  return (
    <Container>
      <div className="flex flex-col gap-2 h-full">
        <div className="ml-auto mr-auto sm:ml-0 md:ml:0 md:mr-0 sm:mr-0 flex flex-col sm:flex-row md:flex-row sm:justify-between md:justify-between lg:justify-between sm:items-center">
          <div>
            <h1>Search page</h1>
          </div>
          <SearchInput />
        </div>
        <div className="flex-1 overflow-y-auto shadow-inner py-2 rounded">
          <ResultPage movies={movies} />
        </div>
      </div>
    </Container>
  )
}

function Container({ children }) {
  return (
    <div className="flex-1 md:flex md:justify-center px-2 md:px-0 h-0  mt-4">
      <div className="md:w-9/12 w-full px-2 md:px-0 h-full">{children}</div>
    </div>
  )
}
