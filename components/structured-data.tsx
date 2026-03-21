import type { Brand } from "@/lib/types"
import { toAbsoluteUrl } from "@/lib/seo"

export function SiteStructuredData({
  siteName,
  siteDescription,
  url,
}: {
  siteName: string
  siteDescription: string
  url: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    description: siteDescription,
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BrandStructuredData({ brand }: { brand: Brand }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: brand.url,
    logo: toAbsoluteUrl(brand.thumbnail.src),
    description: brand.description,
    industry: brand.industry,
    sameAs: brand.url ? [brand.url] : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BrandPageStructuredData({
  name,
  description,
  url,
  locale,
  about,
  images,
}: {
  name: string
  description: string
  url: string
  locale: string
  about: { name: string; url?: string; logo?: string }
  images: string[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale,
    about: {
      "@type": "Organization",
      name: about.name,
      url: about.url,
      logo: about.logo,
    },
    ...(images.length > 0 && {
      image: images,
      primaryImageOfPage: images[0],
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function CategoryStructuredData({
  categoryName,
  categoryDescription,
  brands,
  locale,
}: {
  categoryName: string
  categoryDescription: string
  brands: Brand[]
  locale: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: categoryName,
    description: categoryDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: brands.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `/${locale}/${b.slug}`,
        name: b.name,
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ListingStructuredData({
  name,
  description,
  brands,
  locale,
}: {
  name: string
  description: string
  brands: Brand[]
  locale: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: brands.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `/${locale}/${b.slug}`,
        name: b.name,
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQStructuredData({
  questions,
}: {
  questions: { question: string; answer: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
