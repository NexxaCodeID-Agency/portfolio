import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'id']
  const pages = ['', '/work', '/about']
  const baseUrl = 'https://nexxacodeid.site'

  return pages.flatMap((page) => 
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )
}
