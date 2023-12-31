import './globals.css'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '[r_r]',
  description: 'Showcase and discover new ways of learning through action.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
