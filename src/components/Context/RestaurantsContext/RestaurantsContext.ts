import { createContext } from 'react'
import type { Restaurant } from '../../../data/restaurants'

export interface RestaurantsContextValue {
  restaurants: Restaurant[]
}

export const RestaurantsContext = createContext<RestaurantsContextValue | undefined>(undefined)

 
