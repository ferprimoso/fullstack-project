'use client'
import Button from '@/components/Button'
import { useAuth } from '@/providers/AuthContext'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      login(email, password)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto flex justify-center items-center">
      <div className="flex flex-col h-full md:max-h-[85vh] w-full max-w-xl bg-neutral-900 p-4 md:p-8 rounded-lg">
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
            />
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
            />
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
      </div>
    </div>
  )
}
