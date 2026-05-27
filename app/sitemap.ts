import { MetadataRoute } from "next";

const baseUrl = "https://www.cozyhalloweenbooks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/categories/cute-halloween`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/cozy-spooky`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/ghost-coloring-books`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/bold-easy`,
      lastModified: new Date(),
    },
  ];
}