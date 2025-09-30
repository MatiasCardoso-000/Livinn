import React from 'react'
import { Form } from '../Form/Form'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export const RegisterForm: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <Form onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-xl font-semibold text-blue-800">Create account</h3>
        <Input label="Full name" type="text" placeholder="Your name" required />
        <Input label="Email" type="email" placeholder="you@example.com" required />
        <Input label="Password" type="password" placeholder="••••••••" required />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  )
}

export default RegisterForm
