import type { MetadataRoute } from "next"
import { getAllCategories } from "@/data/categories"
import {
  getAllBrands,
  getAllColorFamilies,
  getAllTags,
  getAllTypographyStyles,
  getBrandsByColorFamily,
  getBrandsByTag,
  getBrandsByTypographyStyle,
} from "@/data/brands"
import { routing } from "@/i18n/routing"
import { BASE_URL, buildLanguageAlternates } from "@/lib/seo"

function getLocalizedUrl(locale: string, pathname = ""): string {
  const normalizedPath =
    pathname.length === 0
      ? ""
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`
  return `${BASE_URL}/${locale}${normalizedPath}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of routing.locales) {
    entries.push({
      url: getLocalizedUrl(locale),
      alternates: {
        languages: buildLanguageAlternates("/"),
      },
    })
  }

  for (const brand of getAllBrands()) {
    const pathname = `/${brand.slug}`
    const lastModified = brand.dateAdded ? new Date(brand.dateAdded) : undefined

    for (const locale of routing.locales) {
      entries.push({
        url: getLocalizedUrl(locale, pathname),
        lastModified,
        alternates: {
          languages: buildLanguageAlternates(pathname),
        },
      })
    }
  }

  for (const category of getAllCategories()) {
    const pathname = `/category/${category.slug}`
    for (const locale of routing.locales) {
      entries.push({
        url: getLocalizedUrl(locale, pathname),
        alternates: {
          languages: buildLanguageAlternates(pathname),
        },
      })
    }
  }

  for (const tag of getAllTags()) {
    if (getBrandsByTag(tag).length <= 2) {
      continue
    }

    const pathname = `/tag/${tag}`
    for (const locale of routing.locales) {
      entries.push({
        url: getLocalizedUrl(locale, pathname),
        alternates: {
          languages: buildLanguageAlternates(pathname),
        },
      })
    }
  }

  for (const color of getAllColorFamilies()) {
    if (getBrandsByColorFamily(color).length <= 2) {
      continue
    }

    const pathname = `/color/${color}`
    for (const locale of routing.locales) {
      entries.push({
        url: getLocalizedUrl(locale, pathname),
        alternates: {
          languages: buildLanguageAlternates(pathname),
        },
      })
    }
  }

  for (const style of getAllTypographyStyles()) {
    if (getBrandsByTypographyStyle(style).length <= 2) {
      continue
    }

    const pathname = `/typography/${style}`
    for (const locale of routing.locales) {
      entries.push({
        url: getLocalizedUrl(locale, pathname),
        alternates: {
          languages: buildLanguageAlternates(pathname),
        },
      })
    }
  }

  return entries
}
