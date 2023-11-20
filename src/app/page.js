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
    <main className='md:w-9/12 w-full flex flex-col gap-2'>

      <Hero featuredMovie={featuredMovie} />

      <Carousel movies={trending} view={views.trending} />
      <Carousel movies={now_playing} view={views.now_playing} />
      <Carousel movies={upcoming} view={views.upcoming} />


    </main>
  )
}
