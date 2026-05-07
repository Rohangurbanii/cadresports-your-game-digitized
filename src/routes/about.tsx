import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, Heart, GraduationCap, Cpu, Shield, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CadreSports" },
      { name: "description", content: "CadreSports is a Section 8 non-profit building India's amateur sports ecosystem from Maharashtra outward." },
      { property: "og:title", content: "About — CadreSports" },
      { property: "og:description", content: "Why we exist, what we believe, and how we operate." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About CadreSports</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-balance">
            The <span className="italic text-primary glow-text">operating layer</span> for amateur sport in India.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/50">
            CadreSports is a Section 8 non-profit company focused on the promotion of
            sports and games. We aggregate leagues, participants, venues, and partners
            onto shared infrastructure &mdash; building the participation economy India needs.
          </p>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="relative">
        <div className="absolute inset-0 grid-bg-dense opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden neon-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary/25 mx-auto" />
                <p className="font-display text-4xl font-bold text-primary/15 mt-4">Why</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/20 mt-2">We Exist</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Why we exist</h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              India's sports economy is over-indexed toward elite narratives and tournament moments.
              Weekly amateur participation &mdash; the layer that in other countries produces adult
              health, community identity, and genuine talent funnels &mdash; barely exists at scale.
            </p>
            <p className="mt-4 text-white/50 leading-relaxed">
              The state funds infrastructure that sits underused. Federations operate in parallel
              to communities. Schools produce drop-off, not continuity. CadreSports provides the
              shared rails that make each of these players more valuable.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">What we believe</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Participation first", d: "Weekly habit formation over tournament heroics. Consistency builds communities.", Icon: Users },
            { n: "02", t: "Designed for inclusion", d: "Women-first formats, senior-friendly activities, underserved districts. Not an afterthought.", Icon: Heart },
            { n: "03", t: "Digitise the infrastructure", d: "One participant ID, shared rails, real-time data. Tech removes friction so people can play.", Icon: Cpu },
            { n: "04", t: "Train the cadre", d: "India lacks professional sports administrators. Our fellowship builds them from day one.", Icon: GraduationCap },
            { n: "05", t: "Zero cost to the state", d: "Commercially sustained, surplus reinvested. We activate public grounds without drawing on public budgets.", Icon: Shield },
            { n: "06", t: "Olympic-ready from the grassroots", d: "A nation that plays every week is a nation ready to host the Games.", Icon: Globe },
          ].map((b) => {
            const Icon = b.Icon;
            return (
              <div key={b.n} className="group rounded-2xl glass p-6 hover:neon-border transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-display text-sm text-primary font-semibold">{b.n}</span>
                </div>
                <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">{b.t}</h3>
                <p className="mt-2 text-sm text-white/40">{b.d}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-primary p-10 md:p-14 relative overflow-hidden glow-md">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Legal structure</p>
            <p className="mt-4 font-display text-2xl md:text-3xl max-w-3xl font-bold">
              CadreSports is incorporated as a <span className="underline decoration-white/30 underline-offset-4">Section 8 non-profit company</span> under
              the Companies Act, 2013 &mdash; focused on promotion of sports and games.
              Every rupee of surplus is reinvested into the ecosystem.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-[#0D0D0D] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-all">
              Partner with us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
