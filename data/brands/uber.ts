import type { Brand } from "@/lib/types"

export const uber: Brand = {
  slug: "uber",
  name: "Uber",
  description:
    "Uber is a global technology platform that connects riders with drivers, offering ride-hailing, food delivery, freight transportation, and micro-mobility services. Founded in 2009 in San Francisco, Uber operates in over 70 countries and has fundamentally transformed urban transportation and the gig economy.",
  url: "https://uber.com",
  industry: "technology",
  categories: ["technology", "travel", "wordmark-logos"],
  tags: ["ride-sharing", "delivery", "mobility", "transportation", "logistics"],
  colors: [
    {
      name: "Uber Black",
      hex: "#000000",
      usage:
        "Primary brand color, used in the logo, app interface, and all core brand touchpoints.",
    },
    {
      name: "Uber White",
      hex: "#FFFFFF",
      usage:
        "Secondary brand color for backgrounds, reversed logo applications, and light UI themes.",
    },
    {
      name: "Safety Blue",
      hex: "#276EF1",
      usage:
        "Used for links, interactive elements, and safety-related features in the app.",
    },
    {
      name: "Uber Green",
      hex: "#166C3B",
      usage:
        "Accent color used for success states, Uber Eats branding, and positive confirmations.",
    },
  ],
  typography: [
    {
      name: "Uber Move",
      role: "Display / Headlines",
      weights: ["400", "500", "700"],
      category: "sans-serif",
      designer: "Wolff Olins",
      foundry: "Uber / Wolff Olins",
      fontUrl: "/brands/uber/fonts/uber-move-medium.woff2",
    },
  ],
  assets: [
    {
      label: "Uber Wordmark — Black",
      src: "/brands/uber/uber-logo-black.svg",
      width: 927,
      height: 322,
      format: "svg",
    },
    {
      label: "Uber Wordmark — White",
      src: "/brands/uber/uber-logo-white.svg",
      width: 927,
      height: 322,
      format: "svg",
    },
  ],
  thumbnail: {
    label: "Uber Wordmark — Black",
    src: "/brands/uber/uber-logo-black.svg",
    width: 927,
    height: 322,
    format: "svg",
  },
  thumbnailDark: {
    label: "Uber Wordmark — White",
    src: "/brands/uber/uber-logo-white.svg",
    width: 927,
    height: 322,
    format: "svg",
  },
  dateAdded: "2026-03-15",
  founded: 2009,
  headquarters: "San Francisco, California",
  designer: "Wolff Olins",
  lastRebranded: "2018",
  philosophy:
    "Uber's identity is built on bold simplicity and global recognition. The monochrome wordmark and custom Uber Move typeface reflect a commitment to clarity, efficiency, and seamless urban mobility.",
  legal: {
    guidelinesUrl: "https://brand.uber.com",
    dos: [
      "Use the official Uber wordmark from brand resources",
      "Maintain clear space around the logo equal to the height of the U character",
      "Use Uber Black or Uber White logo variants on appropriate backgrounds",
    ],
    donts: [
      "Alter the proportions, colors, or spacing of the Uber wordmark",
      "Place the logo on busy backgrounds without sufficient contrast",
      "Use the Uber name or logo to imply endorsement without authorization",
      "Recreate the wordmark using any other typeface",
    ],
  },
}
