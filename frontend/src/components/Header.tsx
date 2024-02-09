'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import Button from './Button'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter()

  const handleLogout = () => {
    // later
  }

  return (
    <header
      className={twMerge('h-fit bg-gradient-to-b from-pink-800 p-6', className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
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
        <div className="hidden md:flex justify-between items-center gap-x-4">
          <>
            <div className="flex gap-x-4">
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-100 font-medium whitespace-nowrap"
              >
                Inscrever-se
              </Button>
              <Button onClick={() => {}}>Entrar</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </header>
  )
}

export default Header
