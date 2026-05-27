import { products } from "./data/products";

export default function sitemap() {
  const baseUrl = "https://halloween-coloring-books-finder.vercel.app";

  const productPages = products.map((book) => ({
    url: `${baseUrl}/books/${book.asin}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...productPages,
  ];
}