export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-fade overflow-hidden border-y border-border/60 bg-background py-4">
      <div className="marquee flex gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-foreground/80 inline-flex items-center gap-12">
            {t}
            <span className="text-primary text-3xl">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
