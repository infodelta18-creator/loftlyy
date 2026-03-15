import type { Brand } from "@/lib/types"

export const whatsapp: Brand = {
  slug: "whatsapp",
  name: "WhatsApp",
  description:
    "WhatsApp is a globally ubiquitous messaging platform that enables text, voice, and video communication across devices. Owned by Meta, it serves over two billion users worldwide with end-to-end encrypted messaging, making it one of the most widely used communication tools on the planet.",
  url: "https://whatsapp.com",
  industry: "social-media",
  categories: ["social-media", "technology"],
  tags: ["communication", "messaging", "encryption", "mobile", "voice-chat"],
  colors: [
    {
      name: "WhatsApp Green",
      hex: "#25D366",
      usage:
        "Primary brand color. Used for the app icon, buttons, and interactive elements.",
    },
    {
      name: "Teal Green",
      hex: "#128C7E",
      usage:
        "Header backgrounds, status bar, and primary dark accent throughout the app.",
    },
    {
      name: "Teal Green Dark",
      hex: "#075E54",
      usage:
        "Darker accent used in top bars, selected states, and contrast elements.",
    },
    {
      name: "Light Green",
      hex: "#DCF8C6",
      usage:
        "Outgoing message bubbles in light mode, conveying a friendly tone.",
    },
    {
      name: "Blue",
      hex: "#34B7F1",
      usage: "Read receipt checkmarks and link highlights.",
    },
  ],
  typography: [
    {
      name: "Helvetica Neue",
      role: "Primary / UI",
      weights: ["400", "700"],
      category: "sans-serif",
      designer: "Max Miedinger",
      foundry: "Linotype",
      fontUrl: "/brands/whatsapp/fonts/helvetica-neue.woff2",
    },
  ],
  assets: [
    {
      label: "WhatsApp Icon (Green)",
      src: "/brands/whatsapp/whatsapp-logo-green.svg",
      width: 256,
      height: 258,
      format: "svg",
    },
    {
      label: "WhatsApp Icon (Black)",
      src: "/brands/whatsapp/whatsapp-logo-black.svg",
      width: 256,
      height: 258,
      format: "svg",
    },
    {
      label: "WhatsApp Icon (White)",
      src: "/brands/whatsapp/whatsapp-logo-white.svg",
      width: 256,
      height: 258,
      format: "svg",
    },
  ],
  thumbnail: {
    label: "WhatsApp Icon",
    src: "/brands/whatsapp/whatsapp-logo-green.svg",
    width: 256,
    height: 258,
    format: "svg",
  },
  thumbnailDark: {
    label: "WhatsApp Icon (White)",
    src: "/brands/whatsapp/whatsapp-logo-white.svg",
    width: 256,
    height: 258,
    format: "svg",
  },
  dateAdded: "2026-03-15",
  founded: 2009,
  headquarters: "Menlo Park, CA",
  designer: "WhatsApp Design Team",
  lastRebranded: "2019",
  philosophy:
    "Simple, reliable, and private. WhatsApp's identity centers on accessibility and trust — a clean, green speech bubble symbolizing direct, secure communication without barriers.",
  legal: {
    guidelinesUrl:
      "https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/",
    dos: [
      "Use the official WhatsApp logo assets from Meta's brand resource center.",
      "Maintain adequate clear space around the WhatsApp logo.",
      "Use the green brand color (#25D366) when representing WhatsApp.",
    ],
    donts: [
      "Alter, rotate, or distort the WhatsApp logo in any way.",
      "Use the WhatsApp name or logo to imply endorsement or partnership without permission.",
      "Recreate or modify the speech bubble icon.",
      "Use the WhatsApp brand assets in a way that is misleading or confusing.",
    ],
  },
}
