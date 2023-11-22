import { MovieHero } from "components/MovieHero"

export function DescritionList({ title, movie, overview, data }) {
  let detail = Object.entries(data)
  return (
    <div className="w-full h-full">
      <div class="px-4 sm:px-0 flex flex-col gap-3 sm:flex-row h-min">
        <div>
          <h3 class="">{title}</h3>
          <p class="mt-1 max-w-2xl ">{overview}</p>
        </div>
        <div className="">
          <MovieHero featuredMovie={movie} />
        </div>
      </div>
      <div class="mt-6 border-t border-gray3">
        <dl class="divide-y divide-gray5">
          {detail.map((arr, index) => {
            return (
              <div
                key={arr[0]}
                class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
              >
                <dt class="text-sm font-medium leading-6 text-gray12">
                  {arr[0]}
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray11 sm:col-span-2 sm:mt-0">
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
