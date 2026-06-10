import type { Metadata } from 'next'
import { getServerLanguage } from '@/lib/locale'
import ContactClient from './page-client'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with PRT Co., Ltd. — sales, engineering, and after-sales support inquiries for Roll-to-Roll equipment.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | PRT Co., Ltd.',
    description:
      'Get in touch with PRT Co., Ltd. for Roll-to-Roll equipment inquiries.',
    url: '/contact',
  },
}

export default async function ContactPage() {
  const initialLang = await getServerLanguage()
  return <ContactClient initialLang={initialLang} />
}
