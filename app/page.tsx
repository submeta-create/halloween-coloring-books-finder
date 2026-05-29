import { HomePageClient } from "@/app/components/HomePageClient";
import { products, site } from "@/app/data/products";
import { getHomepageItemListSchema } from "@/app/lib/schema";

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: `${site.url}/og-image.jpg`,
        email: site.email,
        description: site.description,
      },
      getHomepageItemListSchema(products),
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5efe6] px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />
      <HomePageClient />
    </main>
  );
}
