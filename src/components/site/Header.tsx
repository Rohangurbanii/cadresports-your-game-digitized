import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/olympics", label: "Olympics 2036" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass-strong">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <img src={logo} alt="CadreSports" className="h-9 w-9 rounded-md" width={36} height={36} />
            <div className="absolute inset-0 rounded-md glow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Cadre<span className="text-primary">Sports</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="px-3 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-all glow-sm hover:glow-md"
          >
            Join a League
            <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-white/70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0D0D0D]/95 backdrop-blur-xl">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="py-2.5 text-base font-medium text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Join a League &rarr;
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
