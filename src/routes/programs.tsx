import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Trophy, Users, HeartPulse, MapPin } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programmes — CadreSports" },
      { name: "description", content: "Amateur leagues, fellowship, corporate wellness, and community activation across Maharashtra." },
      { property: "og:title", content: "Programmes — CadreSports" },
      { property: "og:description", content: "Six pillars. One ecosystem. Starting with Maharashtra." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    id: "leagues",
    label: "Structured Amateur Leagues",
    tagline: "Weekly leagues, district by district.",
    icon: Trophy,
    body: "Multi-tier weekly leagues across Badminton, Football, Basketball, and Kabaddi — launching in Nagpur, Pune, and Nashik. Formats range from beginner to competitive, with women-first, corporate, and masters tiers. Run by certified Tournament Operators on public and private grounds.",
    bullets: ["Four pilot sports across three cities", "Multi-tier: beginner, intermediate, competitive", "Women-first and masters formats", "Certified Tournament Operators on the ground"],
  },
  {
    id: "fellowship",
    label: "CadreSports Fellowship",
    tagline: "Building India's sports administrators.",
    icon: Users,
    body: "A 12-month paid fellowship placing young professionals into federations, districts, and corporate programmes. Fellows rotate through revenue, governance, operations, technology, media, and events — owning real outcomes, not tasks. Ten fellows in year one, scaling to fifty-plus.",
    bullets: ["12-month paid placement", "Six rotations across the ecosystem", "10 fellows year one, 50+ by year three", "A credential federations and cities recognise"],
  },
  {
    id: "corporate",
    label: "Corporate Wellness",
    tagline: "Sport as workplace infrastructure.",
    icon: HeartPulse,
    body: "Multi-sport tournaments, inter-company leagues, and expert-led health seminars for India's leading employers. We deliver observable, auditable wellness data from real league participation — feeding into ESG reporting, DEI metrics, and ISO 45003 compliance.",
    bullets: ["Multi-sport inter-company tournaments", "Expert-led health seminars", "ESG-ready wellness dashboards", "DPDP-compliant employee data handling"],
  },
  {
    id: "community",
    label: "Community Activation",
    tagline: "Where sport begins.",
    icon: MapPin,
    body: "Low-barrier, lifetime-sport programmes deployed at the ward and village level. Women-first formats, school partnerships, senior-friendly activities, and physical literacy basics — designed to be replicable in under-resourced localities, not just metros.",
    bullets: ["Ward-level hyperlocal programmes", "Women-first and senior-friendly formats", "School partnerships with teacher training", "Health screening integration"],
  },
];

function Programs() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Programmes</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-balance">
            Six pillars. <span className="italic text-primary glow-text">One ecosystem.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Each programme generates demand and data the next one consumes &mdash;
            starting with Maharashtra, scaling pan-India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 space-y-8">
        {programs.map((p, i) => {
          const Icon = p.icon;
          return (
            <article key={p.id} id={p.id} className="group rounded-3xl glass overflow-hidden hover:neon-border transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className={`lg:col-span-5 relative ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[5/4] lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
                    <div className="absolute inset-0 grid-bg-dense opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="h-12 w-12 text-primary/30 mx-auto" />
                        <p className="font-display text-7xl font-bold text-primary/15 mt-4">0{i + 1}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/40 mt-2">{p.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">0{i + 1}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                    {p.tagline}
                  </h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{p.body}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:glow-sm transition-all w-fit">
                    Get involved <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
