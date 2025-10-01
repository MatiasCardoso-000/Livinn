import type { Restaurants } from "../components/RestaurantCard/RestaurantCard"



export const useFilters = () => {

  const filterRestaurants = (restaurantes: Restaurants[], searchValue:string) => {
   return restaurantes.filter(res => {
      if(res.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
        return res
      }
    })
  }

 return {filterRestaurants}
}