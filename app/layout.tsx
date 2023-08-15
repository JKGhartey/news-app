import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dawn App',
  description: 'Daily News App | Get your daily news here!',
  icons: "/favicon/favicon.ico"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={`${inter.className} bg-gray-100 dark:bg-zinc-800 transition-all duration-700 `}>
          <Header />
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </body>
      </Providers>
    </html>
  )
}
