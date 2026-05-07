import { createFileRoute, Link } from "@tanstack/react-router";
const olympics = "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop";

export const Route = createFileRoute("/olympics")({
  head: () => ({
    meta: [
      { title: "Road to 2036 — CadreSports" },
      { name: "description", content: "Building the grassroots foundation India needs for the 2036 Olympic bid." },
      { property: "og:title", content: "Road to 2036 — CadreSports" },
      { property: "og:description", content: "District-level volunteer networks, inclusive pathways, and post-Games community infrastructure." },
    ],
  }),
  component: Olympics,
});

function Olympics() {
  return (
    <div>
      <section className="relative bg-[var(--ink)] text-cream overflow-hidden">
        <div className="absolute inset-0">
          <img src={olympics} alt="Athletes" width={1200} height={900} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 lg:py-36">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Road to 2036</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] max-w-3xl">
            2036 starts at <span className="italic text-primary">the grassroots.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            India is actively pursuing the 2036 Olympic bid. The grassroots foundation
            needs to exist before any Olympic moment arrives &mdash; and that foundation
            is built at the district level, not in stadiums.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            Building the operational cadre India needs.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed text-lg">
            India cannot host the Olympics without an operating cadre several thousand strong.
            Every other aspect of preparation &mdash; infrastructure, athletes, funding &mdash;
            has existing machinery. The operating layer doesn't. CadreSports is the organisation
            positioned to build it from the district level up.
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed text-lg">
            Whether Maharashtra hosts events or not, the state benefits from a deeper base
            of participation, trained volunteers, and experienced organisers. Our structured
            volunteer network, inclusive pathways, and post-Games community infrastructure
            ensure that investment outlasts any single event.
          </p>
        </div>
        <aside className="rounded-3xl bg-primary text-primary-foreground p-8">
          <p className="font-display text-6xl">2036</p>
          <p className="mt-2 text-sm uppercase tracking-widest opacity-80">Target Games</p>
          <hr className="my-6 border-cream/20" />
          <ul className="space-y-4 text-sm">
            <li><span className="font-semibold">36</span> districts with volunteer networks</li>
            <li><span className="font-semibold">4</span> pilot sports building participation base</li>
            <li><span className="font-semibold">Maharashtra</span> as the proving ground</li>
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl bg-accent text-accent-foreground p-10 md:p-14 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl md:text-4xl font-semibold">
              Contribute to India's Olympic readiness.
            </h3>
            <p className="mt-3 max-w-xl">
              Whether through volunteering, partnership, or programme support &mdash;
              there are meaningful ways to participate in building India's sports future.
            </p>
          </div>
          <Link to="/contact" className="inline-flex justify-self-start md:justify-self-end rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
            Get involved &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
