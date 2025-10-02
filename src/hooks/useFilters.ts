import type { Restaurants } from "../types/restaurantes.type";

export const useFilters = () => {
  const filterRestaurants = (
    restaurantes: Restaurants[],
    searchRestaurant: string,
    searchForCapacity: number,
    searchForCategory: string,
    searchForPrice: number,
    isAvailable: boolean,
    setSearchCity: string
  ) => {
    return restaurantes.filter((res) => {
      const matchesName = res.name
        .toLocaleLowerCase()
        .includes(searchRestaurant.toLocaleLowerCase());
      const matchesCapacity = res.capacity >= searchForCapacity;
      const matchesCategory = res.category
        .toLocaleLowerCase()
        .includes(searchForCategory.toLocaleLowerCase());
      const matchesPrice = res.average_price >= searchForPrice;
      const matchesIsAvailable = isAvailable ? res.availability : res;
      const matchesCity = res.location
        .toLocaleLowerCase()
        .includes(setSearchCity.toLocaleLowerCase());

      



      return (
        matchesName &&
        matchesCapacity &&
        matchesCategory &&
        matchesPrice &&
        matchesIsAvailable &&
        matchesCity
      );
    });
  };

  return { filterRestaurants };
};
