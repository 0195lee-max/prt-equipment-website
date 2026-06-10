import type { Metadata } from 'next'
import { getServerLanguage } from '@/lib/locale'
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

export default async function NewsPage() {
  const initialLang = await getServerLanguage()
  return <NewsClient initialLang={initialLang} />
}
