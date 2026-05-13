import type { Metadata } from 'next'
import EngineeringClient from './page-client'

export const metadata: Metadata = {
  title: 'Engineering',
  description:
    'Engineering capabilities behind PRT Roll-to-Roll systems — web handling, alignment, thermal control, and field maintainability.',
  alternates: { canonical: '/engineering' },
  openGraph: {
    title: 'Engineering | PRT Co., Ltd.',
    description:
      'Engineering capabilities behind PRT Roll-to-Roll systems — web handling, alignment, thermal control, and maintainability.',
    url: '/engineering',
  },
}

export default function EngineeringPage() {
  return <EngineeringClient />
}
