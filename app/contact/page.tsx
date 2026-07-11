import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with InsureThing about an insurance product, underwriting, pricing, analytics, or applied AI problem.",
};

const USEFUL_CONTEXT = [
  "What you are building, changing, or trying to decide",
  "Where the work is getting stuck",
  "Who will need to use or own the result",
  "Any timing, regulatory, or implementation constraint that matters",
];

export default function ContactPage() {
  const subject = encodeURIComponent("InsureThing project conversation");

  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Contact
          </div>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            Tell us what is on your radar.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            A short email is enough to start. Describe the problem in the terms
            that matter to you; we can work out the structure from there.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
              Email
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=${subject}`}
              className="font-serif text-2xl hover:text-[color:var(--color-accent)] md:text-3xl"
            >
              {siteConfig.email}
            </a>
            <p className="mt-5 leading-relaxed text-[color:var(--color-muted)]">
              This goes directly to Don. There is no intake team between the
              first note and the person who would do the work.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=${subject}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-foreground)] px-6 py-3 text-sm font-medium text-[color:var(--color-background)] transition-colors hover:bg-[color:var(--color-accent)]"
            >
              Write an email <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="border-t border-[color:var(--color-border)] pt-6">
            <h2 className="font-serif text-2xl">Useful context, if you have it</h2>
            <ul className="mt-6 space-y-4">
              {USEFUL_CONTEXT.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="text-[color:var(--color-accent)]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-[color:var(--color-accent)] pl-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
              No polished brief is required. A rough description of the
              situation is often the fastest way to begin.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-[color:var(--color-border)] pt-10 text-sm text-[color:var(--color-muted)]">
          Prefer LinkedIn? Connect with{" "}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]"
          >
            Don Seibert
          </a>
          .
        </div>
      </section>
    </>
  );
}
