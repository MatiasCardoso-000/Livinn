
import { Button } from "../Button/Button";
import { Formik, Form,Field} from "formik";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">
                Registro
              </h3>

              <div className="space-y-4 flex flex-col gap-3">
                <Field
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border- focus:outline-0"
                />


                 <Field
                  label="Nombre"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border- focus:outline-0"
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
                <div className="flex justify-between">
                  <Link
                    className="text-sm text-orange-500 hover:underline"
                    to="/login"
                  >
                    ¿Ya tienes cuenta?
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
      </div>
    </div>)
};

export default RegisterForm;
