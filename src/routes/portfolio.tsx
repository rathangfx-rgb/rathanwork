import { createFileRoute } from "@tanstack/react-router";
import { images, videos } from "@/lib/work";
import { LogoMarquee, LogoOrbit } from "@/components/LogoMarquee";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Rathan Kumar" },
      { name: "description", content: "Selected design, photography and video work by Rathan Kumar — image collages, video collages and brand logos." },
      { property: "og:title", content: "Portfolio — Rathan Kumar" },
      { property: "og:description", content: "Selected design, photography and video work by Rathan Kumar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-medium tracking-widest text-primary uppercase">{kicker}</p>
      <h2 className="text-3xl font-bold md:text-5xl">{children}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28">
      <header className="max-w-2xl">
        <h1 className="text-5xl font-bold md:text-7xl">
          My <span className="text-gradient">portfolio</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A collection of images, films and logos — each project crafted with purpose.
        </p>
      </header>

      {/* Image collage */}
      <section className="mt-28">
        <SectionTitle kicker="Photography & Design">Image collage</SectionTitle>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((w, i) => (
            <figure
              key={w.title}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border"
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                width={1024}
                height={1024}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs tracking-widest text-primary uppercase">{w.tag}</p>
                <p className="font-display font-semibold">{w.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Video collage */}
      <section className="mt-32">
        <SectionTitle kicker="Motion & Film">Video collage</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          {videos.map((v) => (
            <figure key={v.title} className="group relative overflow-hidden rounded-2xl border">
              <video
                src={v.src}
                poster={v.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="aspect-video w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-14">
                <p className="text-xs tracking-widest text-primary uppercase">{v.tag}</p>
                <p className="font-display font-semibold">{v.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Logos */}
      <section className="mt-32">
        <SectionTitle kicker="Brand Marks">Logos I've created</SectionTitle>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <LogoOrbit />
          <div className="space-y-6">
            <LogoMarquee />
            <LogoMarquee reverse />
          </div>
        </div>
      </section>
    </div>
  );
}
