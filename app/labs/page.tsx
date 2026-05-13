import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Interactive demos, proof-of-concept tools, and experiments in AI-driven insurance workflows.",
};

export default function LabsPage() {
  return (
    <>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 md:py-28">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-6">
            Labs
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            This is where we build things.
          </h1>
          <p className="mt-8 text-lg text-[color:var(--color-muted)] max-w-2xl">
            Interactive demos, proof-of-concept tools, and experiments in AI-driven insurance workflows. Check back, or subscribe to the blog for updates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/labs/wc-underwriting"
            className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 hover:border-[color:var(--color-accent)] transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
              Live demo
            </div>
            <h2 className="font-serif text-2xl mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
              CA Workers&rsquo; Comp Pre-Clearance
            </h2>
            <p className="text-[15px] leading-relaxed text-[color:var(--color-muted)] mb-6">
              Brokers email an inquiry. The system pre-fills from CSLB, BuildZoom, and CA SOS, runs opinionated rules, and replies with a quotable / refer / decline answer plus the documentation needed to move forward. 436 contractors in the test bed; proof of concept for a fuller underwriting workstation.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition-colors">
              See the demo
              <span aria-hidden="true">→</span>
            </div>
          </Link>

          <a
            href="https://safetyhound.insure-thing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 hover:border-[color:var(--color-accent)] transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
              Live demo
            </div>
            <h2 className="font-serif text-2xl mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
              Safety Hound
            </h2>
            <p className="text-[15px] leading-relaxed text-[color:var(--color-muted)] mb-6">
              A side-scrolling platformer that teaches workplace safety through real workers&rsquo; comp mechanics. Run a hard-hatted dog through Construction, Kitchen, and Warehouse shifts &mdash; equipping PPE, locking out machinery, mopping spills, clearing blocked fire exits &mdash; before each hazard becomes a CLAIM. The score is an Experience Modification Rate. Real OSHA stats in the post-shift debrief. Global leaderboard ranks by lowest EMR.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition-colors">
              Play the demo
              <span aria-hidden="true">→</span>
            </div>
          </a>

          <div className="rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 flex flex-col md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-3">
              Next on the workbench
            </div>
            <h2 className="font-serif text-2xl mb-3 text-[color:var(--color-muted)]">
              More demos coming
            </h2>
            <p className="text-[15px] leading-relaxed text-[color:var(--color-muted)] mb-6 flex-1">
              Other vertical slices of insurance AI work — submission triage from broker email, loss-ratio diagnostics, claim-leakage signals — are next on the workbench. The blog is the best place to follow along.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-[color:var(--color-border)] px-5 py-2.5 rounded-full text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors self-start"
            >
              Read the blog
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
