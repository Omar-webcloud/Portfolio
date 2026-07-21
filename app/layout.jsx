import './globals.css'

export const metadata = {
  title: 'Omar | Frontend Developer Portfolio',
  description: 'Portfolio of Md Omar Faruk Chowdhury, a frontend developer specializing in building responsive, data-driven web applications with React, Next.js, and TypeScript.',
  keywords: 'Omar, Frontend Developer, Web Developer, React Developer, Portfolio, Web Design, Next.js, TypeScript',
  authors: [{ name: 'Md Omar Faruk Chowdhury' }],
  openGraph: {
    type: 'website',
    url: 'https://omarwebcloud.netlify.app/',
    title: 'Mohammad Omar | Frontend Developer Portfolio',
    description: 'Portfolio of Mohammad Omar, a frontend developer specializing in building responsive, data-driven web applications with React, Next.js, and TypeScript.',
    images: [
      {
        url: 'https://omarwebcloud.netlify.app/images/omar.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Omar - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Omar | Frontend Developer Portfolio',
    description: 'Portfolio of Mohammad Omar, a frontend developer specializing in building responsive, data-driven web applications with React, Next.js, and TypeScript.',
    images: ['https://omarwebcloud.netlify.app/images/omar.png'],
  },
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
