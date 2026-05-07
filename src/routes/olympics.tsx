import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Flame, Target, Users, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/olympics")({
  head: () => ({
    meta: [
      { title: "Road to 2036 — CadreSports" },
      { name: "description", content: "Building the grassroots foundation India needs for the 2036 Olympic bid." },
    ],
  }),
  component: Olympics,
});

function Olympics() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              <Flame className="h-3 w-3" /> Road to 2036
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              2036 starts at <span className="text-primary">the grassroots.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/60">
              India is actively pursuing the 2036 Olympic bid. The grassroots foundation
              needs to exist before any Olympic moment arrives — and that foundation
              is built at the district level, not in stadiums.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 scroll-reveal-left">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Building the operational cadre India needs.
          </h2>
          <p className="mt-6 text-foreground/60 leading-relaxed text-lg">
            India cannot host the Olympics without an operating cadre several thousand strong.
            Every other aspect of preparation — infrastructure, athletes, funding —
            has existing machinery. The operating layer doesn't. CadreSports is the organisation
            positioned to build it from the district level up.
          </p>
          <p className="mt-4 text-foreground/60 leading-relaxed text-lg">
            Whether Maharashtra hosts events or not, the state benefits from a deeper base
            of participation, trained volunteers, and experienced organisers. Our structured
            volunteer network, inclusive pathways, and post-Games community infrastructure
            ensure that investment outlasts any single event.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { Icon: Target, label: "36 districts", desc: "Volunteer networks across Maharashtra" },
              { Icon: Users, label: "4 pilot sports", desc: "Building the participation base" },
              { Icon: MapPin, label: "Maharashtra", desc: "The proving ground for India" },
            ].map(({ Icon, label, desc }) => (
              <div key={label} className="rounded-2xl border border-black/8 p-5 bg-white border-animate">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-xl font-bold">{label}</p>
                <p className="mt-1 text-xs text-foreground/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="scroll-reveal-right rounded-2xl bg-primary text-white p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <div className="relative">
            <p className="font-display text-7xl font-bold">2036</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-white/70">Target Games</p>
            <hr className="my-6 border-white/15" />
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" /><span><span className="font-semibold">36</span> districts with volunteer networks</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" /><span><span className="font-semibold">4</span> pilot sports building participation base</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" /><span><span className="font-semibold">Maharashtra</span> as the proving ground</span></li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="scroll-reveal rounded-2xl border-2 border-primary/20 bg-primary/5 p-10 md:p-14 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Contribute to India's Olympic readiness.
            </h3>
            <p className="mt-3 max-w-xl text-foreground/60">
              Whether through volunteering, partnership, or programme support —
              there are meaningful ways to participate in building India's sports future.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 justify-self-start md:justify-self-end rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all">
            Get involved <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
