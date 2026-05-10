import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://prt-kr.com'),
  title: {
    default: 'PRT Co., Ltd. | Roll-to-Roll Equipment for Leadframe & Semiconductor Packaging',
    template: '%s | PRT Co., Ltd.',
  },
  description: 'Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing. 50+ installed systems across Asia. Engineering-driven manufacturing partner.',
  keywords: [
    'Roll-to-Roll equipment',
    'Leadframe manufacturing',
    'Semiconductor Packaging',
    'RTR Laminator',
    'RTR Exposure System',
    'Dry film lamination',
    'PRT',
    'Precision Roll Technology',
  ],
  authors: [{ name: 'PRT Co., Ltd.', url: 'https://prt-kr.com' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://prt-kr.com',
    siteName: 'PRT Co., Ltd.',
    title: 'PRT Co., Ltd. | Roll-to-Roll Equipment for Leadframe & Semiconductor Packaging',
    description: 'Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing. 50+ installed systems across Asia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRT Co., Ltd. | Roll-to-Roll Equipment',
    description: 'Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing.',
  },
  alternates: {
    canonical: 'https://prt-kr.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
