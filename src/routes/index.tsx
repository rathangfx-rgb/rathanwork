import { createFileRoute, Link } from "@tanstack/react-router";
import { portrait, images } from "@/lib/work";
import { LogoMarquee } from "@/components/LogoMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rathan Kumar — Creative Designer & Filmmaker" },
      { name: "description", content: "Portfolio of Muntha Rathan Kumar — brand identity, graphic design, photography and video production that gives brands the right direction." },
      { property: "og:title", content: "Rathan Kumar — Creative Designer & Filmmaker" },
      { property: "og:description", content: "Brand identity, graphic design, photography and video production portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  { title: "Brand Identity", desc: "Logos, systems and stories that make brands unforgettable." },
  { title: "Graphic Design", desc: "Posters, social media creatives and print that stop the scroll." },
  { title: "Photography", desc: "Product, food and portrait shoots with a cinematic eye." },
  { title: "Video Production", desc: "Commercials, reels and short films — concept to final cut." },
  { title: "Web Design", desc: "Modern websites and app interfaces designed to convert." },
  { title: "Content Strategy", desc: "Direction and storytelling that grows an audience." },
];

const stats = [
  { value: "80+", label: "Projects delivered" },
  { value: "40+", label: "Happy clients" },
  { value: "6", label: "Years of craft" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 md:grid-cols-[1.2fr_1fr] md:pt-28">
        <div>
          <p className="mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Designer · Photographer · Filmmaker
          </p>
          <h1 className="text-5xl leading-[1.05] font-bold md:text-7xl">
            Giving brands the <span className="text-gradient">right direction</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            I'm Rathan Kumar — I help businesses grow through stunning visuals, strategic
            storytelling and creative work that drives real results.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="rounded-full bg-gradient-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View my work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border px-8 py-3.5 font-semibold transition-colors hover:bg-secondary"
            >
              Let's talk
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
          <img
            src={portrait}
            alt="Portrait of Rathan Kumar"
            width={1024}
            height={1280}
            className="relative aspect-[4/5] w-full rounded-[2rem] border object-cover"
          />
        </div>
      </section>

      {/* Logo strip */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Brands I've crafted identities for
        </p>
        <LogoMarquee />
      </section>

      {/* Services */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-5xl">
          What I <span className="text-gradient">do</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A full range of creative services — from the first sketch to the final export.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-gradient">work</span>
          </h2>
          <Link to="/portfolio" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            See everything →
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.slice(0, 4).map((w) => (
            <Link key={w.title} to="/portfolio" className="group relative overflow-hidden rounded-2xl border">
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-14">
                <p className="text-xs tracking-widest text-primary uppercase">{w.tag}</p>
                <p className="font-display font-semibold">{w.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <div className="grid gap-5 rounded-3xl border bg-card p-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl font-bold text-gradient">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-32 max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Have an idea? <span className="text-gradient">Let's build it.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Tell me about your project and I'll get back to you within a day.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-block rounded-full bg-gradient-primary px-10 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
        >
          Start a project
        </Link>
      </section>
    </>
  );
}
