import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/site/Marquee";
import {
  ArrowUpRight, Users, HeartPulse, Trophy, Sparkles,
  MapPin, Heart, GraduationCap, Monitor, QrCode,
  ChartBar as BarChart3, Film, Zap, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CadreSports — Your Game, Digitised" },
      { name: "description", content: "India's full-stack amateur sports ecosystem. Structured leagues, trained administrators, corporate wellness, community activation, and Olympic readiness — on one shared digital platform." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tighter fade-in-up">
              Cadre<span className="text-primary">Sports</span>
            </h1>
            <p className="mt-6 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground tracking-tight fade-in-up stagger-1">
              A full-stack amateur sports ecosystem.
            </p>

            <p className="mt-8 max-w-xl text-base text-muted-foreground text-pretty leading-relaxed fade-in-up stagger-2">
              We are building and operating the amateur sports ecosystem that India needs.
              Six linked programmes &mdash; from weekly leagues to Olympic readiness &mdash;
              running on shared digital infrastructure, starting with Maharashtra.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 fade-in-up stagger-3">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-md"
              >
                Explore programmes
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-primary/30 transition-all"
              >
                Get in touch
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg fade-in-up stagger-4">
              {[
                { k: "6", v: "Programmes" },
                { k: "Nagpur", v: "Pilot district" },
                { k: "Aug '26", v: "Pilot launch" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl md:text-4xl font-bold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground/70">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative fade-in-up stagger-3">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 grid-bg-dense opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary mb-6">
                    <Zap className="h-3 w-3" /> Launching August 2026
                  </div>
                  <p className="font-display text-6xl md:text-7xl font-bold text-foreground">Nagpur</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground/70">Maharashtra, India</p>
                </div>
                <div className="mt-10 w-full max-w-xs">
                  <div className="flex items-center justify-between text-xs text-muted-foreground/50 mb-2">
                    <span>Onboarding amateur leagues</span>
                    <span className="text-primary">Phase 1</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-primary glow-sm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:flex float">
              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5 backdrop-blur-sm">
                <p className="font-display text-3xl font-bold text-primary">2036</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Olympic readiness</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 hidden lg:flex float" style={{ animationDelay: "2s" }}>
              <div className="rounded-2xl glass-strong p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Status</span>
                </div>
                <p className="mt-2 font-display text-lg font-semibold">Section 8</p>
                <p className="text-xs text-muted-foreground/70">Non-profit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Badminton", "Football", "Basketball", "Kabaddi", "Cricket", "Table Tennis", "Volleyball", "Running", "Pickleball", "Tennis"]} />

      {/* PROGRAMMES */}
      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Six programmes. <span className="italic text-primary">One ecosystem.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Each programme generates energy that the next one uses. Leagues create
            participants. Community activation brings in women and seniors. Fellowships
            produce the operators who run it all. The platform compounds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <ProgramCard
            tag="01 / Amateur Leagues"
            title="Weekly structured leagues"
            desc="Multi-tier amateur leagues at city and district scale. Beginner, intermediate, corporate, women-first, and masters formats — turning physical activity into a weekly civic habit."
            icon={<Trophy className="h-5 w-5" />}
          />
          <ProgramCard
            tag="02 / Community Activation"
            title="The public health arm"
            desc="Low-barrier programmes in wards and villages targeting sedentary youth and rising adult obesity. Women-first formats, school-based programmes, and senior-friendly activities."
            icon={<Heart className="h-5 w-5" />}
          />
          <ProgramCard
            tag="03 / Youth Fellowship"
            title="Training India's sports leaders"
            desc="A paid, year-long fellowship placing young professionals into federations, districts, and corporate programmes. Ten fellows in year one, scaling to fifty-plus. Launching soon."
            icon={<GraduationCap className="h-5 w-5" />}
          />
          <ProgramCard
            tag="04 / Corporate Wellness"
            title="Sport for the workplace"
            desc="Partnerships with Maharashtra's leading employers. Corporate leagues, inter-company tournaments, and active-lifestyle cohorts with measurable participation and health outcomes. Pipeline active."
            icon={<HeartPulse className="h-5 w-5" />}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">
          <ProgramCard
            tag="05 / Digital Infrastructure"
            title="Shared rails for amateur sport"
            desc="Registrations, rankings, match scheduling, QR-enabled onboarding, venue data, and participant IDs. One platform that any league, district, or federation can plug into."
            icon={<Monitor className="h-5 w-5" />}
          />
          <ProgramCard
            tag="06 / Olympic Movement"
            title="Road to 2036"
            desc="A structured volunteer network at the district level, inclusive pathways for women and underserved groups, and post-Games community infrastructure — not stadium-only spend."
            icon={<Sparkles className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* COMMUNITY ACTIVATION */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl overflow-hidden relative neon-border">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />

          <div className="relative mx-auto px-8 md:px-14 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Community activation</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.05]">
              Replicable. <span className="italic text-primary glow-text">Inclusive.</span> Ward-level.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground text-lg">
              A playbook designed to work in under-resourced localities, not just metros.
              Aligned with the state&rsquo;s public health priorities and the focus on
              girls&rsquo; participation.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: MapPin, label: "Ward-level programmes", desc: "Hyperlocal activation seeded in wards and villages across districts." },
                { Icon: Heart, label: "Women-first formats", desc: "Separate leagues, safe spaces, and flexible scheduling — by design, not afterthought." },
                { Icon: GraduationCap, label: "School partnerships", desc: "Physical literacy and early health screenings built into weekly school engagement." },
                { Icon: Sparkles, label: "Senior-friendly", desc: "Low-impact, lifetime-sport formats. Every age group has a place." },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="border-t border-border pt-5 group">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-display text-lg font-semibold group-hover:text-primary transition-colors">{label}</p>
                  <p className="mt-2 text-sm text-muted-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dense opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The mission</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl text-balance">
            Make playing sport a <span className="italic text-primary glow-text">weekly habit</span> for
            every Indian &mdash; across age, gender, income, and geography.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Users, k: "Integration", v: "Communities, academies, and federations connected through one shared pathway." },
              { Icon: HeartPulse, k: "Sustained participation", v: "Tournaments drive excitement. Weekly participation builds habit, identity, and community health." },
              { Icon: Sparkles, k: "Data & visibility", v: "Real-time, district-level data on who plays, how often, and where — for the first time." },
              { Icon: Trophy, k: "Olympic readiness", v: "The grassroots foundation needs to exist before any Olympic moment arrives." },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="group border-t border-border pt-5">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>
                <p className="mt-4 font-display text-xl font-semibold group-hover:text-primary transition-colors">{k}</p>
                <p className="mt-2 text-sm text-muted-foreground/70">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL INFRASTRUCTURE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Digital infrastructure</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Everything runs on shared digital rails.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              One participant ID across every programme. Any league, district, or
              federation can plug in. For the state, this means actual data on grassroots
              sports participation &mdash; not estimates, not survey samples. Live, verified
              numbers by district, by sport, by demographic.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { Icon: QrCode, label: "QR onboarding", desc: "Register at any venue in under two minutes" },
                { Icon: Monitor, label: "Real-time dashboards", desc: "Live participation data for government and partners" },
                { Icon: BarChart3, label: "Rankings & scheduling", desc: "Automated match scheduling, scoring, and standings" },
                { Icon: Film, label: "Player highlights", desc: "Personalised clips that make every participant visible" },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="flex gap-3 items-start p-4 rounded-xl glass group hover:neon-border transition-all duration-300">
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-card p-6 md:p-8 shadow-2xl neon-border overflow-hidden relative">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                      </span>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-mono">CadreSports Platform v1.0</p>
                    </div>
                    <p className="font-display text-2xl md:text-3xl mt-2 font-bold">League Dashboard</p>
                  </div>
                  <span className="rounded-full bg-primary/15 text-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider font-mono border border-primary/20">Pilot</span>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { n: "8", l: "Teams" },
                    { n: "64", l: "Players" },
                    { n: "4", l: "Sports" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl glass p-3 text-center">
                      <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
                      <div className="text-[10px] uppercase tracking-wider mt-1 text-muted-foreground/70 font-mono">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  {["Badminton · Nagpur District League", "Football · Weekend 5-a-side", "Basketball · 3x3 Open"].map((t, i) => (
                    <div key={t} className="flex items-center justify-between rounded-lg glass px-4 py-2.5 hover:border-primary/20 transition-colors">
                      <span className="text-xs text-muted-foreground font-mono">{t}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${i === 0 ? "text-primary" : "text-muted-foreground/40"}`}>
                        {i === 0 ? "Active" : "Upcoming"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] text-muted-foreground/40 font-mono">
                  <span className="h-px flex-1 bg-muted" />
                  QR &middot; Participant ID &middot; Live Scores &middot; Rankings
                  <span className="h-px flex-1 bg-muted" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-primary p-4 shadow-xl max-w-[180px] glow-md">
              <p className="font-display text-sm font-bold text-primary-foreground">One ID</p>
              <p className="text-xs mt-0.5 text-primary-foreground/80">Across every league &amp; programme</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL CARDS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 space-y-6">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden glass">
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 grid-bg-dense opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-8xl font-bold text-primary/20">01</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 mt-2">Weekly Leagues</p>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider w-fit mb-5 border border-primary/20">Currently onboarding in Nagpur</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Weekly leagues. Sustained participation.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tournaments drive excitement, but weekly participation is what builds
              habit, identity, and community health. We are currently onboarding
              amateur leagues in our pilot district &mdash; structured formats designed
              for repetition, not one-off events.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Multi-tier: beginner, intermediate, corporate, women-first, masters",
                "Community formation around weekly sport",
                "Participant IDs that carry across every league and season",
                "Certified tournament operators on the ground",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden glass">
          <div className="p-8 md:p-12 flex flex-col justify-center lg:order-1">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider w-fit mb-5 border border-primary/20">Community identity through sport</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              The platform compounds. It does not fragment.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A league participant becomes a community volunteer. A fellowship alumnus
              runs a corporate programme. A corporate partner sponsors a district league.
              One registration, one identity, one data backbone &mdash; across leagues,
              communities, fellowships, and the road to 2036.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Each programme feeds demand and data to the next",
                "Neighbourhood-level activation that builds local sports culture",
                "Self-funding model: corporate revenue supports public programmes",
                "Designed to scale statewide, then nationally",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 to-transparent" />
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-8xl font-bold text-primary/20">02</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50 mt-2">Ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl bg-primary p-10 md:p-16 relative overflow-hidden glow-lg">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-muted blur-[80px]" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance text-primary-foreground">
                Maharashtra has the infrastructure, the talent, and the intent.
              </h3>
              <p className="mt-3 text-primary-foreground/80 max-w-xl">
                Join a league, partner with us, sponsor a community programme, or apply to the fellowship.
                We are ready to begin.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-all"
              >
                Get in touch
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  tag, title, desc, icon,
}: { tag: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl glass p-6 md:p-8 transition-all duration-300 hover:neon-border hover:-translate-y-1">
      <div className="absolute top-0 right-0 h-[200px] w-[200px] rounded-full bg-primary/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">{tag}</span>
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold max-w-md">{title}</h3>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">{desc}</p>
        <div className="mt-6">
          <Link to="/programs" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary group-hover:gap-2.5 transition-all">
            Learn more <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
