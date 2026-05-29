export type Product = {
  asin: string;
  title: string;
};

export type CategoryFaq = {
  question: string;
  answer: string;
};

export type CategoryGuideLink = {
  label: string;
  href: string;
  description: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  keywords: string[];
  bestFor: string[];
  featuredAsins: string[];
  relatedGuides: CategoryGuideLink[];
  faqs: CategoryFaq[];
};

export const site = {
  name: "Cozy Halloween Books",
  url: "https://www.cozyhalloweenbooks.com",
  description:
    "Cute, spooky, and cozy Halloween coloring books for kids, teens, adults, seasonal gifts, and relaxing autumn activities.",
  email: "contact@cozyhalloweenbooks.com",
  author: {
    name: "Ella Tarling",
    title: "Editor of Cozy Halloween Books",
    description:
      "Ella Tarling curates cozy, cute, and spooky Halloween coloring book guides with a focus on clear internal discovery, gift use cases, and family-friendly seasonal themes.",
  },
};

export const categories: Category[] = [
  {
    slug: "cute-halloween",
    title: "Cute Halloween Coloring Books",
    description:
      "Cute Halloween coloring books with cozy ghosts, pumpkins, kawaii animals, friendly monsters, and soft spooky autumn scenes.",
    intro:
      "This hub collects the friendlier side of Halloween coloring: cute ghosts, smiling pumpkins, cozy animals, tiny witches, snacks, and soft spooky scenes. It helps readers move from broad cute Halloween themes into focused guides, category pages, and individual book pages with real ASIN references.",
    keywords: ["cute", "snuggles", "tiny", "pals", "kawaii", "little"],
    bestFor: [
      "Kids and teens who like friendly spooky art",
      "Halloween baskets and classroom gifts",
      "Cozy October coloring sessions",
    ],
    featuredAsins: ["B0F5GXK4ZZ", "B0FK9SYH6W", "B0F7X8W5J3", "B0FC2HL9PN"],
    relatedGuides: [
      {
        label: "Cute Halloween Coloring Books",
        href: "/cute-halloween-coloring-books",
        description: "A broader guide to friendly ghosts, pumpkins, animals, and cozy Halloween themes.",
      },
      {
        label: "Kawaii Halloween Coloring Books",
        href: "/kawaii-halloween-coloring-books",
        description: "Cute spooky books with tiny characters and kawaii-friendly seasonal artwork.",
      },
      {
        label: "Cute Ghost Coloring Books",
        href: "/cute-ghost-coloring-books",
        description: "Friendly ghost coloring book ideas for soft Halloween activities.",
      },
    ],
    faqs: [
      {
        question: "What fits the cute Halloween category?",
        answer:
          "Cute Halloween books usually use friendly characters, soft spooky scenes, pumpkins, ghosts, animals, and playful seasonal details instead of scary horror imagery.",
      },
      {
        question: "Are cute Halloween coloring books only for kids?",
        answer:
          "No. They can also work for teens and adults who want relaxed, friendly, and low-pressure seasonal coloring.",
      },
      {
        question: "Where should I go next from this hub?",
        answer:
          "Start with the related guides for cute Halloween, kawaii Halloween, and cute ghost themes, then open individual book pages for ASIN details and related books.",
      },
    ],
  },
  {
    slug: "cozy-spooky",
    title: "Cozy Spooky Coloring Books",
    description:
      "Relaxing cozy spooky coloring books for autumn nights, Halloween gifts, screen-free creative time, and soft seasonal self-care.",
    intro:
      "This hub is for readers who want Halloween atmosphere without intense horror: friendly ghosts, warm drinks, pumpkins, pets, blankets, fall leaves, and calm spooky-season scenes. It connects cozy spooky guide pages with featured book picks and neighboring Halloween themes.",
    keywords: ["cozy", "spooky", "snuggles", "chill", "fall", "season"],
    bestFor: [
      "Adults and teens who want relaxing Halloween pages",
      "Cozy fall evenings",
      "Soft spooky gift ideas",
    ],
    featuredAsins: ["B0F6KDB4X1", "B0F87HTSXR", "B0FMPXV23H", "B0FKNDH6VD"],
    relatedGuides: [
      {
        label: "Cozy Spooky Coloring Books",
        href: "/cozy-spooky-coloring-books",
        description: "The main cozy spooky guide for soft Halloween and autumn coloring.",
      },
      {
        label: "Cozy Halloween Coloring Books",
        href: "/cozy-halloween-coloring-books",
        description: "A seasonal guide for relaxing Halloween coloring and autumn comfort themes.",
      },
      {
        label: "Cozy Ghost Coloring Books",
        href: "/cozy-ghost-coloring-books",
        description: "A narrower guide for friendly ghost books with a warm Halloween mood.",
      },
    ],
    faqs: [
      {
        question: "What does cozy spooky mean for coloring books?",
        answer:
          "Cozy spooky books use Halloween elements in a softer way, often with friendly ghosts, pumpkins, warm autumn settings, pets, blankets, snacks, and relaxing page layouts.",
      },
      {
        question: "Who is this category best for?",
        answer:
          "It is a good fit for teens, adults, gift buyers, and kids who like spooky season but prefer gentle artwork over scary designs.",
      },
      {
        question: "How is this different from cute Halloween?",
        answer:
          "Cute Halloween leans playful and character-forward, while cozy spooky leans more relaxing, autumnal, and self-care friendly.",
      },
    ],
  },
  {
    slug: "ghost-coloring-books",
    title: "Ghost Coloring Books",
    description:
      "Cute ghost coloring books with friendly spooky characters, pumpkins, cozy scenes, and playful Halloween themes.",
    intro:
      "This hub gathers ghost-forward Halloween coloring books and guides, with an emphasis on friendly ghosts, pumpkins, soft spooky scenes, and approachable seasonal activity ideas. It links readers from the broad ghost theme to cute ghost, cozy ghost, pumpkin, and related book pages.",
    keywords: ["ghost", "spooky", "halloween"],
    bestFor: [
      "Friendly ghost and pumpkin fans",
      "Halloween party activity books",
      "Cute spooky seasonal gifts",
    ],
    featuredAsins: ["B0F5GXK4ZZ", "B0F7X8W5J3", "B0FK9SYH6W", "B0FC2HL9PN"],
    relatedGuides: [
      {
        label: "Ghost Coloring Books",
        href: "/ghost-coloring-books",
        description: "The main guide for friendly ghost Halloween coloring books.",
      },
      {
        label: "Cozy Ghost Coloring Books",
        href: "/cozy-ghost-coloring-books",
        description: "Warm, soft ghost coloring books for relaxing Halloween activities.",
      },
      {
        label: "Cute Ghost Coloring Books",
        href: "/cute-ghost-coloring-books",
        description: "Cute ghost book ideas with friendly characters and playful scenes.",
      },
    ],
    faqs: [
      {
        question: "Are ghost coloring books usually scary?",
        answer:
          "Many ghost coloring books are friendly rather than scary, using cute expressions, pumpkins, candy, bats, cozy rooms, and playful Halloween settings.",
      },
      {
        question: "What themes pair well with ghost coloring books?",
        answer:
          "Ghost books pair naturally with pumpkins, witches, bats, haunted-but-cute houses, candy, cozy fall scenes, and bold easy Halloween pages.",
      },
      {
        question: "Can this hub help with gift ideas?",
        answer:
          "Yes. The featured books and related guides point toward ghost-themed picks for baskets, classroom treats, fall gifts, and screen-free activities.",
      },
    ],
  },
  {
    slug: "bold-easy",
    title: "Bold and Easy Halloween Coloring Books",
    description:
      "Bold and easy Halloween coloring books with simple, clear, relaxing designs for kids, teens, adults, and beginners.",
    intro:
      "This hub focuses on simple Halloween coloring books with clear shapes, bold outlines, and low-stress seasonal pages. It is designed for beginners, kids, casual colorists, and anyone who wants pumpkin, ghost, witch, or cute spooky themes without tiny details.",
    keywords: ["bold", "easy", "simple"],
    bestFor: [
      "Beginners and casual coloring fans",
      "Low-stress screen-free activities",
      "Kids who prefer simple Halloween pages",
    ],
    featuredAsins: ["B0FGP9HQ24", "B0FC2HL9PN", "B0FMPTFWC7", "B0FB8RLT7R"],
    relatedGuides: [
      {
        label: "Bold and Easy Halloween Coloring Books",
        href: "/bold-and-easy-halloween-coloring-books",
        description: "The main guide for simple Halloween coloring books and beginner-friendly pages.",
      },
      {
        label: "Easy Pumpkin Coloring Pages",
        href: "/easy-pumpkin-coloring-pages",
        description: "Pumpkin-friendly books and guides for easy seasonal coloring.",
      },
      {
        label: "Halloween Activity Books",
        href: "/halloween-activity-books",
        description: "Coloring-focused activity book ideas for kids, families, classrooms, and baskets.",
      },
    ],
    faqs: [
      {
        question: "Who should choose bold and easy Halloween books?",
        answer:
          "They are useful for beginners, kids, classroom activities, casual adult coloring, and quick seasonal breaks with less detailed artwork.",
      },
      {
        question: "Are bold and easy books only for young children?",
        answer:
          "No. Adults and teens can also prefer bold easy books when they want relaxing pages that are simple to finish.",
      },
      {
        question: "What should I browse after this category?",
        answer:
          "Try the bold and easy guide, easy pumpkin guide, Halloween activity books, and individual book pages for related ASIN-based picks.",
      },
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
