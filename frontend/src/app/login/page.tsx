'use client'
import Button from '@/components/Button'
import { useAuth } from '@/providers/AuthContext'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

// Validation function to check if the email is in a valid format
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Validation function to check if the password meets certain criteria (e.g., minimum length)
const validatePassword = (password: string) => {
  return password.length >= 6 // Example: Password should be at least 6 characters long
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loginError, setLoginError] = useState('')

  const { user, login } = useAuth()

  // Redirect to home if user is logged in
  useEffect(() => {
    if (user) {
      redirect('/')
    }
  }, [user])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Endereço de email invalido')
      return
    }

    setEmailError('')

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Sua senha precisa ter 6 caracteres')
      return
    }

    setPasswordError('')

    try {
      login(email, password)
      // redirect('/')
    } catch (error) {
      console.error('Login error:', error)
      setLoginError('Email ou senha invalidos')
    }
  }

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto flex justify-center items-center">
      <div className="flex flex-col h-full md:max-h-[60vh] w-full max-w-xl bg-neutral-900 p-4 md:p-8 rounded-lg">
        <h1 className="text-3xl md:text-6xl my-8 font-bold">
          Entrar no <span className="text-pink-500">Musicfy</span>
        </h1>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col mb-4">
            <label htmlFor="text" className="text-2xl mb-2 textsemibold">
              Email
            </label>
            <input
              className="p-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="password" className="text-2xl mb-2 textsemibold">
              Senha
            </label>
            <input
              className="p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="senha"
              required
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <Button
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
