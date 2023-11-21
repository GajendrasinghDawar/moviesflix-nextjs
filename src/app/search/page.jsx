import { SearchInput } from "components/SearchInput"
import { getMovieData } from "lib/api"
import { ResultPage } from "components/ResultPage"

export default async function SearchPage({ searchParams }) {
  let query = searchParams.query || ""

  let { results, total_pages } = await getMovieData(`search/movie`, {
    query,
  })

  return (
    <Container>
      <div className="flex flex-col gap-2 h-full">
        <div className="flex justify-between">
          <div>
            <h1>Search page</h1>
          </div>
          <SearchInput />
        </div>
        <div className="border-t border-red5 py-2 flex-1 overflow-y-auto">
          <ResultPage movies={results} />
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
