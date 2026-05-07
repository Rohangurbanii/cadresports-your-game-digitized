import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-card">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={logo} alt="CadreSports" className="h-10 w-10 rounded-md" width={40} height={40} />
                <div className="absolute -inset-1 rounded-lg glow-sm" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">CadreSports</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              India's digital platform for amateur sports. Building participation,
              public health, leadership, and Olympic readiness across Maharashtra
              one league at a time.
            </p>
            <p className="mt-4 text-xs text-muted-foreground/60">
              CadreSports is a registered Section 8 non-profit company under the Companies Act, 2013.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-primary mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Programmes</Link></li>
              <li><Link to="/olympics" className="text-muted-foreground hover:text-primary transition-colors">Olympics 2036</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-primary mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors">hello@cadresports.com</li>
              <li>Pilot: Nagpur, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} CadreSports. All rights reserved.</p>
          <p>Section 8 &middot; Promotion of Sports & Games</p>
        </div>
      </div>
    </footer>
  );
}
