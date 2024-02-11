import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/AuthContext'
import BottomNavigation from '@/components/BottomNavigation'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Musicfy',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={font.className}>
          {children}
          <BottomNavigation />
        </body>
      </AuthProvider>
    </html>
  )
}
