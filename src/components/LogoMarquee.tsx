import { logos } from "@/lib/work";

export function LogoMarquee({ reverse = false }: { reverse?: boolean }) {
  const row = [...logos, ...logos];
  return (
    <div className="pause-on-hover relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex w-max gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {row.map((l, i) => (
          <div
            key={i}
            className="flex h-32 w-48 shrink-0 items-center justify-center rounded-2xl border bg-card"
          >
            <img src={l.src} alt={`${l.name} logo`} loading="lazy" width={1024} height={1024} className="logo-mark h-24 w-24 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full border border-dashed" />
      <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-gradient-primary shadow-glow">
        <span className="font-display text-lg font-bold text-primary-foreground">Logos</span>
      </div>
      <div className="animate-spin-slow absolute inset-0">
        {logos.map((l, i) => {
          const angle = (i / logos.length) * 2 * Math.PI;
          return (
            <div
              key={l.name}
              className="absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${50 + 46 * Math.cos(angle)}%`, top: `${50 + 46 * Math.sin(angle)}%` }}
            >
              <div className="animate-counter-spin flex h-full w-full items-center justify-center rounded-full border bg-card">
                <img src={l.src} alt={`${l.name} logo`} loading="lazy" width={1024} height={1024} className="logo-mark h-14 w-14 object-contain" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
