import { createFileRoute, Link } from "@tanstack/react-router";
import { Marquee } from "@/components/site/Marquee";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowUpRight, Trophy, Users, Activity, Database, MapPin, Heart, GraduationCap, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CadreSports — Your Game, Digitised" },
      { name: "description", content: "India's digital platform for amateur sports. Weekly leagues, real-time data, and grassroots participation at scale." },
    ],
  }),
  component: Home,
});

function Home() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 -z-10 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
              Section 8 Non-Profit · Amateur Sports
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Weekly leagues, real-time data,
              <br />
              <span className="text-primary">one platform.</span>
            </h1>

            <p className="mt-6 text-lg text-foreground/60 max-w-2xl leading-relaxed">
              CadreSports is India's digital operating layer for amateur sports. Connect millions of players
              across weekly leagues, measure participation, and build grassroots sports culture at scale.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all"
              >
                Explore Leagues
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground hover:border-foreground/40 transition-all"
              >
                Join Now
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { number: "700+", label: "Active Players" },
                { number: "4", label: "Sports" },
                { number: "1", label: "Platform" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-foreground/40 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Badminton", "Football", "Basketball", "Cricket", "Running", "Tennis", "Kabaddi", "Table Tennis"]} />

      {/* DIGITAL PLATFORM */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">The Platform</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                One registration. One identity. Complete visibility.
              </h2>
              <p className="mt-6 text-foreground/60 leading-relaxed text-lg">
                Every participant gets a unified ID. Every league, every community programme, every corporate engagement
                flows through shared digital rails. Real-time dashboards show you exactly who plays, where, and how often.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "QR-based onboarding at any venue",
                  "Live rankings and match scheduling",
                  "Real-time data dashboards by district",
                  "One participant ID across all programmes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal-right">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "linear-gradient(rgba(0,150,123,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,123,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }} />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
                        <p className="text-[11px] uppercase tracking-wider text-primary font-semibold font-mono">Live System</p>
                      </div>
                      <p className="font-display text-2xl font-bold mt-2">Participant Hub</p>
                    </div>
                    <span className="rounded-full bg-primary/15 text-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider font-mono border border-primary/20">Active</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Players", value: "8,432" },
                      { label: "Matches", value: "156" },
                      { label: "Teams", value: "64" },
                      { label: "Cities", value: "3" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg bg-white/40 border border-primary/10 p-3 text-center">
                        <p className="font-display font-bold text-lg text-primary">{item.value}</p>
                        <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-mono mt-0.5">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm">
                    {["Badminton · District League", "Football · Weekend Division", "Running · City Circuit"].map((league, i) => (
                      <div key={league} className="flex items-center justify-between rounded-lg bg-white/20 border border-primary/10 px-3 py-2">
                        <span className="text-xs text-foreground/60">{league}</span>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${i === 0 ? "text-primary" : "text-foreground/30"}`}>
                          {i === 0 ? "Live" : "Soon"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAGUES */}
      <section className="relative py-24 lg:py-32 bg-slate-50 border-y border-black/8">
        <div className="absolute top-0 left-0 -z-10 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="scroll-reveal mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Amateur Leagues</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Weekly participation, community identity.
            </h2>
            <p className="mt-6 text-foreground/60 max-w-2xl leading-relaxed text-lg">
              Multi-tier leagues across badminton, football, basketball, and more. Beginner, intermediate, women-first, masters.
              Same time, same court, same people every week — building lasting health outcomes and genuine community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Structured Play",
                desc: "Weekly fixtures designed for habit formation, not just excitement.",
                icon: <Trophy className="h-6 w-6" />,
              },
              {
                title: "Tracked Progress",
                desc: "Every participant sees their improvement over seasons with live rankings.",
                icon: <TrendingUp className="h-6 w-6" />,
              },
              {
                title: "Community First",
                desc: "Leagues create neighborhoods that play together, stay together.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: "Data & Visibility",
                desc: "Real-time participation data by district, sport, and demographic.",
                icon: <Database className="h-6 w-6" />,
              },
            ].map((item, i) => (
              <div key={item.title} className={`scroll-reveal stagger-${i + 1} rounded-2xl border border-black/8 p-8 bg-white border-animate`}>
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="scroll-reveal mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Integrated Ecosystem</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Six movements, one platform.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Amateur Leagues", desc: "Weekly structured play across cities and districts" },
              { num: "02", title: "Community Activation", desc: "Ward-level sport programmes and public health" },
              { num: "03", title: "Youth Fellowships", desc: "Building India's sports administrators" },
              { num: "04", title: "Corporate Wellness", desc: "Inter-company leagues and workplace health" },
              { num: "05", title: "Digital Infrastructure", desc: "Unified participant ID and real-time data" },
              { num: "06", title: "Olympic Movement", desc: "Volunteer networks and grassroots readiness for 2036" },
            ].map((pillar, i) => (
              <div key={pillar.num} className={`scroll-reveal stagger-${i + 1} rounded-2xl border border-black/8 p-6 bg-gradient-to-br from-white to-slate-50 border-animate group`}>
                <p className="text-sm font-display font-bold text-primary">{pillar.num}</p>
                <h3 className="font-display text-lg font-bold mt-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 md:p-12 scroll-reveal text-center">
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Each pillar generates demand and data that the next one uses. Leagues create participants.
              Community activation brings in women and seniors. Digital infrastructure connects them all.
              <span className="block mt-3 font-semibold text-foreground">One ecosystem.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center scroll-reveal">
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Ready to play?
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
            Join a weekly league in your city. Partner with us. Or help us build the future of grassroots sports.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-all"
            >
              Explore Leagues
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
