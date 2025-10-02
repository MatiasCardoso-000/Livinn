import {Aside,RestaurantCard} from '../../components/index'
import {useSearch,useFilters,useRestaurants} from '../../hooks/index'

export const RestaurantsList = () => {
  const { restaurants } = useRestaurants();
  const { filterRestaurants } = useFilters();
  const { searchRestaurant, searchForCapacity ,searchForCategory,searchForPrice} = useSearch();
  const filteredRestaurants = filterRestaurants(
    restaurants,
    searchRestaurant,
    searchForCapacity,
    searchForCategory,
    searchForPrice
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      <Aside />
      <main className="w-full ">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Restaurantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRestaurants.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default RestaurantsList;
