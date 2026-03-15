"use client"

import { useState, useRef, useEffect } from "react"
import { useTranslations } from "next-intl"
import { IconCopy, IconCheck } from "@tabler/icons-react"
import type { BrandColor } from "@/lib/types"

export function BrandColors({ colors }: { colors: BrandColor[] }) {
  const [paletteCopied, setPaletteCopied] = useState(false)
  const t = useTranslations("brand")
  const paletteTimerRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(
    () => () => {
      if (paletteTimerRef.current) clearTimeout(paletteTimerRef.current)
    },
    []
  )

  async function copyPalette() {
    const json = JSON.stringify(
      colors.map((c) => ({
        name: c.name,
        hex: c.hex,
        ...(c.usage && { usage: c.usage }),
      })),
      null,
      2
    )
    await navigator.clipboard.writeText(json)
    setPaletteCopied(true)
    if (paletteTimerRef.current) clearTimeout(paletteTimerRef.current)
    paletteTimerRef.current = setTimeout(() => setPaletteCopied(false), 1500)
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] font-bold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
          {t("colors")}
        </h2>
        <button
          onClick={copyPalette}
          aria-label={t("copyPaletteJson")}
          className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[12px] font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-ring dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
        >
          {paletteCopied ? (
            <>
              <IconCheck className="h-3 w-3 text-green-600" />
              <span>{t("copied")}</span>
            </>
          ) : (
            <>
              <IconCopy className="h-3 w-3" />
              <span>{t("copyPaletteJson")}</span>
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
        {colors.map((color, index) => (
          <ColorRow key={`${color.hex}-${index}`} color={color} />
        ))}
      </div>
    </section>
  )
}

function ColorRow({ color }: { color: BrandColor }) {
  const [copied, setCopied] = useState(false)
  const t = useTranslations("brand")
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    []
  )

  async function copyHex() {
    await navigator.clipboard.writeText(color.hex)
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="group flex items-center gap-4 py-3">
      {/* Swatch */}
      <div
        className="h-10 w-10 shrink-0 rounded-lg shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
        style={{ backgroundColor: color.hex }}
      />

      {/* Name + usage */}
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-[13px] font-medium text-neutral-800 dark:text-neutral-200">
          {color.name}
        </span>
        {color.usage && (
          <p className="truncate text-xs text-neutral-400 dark:text-neutral-400">
            {color.usage}
          </p>
        )}
      </div>

      {/* Hex + copy */}
      <button
        onClick={copyHex}
        aria-label={t("copyHex")}
        className="flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-2 font-mono text-xs text-neutral-500 transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-ring dark:text-neutral-400 dark:hover:bg-neutral-800"
      >
        {copied ? (
          <>
            <IconCheck className="h-3 w-3 text-green-600" />
            <span>{t("copied")}</span>
          </>
        ) : (
          <>
            <IconCopy className="h-3 w-3" />
            <span>{color.hex.toUpperCase()}</span>
          </>
        )}
      </button>
    </div>
  )
}
