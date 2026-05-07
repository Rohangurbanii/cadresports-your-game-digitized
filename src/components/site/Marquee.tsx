export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-fade overflow-hidden border-y border-black/8 py-4 bg-slate-50">
      <div className="marquee flex gap-0 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-lg md:text-xl font-semibold text-foreground/40 inline-flex items-center gap-0">
            <span className="px-8">{t}</span>
            <span className="text-primary text-lg">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
