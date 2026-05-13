import type { Metadata } from 'next'
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

export default function CompanyPage() {
  return <CompanyClient />
}
