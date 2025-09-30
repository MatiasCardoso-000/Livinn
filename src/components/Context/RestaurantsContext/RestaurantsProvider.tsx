import React from 'react'
import { RestaurantsContext } from './RestaurantsContext'
import RESTAURANTS from '../../../data/restaurants'

export const RestaurantsProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: RESTAURANTS }}>
      {children}
    </RestaurantsContext.Provider>
  )
}

export default RestaurantsProvider
