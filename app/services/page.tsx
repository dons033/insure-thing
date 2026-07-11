import type { Metadata } from "next";
import Link from "next/link";
import { engagements, servicePillars } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Build insurance products, improve underwriting and portfolio performance, and apply AI to real insurance operations with direct operator involvement.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Services
          </div>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            Three kinds of work, connected by insurance judgment.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            Every engagement is scoped to an operating outcome. The deliverable
            may be a product, a pricing or underwriting change, a working
            system, or a decision the leadership team can act on—but it should
            not be a deck that goes on a shelf.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">
        <div className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
          {servicePillars.map((pillar) => (
            <article
              key={pillar.number}
              className="grid gap-8 py-12 md:grid-cols-[80px_1fr_1fr] md:gap-10"
            >
              <div className="font-mono text-xs tracking-[0.2em] text-[color:var(--color-accent)]">
                {pillar.number}
              </div>
              <div>
                <h2 className="font-serif text-3xl leading-tight">{pillar.title}</h2>
                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  {pillar.description}
                </p>
              </div>
              <div>
                <div className="mb-4 font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  Typical work
                </div>
                <ul className="space-y-3 text-sm">
                  {pillar.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span aria-hidden="true" className="text-[color:var(--color-accent)]">—</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Selected engagements
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Examples of the problems clients bring.
            </h2>
            <p className="mt-5 text-[color:var(--color-muted)]">
              Client details are anonymized and some specifics are generalized.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {engagements.map((engagement) => (
              <article
                key={engagement.title}
                className="flex flex-col border-t border-[color:var(--color-border)] pt-6"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-accent)]">
                  {engagement.client}
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-tight">
                  {engagement.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
                  {engagement.description}
                </p>
                <div className="mt-6 border-l-2 border-[color:var(--color-accent)] pl-4 text-sm leading-relaxed">
                  <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-[color:var(--color-muted)]">
                    What transfers
                  </div>
                  {engagement.transfer}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              How the work is delivered
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Direct involvement, with knowledge transfer built in.
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-[color:var(--color-muted)]">
            <p>
              Don leads and performs the work directly. When a client has its
              own technical, actuarial, product, or implementation teams,
              InsureThing works alongside them rather than adding an
              intermediary layer.
            </p>
            <p>
              The rationale, assumptions, controls, and operating logic are
              documented and taught at the level each constituency needs. The
              team should be able to use the work—and know when to question it.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
          <div>
            <h2 className="max-w-2xl font-serif text-2xl md:text-3xl">
              Have a product, portfolio, or workflow that needs a closer look?
            </h2>
            <p className="mt-4 text-[color:var(--color-muted)]">
              Send a short description. We&apos;ll start with what the problem
              requires.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-foreground)] px-6 py-3 text-sm font-medium text-[color:var(--color-background)] transition-colors hover:bg-[color:var(--color-accent)]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
