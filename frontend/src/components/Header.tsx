'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { useAuth } from '@/providers/AuthContext'
import Button from './Button'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter()

  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <header
      className={twMerge('h-fit bg-gradient-to-b from-pink-800 p-6', className)}
    >
      <div className="w-full mb-4 flex items-center justify-end md:justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center opacity-90"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center opacity-90"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="md:flex-col justify-between items-center gap-x-4">
          {!user && (
            <>
              <div className="flex gap-x-4">
                <Button
                  onClick={() => router.push('/signup')}
                  className="bg-transparent text-neutral-100 font-medium whitespace-nowrap"
                >
                  Inscrever-se
                </Button>
                <Button onClick={() => router.push('/login')}>Entrar</Button>
              </div>
            </>
          )}
          {user && (
            <>
              <div className="flex  items-center gap-x-4">
                <span className="font-bold">{user.username}</span>
                <Button onClick={handleLogout}>Sair</Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </header>
  )
}

export default Header
