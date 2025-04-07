import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.theprimegraphics.com',
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://www.theprimegraphics.com/embroidery-patch',
      changeFrequency: 'yearly',
      priority: 1.0,
    },

    {
      url: 'https://www.theprimegraphics.com/services',
      changeFrequency: 'yearly',
      priority: 1.0,
    },


  ]
}