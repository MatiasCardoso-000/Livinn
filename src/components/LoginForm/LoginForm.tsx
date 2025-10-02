import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated, errors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            login(values.email, values.password);

            setSubmitting(false);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">
                Inicia sesión
              </h3>
              <p className="text-sm text-gray-600 mb-6 text-center">
                Accede a tu cuenta para reservar y ver tus reservas
              </p>

              <div className="space-y-4 flex flex-col">
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-0"
                />

                <Field
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border- focus:outline-0"
                />
              </div>

              <div className="flex flex-col gap-2 justify-between mt-4">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Recordarme</span>
                </label>
                <div className="flex justify-between">
                  <Link
                    className="text-sm text-orange-500 hover:underline"
                    to="#"
                  >
                    ¿Olvidaste la contraseña?
                  </Link>{" "}
                  <Link
                    className="text-sm text-orange-500 hover:underline"
                    to="/register"
                  >
                    ¿No tienes cuenta?
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  className="w-full bg-orange-500 text-white hover:bg-orange-600 py-1 rounded-md cursor-pointer"
                >
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {errors.length > 0 &&
          errors.map((e, i) => {
            return <div key={i}>{e}</div>;
          })}
      </div>
    </div>
  );
};

export default LoginForm;
