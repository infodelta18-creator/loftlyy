import type { Brand } from "@/lib/types"
import { assetUrl } from "@/lib/assets"
import { airbnb } from "./airbnb"
import { amazon } from "./amazon"
import { anthropic } from "./anthropic"
import { cursor } from "./cursor"
import { apple } from "./apple"
import { discord } from "./discord"
import { notion } from "./notion"
import { figma } from "./figma"
import { github } from "./github"
import { google } from "./google"
import { linear } from "./linear"
import { meta } from "./meta"
import { nvidia } from "./nvidia"
import { microsoft } from "./microsoft"
import { openai } from "./openai"
import { spotify } from "./spotify"
import { slack } from "./slack"
import { stripe } from "./stripe"
import { vercel } from "./vercel"
import { vscode } from "./vscode"
import { tesla } from "./tesla"
import { wise } from "./wise"
import { x } from "./x"

const rawBrands: Brand[] = [
  airbnb,
  amazon,
  anthropic,
  apple,
  cursor,
  discord,
  figma,
  github,
  google,
  linear,
  meta,
  microsoft,
  nvidia,
  notion,
  openai,
  spotify,
  slack,
  stripe,
  tesla,
  vercel,
  vscode,
  wise,
  x,
].sort((a, b) => a.name.localeCompare(b.name))

function withAssetUrls(brand: Brand): Brand {
  return {
    ...brand,
    typography: brand.typography.map((font) => ({
      ...font,
      fontUrl: font.fontUrl ? assetUrl(font.fontUrl) : undefined,
    })),
    assets: brand.assets.map((asset) => ({
      ...asset,
      src: assetUrl(asset.src),
      srcFull: asset.srcFull ? assetUrl(asset.srcFull) : undefined,
    })),
    thumbnail: {
      ...brand.thumbnail,
      src: assetUrl(brand.thumbnail.src),
      srcFull: brand.thumbnail.srcFull
        ? assetUrl(brand.thumbnail.srcFull)
        : undefined,
    },
    thumbnailDark: brand.thumbnailDark
      ? {
          ...brand.thumbnailDark,
          src: assetUrl(brand.thumbnailDark.src),
          srcFull: brand.thumbnailDark.srcFull
            ? assetUrl(brand.thumbnailDark.srcFull)
            : undefined,
        }
      : undefined,
  }
}

export const brands: Brand[] = rawBrands.map(withAssetUrls)

export const brandsBySlug: Record<string, Brand> = Object.fromEntries(
  brands.map((brand) => [brand.slug, brand])
)

export function getAllBrands() {
  return brands
}

export function getBrandBySlug(slug: string) {
  return brandsBySlug[slug]
}

export function getBrandsByCategory(categorySlug: string) {
  return brands.filter((b) => b.categories.includes(categorySlug))
}

export function getRawBrands() {
  return rawBrands
}
