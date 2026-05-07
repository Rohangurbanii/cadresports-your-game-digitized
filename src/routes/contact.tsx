import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

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
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-12 lg:pt-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl text-balance">
          Let's <span className="italic">connect.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Whether you represent a corporation, a federation, a district administration,
          or simply want to play &mdash; we'd like to hear from you.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 grid lg:grid-cols-5 gap-10">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="City" name="city" />
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-foreground/70">I'm interested in</label>
            <select className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" name="interest">
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
            <label className="text-xs font-semibold uppercase tracking-widest text-foreground/70">Tell us more</label>
            <textarea rows={4} name="message" className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors disabled:opacity-60"
          >
            {sent ? "Thank you — we'll be in touch." : <>Send <Send className="h-4 w-4" /></>}
          </button>
        </form>

        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8">
            <Mail className="h-5 w-5" />
            <p className="mt-3 text-xs uppercase tracking-widest opacity-80">Email</p>
            <a href="mailto:hello@cadresports.com" className="mt-1 block font-display text-2xl">hello@cadresports.com</a>
          </div>
          <div className="rounded-3xl bg-card border border-border p-8">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-widest text-foreground/60">Pilot cities</p>
            <p className="mt-1 font-display text-xl">Nagpur &middot; Pune &middot; Nashik</p>
          </div>
          <div className="rounded-3xl bg-[var(--ink)] text-cream p-8">
            <p className="text-xs uppercase tracking-widest text-accent">A note</p>
            <p className="mt-3 text-cream/85">
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
      <label className="text-xs font-semibold uppercase tracking-widest text-foreground/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
