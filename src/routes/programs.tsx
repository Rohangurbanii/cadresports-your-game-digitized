import { createFileRoute, Link } from "@tanstack/react-router";
const badminton = "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop";
const fellowship = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop";
const corporate = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop";
const community = "https://images.pexels.com/photos/1000154/pexels-photo-1000154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop";

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
    img: badminton,
    body: "Multi-tier weekly leagues across Badminton, Football, Basketball, and Kabaddi — launching in Nagpur, Pune, and Nashik. Formats range from beginner to competitive, with women-first, corporate, and masters tiers. Run by certified Tournament Operators on public and private grounds.",
    bullets: ["Four pilot sports across three cities", "Multi-tier: beginner, intermediate, competitive", "Women-first and masters formats", "Certified Tournament Operators on the ground"],
  },
  {
    id: "fellowship",
    label: "CadreSports Fellowship",
    tagline: "Building India's sports administrators.",
    img: fellowship,
    body: "A 12-month paid fellowship placing young professionals into federations, districts, and corporate programmes. Fellows rotate through revenue, governance, operations, technology, media, and events — owning real outcomes, not tasks. Ten fellows in year one, scaling to fifty-plus.",
    bullets: ["12-month paid placement", "Six rotations across the ecosystem", "10 fellows year one, 50+ by year three", "A credential federations and cities recognise"],
  },
  {
    id: "corporate",
    label: "Corporate Wellness",
    tagline: "Sport as workplace infrastructure.",
    img: corporate,
    body: "Multi-sport tournaments, inter-company leagues, and expert-led health seminars for India's leading employers. We deliver observable, auditable wellness data from real league participation — feeding into ESG reporting, DEI metrics, and ISO 45003 compliance.",
    bullets: ["Multi-sport inter-company tournaments", "Expert-led health seminars", "ESG-ready wellness dashboards", "DPDP-compliant employee data handling"],
  },
  {
    id: "community",
    label: "Community Activation",
    tagline: "Where sport begins.",
    img: community,
    body: "Low-barrier, lifetime-sport programmes deployed at the ward and village level. Women-first formats, school partnerships, senior-friendly activities, and physical literacy basics — designed to be replicable in under-resourced localities, not just metros.",
    bullets: ["Ward-level hyperlocal programmes", "Women-first and senior-friendly formats", "School partnerships with teacher training", "Health screening integration"],
  },
];

function Programs() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Programmes</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl text-balance">
          Six pillars. <span className="italic">One ecosystem.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">
          Each programme generates demand and data the next one consumes &mdash;
          starting with Maharashtra, scaling pan-India.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 space-y-24">
        {programs.map((p, i) => (
          <article key={p.id} id={p.id} className="grid lg:grid-cols-12 gap-10 items-center">
            <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden">
                <img src={p.img} alt={p.label} loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute top-4 left-4 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">
                  0{i + 1}
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.label}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
                {p.tagline}
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">{p.body}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary">
                Get involved &rarr;
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
