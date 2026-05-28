import { getAmazonUrl } from "@/app/lib/amazon";
import { getProductTags, site, type Product } from "@/app/data/products";

export function getBookDescription(book: Product) {
  return `${book.title} is a Halloween coloring book pick for cozy spooky artwork, seasonal gifts, fall activities, and relaxing creative time.`;
}

export function getBookGenres(book: Product) {
  const tags = getProductTags(book);
  const genres = new Set<string>([
    "Halloween Coloring Book",
    "Coloring Book",
  ]);

  if (tags.includes("cute-halloween")) genres.add("Kids Coloring Book");
  if (tags.includes("ghost-coloring-books")) genres.add("Ghost Coloring Book");
  if (tags.includes("cozy-spooky")) genres.add("Cozy Coloring Book");
  if (tags.includes("fall")) genres.add("Pumpkin Coloring Book");
  if (tags.includes("witch")) genres.add("Witch Coloring Book");
  if (tags.includes("animal")) genres.add("Spooky Animal Coloring Book");

  return Array.from(genres);
}

export function getBookSchema(book: Product) {
  const tags = getProductTags(book);
  const keywords = new Set([
    "Halloween coloring book",
    "cozy coloring book",
    "spooky coloring book",
    "kids coloring book",
    "adult coloring book",
    ...tags,
  ]);

  return {
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: "Ella Tarling",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ASIN",
      value: book.asin,
    },
    image: `${site.url}/covers/${book.asin}.jpg`,
    url: `${site.url}/books/${book.asin}`,
    sameAs: getAmazonUrl(book.asin),
    offers: {
      "@type": "Offer",
      url: getAmazonUrl(book.asin),
    },
    description: getBookDescription(book),
    genre: getBookGenres(book),
    keywords: Array.from(keywords).join(", "),
    inLanguage: "en",
    isFamilyFriendly: true,
  };
}

export function getHomepageItemListSchema(books: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Halloween Coloring Books",
    description: site.description,
    itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: book.title,
      url: `${site.url}/books/${book.asin}`,
      image: `${site.url}/covers/${book.asin}.jpg`,
      item: getBookSchema(book),
    })),
  };
}
