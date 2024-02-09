import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/SideBar'
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
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
        <BottomNavigation />
      </body>
    </html>
  )
}
