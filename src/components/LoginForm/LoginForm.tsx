import React, { useEffect } from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    login({ email, password })
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <Form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Inicia sesión</h3>
          <p className="text-sm text-blue-600 mb-6 text-center">Accede a tu cuenta para reservar y ver tus reservas</p>

          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center space-x-2 text-sm text-blue-700">
              <input type="checkbox" className="form-checkbox" />
              <span>Recordarme</span>
            </label>
            <a className="text-sm text-blue-600 hover:underline" href="#">
              ¿Olvidaste la contraseña?
            </a>
          </div>

          <div className="mt-6">
            <Button type="submit" className="w-full">Iniciar sesión</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm;
