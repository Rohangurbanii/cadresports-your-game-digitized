import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="CadreSports" className="h-10 w-10 rounded-md" width={40} height={40} />
              <span className="font-display text-2xl font-bold">CadreSports</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-foreground/60 leading-relaxed">
              India's digital platform for amateur sports. Building the operating layer
              that connects leagues, communities, and millions of players.
            </p>
            <p className="mt-3 text-xs text-foreground/40">
              Section 8 Non-Profit Company · Promotion of Sports & Games
            </p>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-wider font-semibold text-primary">Navigate</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="text-foreground/60 hover:text-foreground transition-colors underline-animate">Home</Link></li>
              <li><Link to="/programs" className="text-foreground/60 hover:text-foreground transition-colors underline-animate">Leagues</Link></li>
              <li><Link to="/contact" className="text-foreground/60 hover:text-foreground transition-colors underline-animate">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs uppercase tracking-wider font-semibold text-primary">Connect</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-foreground/60">hello@cadresports.com</li>
              <li className="text-foreground/60">Nagpur, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/8 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-foreground/40">
          <p>&copy; {new Date().getFullYear()} CadreSports. All rights reserved.</p>
          <p>Section 8 · Promotion of Sports & Games</p>
        </div>
      </div>
    </footer>
  );
}
