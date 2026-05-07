import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Trophy, Users, Heart, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Leagues — CadreSports" },
      { name: "description", content: "Weekly amateur leagues across badminton, football, basketball, and more." },
    ],
  }),
  component: Programs,
});

function Programs() {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-24">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Leagues</p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Where community plays together.
            </h1>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl">
              Multi-tier weekly leagues designed for participation, not just competition.
              Same time. Same court. Same people. Every week.
            </p>
          </div>
        </div>
      </section>

      {/* LEAGUES */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="space-y-20">
            {[
              {
                title: "Badminton Leagues",
                sports: "Badminton",
                desc: "Multi-tier badminton leagues across cities. Beginner, intermediate, advanced, women-first, and masters categories. Weekly fixtures. Live rankings.",
                features: ["Multi-tier formats", "Women-first category", "Masters division", "Corporate tier"],
                Icon: Trophy,
              },
              {
                title: "Football Leagues",
                sports: "Football & 5-a-side",
                desc: "Community football leagues bringing neighborhoods together. Weekend fixtures, league standings, and local hero highlights.",
                features: ["Open division", "Women's league", "Corporate 5-a-side", "Youth development"],
                Icon: Users,
              },
              {
                title: "Running Clubs",
                sports: "Running & Wellness",
                desc: "Weekly running circuits and fitness clubs. Track your progress. Build your community. Race against time, not just people.",
                features: ["Weekly circuits", "Training plans", "Health tracking", "Social groups"],
                Icon: Heart,
              },
              {
                title: "Basketball Leagues",
                sports: "Basketball & 3x3",
                desc: "3x3 basketball tournaments and full-court leagues. Fast-paced, accessible, community-driven.",
                features: ["3x3 format", "Full court leagues", "Youth pathway", "Skill-based tiers"],
                Icon: Zap,
              },
            ].map((league, i) => (
              <div key={league.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}>
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <league.Icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">{league.sports}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold">{league.title}</h2>
                  <p className="mt-4 text-foreground/60 leading-relaxed text-lg">{league.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {league.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all"
                  >
                    Join This League
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={`rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 aspect-square flex items-center justify-center ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className="text-center">
                    <league.Icon className="h-20 w-20 text-primary/20 mx-auto mb-4" />
                    <p className="font-display text-2xl font-bold text-primary/20">{league.sports}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 bg-slate-50 border-y border-black/8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center scroll-reveal">
          <h2 className="font-display text-3xl font-bold">Ready to join?</h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Pick your league. Pick your tier. Start playing this week.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all"
          >
            Explore & Register
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
