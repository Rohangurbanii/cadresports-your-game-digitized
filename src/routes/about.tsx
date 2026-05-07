import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, Heart, GraduationCap, Cpu, Shield, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CadreSports" },
      { name: "description", content: "CadreSports is a Section 8 non-profit building India's amateur sports ecosystem from Maharashtra outward." },
    ],
  }),
  component: About,
});

function About() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-24">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">About CadreSports</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              The <span className="text-primary">operating layer</span> for amateur sport in India.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/60">
              CadreSports is a Section 8 non-profit company focused on the promotion of
              sports and games. We aggregate leagues, participants, venues, and partners
              onto shared infrastructure — building the participation economy India needs.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="relative py-20 bg-slate-50 border-y border-black/8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal-left rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 aspect-[4/3] flex items-center justify-center">
            <div className="text-center">
              <Users className="h-16 w-16 text-primary/30 mx-auto" />
              <p className="font-display text-4xl font-bold text-primary/20 mt-4">Why</p>
              <p className="text-xs uppercase tracking-wider text-foreground/30 mt-2">We Exist</p>
            </div>
          </div>
          <div className="scroll-reveal-right">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Why we exist</h2>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              India's sports economy is over-indexed toward elite narratives and tournament moments.
              Weekly amateur participation — the layer that in other countries produces adult
              health, community identity, and genuine talent funnels — barely exists at scale.
            </p>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              The state funds infrastructure that sits underused. Federations operate in parallel
              to communities. Schools produce drop-off, not continuity. CadreSports provides the
              shared rails that make each of these players more valuable.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="scroll-reveal mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">What we believe</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", t: "Participation first", d: "Weekly habit formation over tournament heroics. Consistency builds communities.", Icon: Users },
            { n: "02", t: "Designed for inclusion", d: "Women-first formats, senior-friendly activities, underserved districts. Not an afterthought.", Icon: Heart },
            { n: "03", t: "Digitise the infrastructure", d: "One participant ID, shared rails, real-time data. Tech removes friction so people can play.", Icon: Cpu },
            { n: "04", t: "Train the cadre", d: "India lacks professional sports administrators. Our fellowship builds them from day one.", Icon: GraduationCap },
            { n: "05", t: "Zero cost to the state", d: "Commercially sustained, surplus reinvested. We activate public grounds without drawing on public budgets.", Icon: Shield },
            { n: "06", t: "Olympic-ready from the grassroots", d: "A nation that plays every week is a nation ready to host the Games.", Icon: Globe },
          ].map((b, i) => {
            const Icon = b.Icon;
            return (
              <div key={b.n} className={`scroll-reveal stagger-${i + 1} rounded-2xl border border-black/8 p-6 bg-white border-animate group`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-display text-sm text-primary font-bold">{b.n}</span>
                </div>
                <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{b.t}</h3>
                <p className="mt-2 text-sm text-foreground/50">{b.d}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 scroll-reveal rounded-2xl bg-primary text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <div className="relative">
            <p className="text-xs uppercase tracking-wider text-white/70">Legal structure</p>
            <p className="mt-4 font-display text-2xl md:text-3xl max-w-3xl font-bold">
              CadreSports is incorporated as a <span className="underline decoration-white/30 underline-offset-4">Section 8 non-profit company</span> under
              the Companies Act, 2013 — focused on promotion of sports and games.
              Every rupee of surplus is reinvested into the ecosystem.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-all">
              Partner with us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
