import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'

import './globals.css'
import './Layout.scss'
import TawkToWidget from './TawkToWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nissan Dashboard 2023',
  description: 'By eCreators',
  icons: {
    icon: 'https://www.openlms.net/favicon-32x32.png?v=0a75c12d6c9cf38edb9c29d2397b027a',
    apple:
      'https://www.openlms.net/favicon-32x32.png?v=0a75c12d6c9cf38edb9c29d2397b027a',
  },
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <Header />
        <main className="layout__content">{children}</main>
        <Footer />
        <TawkToWidget />
      </body>
    </html>
  )
}

export default RootLayout
