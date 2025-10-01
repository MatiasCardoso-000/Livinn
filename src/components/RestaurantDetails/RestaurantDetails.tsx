import { useParams } from "react-router-dom";
import useRestaurants from "../../hooks/useRestaurants";

export const RestaurantDetails= () => {
  
  const {id} = useParams()
  const {restaurants} = useRestaurants()
  const restaurant = restaurants.find(res => res.id === Number(id))

  
  if (!restaurant) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Cerrar detalles"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Restaurant Image */}
          <div className="mb-6">
            <img
              src={restaurant.imagen}
              alt={restaurant.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Restaurant Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{restaurant.nombre}</h2>
            
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span className="text-gray-700">{restaurant.rating}</span>
              <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
                restaurant.disponibilidad
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {restaurant.disponibilidad ? 'Disponible' : 'No disponible'}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-600">
              <p>
                <span className="font-semibold">Ubicación:</span> {restaurant.ubicacion}
              </p>
              <p>
                <span className="font-semibold">Categoría:</span> {restaurant.categoria}
              </p>
              <p>
                <span className="font-semibold">Precio promedio:</span>{' '}
                ${restaurant.precio_promedio.toLocaleString()}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700">{restaurant.descripcion}</p>
            </div>

            {/* Comments section */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-xl font-semibold mb-3">Comentarios</h3>
              <div className="space-y-2">
                {restaurant.comentarios.map((comentario:string, index:string) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 rounded-lg"
                  >
                    {comentario}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};