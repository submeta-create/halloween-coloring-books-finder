import { products } from "./data/products";

export default function sitemap() {
  const baseUrl = "https://halloween-coloring-books-finder.vercel.app";

  const productPages = products.map((book) => ({
    url: `${baseUrl}/books/${book.asin}`,
    lastModified: new Date(),
  }));

  const categoryPages = [
    "cute-halloween",
    "cozy-spooky",
    "ghost-coloring-books",
    "bold-easy",
  ].map((slug) => ({
    url: `${baseUrl}/categories/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...categoryPages,
    ...productPages,
  ];
}