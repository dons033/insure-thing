import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Working insurance benchmarks, production prototypes, and live experiments that demonstrate how InsureThing evaluates and builds real systems.",
};

export default function LabsPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            Labs
          </div>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] md:text-6xl">
            Working systems make the argument concrete.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--color-muted)]">
            Labs contains public benchmarks, production prototypes, and live
            experiments. Each project tests an idea against actual insurance
            work—and shows the controls, limitations, and economics alongside
            the result.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <a
            href="https://insurebench.insure-thing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-t-2 border-[color:var(--color-accent)] pt-7 md:col-span-2"
          >
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  Public benchmark
                </div>
                <h2 className="mt-4 font-serif text-3xl transition-colors group-hover:text-[color:var(--color-accent)]">
                  InsureBench
                </h2>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:text-[color:var(--color-accent)]">
                  Explore the benchmark <span aria-hidden="true">↗</span>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
                  Evaluates model-plus-harness combinations on insurance work by
                  quality and cost. The practical question is not which model
                  wins overall, but which setup clears the required accuracy bar
                  for each capability at an economical cost.
                </p>
                <div className="mt-6 border-l-2 border-[color:var(--color-accent)] pl-4 text-sm leading-relaxed">
                  <span className="font-medium">What this demonstrates:</span>{" "}
                  task-specific model evaluation, deployment economics, and a
                  public evidence boundary that does not expose private prompts,
                  answer keys, or model outputs.
                </div>
              </div>
            </div>
          </a>

          <Link
            href="/labs/wc-underwriting"
            className="group border-t border-[color:var(--color-border)] pt-7 transition-colors hover:border-[color:var(--color-accent)]"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Production prototype
            </div>
            <h2 className="mt-4 font-serif text-2xl transition-colors group-hover:text-[color:var(--color-accent)]">
              CA Workers&apos; Comp Pre-Clearance
            </h2>
            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
              A broker inquiry becomes a clear, refer, or decline answer with
              public-data prefill, underwriting rules, documentation requests,
              provenance, and human review.
            </p>
            <div className="mt-6 border-l-2 border-[color:var(--color-accent)] pl-4 text-sm leading-relaxed">
              <span className="font-medium">What this demonstrates:</span>{" "}
              auditable automation, data provenance, broker communication, and
              underwriting judgment in one operating loop.
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:text-[color:var(--color-accent)]">
              Read the case study <span aria-hidden="true">→</span>
            </div>
          </Link>

          <a
            href="https://safetyhound.insure-thing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-t border-[color:var(--color-border)] pt-7 transition-colors hover:border-[color:var(--color-accent)]"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Live experiment
            </div>
            <h2 className="mt-4 font-serif text-2xl transition-colors group-hover:text-[color:var(--color-accent)]">
              Safety Hound
            </h2>
            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
              A side-scrolling game that teaches workplace safety through real
              workers&apos; compensation mechanics, including PPE, hazards, claims,
              OSHA facts, and experience modification.
            </p>
            <div className="mt-6 border-l-2 border-[color:var(--color-accent)] pl-4 text-sm leading-relaxed">
              <span className="font-medium">What this demonstrates:</span>{" "}
              translating technical insurance concepts into an accessible,
              engaging training experience.
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:text-[color:var(--color-accent)]">
              Play the experiment <span aria-hidden="true">↗</span>
            </div>
          </a>
        </div>

        <div className="mt-20 grid gap-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
          <div>
            <h2 className="max-w-2xl font-serif text-2xl md:text-3xl">
              Have an insurance task that should be tested or built?
            </h2>
            <p className="mt-4 text-[color:var(--color-muted)]">
              Labs is evidence of the work—not a separate product catalog.
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
