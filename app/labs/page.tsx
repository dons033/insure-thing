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
        <div className="rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-14 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-[color:var(--color-accent-soft)] flex items-center justify-center mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[color:var(--color-accent)]"
              aria-hidden="true"
            >
              <path
                d="M9 3h6v4l4 7v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5l4-7V3z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="font-serif text-2xl mb-3">First demo coming soon</h2>
          <p className="text-[color:var(--color-muted)] max-w-md mx-auto mb-8">
            Something is on the workbench. In the meantime, the blog is the best place to follow along.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-[color:var(--color-border)] px-5 py-2.5 rounded-full text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            Read the blog
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
