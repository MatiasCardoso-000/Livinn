import { Aside, RestaurantCard } from "../../components/index";
import { useSearch, useFilters} from "../../hooks/index";

export const RestaurantsList = () => {

  const saved = localStorage.getItem('restaurants')

  const storeRestaurants = saved ? JSON.parse(saved) : []


  const { filterRestaurants } = useFilters();
  const {
    searchRestaurant,
    searchForCapacity,
    searchForCategory,
    searchForPrice,
    isAvailable,
    searchCity,
  } = useSearch();
  const filteredRestaurants = filterRestaurants(
    storeRestaurants,
    searchRestaurant,
    searchForCapacity,
    searchForCategory,
    searchForPrice,
    isAvailable,
    searchCity
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      <Aside />
      <main className="w-full ">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Restaurantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((r) => <RestaurantCard key={r.id} {...r} />)
          ) : (
            <div className="w-full text-4xl">No hay resultados</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default RestaurantsList;
