import { MovieHero } from "components/MovieHero"

export function DescritionList({ title, movie, overview, data }) {
  let detail = Object.entries(data)
  return (
    <div className="w-full h-full">
      <div className="px-4 sm:px-0 flex flex-col gap-3 sm:flex-row h-min">
        <div>
          <h3 className="">{title}</h3>
          <p className="mt-1 max-w-2xl ">{overview}</p>
        </div>
        <div className="">
          <MovieHero featuredMovie={movie} />
        </div>
      </div>
      <div className="mt-6 border-t border-gray3">
        <dl className="divide-y divide-gray5">
          {detail.map((arr, index) => {
            return (
              <div
                key={arr[0]}
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              >
                <dt className="text-sm font-medium leading-6 text-gray12">
                  {arr[0]}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray11 sm:col-span-2 sm:mt-0">
                  {arr[1]}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </div>
  )
}
