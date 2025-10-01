import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { setSearchValue} = useSearch();
  const storagedUser = JSON.parse(localStorage.getItem("user") || "[]");


  return (
    <header className="bg-gradient-to-r from-gray-50 via-white to-gray-50 px-6 py-6 shadow-sm border-b border-gray-100 rounded-b-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-4">
        <Link to={"/"}>
          <h1 className="text-2xl text-orange-500 font-semibold tracking-tight hover:text-orange-600 transition-colors">
            Livinn
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden sm:flex space-x-4">
            <Link
              className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
              to="/contact"
            >
              Contact
            </Link>
          </nav>

          {/* User menu */}
          <div className="relative" tabIndex={0}>
            <button
              aria-haspopup="true"
              aria-expanded={menuOpen}
              className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none ${
                isAuthenticated
                  ? "bg-orange-500"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {isAuthenticated ? (
                // Avatar icon (user logged in)
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4v1H4v-1z" />
                </svg>
              ) : (
                // Default user icon
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.7-9.8 5v1.2h19.6V19.4c0-3.3-6.5-5-9.8-5z" />
                </svg>
              )}
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-20">
                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-900 font-semibold truncate">
                      {storagedUser}
                    </div>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-blue-50"
                      onClick={() => {
                        setMenuOpen(false);
                        logout();
                      }}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50"
                    >
                      Iniciar sesión
                    </a>
                    <a
                      href="/register"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                    >
                      Registrarse
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-center text-4xl font-semibold text-gray-900 mb-6">
        Busca <span className="text-orange-500">tu lugar favorito</span>
      </h1>

      <Formik
        initialValues={{
          restaurant: "",
          date: "",
          time: new Date(),
          amount: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSearchValue(values.restaurant);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="w-full">
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
              <Field
                name="restaurant"
                autoComplete="off"
                type="text"
                placeholder="Restaurante"
                className="w-full md:flex-1 px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-300"
              />

              <Field
                name="date"
                type="date"
                className="w-full md:flex-1 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-colors"
              />

              {/* <Field
                name="time"
                type="time"
                className="w-full md:flex-1 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-colors"
              /> */}

              <Field
                name="amount"
                type="number"
                placeholder="Personas"
                className="w-full md:flex-1 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition-colors"
              />

              <div className="w-full md:w-auto ">
                <Button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50">Buscar</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default Header;
