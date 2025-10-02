import {  useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import useRestaurants from '../../hooks/useRestaurants';


export const ReservationConfirmation = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const reservation = location.state as ReservationDetails;
  const {reservations} = useRestaurants()

  const reservation  = reservations.find(r=> r)

  if (!reservation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            No se encontró información de la reserva
          </h2>
          <Button
            onClick={() => navigate('/')}
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Reserva Confirmada!
          </h2>
          <p className="text-gray-600">
            Tu reserva ha sido registrada exitosamente
          </p>
        </div>

        <div className="border-t border-b border-gray-200 py-6 mb-8">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Restaurante</dt>
              <dd className="text-sm text-gray-900 col-span-2">{reservation.restaurantName}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Fecha</dt>
              <dd className="text-sm text-gray-900 col-span-2">
                {new Date(reservation.date + 'T00:00:00').toLocaleDateString('es-AR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Hora</dt>
              <dd className="text-sm text-gray-900 col-span-2">{reservation.time}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Personas</dt>
              <dd className="text-sm text-gray-900 col-span-2">{reservation.people}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Código de reserva</dt>
              <dd className="text-sm font-mono text-gray-900 col-span-2">
                {reservation.reservationId}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => {
              // Aquí podrías agregar lógica para descargar o enviar por email
              console.log('Descargando confirmación...');
            }}
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Descargar confirmación
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;