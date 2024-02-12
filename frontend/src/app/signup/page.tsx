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

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const [signupError, setSignupError] = useState<string | null>(null)

  // Auth Context
  const { user, signup } = useAuth()

  // Redirect to home if user is logged in
  useEffect(() => {
    if (user) {
      redirect('/')
    }
  }, [user])

  const onSubmit = async (data: FieldValues) => {
    try {
      await signup(data.username, data.email, data.password)
    } catch (error) {
      setSignupError('Usuário ou senha invalido')
    }
  }

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto flex justify-center items-center">
      <div className="flex flex-col h-full md:max-h-[85vh]  w-full max-w-xl bg-neutral-900 p-4 md:p-8 rounded-lg">
        <h1 className="text-3xl md:text-6xl my-8 font-bold">
          Inscreva-se no <span className="text-pink-500">Musicfy</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4">
            <label htmlFor="text" className="text-2xl mb-2 textsemibold">
              Username
            </label>
            <input
              {...register('username', {
                required: 'Por favor insira um nome de usuário!',
              })}
              className="p-2"
              type="text"
              placeholder="username"
            />
            {errors.username && (
              <p className="text-red-500">
                {errors.username.message as string}
              </p>
            )}
          </div>
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
            )}
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
            )}{' '}
          </div>
          <Button
            disabled={isSubmitting}
            className="bg-pink-500 text-white py-4 mb-4 hover:scale-100 hover:opacity-50"
            type="submit"
          >
            Inscreva-se
          </Button>
          <p className="text-neutral-300">
            Ja possui conta?{' '}
            <a href="/login" className="underline text-white">
              Faça login aqui
            </a>
          </p>
        </form>
        <span className="text-red-500">{signupError}</span>
      </div>
    </div>
  )
}
