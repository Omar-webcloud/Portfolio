import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Omar | Frontend Developer Portfolio',
  description: 'Portfolio of Md Omar Faruk Chowdhury, a frontend developer specializing in building responsive, data-driven web applications with React, Next.js, and TypeScript.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
