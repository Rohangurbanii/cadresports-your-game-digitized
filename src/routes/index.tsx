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
      { name: "description", content: "India's full-stack amateur sports ecosystem — leagues, fellowship, corporate wellness, community activation, and the road to 2036." },
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Section 8 Non-Profit &middot; Promotion of Sports &amp; Games
            </div>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tighter fade-in-up stagger-1">
              A full-stack
              <br />
              amateur sports
              <br />
              <span className="text-primary glow-text italic">ecosystem.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-white/50 text-pretty leading-relaxed fade-in-up stagger-2">
              CadreSports is India&rsquo;s integrated platform for amateur sports &mdash;
              connecting leagues, participants, communities, corporate partners, and government
              onto one shared digital infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 fade-in-up stagger-3">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:glow-md"
              >
                Explore programmes
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/30 transition-all"
              >
                Our story
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg fade-in-up stagger-4">
              {[
                { k: "4", v: "Pilot sports" },
                { k: "6", v: "Pillars" },
                { k: "Nagpur", v: "Pilot city" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl md:text-4xl font-bold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-white/40">{s.v}</dd>
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
                    <Zap className="h-3 w-3" /> Launching 2026
                  </div>
                  <p className="font-display text-6xl md:text-7xl font-bold text-white/90">Nagpur</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">Maharashtra, India</p>
                </div>
                <div className="mt-10 w-full max-w-xs">
                  <div className="flex items-center justify-between text-xs text-white/30 mb-2">
                    <span>Pilot Progress</span>
                    <span className="text-primary">Phase 1</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-primary glow-sm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:flex float">
              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5 backdrop-blur-sm">
                <p className="font-display text-3xl font-bold text-primary">2036</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Road to</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 hidden lg:flex float" style={{ animationDelay: "2s" }}>
              <div className="rounded-2xl glass-strong p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">Live</span>
                </div>
                <p className="mt-2 font-display text-lg font-semibold">4 Sports</p>
                <p className="text-xs text-white/40">Active pilot</p>
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
              Six pillars. <span className="italic text-primary">One ecosystem.</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-sm leading-relaxed">
            Each programme generates demand and data the next one consumes &mdash;
            leagues, community, fellowship, corporate wellness, digital infrastructure, and the Olympic movement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <ProgramCard
            tag="01 / Leagues"
            title="Structured Amateur Leagues"
            desc="Weekly multi-tier leagues across Badminton, Football, Basketball, and Kabaddi — piloting in Nagpur."
            icon={<Trophy className="h-5 w-5" />}
          />
          <ProgramCard
            tag="02 / Fellowship"
            title="CadreSports Fellowship"
            desc="A 12-month paid fellowship placing young professionals into sports federations, districts, and corporate programmes."
            icon={<Users className="h-5 w-5" />}
          />
          <ProgramCard
            tag="03 / Corporate Wellness"
            title="Sport for the Workplace"
            desc="Multi-sport tournaments, inter-company leagues, and expert-led health seminars for India's leading employers."
            icon={<HeartPulse className="h-5 w-5" />}
          />
          <ProgramCard
            tag="04 / Olympic Movement"
            title="Road to 2036"
            desc="Excellence, respect, and friendship — building grassroots sports culture and volunteer infrastructure for India's Olympic moment."
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">05 / Community Activation</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl leading-[1.05]">
              Where sport <span className="italic text-primary glow-text">begins.</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/50 text-lg">
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
                <div key={label} className="border-t border-white/10 pt-5 group">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-display text-lg font-semibold group-hover:text-primary transition-colors">{label}</p>
                  <p className="mt-2 text-sm text-white/40">{desc}</p>
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
              { Icon: Users, k: "Participation", v: "Lower the barrier to play in every neighbourhood." },
              { Icon: HeartPulse, k: "Public Health", v: "Sport as preventive medicine — addressing India's inactivity crisis." },
              { Icon: Sparkles, k: "Leadership", v: "Train the operational cadre that will lead Indian sport for decades." },
              { Icon: Trophy, k: "Olympic Readiness", v: "Excellence, respect, friendship — grassroots culture for 2036 and beyond." },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="group border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>
                <p className="mt-4 font-display text-xl font-semibold group-hover:text-primary transition-colors">{k}</p>
                <p className="mt-2 text-sm text-white/40">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL INFRASTRUCTURE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">06 / Digital Infrastructure</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              One platform. Every league, participant, and partner.
            </h2>
            <p className="mt-5 text-white/50 text-lg leading-relaxed">
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
                <div key={label} className="flex gap-3 items-start p-4 rounded-xl glass group hover:neon-border transition-all duration-300">
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-white/90">{label}</p>
                    <p className="text-xs text-white/40 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-[#0a0a0a] p-6 md:p-8 shadow-2xl neon-border overflow-hidden relative">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                      </span>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">CadreSports Platform v1.0</p>
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
                    <div key={s.l} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
                      <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
                      <div className="text-[10px] uppercase tracking-wider mt-1 text-white/40 font-mono">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  {["Badminton · Nagpur District League", "Football · Weekend 5-a-side", "Basketball · 3x3 Open"].map((t, i) => (
                    <div key={t} className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.05] px-4 py-2.5 hover:border-primary/20 transition-colors">
                      <span className="text-xs text-white/60 font-mono">{t}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${i === 0 ? "text-primary" : "text-white/20"}`}>
                        {i === 0 ? "Active" : "Upcoming"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] text-white/20 font-mono">
                  <span className="h-px flex-1 bg-white/5" />
                  QR &middot; Participant ID &middot; Live Scores &middot; Rankings
                  <span className="h-px flex-1 bg-white/5" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-primary p-4 shadow-xl max-w-[180px] glow-md">
              <p className="font-display text-sm font-bold">One ID</p>
              <p className="text-xs mt-0.5 text-white/80">Across every league &amp; programme</p>
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
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 mt-2">Weekly Leagues</p>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider w-fit mb-5 border border-primary/20">Well-designed amateur leagues</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Turning one-off matches into weekly habits.
            </h3>
            <p className="mt-4 text-white/50 leading-relaxed">
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
                <li key={b} className="flex items-start gap-2 text-sm text-white/50">
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
              A neighbourhood that plays together, stays together.
            </h3>
            <p className="mt-4 text-white/50 leading-relaxed">
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
                <li key={b} className="flex items-start gap-2 text-sm text-white/50">
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
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 mt-2">Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl bg-primary p-10 md:p-16 relative overflow-hidden glow-lg">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[80px]" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance">
                Be part of India's amateur sports movement.
              </h3>
              <p className="mt-3 text-white/70 max-w-xl">
                Join a league, partner with us, sponsor a community programme, or apply to the fellowship.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[#0D0D0D] px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-all"
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
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">{tag}</span>
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold max-w-md">{title}</h3>
        <p className="mt-3 max-w-md text-sm text-white/50">{desc}</p>
        <div className="mt-6">
          <Link to="/programs" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary group-hover:gap-2.5 transition-all">
            Learn more <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
