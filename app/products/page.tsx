import type { Metadata } from 'next'
import { getServerLanguage } from '@/lib/locale'
import ProductsClient from './page-client'

export const metadata: Metadata = {
  title: 'Equipment',
  description:
    'Roll-to-Roll Laminator and Exposure systems for Leadframe and Semiconductor Packaging manufacturing. Stable web handling, precision alignment, production-proven.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Equipment | PRT Co., Ltd.',
    description:
      'Roll-to-Roll Laminator and Exposure systems for Leadframe and Semiconductor Packaging manufacturing.',
    url: '/products',
  },
}

export default async function ProductsPage() {
  const initialLang = await getServerLanguage()
  return <ProductsClient initialLang={initialLang} />
}
