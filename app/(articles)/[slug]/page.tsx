import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/app/components/ArticleTemplate";
import {
  articles,
  getArticle,
  getArticleFeaturedBooks,
} from "@/app/data/articles";
import { site } from "@/app/data/products";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: site.name,
    };
  }

  return {
    title: `${article.title} | ${site.name}`,
    description: article.description,
    alternates: {
      canonical: `${site.url}/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.description,
      url: `${site.url}/${article.slug}`,
      type: "article",
      images: [
        {
          url: `${site.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const featuredBooks = getArticleFeaturedBooks(article);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: `${site.url}/${article.slug}`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${article.title} featured books`,
    description: article.description,
    itemListElement: featuredBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/books/${book.asin}`,
      name: book.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <ArticleTemplate article={article} featuredBooks={featuredBooks} />
    </>
  );
}
