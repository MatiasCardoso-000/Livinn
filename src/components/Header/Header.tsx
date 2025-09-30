
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Form from "../Form/Form";
import { Field, Formik } from "formik";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isAuthenticated, email, logout } = useAuth()

  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated,navigate]);

  return (

    <header className="bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 py-6 shadow-md rounded-b-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-4">
        <h1 className="text-2xl text-blue-800 font-semibold tracking-tight">Livinn</h1>
        <div className="flex items-center space-x-4">
          <nav className="hidden sm:flex space-x-4">
            <a className="text-sm text-blue-700 hover:underline" href="#">Home</a>
            <a className="text-sm text-blue-700 hover:underline" href="#contact">Contact</a>
          </nav>

          {/* User menu */}
          <div className="relative" tabIndex={0}>
            <button
              aria-haspopup="true"
              aria-expanded={menuOpen}
              className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none ${isAuthenticated ? 'bg-blue-600' : 'bg-blue-100 hover:bg-blue-200'}`}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {isAuthenticated ? (
                // Avatar icon (user logged in)
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4v1H4v-1z" />
                </svg>
              ) : (
                // Default user icon
                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.7-9.8 5v1.2h19.6V19.4c0-3.3-6.5-5-9.8-5z" />
                </svg>
              )}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-blue-50 py-2 z-20">
                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm text-blue-800 font-semibold truncate">{email}</div>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-blue-50"
                      onClick={() => { setMenuOpen(false); logout(); }}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <a href="/login" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Iniciar sesión</a>
                    <a href="/register" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Registrarse</a>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-center text-4xl font-semibold text-blue-900 mb-6">
        Busca <span className="text-blue-600">tu lugar favorito</span>
      </h1>

      <Formik
        initialValues={{
          restaurante: "",
          date: "",
          time: new Date(),
          people: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          console.log(values)
        }}
      >
        {/* Form container: full width, centered, inputs in a horizontal row on md+ and stacked on small screens */}
        <div className="w-full">
          <Form>
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
              <Field
                name="restaurant"
                autocomplete="off"
                type="text"
                placeholder="Restaurante"
                className="w-full md:flex-1 px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-300"
              />

              <Field
                name="date"
                type="date"
                className="w-full md:flex-1 px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-300"
              />

              <Field
                name="time"
                type="time"
                className="w-full md:flex-1 px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-300"
              />

              <Field
                name="amount"
                type="number"
                placeholder="Personas"
                className="w-full md:flex-1 px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-300"
              />

              <div className="w-full md:w-auto">
                <Button type="submit">Buscar</Button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>

    </header>
  );
}

export default Header;
