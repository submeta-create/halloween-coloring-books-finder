import { MetadataRoute } from "next";
import { categories, products, site } from "@/app/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
    },
    {
      url: `${site.url}/imprint`,
      lastModified: new Date(),
    },
    {
      url: `${site.url}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${site.url}/affiliate-disclosure`,
      lastModified: new Date(),
    },
    ...categories.map((category) => ({
      url: `${site.url}/categories/${category.slug}`,
      lastModified: new Date(),
    })),
    ...products.map((book) => ({
      url: `${site.url}/books/${book.asin}`,
      lastModified: new Date(),
    })),
  ];
}
