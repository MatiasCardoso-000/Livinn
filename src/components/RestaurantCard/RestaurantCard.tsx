import React from 'react'
import type { Restaurant } from '../../data/restaurants'

type Props = {
  restaurant: Restaurant
}

export const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-blue-50">
      <img src={restaurant.imagen} alt={restaurant.nombre} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-800">{restaurant.nombre}</h3>
        <p className="text-sm text-blue-600">{restaurant.ubicacion}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-700">⭐{restaurant.rating}</span>
          <span className="text-sm text-blue-500">{restaurant.categoria}</span>
        </div>
        <p className="mt-3 text-sm text-blue-600">{restaurant.descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-blue-800">${restaurant.precio_promedio}</span>
          <button className={`px-3 py-1 rounded-md text-sm ${restaurant.disponibilidad ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            {restaurant.disponibilidad ? 'Reservar' : 'No disponible'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default RestaurantCard
