import type { MetadataRoute } from 'next'

const BASE_URL = 'https://flyyo.co.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${BASE_URL}/book-flight`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${BASE_URL}/airplane-joyride`, priority: 0.9, changeFrequency: 'daily' as const },
    { url: `${BASE_URL}/ek-dham-yatra`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about-flyyo`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact-us`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/terms-and-conditon`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/properties`, priority: 0.7, changeFrequency: 'weekly' as const },
  ]

  const fleetPages = [1, 2, 3, 4, 5, 6].map((id) => ({
    url: `${BASE_URL}/properties/${id}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
  }))

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: new Date(),
    })),
    ...fleetPages,
  ]
}
