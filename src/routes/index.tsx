import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import badminton from "@/assets/badminton.jpg";
import football from "@/assets/football.jpg";
import fellowship from "@/assets/fellowship.jpg";
import corporate from "@/assets/corporate.jpg";
import olympics from "@/assets/olympics.jpg";
import community from "@/assets/community.jpg";
import communityBadminton from "@/assets/community-badminton.png";
import communityFootball from "@/assets/community-football.png";
import { Marquee } from "@/components/site/Marquee";
import { ArrowUpRight, Users, HeartPulse, Trophy, Sparkles, MapPin, Heart, GraduationCap, Monitor, QrCode, BarChart3, Film } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CadreSports — Your Game, Digitised" },
      { name: "description", content: "India's full-stack amateur sports ecosystem — leagues, fellowship, corporate wellness, community activation, and the road to 2036." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              A Section 8 non-profit &middot; Promotion of Sports &amp; Games
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[0.95] tracking-tight text-balance">
              A full-stack
              <br />
              amateur sports
              <br />
              <span className="italic text-primary">ecosystem.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70 text-pretty">
              CadreSports is India&rsquo;s integrated platform for amateur sports &mdash;
              connecting leagues, participants, communities, corporate partners, and government
              onto one shared digital infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
              >
                Explore programmes
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/60"
              >
                Our story
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "4", v: "Pilot sports" },
                { k: "6", v: "Pillars" },
                { k: "Nagpur", v: "Pilot city" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl md:text-4xl font-semibold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={hero} alt="Amateur athletes competing" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cream">
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-80">Pilot launching</p>
                  <p className="font-display text-xl">Nagpur, Maharashtra</p>
                </div>
                <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">2026</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 hidden lg:flex flex-col items-center justify-center h-24 w-24 rounded-2xl bg-accent text-accent-foreground rotate-[-8deg] shadow-lg">
              <span className="font-display text-2xl font-bold">2036</span>
              <span className="text-[10px] uppercase tracking-wider">Road to</span>
            </div>
          </div>
        </div>

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      </section>

      {/* MARQUEE — more sports, no pillar words */}
      <Marquee items={["Badminton", "Football", "Basketball", "Kabaddi", "Cricket", "Table Tennis", "Volleyball", "Running", "Pickleball", "Tennis"]} />

      {/* PROGRAMMES */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Six pillars. <span className="italic">One ecosystem.</span>
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md">
            Each programme generates demand and data the next one consumes &mdash;
            leagues, community, fellowship, corporate wellness, digital infrastructure, and the Olympic movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <ProgramCard
            tag="01 / Leagues"
            title="Structured Amateur Leagues"
            desc="Weekly multi-tier leagues across Badminton, Football, Basketball, and Kabaddi — piloting in Nagpur."
            img={badminton}
            color="bg-primary"
          />
          <ProgramCard
            tag="02 / Fellowship"
            title="CadreSports Fellowship"
            desc="A 12-month paid fellowship placing young professionals into sports federations, districts, and corporate programmes."
            img={fellowship}
            color="bg-[var(--ink)]"
            dark
          />
          <ProgramCard
            tag="03 / Corporate Wellness"
            title="Sport for the Workplace"
            desc="Multi-sport tournaments, inter-company leagues, and expert-led health seminars for India's leading employers."
            img={corporate}
            color="bg-accent"
          />
          <ProgramCard
            tag="04 / Olympic Movement"
            title="Road to 2036"
            desc="Excellence, respect, and friendship — building grassroots sports culture and volunteer infrastructure for India's Olympic moment."
            img={olympics}
            color="bg-primary"
            dark
          />
        </div>
      </section>

      {/* COMMUNITY ACTIVATION */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0">
            <img src={community} alt="Community sports activation" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-[var(--ink)]/60" />
          </div>
          <div className="relative mx-auto px-8 md:px-14 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">05 / Community Activation</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-cream max-w-2xl leading-[1.05]">
              Where sport <span className="italic text-accent">begins.</span>
            </h2>
            <p className="mt-5 max-w-xl text-cream/70 text-lg">
              Low-barrier, lifetime-sport programmes deployed at the ward and village
              level — reaching populations underserved by existing sports infrastructure.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: MapPin, label: "Ward-level programmes", desc: "Hyperlocal activation in wards and villages across Maharashtra." },
                { Icon: Heart, label: "Women-first formats", desc: "Separate leagues, safe spaces, and flexible scheduling by design." },
                { Icon: GraduationCap, label: "School partnerships", desc: "Physical literacy integrated into school timetables and curricula." },
                { Icon: Sparkles, label: "Senior-friendly", desc: "Low-impact formats for every age group. Lifetime sport means lifetime access." },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="border-t border-cream/15 pt-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-display text-lg text-cream">{label}</p>
                  <p className="mt-2 text-sm text-cream/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="bg-[var(--ink)] text-cream relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The mission</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-4xl text-balance">
            Make playing sport a <span className="italic text-accent">weekly habit</span> for
            every Indian &mdash; across age, gender, income, and geography.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Users, k: "Participation", v: "Lower the barrier to play in every neighbourhood." },
              { Icon: HeartPulse, k: "Public Health", v: "Sport as preventive medicine — addressing India's inactivity crisis." },
              { Icon: Sparkles, k: "Leadership", v: "Train the operational cadre that will lead Indian sport for decades." },
              { Icon: Trophy, k: "Olympic Readiness", v: "Excellence, respect, friendship — grassroots culture for 2036 and beyond." },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="border-t border-cream/15 pt-5">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-xl">{k}</p>
                <p className="mt-2 text-sm text-cream/70">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL INFRASTRUCTURE — tech-sports fusion */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">06 / Digital Infrastructure</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              One platform. Every league, participant, and partner.
            </h2>
            <p className="mt-5 text-foreground/70 text-lg">
              CadreSports digitises the entire amateur sports stack &mdash;
              one participant ID across every league, community programme,
              corporate engagement, and school partnership.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { Icon: QrCode, label: "QR onboarding", desc: "Register in under 2 minutes at any venue" },
                { Icon: Monitor, label: "Live dashboards", desc: "Real-time data for government and partners" },
                { Icon: BarChart3, label: "Rankings & scores", desc: "Scheduling, scoring, standings — automated" },
                { Icon: Film, label: "Highlight clips", desc: "Personalised 15-second player moments" },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="flex gap-3 items-start p-3 rounded-xl bg-card border border-border">
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Tech-sports fusion mock UI */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--ink)] to-[var(--ink)]/90 p-6 md:p-8 text-cream shadow-xl border border-border/30 overflow-hidden relative">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: "linear-gradient(rgba(0,150,123,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,123,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }} />
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono">CadreSports Platform v1.0</p>
                    </div>
                    <p className="font-display text-2xl md:text-3xl mt-2">League Dashboard</p>
                  </div>
                  <span className="rounded-full bg-primary/20 text-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider font-mono">Pilot</span>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { n: "8", l: "Teams" },
                    { n: "64", l: "Players" },
                    { n: "4", l: "Sports" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-cream/[0.04] border border-cream/[0.08] p-3 text-center">
                      <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
                      <div className="text-[10px] uppercase tracking-wider mt-1 opacity-50 font-mono">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  {["Badminton · Nagpur District League", "Football · Weekend 5-a-side", "Basketball · 3x3 Open"].map((t, i) => (
                    <div key={t} className="flex items-center justify-between rounded-lg bg-cream/[0.03] border border-cream/[0.06] px-4 py-2.5">
                      <span className="text-xs text-cream/70 font-mono">{t}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${i === 0 ? "text-primary" : "text-cream/30"}`}>
                        {i === 0 ? "Active" : "Upcoming"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] text-cream/30 font-mono">
                  <span className="h-px flex-1 bg-cream/10" />
                  QR &middot; Participant ID &middot; Live Scores &middot; Rankings
                  <span className="h-px flex-1 bg-cream/10" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rotate-[-4deg] rounded-2xl bg-primary text-primary-foreground p-4 shadow-xl max-w-[180px]">
              <p className="font-display text-sm font-semibold">One ID</p>
              <p className="text-xs mt-0.5 opacity-80">Across every league &amp; programme</p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY LEAGUES — two rich editorial cards */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 space-y-6">
        {/* Card 1 — Badminton / Participation & Habit */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-card border border-border">
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img src={communityBadminton} alt="Community playing badminton" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider w-fit mb-5">Well-designed amateur leagues</span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Turning one-off matches into weekly habits.
            </h3>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Tournaments create excitement — but it&rsquo;s weekly, structured participation
              that builds lasting health outcomes and genuine community. Our leagues are
              designed for repetition: same time, same court, same people, every week.
              The format creates identity, not just activity.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Multi-tier formats from beginner to competitive",
                "Consistent weekly scheduling that builds routine",
                "Participant IDs that track progress across seasons",
                "Women-first, masters, and corporate tiers by design",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2 — Football / Community Identity */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-card border border-border">
          <div className="p-8 md:p-12 flex flex-col justify-center lg:order-1">
            <span className="inline-block rounded-full bg-accent/20 text-accent-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider w-fit mb-5">Community identity through sport</span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              A neighbourhood that plays together, stays together.
            </h3>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              When the same group shows up every Sunday for a league match, something
              shifts — strangers become teammates, teammates become friends, and a
              local sports culture takes root. That&rsquo;s the infrastructure no app can
              replicate. CadreSports provides the format; the community builds itself.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Weekly fixtures that create local team rivalries",
                "Shared identity through league standings and seasons",
                "Neighbourhood-level activation across wards and districts",
                "Live scoring and highlights that celebrate local heroes",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden lg:order-2">
            <img src={communityFootball} alt="Community playing football" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-balance">
                Be part of India's amateur sports movement.
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl">
                Join a league, partner with us, sponsor a community programme, or apply to the fellowship.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream text-foreground px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  tag, title, desc, img, color, dark,
}: { tag: string; title: string; desc: string; img: string; color: string; dark?: boolean; }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl ${color} ${dark ? "text-cream" : "text-foreground"} p-6 md:p-8 transition-transform hover:-translate-y-1`}>
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest opacity-70">{tag}</span>
        <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:rotate-45 transition-transform" />
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-semibold max-w-md">{title}</h3>
      <p className={`mt-3 max-w-md text-sm ${dark ? "text-cream/75" : "text-foreground/75"}`}>{desc}</p>
      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <img src={img} alt={title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
    </article>
  );
}
