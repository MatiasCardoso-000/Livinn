import React from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import RESTAURANTS from '../../data/restaurants'

export const RestaurantsList: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">Restaurantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESTAURANTS.map((r) => (
          <RestaurantCard key={r.nombre} restaurant={r} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantsList
