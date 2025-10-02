import { Link } from 'react-router-dom';
import { useRestaurants } from '../../hooks';

export const UserReservations = () => {
  const { reservations } = useRestaurants();
  const storagedUser = JSON.parse(localStorage.getItem("user") || '""');

  // Filtra las reservas para el usuario actual
  const userReservations = reservations.filter(
    (reservation) => reservation.customerEmail === storagedUser
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Mis Reservas
        </h1>

        {userReservations.length > 0 ? (
          <div className="space-y-6">
            {userReservations.map((reservation) => (
              <div
                key={reservation.reservationId}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-transform hover:scale-[1.02]"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h2 className="text-xl font-semibold text-orange-600">
                    {reservation.restaurantName}
                  </h2>
                  <span className="text-sm font-mono text-gray-500 mt-2 sm:mt-0 bg-gray-100 px-2 py-1 rounded">
                    ID: {reservation.reservationId}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-500">Fecha</p>
                    <p className="text-gray-800">{new Date(reservation.date + 'T00:00:00').toLocaleDateString('es-AR')}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Hora</p>
                    <p className="text-gray-800">{reservation.time} hs</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Personas</p>
                    <p className="text-gray-800">{reservation.people}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-10 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              Aún no tienes ninguna reserva.
            </p>
            <Link
              to="/"
              className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              Explorar restaurantes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReservations;