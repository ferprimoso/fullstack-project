'use client'
import { createContext, useContext, useState } from 'react'
import { AuthInfo } from '@/types/auth.types'

const AuthContext = createContext({})

interface AuthProvider {
  childre: React.ReactNode
}

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider
