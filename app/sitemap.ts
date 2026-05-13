import type { MetadataRoute } from 'next'

const BASE_URL = 'https://prt-kr.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/company', '/products', '/engineering', '/installed-base', '/news', '/contact']
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === '' || path === '/news' ? 'monthly' : 'yearly',
    priority: path === '' ? 1.0 : 0.7,
  }))
}
