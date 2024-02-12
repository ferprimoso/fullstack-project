'use client'
import Button from '@/components/Button'
import { useAuth } from '@/providers/AuthContext'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

// Validation function to check if the email is in a valid format
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const [loginError, setLoginError] = useState<string | null>(null)

  const { user, login } = useAuth()

  // Redirect to home if user is logged in
  useEffect(() => {
    if (user) {
      redirect('/')
    }
  }, [user])

  const onSubmit = async (data: FieldValues) => {
    try {
      await login(data.email, data.password)
    } catch (error) {
      setLoginError('Usuário ou senha invalido')
    }
  }

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto flex justify-center items-center">
      <div className="flex flex-col h-full md:max-h-[60vh] w-full max-w-xl bg-neutral-900 p-4 md:p-8 rounded-lg">
        <h1 className="text-3xl md:text-6xl my-8 font-bold">
          Entrar no <span className="text-pink-500">Musicfy</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4">
            <label htmlFor="text" className="text-2xl mb-2 textsemibold">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Por favor insira o email',
                validate: (email) => validateEmail(email) || 'Email invalido',
              })}
              className="p-2"
              type="text"
              placeholder="email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message as string}</p>
            )}{' '}
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="password" className="text-2xl mb-2 textsemibold">
              Senha
            </label>
            <input
              {...register('password', {
                required: 'Por favor insira a senha',
                minLength: {
                  value: 6,
                  message: 'Senha precisar ter mais que 6 caracteres',
                },
              })}
              className="p-2"
              type="password"
              placeholder="senha"
            />
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>
          <Button
            disabled={isSubmitting}
            className="bg-pink-500 text-white py-4 mb-4 hover:scale-100 hover:opacity-50"
            type="submit"
          >
            Login
          </Button>
          <p className="text-neutral-300">
            Ainda não possui conta?
            <a href="/signup" className="underline text-white">
              Registre-se
            </a>
          </p>
        </form>
        <span className="text-red-500">{loginError}</span>
      </div>
    </div>
  )
}
