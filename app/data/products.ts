export type Product = {
  asin: string;
  title: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  bestFor: string[];
};

export const site = {
  name: "Cozy Halloween Books",
  url: "https://www.cozyhalloweenbooks.com",
  description:
    "Cute, spooky, and cozy Halloween coloring books for kids, teens, adults, seasonal gifts, and relaxing autumn activities.",
};

export const categories: Category[] = [
  {
    slug: "cute-halloween",
    title: "Cute Halloween Coloring Books",
    description:
      "Cute Halloween coloring books with cozy ghosts, pumpkins, kawaii animals, friendly monsters, and soft spooky autumn scenes.",
    keywords: ["cute", "snuggles", "tiny", "pals", "kawaii", "little"],
    bestFor: [
      "Kids and teens who like friendly spooky art",
      "Halloween baskets and classroom gifts",
      "Cozy October coloring sessions",
    ],
  },
  {
    slug: "cozy-spooky",
    title: "Cozy Spooky Coloring Books",
    description:
      "Relaxing cozy spooky coloring books for autumn nights, Halloween gifts, screen-free creative time, and soft seasonal self-care.",
    keywords: ["cozy", "spooky", "snuggles", "chill", "fall", "season"],
    bestFor: [
      "Adults and teens who want relaxing Halloween pages",
      "Cozy fall evenings",
      "Soft spooky gift ideas",
    ],
  },
  {
    slug: "ghost-coloring-books",
    title: "Ghost Coloring Books",
    description:
      "Cute ghost coloring books with friendly spooky characters, pumpkins, cozy scenes, and playful Halloween themes.",
    keywords: ["ghost", "spooky", "halloween"],
    bestFor: [
      "Friendly ghost and pumpkin fans",
      "Halloween party activity books",
      "Cute spooky seasonal gifts",
    ],
  },
  {
    slug: "bold-easy",
    title: "Bold and Easy Halloween Coloring Books",
    description:
      "Bold and easy Halloween coloring books with simple, clear, relaxing designs for kids, teens, adults, and beginners.",
    keywords: ["bold", "easy", "simple"],
    bestFor: [
      "Beginners and casual coloring fans",
      "Low-stress screen-free activities",
      "Kids who prefer simple Halloween pages",
    ],
  },
];

export const products: Product[] = [
  { asin: "B0F5GXK4ZZ", title: "Spooky Snuggles Halloween Coloring Book" },
  { asin: "B0FGP9HQ24", title: "Halloween Bold and Easy Coloring Book" },
  { asin: "B0FKNDH6VD", title: "Little Cozy Fall Coloring Book" },
  { asin: "B0F6KDB4X1", title: "Cozy Spooky Coloring Book" },
  { asin: "B0F7X8W5J3", title: "Spooky Pals Coloring Book" },
  { asin: "B0FJ5HTSYG", title: "Spooky Girl Coloring Book" },
  { asin: "B0F6CMKL6K", title: "Cozy Spooky Coloring Adventure" },
  { asin: "B0F87HTSXR", title: "Spooky Chill Coloring Book" },
  { asin: "B0FC2HL9PN", title: "Spooky Tiny Coloring Book" },
  { asin: "B0FC69CCRF", title: "Spooky Manga Snuggles Coloring Book" },
  { asin: "B0H1N6HD2P", title: "Koala Halloween Coloring Book" },
  { asin: "B0H1N981H3", title: "Koala Spooky Coloring Book" },
  { asin: "B0FMPXV23H", title: "Cozy Spooky Pets Coloring Book" },
  { asin: "B0FBFT2GVR", title: "Tiny Witch World Coloring Book" },
  { asin: "B0FRXTXL9Y", title: "Season Snuggles Coloring Book" },
  { asin: "B0GZNZ1GT8", title: "Hippo Halloween Coloring Book" },
  { asin: "B0FT6Q7PVJ", title: "Hippo Spooky Coloring Book" },
  { asin: "B0FMPTFWC7", title: "Halloween Coloring Book" },
  { asin: "B0FB8RLT7R", title: "Halloween Coloring Book" },
  { asin: "B0FP2G28NC", title: "Spooky Snuggles Coloring Book" },
  { asin: "B0FRMKQ6WP", title: "Spooky Winter Vibes Coloring Book" },
  { asin: "B0FBK1LWBZ", title: "Spooky Food World Coloring Book" },
  { asin: "B0FQCHHWD5", title: "Spooky Snuggles Coloring Book" },
  { asin: "B0FNR6DDL9", title: "Spooky Snuggles Coloring Book" },
  { asin: "B0FLJFTPZG", title: "Cozy Spooky Pals Christmas Coloring Book" },
  { asin: "B0FK9SYH6W", title: "Little Cozy Halloween Coloring Book" },
  { asin: "B0FNDBSH2B", title: "Spooky Food & Snacks Coloring Book" },
  { asin: "B0GYYPLVF2", title: "Spooky Dachshund Coloring Book" },
  { asin: "B0GYZDZT9T", title: "Dachshund Halloween Coloring Book" },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductTags(product: Product) {
  const title = product.title.toLowerCase();
  const tags = new Set<string>(["halloween", "coloring book"]);

  for (const category of categories) {
    if (
      category.keywords.some((keyword) =>
        title.includes(keyword.toLowerCase())
      )
    ) {
      tags.add(category.slug);
    }
  }

  if (title.includes("koala")) tags.add("animal");
  if (title.includes("hippo")) tags.add("animal");
  if (title.includes("dachshund")) tags.add("animal");
  if (title.includes("food") || title.includes("snacks")) tags.add("food");
  if (title.includes("witch")) tags.add("witch");
  if (title.includes("christmas") || title.includes("winter")) {
    tags.add("winter");
  }
  if (title.includes("fall") || title.includes("season")) tags.add("fall");
  if (title.includes("manga")) tags.add("manga");

  return Array.from(tags);
}

export function getProductsByCategory(slug: string) {
  const category = getCategory(slug);

  if (!category) return [];

  return products.filter((book) =>
    category.keywords.some((keyword) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    )
  );
}

export function getRelatedProducts(product: Product, limit = 4) {
  const productTags = getProductTags(product);

  return products
    .filter((candidate) => candidate.asin !== product.asin)
    .map((candidate) => {
      const candidateTags = getProductTags(candidate);
      const score = candidateTags.filter((tag) =>
        productTags.includes(tag)
      ).length;

      return { candidate, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score || a.candidate.title.localeCompare(b.candidate.title)
    )
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
