import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { Restaurants } from '../../RestaurantCard/RestaurantCard'
import type { Reservation } from './RestaurantsProvider'

export interface RestaurantsContextValue {
  restaurants: Restaurants[],
  reservations: Reservation[],
  setReservations: Dispatch<SetStateAction<Reservation[]>>
  handleReservations: (reservation:Reservation) => void
}

export const RestaurantsContext = createContext<RestaurantsContextValue | undefined>(undefined)

 
