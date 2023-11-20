import { getMovieData, } from 'lib/api'
import { Hero } from 'components/Hero'
import { Carousel } from 'components/Carousel'
import { views } from 'lib/view'

export default async function Home() {

  let { results: trending } = await getMovieData(views.trending.endpoint)
  let { results: now_playing } = await getMovieData(views.now_playing.endpoint)
  let { results: upcoming } = await getMovieData(views.upcoming.endpoint)

  var featuredMovie = trending[0]

  return (
    <Container>
      <main className='flex flex-col gap-2'>
        <Hero featuredMovie={featuredMovie} />
        <Carousel movies={trending} view={views.trending} />
        <Carousel movies={now_playing} view={views.now_playing} />
        <Carousel movies={upcoming} view={views.upcoming} />
      </main>
    </Container>

  )
}
function Container({ children }) {
  return (
    <div className='flex-1 md:flex md:justify-center px-2 md:px-0 h-0'>
      <div className="md:w-9/12 w-full px-2 md:px-0">{children}</div>
    </div>
  )
}



