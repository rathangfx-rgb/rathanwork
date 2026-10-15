import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rathan Kumar" },
      { name: "description", content: "Get in touch with Rathan Kumar for design, photography and video projects." },
      { property: "og:title", content: "Contact — Rathan Kumar" },
      { property: "og:description", content: "Get in touch with Rathan Kumar for design, photography and video projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  { label: "Email", value: "hello@rathankumar.design", href: "mailto:hello@rathankumar.design" },
  { label: "Phone", value: "+91 90000 00000", href: "tel:+919000000000" },
  { label: "Location", value: "Hyderabad, India" },
];

const inputClass =
  "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28">
      <header className="max-w-2xl">
        <h1 className="text-5xl font-bold md:text-7xl">
          Let's <span className="text-gradient">talk</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Have a project in mind? Drop a message and I'll get back to you within a day.
        </p>
      </header>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <form
          className="space-y-5 rounded-3xl border bg-card/50 p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
            const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
            window.location.href = `mailto:hello@rathankumar.design?subject=${subject}&body=${body}`;
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
              <input id="name" name="name" required placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project…"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Send message
          </button>
          {sent && (
            <p className="text-sm text-muted-foreground">
              Your email app should have opened — if not, write to me directly at the address on the right.
            </p>
          )}
        </form>

        <aside className="space-y-5">
          {details.map((d) => (
            <div key={d.label} className="rounded-2xl border bg-card p-6">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">{d.label}</p>
              {d.href ? (
                <a href={d.href} className="mt-1 block font-display text-lg font-semibold hover:text-primary">
                  {d.value}
                </a>
              ) : (
                <p className="mt-1 font-display text-lg font-semibold">{d.value}</p>
              )}
            </div>
          ))}
          <div className="rounded-2xl border bg-gradient-primary p-6 text-primary-foreground shadow-glow">
            <p className="font-display text-lg font-semibold">Currently available</p>
            <p className="mt-1 text-sm opacity-90">
              Booking new branding, photography and video projects for this quarter.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
