import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CadreSports" },
      { name: "description", content: "Join a league, partner with us, or apply to the fellowship." },
      { property: "og:title", content: "Contact — CadreSports" },
      { property: "og:description", content: "Get in touch with CadreSports." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl text-balance">
            Let's <span className="italic text-primary glow-text">connect.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/50">
            Whether you represent a corporation, a federation, a district administration,
            or simply want to play &mdash; we'd like to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 grid lg:grid-cols-5 gap-8">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-3xl glass p-8 md:p-10 space-y-5 neon-border"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="City" name="city" />
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">I'm interested in</label>
            <select className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all" name="interest">
              <option>Joining a weekly league</option>
              <option>Corporate wellness programme</option>
              <option>CadreSports Fellowship</option>
              <option>Community activation partnership</option>
              <option>Olympic volunteer programme</option>
              <option>Government / institutional partnership</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Tell us more</label>
            <textarea rows={4} name="message" className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all resize-none" />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:glow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sent ? "Thank you — we'll be in touch." : <>Send <Send className="h-4 w-4" /></>}
          </button>
        </form>

        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-3xl bg-primary p-8 relative overflow-hidden glow-md">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <Mail className="h-5 w-5" />
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/70">Email</p>
              <a href="mailto:hello@cadresports.com" className="mt-1 block font-display text-2xl font-bold hover:underline underline-offset-4">hello@cadresports.com</a>
            </div>
          </div>
          <div className="rounded-3xl glass p-8 neon-border">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/40">Pilot cities</p>
            <p className="mt-1 font-display text-xl font-bold">Nagpur &middot; Pune &middot; Nashik</p>
          </div>
          <div className="rounded-3xl glass p-8">
            <Shield className="h-5 w-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-primary">A note</p>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              CadreSports is a registered Section 8 non-profit company under the Companies Act, 2013.
              CSR partnerships and institutional collaborations are welcome.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
      />
    </div>
  );
}
