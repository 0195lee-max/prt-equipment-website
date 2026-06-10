import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RevealProvider } from '@/components/reveal-provider'
import { getServerLanguage } from '@/lib/locale'
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
  description: 'Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing. 100+ installed systems across Asia. Engineering-driven manufacturing partner.',
  keywords: [
    'Roll-to-Roll equipment',
    'Leadframe manufacturing',
    'Semiconductor Packaging',
    'RTR Laminator',
    'RTR Exposure System',
    'Dry film lamination',
    'PRT',
    'Roll-to-Roll Process Technology',
  ],
  authors: [{ name: 'PRT Co., Ltd.', url: 'https://prt-kr.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ko_KR', 'zh_CN'],
    url: 'https://prt-kr.com',
    siteName: 'PRT Co., Ltd.',
    title: 'PRT Co., Ltd. | Roll-to-Roll Equipment for Leadframe & Semiconductor Packaging',
    description: 'Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing. 100+ installed systems across Asia.',
    images: [
      {
        url: '/images/installed-base-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'PRT Roll-to-Roll equipment in production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRT Co., Ltd. | Roll-to-Roll Equipment',
    description: 'Production-proven Roll-to-Roll laminator and exposure systems for Leadframe and Semiconductor Packaging manufacturing.',
    images: ['/images/installed-base-hero.jpg'],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const serverLang = await getServerLanguage()
  return (
    <html lang={serverLang} className={inter.variable} suppressHydrationWarning>
      <head>
        {/* EXPERIMENTAL scroll-reveal (preview only): arm [data-reveal] hiding
            before first paint, only when JS runs and motion is allowed — so
            no-JS / reduced-motion users always get fully visible content. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-on')}}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <RevealProvider />
        <Analytics />
      </body>
    </html>
  )
}
