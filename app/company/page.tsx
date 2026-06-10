import type { Metadata } from 'next'
import { getServerLanguage } from '@/lib/locale'
import CompanyClient from './page-client'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'PRT Co., Ltd. — engineering-driven manufacturer of Roll-to-Roll equipment for Leadframe and Semiconductor Packaging. Based in Anyang, Korea.',
  alternates: { canonical: '/company' },
  openGraph: {
    title: 'Company | PRT Co., Ltd.',
    description:
      'Engineering-driven manufacturer of Roll-to-Roll equipment for Leadframe and Semiconductor Packaging.',
    url: '/company',
  },
}

export default async function CompanyPage() {
  const initialLang = await getServerLanguage()
  return <CompanyClient initialLang={initialLang} />
}
