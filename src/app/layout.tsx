import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from "next/font/google";
import Footer from '@/components/footer/Footer'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext' ,'greek', 'latin-ext']
})

export const metadata: Metadata = {
  title: 'Giorgi Machitadze - Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        <Navbar />  
        {children}
        <Footer />
      </body>
    </html>
  )
}
