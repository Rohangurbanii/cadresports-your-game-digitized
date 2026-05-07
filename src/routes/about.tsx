import { createFileRoute, Link } from "@tanstack/react-router";
const fellowship = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop";

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
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">About CadreSports</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl text-balance">
          The <span className="italic">operating layer</span> for amateur sport in India.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70">
          CadreSports is a Section 8 non-profit company focused on the promotion of
          sports and games. We aggregate leagues, participants, venues, and partners
          onto shared infrastructure &mdash; building the participation economy India needs.
        </p>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img src={fellowship} alt="Sports community" loading="lazy" width={1200} height={900} className="rounded-3xl aspect-[4/3] object-cover" />
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Why we exist</h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              India's sports economy is over-indexed toward elite narratives and tournament moments.
              Weekly amateur participation &mdash; the layer that in other countries produces adult
              health, community identity, and genuine talent funnels &mdash; barely exists at scale.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              The state funds infrastructure that sits underused. Federations operate in parallel
              to communities. Schools produce drop-off, not continuity. CadreSports provides the
              shared rails that make each of these players more valuable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-3xl">What we believe</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Participation first", d: "Weekly habit formation over tournament heroics. Consistency builds communities." },
            { n: "02", t: "Designed for inclusion", d: "Women-first formats, senior-friendly activities, underserved districts. Not an afterthought." },
            { n: "03", t: "Digitise the infrastructure", d: "One participant ID, shared rails, real-time data. Tech removes friction so people can play." },
            { n: "04", t: "Train the cadre", d: "India lacks professional sports administrators. Our fellowship builds them from day one." },
            { n: "05", t: "Zero cost to the state", d: "Commercially sustained, surplus reinvested. We activate public grounds without drawing on public budgets." },
            { n: "06", t: "Olympic-ready from the grassroots", d: "A nation that plays every week is a nation ready to host the Games." },
          ].map((b) => (
            <div key={b.n} className="border-t-2 border-foreground pt-5">
              <span className="font-display text-sm text-primary">{b.n}</span>
              <h3 className="mt-2 font-display text-2xl">{b.t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[var(--ink)] text-cream p-10 md:p-14">
          <p className="text-xs uppercase tracking-widest text-accent">Legal structure</p>
          <p className="mt-4 font-display text-2xl md:text-3xl max-w-3xl">
            CadreSports is incorporated as a <span className="text-primary">Section 8 non-profit company</span> under
            the Companies Act, 2013 &mdash; focused on promotion of sports and games.
            Every rupee of surplus is reinvested into the ecosystem.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">
            Partner with us &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
