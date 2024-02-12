'use client'

import { loginUser, signupUser } from '@/actions/user/userAuth'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { useLikedData } from './LikedDataContext'

type User = {
  userId: string
  username: string
}

type AuthContextType = {
  user: User | null | undefined
  login: (email: string, password: string) => void
  logout: () => void
  signup: (username: string, email: string, password: string) => void
}

interface UserProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>()

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = decodeToken(token)
      const user = decodedToken
        ? { userId: decodedToken.userId, username: decodedToken.username }
        : null
      setUser(user)
    }
  }, [])

  const login = async (email, password) => {
    try {
      const data = await loginUser({ email, password })
      localStorage.setItem('token', data.token)
      setUser({ userId: data.userId, username: data.username })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    // Remove JWT, User and redirect to Homepage
    localStorage.removeItem('token')
    setUser(null)
    router.push('/')
  }

  const signup = async (username, email, password) => {
    try {
      await signupUser({ username, email, password })
    } catch (error) {
      console.log(error)
    } finally {
      login(email, password)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const decodeToken = (token: string) => {
  // Decode the JWT token
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]))
    return decodedToken
  } catch (error) {
    console.error('Token decoding error:', error)
    return null
  }
}
