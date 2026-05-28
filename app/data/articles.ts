import { products } from "@/app/data/products";

export type ArticleLink = {
  label: string;
  href: string;
  description: string;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type SeoArticle = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  bestFor: string[];
  featuredAsins: string[];
  relatedThemes: ArticleLink[];
  faqs: ArticleFaq[];
};

export const articles: SeoArticle[] = [
  {
    slug: "best-halloween-coloring-books-for-adults",
    title: "Best Halloween Coloring Books for Adults",
    description:
      "A curated guide to Halloween coloring books for adults who want cozy spooky themes, relaxing pages, and seasonal creative time.",
    intro:
      "Halloween coloring books for adults work best when they feel relaxing, seasonal, and easy to return to after a long day. This guide highlights cozy spooky books with autumn moods, cute Halloween details, and screen-free coloring appeal.",
    bestFor: [
      "Adults who want relaxing October coloring sessions",
      "Cozy spooky gift ideas for Halloween season",
      "Coloring fans who prefer cute, seasonal, and low-pressure pages",
    ],
    featuredAsins: ["B0F6KDB4X1", "B0F87HTSXR", "B0F5GXK4ZZ", "B0FRXTXL9Y"],
    relatedThemes: [
      {
        label: "Cozy Spooky Coloring Books",
        href: "/categories/cozy-spooky",
        description: "Soft spooky books for relaxing autumn coloring.",
      },
      {
        label: "Bold and Easy Halloween Coloring Books",
        href: "/categories/bold-easy",
        description: "Clear, simple pages for casual coloring sessions.",
      },
      {
        label: "Cute Halloween Coloring Books",
        href: "/categories/cute-halloween",
        description: "Friendly Halloween books with cozy characters.",
      },
    ],
    faqs: [
      {
        question: "What makes a Halloween coloring book good for adults?",
        answer:
          "Adult-friendly Halloween coloring books usually combine relaxing page layouts, seasonal themes, and artwork that feels enjoyable without being too childish or too intense.",
      },
      {
        question: "Are cozy Halloween coloring books good gifts?",
        answer:
          "Yes. Cozy Halloween coloring books can work well as October birthday gifts, fall self-care gifts, Halloween basket additions, or quiet creative activities.",
      },
      {
        question: "Do these pages include Amazon ratings?",
        answer:
          "No. This site does not manually display Amazon star ratings or review counts. Check current reviews and availability on Amazon.",
      },
    ],
  },
  {
    slug: "cute-ghost-coloring-books",
    title: "Cute Ghost Coloring Books",
    description:
      "Find cute ghost coloring books with friendly spooky characters, pumpkins, cozy scenes, and soft Halloween themes.",
    intro:
      "Cute ghost coloring books are a friendly way to enjoy Halloween without making the theme too scary. They often pair simple ghost characters with pumpkins, cozy rooms, bats, snacks, and playful autumn scenes.",
    bestFor: [
      "Kids and teens who like friendly ghost characters",
      "Halloween activity time without scary imagery",
      "Gift baskets, classroom treats, and cozy October afternoons",
    ],
    featuredAsins: ["B0F5GXK4ZZ", "B0F7X8W5J3", "B0FK9SYH6W", "B0FC2HL9PN"],
    relatedThemes: [
      {
        label: "Ghost Coloring Books",
        href: "/categories/ghost-coloring-books",
        description: "A focused collection of ghost-themed Halloween books.",
      },
      {
        label: "Cute Halloween Coloring Books",
        href: "/categories/cute-halloween",
        description: "Cute pumpkins, ghosts, animals, and cozy scenes.",
      },
      {
        label: "Spooky Snuggles Halloween Coloring Book",
        href: "/books/B0F5GXK4ZZ",
        description: "A cozy ghost-forward Halloween coloring book pick.",
      },
    ],
    faqs: [
      {
        question: "Are cute ghost coloring books scary?",
        answer:
          "Most cute ghost coloring books use friendly shapes, soft expressions, and playful Halloween settings rather than horror imagery.",
      },
      {
        question: "Who are cute ghost coloring books best for?",
        answer:
          "They are often a good fit for kids, teens, and adults who enjoy friendly Halloween characters and cozy spooky themes.",
      },
      {
        question: "Can ghost coloring books be used as Halloween gifts?",
        answer:
          "Yes. They can work as Halloween basket fillers, classroom-friendly gifts, or simple seasonal activities.",
      },
    ],
  },
  {
    slug: "cozy-halloween-coloring-books",
    title: "Cozy Halloween Coloring Books",
    description:
      "A curated look at cozy Halloween coloring books with soft spooky scenes, autumn comfort, cute characters, and relaxing seasonal pages.",
    intro:
      "Cozy Halloween coloring books focus on the softer side of spooky season: pumpkins, blankets, warm drinks, friendly ghosts, cute animals, and calm autumn scenes. They are useful for readers who want Halloween atmosphere without heavy horror themes.",
    bestFor: [
      "Coloring fans who like soft spooky autumn moods",
      "Relaxing fall evenings and screen-free breaks",
      "Seasonal gifts for Halloween and cozy fall routines",
    ],
    featuredAsins: ["B0F6KDB4X1", "B0FKNDH6VD", "B0F5GXK4ZZ", "B0FMPXV23H"],
    relatedThemes: [
      {
        label: "Cozy Spooky Coloring Books",
        href: "/categories/cozy-spooky",
        description: "Books centered on relaxing spooky-season themes.",
      },
      {
        label: "Cute Halloween Coloring Books",
        href: "/categories/cute-halloween",
        description: "Friendly Halloween designs with cute seasonal artwork.",
      },
      {
        label: "Little Cozy Fall Coloring Book",
        href: "/books/B0FKNDH6VD",
        description: "A fall-focused coloring book with cozy seasonal appeal.",
      },
    ],
    faqs: [
      {
        question: "What is a cozy Halloween coloring book?",
        answer:
          "A cozy Halloween coloring book uses seasonal Halloween elements in a softer way, often with cute characters, autumn objects, and relaxing page designs.",
      },
      {
        question: "Are cozy Halloween coloring books only for adults?",
        answer:
          "No. Many cozy Halloween books can appeal to kids, teens, and adults, depending on the art style and page complexity.",
      },
      {
        question: "How should I choose a cozy Halloween coloring book?",
        answer:
          "Look for themes you enjoy, such as ghosts, pumpkins, cozy rooms, animals, snacks, or bold easy pages.",
      },
    ],
  },
  {
    slug: "pumpkin-coloring-books",
    title: "Pumpkin Coloring Books",
    description:
      "Explore pumpkin coloring books and Halloween books with pumpkins, jack-o-lanterns, cozy fall scenes, and seasonal gift appeal.",
    intro:
      "Pumpkin coloring books are useful for both Halloween and broader fall coloring themes. They can include jack-o-lanterns, pumpkin patches, cozy drinks, autumn leaves, friendly ghosts, and seasonal decorations.",
    bestFor: [
      "Fall coloring activities with Halloween overlap",
      "Kids and adults who enjoy pumpkins and autumn scenes",
      "Seasonal gifts, classroom activities, and cozy weekend coloring",
    ],
    featuredAsins: ["B0FKNDH6VD", "B0FK9SYH6W", "B0F5GXK4ZZ", "B0F7X8W5J3"],
    relatedThemes: [
      {
        label: "Cute Halloween Coloring Books",
        href: "/categories/cute-halloween",
        description: "Cute Halloween designs with pumpkins and friendly scenes.",
      },
      {
        label: "Cozy Spooky Coloring Books",
        href: "/categories/cozy-spooky",
        description: "Relaxing Halloween and autumn coloring books.",
      },
      {
        label: "Little Cozy Halloween Coloring Book",
        href: "/books/B0FK9SYH6W",
        description: "A Halloween book with cute seasonal artwork.",
      },
    ],
    faqs: [
      {
        question: "Are pumpkin coloring books only for Halloween?",
        answer:
          "No. Pumpkin coloring books can fit Halloween, fall, Thanksgiving-adjacent activities, and general autumn coloring sessions.",
      },
      {
        question: "What themes pair well with pumpkin coloring books?",
        answer:
          "Pumpkins pair well with ghosts, bats, fall leaves, cozy drinks, witches, animals, and cute spooky scenes.",
      },
      {
        question: "Are pumpkin coloring books good for beginners?",
        answer:
          "Many pumpkin-themed books are beginner friendly, especially when they use bold outlines or simple seasonal shapes.",
      },
    ],
  },
  {
    slug: "books-similar-to-coco-wyo-style",
    title: "Books Similar to Coco Wyo Style",
    description:
      "Find cozy, cute, and bold Halloween coloring books for readers who enjoy simple seasonal coloring styles and playful spooky themes.",
    intro:
      "Readers searching for books similar to Coco Wyo style often want cute characters, bold outlines, simple scenes, cozy themes, and easy-to-finish pages. This guide focuses on Halloween coloring books with that kind of approachable, playful seasonal feel without claiming any affiliation.",
    bestFor: [
      "Fans of cute, bold, easy-to-color seasonal pages",
      "Coloring sessions that feel relaxing rather than complex",
      "Readers looking for cozy Halloween books with playful characters",
    ],
    featuredAsins: ["B0FGP9HQ24", "B0F7X8W5J3", "B0FC2HL9PN", "B0F5GXK4ZZ"],
    relatedThemes: [
      {
        label: "Bold and Easy Halloween Coloring Books",
        href: "/categories/bold-easy",
        description: "Simple Halloween books with clear, approachable designs.",
      },
      {
        label: "Cute Halloween Coloring Books",
        href: "/categories/cute-halloween",
        description: "Cute spooky books with playful seasonal artwork.",
      },
      {
        label: "Halloween Bold and Easy Coloring Book",
        href: "/books/B0FGP9HQ24",
        description: "A bold easy Halloween coloring book pick.",
      },
    ],
    faqs: [
      {
        question: "Is this page affiliated with Coco Wyo?",
        answer:
          "No. This page is not affiliated with Coco Wyo. It is a neutral guide for readers looking for cozy, cute, bold, and simple Halloween coloring book styles.",
      },
      {
        question: "What does similar style mean here?",
        answer:
          "It means readers may be looking for approachable page layouts, cute characters, bold outlines, cozy themes, and easy seasonal coloring sessions.",
      },
      {
        question: "Are ratings or reviews copied from Amazon?",
        answer:
          "No. This site does not copy Amazon reviews, star ratings, or review counts. Check Amazon for current reviews and availability.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleFeaturedBooks(article: SeoArticle) {
  return article.featuredAsins
    .map((asin) => products.find((product) => product.asin === asin))
    .filter((product) => product !== undefined);
}
