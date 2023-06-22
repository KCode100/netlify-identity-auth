import './globals.css'
import { Inter } from 'next/font/google'
import {AuthContextProvider} from '../stores/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netlify Identity Auth',
  description: 'Netlify Identity Authentication Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          { children }
        </AuthContextProvider>
      </body>
    </html>
  )
}
