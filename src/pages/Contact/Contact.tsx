import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('Dirección de email inválida')
    .required('El email es requerido'),
  asunto: Yup.string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(100, 'El asunto no puede tener más de 100 caracteres')
    .required('El asunto es requerido'),
  mensaje: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede tener más de 1000 caracteres')
    .required('El mensaje es requerido'),
});

export const Contact: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Aquí irá la lógica para enviar el formulario
      console.log('Formulario enviado:', values);
      setEnviado(true);
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setEnviado(false);
        resetForm();
      }, 3000);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactanos</h1>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                  <p className="text-gray-600">Av. Corrientes 1234, CABA</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@livinn.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+54 11 1234-5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Envíanos un mensaje</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  {...formik.getFieldProps('nombre')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 ${
                    formik.touched.nombre && formik.errors.nombre
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                />
                {formik.touched.nombre && formik.errors.nombre && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.nombre}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  {...formik.getFieldProps('asunto')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 ${
                    formik.touched.asunto && formik.errors.asunto
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                />
                {formik.touched.asunto && formik.errors.asunto && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.asunto}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  {...formik.getFieldProps('mensaje')}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 ${
                    formik.touched.mensaje && formik.errors.mensaje
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                />
                {formik.touched.mensaje && formik.errors.mensaje && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                {formik.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {/* Mensaje de éxito */}
              {enviado && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                  ¡Gracias por tu mensaje! Te contactaremos pronto.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Mapa o imagen */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Nuestra Ubicación</h2>
          <div className="h-64 bg-gray-200 rounded-lg">
            {/* Aquí puedes agregar un mapa o una imagen */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Mapa de ubicación
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};