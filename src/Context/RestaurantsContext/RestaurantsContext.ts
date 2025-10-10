import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { Restaurants } from '../../../types/restaurantes.type'
import type { ReservationDetails } from '../../../types/reservationDetail.types'

export interface RestaurantsContextValue {
  restaurants: Restaurants[],
  reservations: ReservationDetails[],
  setReservations: Dispatch<SetStateAction<ReservationDetails[]>>
  handleReservations: (reservation:ReservationDetails) => void
}

export const RestaurantsContext = createContext<RestaurantsContextValue | undefined>(undefined)

 
