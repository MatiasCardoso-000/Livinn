import { useContext } from 'react'
import { RestaurantsContext } from '../Context/RestaurantsContext/RestaurantsContext'

export const useRestaurants = () => {
  const ctx = useContext(RestaurantsContext)
  if (!ctx) throw new Error('useRestaurants must be used within RestaurantsProvider')
  return ctx
}

export default useRestaurants
