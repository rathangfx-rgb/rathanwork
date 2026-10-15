import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-6xl">
      <nav className="flex items-center justify-between rounded-2xl border bg-card/70 px-5 py-3 backdrop-blur-xl">
        <Link to="/" className="font-display text-xl font-bold">
          Rathan<span className="text-primary">.</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:px-4"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow md:inline-block"
        >
          Hire me
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-32 max-w-6xl border-t px-6 py-10 text-sm text-muted-foreground">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Muntha Rathan Kumar. All rights reserved.</p>
        <p>Designer · Photographer · Filmmaker</p>
      </div>
    </footer>
  );
}
