import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-cream mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CadreSports" className="h-10 w-10 rounded-md" width={40} height={40} />
              <span className="font-display text-2xl font-semibold">CadreSports</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-cream/70 leading-relaxed">
              India's digital platform for amateur sports. Building participation,
              public health, leadership, and Olympic readiness across Maharashtra &mdash;
              one league at a time.
            </p>
            <p className="mt-4 text-xs text-cream/50">
              CadreSports is a registered Section 8 non-profit company under the Companies Act, 2013.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream/50">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/programs" className="hover:text-primary">Programmes</Link></li>
              <li><Link to="/olympics" className="hover:text-primary">Olympics 2036</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-cream/50">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>hello@cadresports.com</li>
              <li>Pilot: Nagpur, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} CadreSports. All rights reserved.</p>
          <p>Section 8 &middot; Promotion of Sports & Games</p>
        </div>
      </div>
    </footer>
  );
}
