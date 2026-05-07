import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CadreSports" },
      { name: "description", content: "Join a league or partner with CadreSports." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-0 -z-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Let's connect.
            </h1>
            <p className="mt-6 text-lg text-foreground/60">
              Join a league. Partner with us. Build the future of grassroots sports.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-3 gap-12">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-2 rounded-2xl bg-white border border-black/8 p-8 md:p-10 space-y-6 border-animate scroll-reveal"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="City" name="city" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">I'm interested in</label>
              <select className="mt-2 w-full bg-white border border-black/8 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" name="interest">
                <option>Joining a weekly league</option>
                <option>Corporate wellness programme</option>
                <option>Community partnership</option>
                <option>Fellowship programme</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Tell us more</label>
              <textarea rows={4} name="message" className="mt-2 w-full bg-white border border-black/8 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all disabled:opacity-60"
            >
              {sent ? "Thank you — we'll be in touch." : <>Send <Send className="h-4 w-4" /></>}
            </button>
          </form>

          <aside className="space-y-5 scroll-reveal-right">
            <div className="rounded-2xl bg-primary text-white p-8 border-animate">
              <Mail className="h-5 w-5" />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/70">Email</p>
              <a href="mailto:hello@cadresports.com" className="mt-2 block font-display text-xl font-bold hover:underline underline-offset-4">
                hello@cadresports.com
              </a>
            </div>
            <div className="rounded-2xl bg-white border border-black/8 p-8 border-animate">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-wider text-foreground/60">Pilot Cities</p>
              <p className="mt-2 font-display text-lg font-bold">Nagpur · Pune · Nashik</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-white border border-black/8 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      />
    </div>
  );
}
