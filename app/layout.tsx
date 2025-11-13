import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Soumen Das | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and Blockchain. Explore my projects, skills, and articles on web development and blockchain technology.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Blockchain', 'Web3', 'Portfolio'],
  authors: [{ name: 'Soumen Das' }],
  creator: 'Soumen Das',
  openGraph: {
    title: 'Soumen Das | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and Blockchain',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumen Das | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and Blockchain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22d3ee" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
