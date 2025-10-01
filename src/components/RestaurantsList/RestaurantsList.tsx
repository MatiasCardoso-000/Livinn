import RestaurantCard from '../RestaurantCard/RestaurantCard'
import useRestaurants from '../../hooks/useRestaurants'
import { useFilters } from '../../hooks/useFilters'
import useSearch from '../../hooks/useSearch'

export const RestaurantsList = () => {



  const {restaurants} = useRestaurants()
  const {filterRestaurants} = useFilters()
  const {searchValue} = useSearch()
  const filteredRestaurants = filterRestaurants(restaurants, searchValue)

  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">Restaurantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((r) => (
          <RestaurantCard key={r.id} {...r} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantsList
