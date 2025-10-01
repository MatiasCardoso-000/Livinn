import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useRestaurants from '../../hooks/useRestaurants';
import Button from '../Button/Button';

const ReservationSchema = Yup.object().shape({
  date: Yup.string().required('La fecha es requerida'),
  time: Yup.string().required('La hora es requerida'),
  people: Yup.number()
    .required('El número de personas es requerido')
    .min(1, 'Mínimo 1 persona')
    .max(20, 'Máximo 20 personas'),
  name: Yup.string().required('Tu nombre es requerido'),
  email: Yup.string().email('Email inválido').required('El email es requerido'),
  phone: Yup.string().required('El teléfono es requerido'),
});

export const RestaurantReservation: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurants ,setReservations} = useRestaurants();
  const restaurant = restaurants.find(res => res.id === Number(id));

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Restaurante no encontrado
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

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 11; hour <= 23; hour++) {
      for (const minute of ['00', '30']) {
        slots.push(`${hour}:${minute}`);
      }
    }
    return slots;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Restaurant Info Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {restaurant.name}
            </h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">⭐</span>
              <span className="ml-1 text-gray-700">{restaurant.rating}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">{restaurant.category}</span>
            </div>
            <p className="text-gray-600 mb-4">{restaurant.description}</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Ubicación:</span> {restaurant.location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Precio promedio:</span> ${restaurant.average_price}
              </p>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Hacer una reserva</h2>
          <Formik
            initialValues={{
              date: '',
              time: '',
              people: 2,
              name: '',
              email: '',
              phone: '',
              specialRequests: '',
            }}
            validationSchema={ReservationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Generar ID único para la reserva
              const reservationId = `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
              
              // Crear objeto con detalles de la reserva
              const reservationDetails = {
                restaurantName: restaurant.name,
                date: values.date,
                time: values.time,
                people: values.people,
                reservationId,
                customerName: values.name,
                customerEmail: values.email,
                customerPhone: values.phone,
                specialRequests: values.specialRequests,
              };

              // Navegar a la página de confirmación
              navigate('/reservation-confirmation');
              setReservations([reservationDetails])
              setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha
                    </label>
                    <Field
                      name="date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.date && touched.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hora
                    </label>
                    <Field
                      name="time"
                      as="select"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una hora</option>
                      {generateTimeSlots().map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Field>
                    {errors.time && touched.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número de personas
                    </label>
                    <Field
                      name="people"
                      type="number"
                      min="1"
                      max="20"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.people && touched.people && (
                      <p className="mt-1 text-sm text-red-600">{errors.people}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Field
                      name="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Solicitudes especiales
                  </label>
                  <Field
                    name="specialRequests"
                    as="textarea"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Alergias, preferencias de asientos, ocasiones especiales, etc."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Confirmar reserva
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReservation;