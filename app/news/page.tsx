import type { Metadata } from 'next'
import NewsClient from './page-client'

export const metadata: Metadata = {
  title: 'News',
  description:
    'Latest news, exhibitions, and shipments from PRT Co., Ltd.',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'News | PRT Co., Ltd.',
    description:
      'Latest news, exhibitions, and shipments from PRT Co., Ltd.',
    url: '/news',
  },
}

export default function NewsPage() {
  return <NewsClient />
}
