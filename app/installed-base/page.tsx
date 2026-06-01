import type { Metadata } from 'next'
import InstalledBasePageClient from './page-client'

export const metadata: Metadata = {
  title: 'Installed Base',
  description:
    '100+ PRT Roll-to-Roll systems running in production environments across Asia. Repeat orders from Leadframe and Semiconductor Packaging customers.',
  alternates: { canonical: '/installed-base' },
  openGraph: {
    title: 'Installed Base | PRT Co., Ltd.',
    description:
      '100+ PRT systems in production across Asia. Repeat orders validate field performance.',
    url: '/installed-base',
  },
}

export default function InstalledBasePage() {
  return <InstalledBasePageClient />
}
