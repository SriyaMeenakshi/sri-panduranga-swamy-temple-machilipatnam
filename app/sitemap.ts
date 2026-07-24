import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sripandurangaswamytemple-machilipatnam.vercel.app' // Replace with your real domain later
  
  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/history`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/visit`, lastModified: new Date() },
  ]
}