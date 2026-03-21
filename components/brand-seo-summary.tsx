export function BrandSeoSummary({
  title,
  paragraphs,
}: {
  title: string
  paragraphs: string[]
}) {
  if (paragraphs.length === 0) {
    return null
  }

  return (
    <section className="flex max-w-3xl flex-col gap-3 rounded-3xl border border-neutral-200/70 bg-neutral-50/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/70">
      <h2 className="text-[13px] font-bold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
        {title}
      </h2>
      <div className="flex flex-col gap-2">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[13.5px] leading-relaxed text-neutral-600 dark:text-neutral-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
