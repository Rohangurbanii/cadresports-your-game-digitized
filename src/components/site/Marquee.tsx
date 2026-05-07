export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-fade overflow-hidden border-y border-border py-4 relative">
      <div className="absolute inset-0 grid-bg-dense opacity-40" />
      <div className="marquee relative flex gap-0 whitespace-nowrap will-change-transform">
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-foreground/70 inline-flex items-center gap-0">
            <span className="px-8">{t}</span>
            <span className="text-primary text-lg">&#x25C6;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
