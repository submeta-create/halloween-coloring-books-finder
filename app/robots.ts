export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://halloween-coloring-books-finder.vercel.app/sitemap.xml",
  };
}