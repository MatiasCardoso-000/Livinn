import { Link, useNavigate } from "react-router-dom";

export interface Restaurants {
  id: number;
  name: string;
  location: string;
  rating: number;
  availability: boolean;
  comments: string[];
  description: string;
  image: string; // estilo elegante, luz cálida
  category: string;
  average_price: number;
}

export const RestaurantCard = (restaurant: Restaurants) => {
  const navigate = useNavigate();



  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <Link to={`/details/${restaurant.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-orange-600">
            {restaurant.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">{restaurant.location}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            ⭐{restaurant.rating}
          </span>
          <span className="text-sm text-orange-500">{restaurant.category}</span>
        </div>
        <p className="mt-3 text-sm text-gray-600">{restaurant.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800">
            ${restaurant.average_price}
          </span>
          <button
            onClick={() => {
              if (restaurant.availability) {
                navigate(`/reservation/${restaurant.id}`);
              }
            }}
            className={`px-3 py-1 rounded-md text-sm ${
              restaurant.availability
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {restaurant.availability ? "Reservar" : "No disponible"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
