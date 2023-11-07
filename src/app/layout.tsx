import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/widgets/Navbar'
import { Footer } from '@/widgets/Footer'
import FixedMenu from '@/shared/ui/FixedMenu/FixedMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kalshi - Trade Event Contracts',
  description: 'Kalshi - Trade Event Contracts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FixedMenu />
      </body>
    </html>
  )
}
