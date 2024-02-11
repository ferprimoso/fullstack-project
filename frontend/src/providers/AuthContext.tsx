'use client'

import { loginUser, signupUser } from '@/actions/user/userAuth'
import { redirect } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type User = {
  userId: string
  username: string
}

type AuthContextType = {
  user: User | null | undefined
  login: (email: string, password: string) => void
  logout: () => void
}

interface UserProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Fetch user information using the token and set the user
      // This is a placeholder, replace it with your actual authentication logic
      const decodedToken = decodeToken(token)
      const user = decodedToken
        ? { userId: decodedToken.userId, username: decodedToken.username }
        : null
      setUser(user)
    }
  }, [])

  const login = async (email, password) => {
    try {
      console.log('hi')

      const data = await loginUser({ email, password })

      localStorage.setItem('token', data.token)
      setUser({ userId: data.userId, username: data.username })
      console.log(data)
      redirect('/')
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token')
    // Clear the user
    setUser(null)
    // Redirect to login page after logout
    redirect('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
  // This is a placeholder, replace it with your actual token decoding logic
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]))
    return decodedToken
  } catch (error) {
    console.error('Token decoding error:', error)
    return null
  }
}
